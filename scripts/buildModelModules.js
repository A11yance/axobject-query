#!/usr/bin/env node --harmony

const fs = require('fs');
const path = require('path');

const baseDir = 'src/etc/objects';

function createCamelName (name) {
  const nameArr = name.split('-');
  if (nameArr.length > 1) {
    nameArr[1] = nameArr[1].slice(0, 1).toUpperCase()
      + nameArr[1].slice(1);
  }
  return nameArr.join('');
}

function createKeyName (key) {
  if (key.includes('-')) {
    return `'${key}'`;
  } else {
    return key;
  }
}

function getTypeof(value) {
  return Array.isArray(value)
    ? 'array'
    : (value == null)
      ? 'null'
      : typeof value;
}

function stringifyBoolean(value) {
  return [(value) ? 'true' : 'false'];
}

function stringifyArray(arr, depth) {
  const output = [];
  if (arr.length === 0) {
    output.push('[]');
  } else {
    output.push('[');
    let tmp = [];
    (new Set(arr)).forEach(
      value => {
        if (value != null) {
          tmp.push(`${constructIndent(depth)}${triageValue(value, (depth))},`);
        }
      }
    );
    output.push(tmp.join('\n'));
    output.push(`${constructIndent(depth - 1)}]`);
  }
  return output.join('\n');
}

function stringifyObject(value, depth) {
  let output = [];
  const keys = Object.keys(value);
  if (keys.length === 0) {
    output.push('{}');
  } else {
    output.push(`{`);
    const tmp = [];
    keys.forEach(key => {
      tmp.push(`${constructIndent(depth)}${createKeyName(key)}: ${triageValue(value[key], (depth))},`);
    });
    output.push(tmp.join('\n'));
    output.push(`${constructIndent(depth - 1)}}`);
  }
  return output.join('\n');
}

function constructIndent(depth) {
  return Array(depth).fill('  ').join('');
}

function triageValue(value, depth = 0) {
  let output = [];
  switch(getTypeof(value)) {
    case 'object':
      output = output.concat(stringifyObject(value, (depth + 1)));
      break;
    case 'array':
      output = output.concat(stringifyArray(value, (depth + 1)));
      break;
    case 'boolean':
      output = output.concat(stringifyBoolean(value, (depth + 1)));
      break;
    case 'string':
      output = output.concat(`\'${value}\'`);
      break;
    default:
      output.push('null');
  }
  return output;
}

fs.readFile(path.join('scripts/axmodel.json'), {
  encoding: 'utf8'
}, (error, data) => {
  if (error) {
    console.error(error);
    process.exit();
  }
  let aria = JSON.parse(data);

  Object.keys(aria)
    .forEach((name) => {
      const camelName = createCamelName(name);

      const file = [
        '/**',
        ' * @flow',
        ' */',
        `const ${camelName}: AXObjectModelDefinition = {`,
        Object.keys(aria[name])
          .sort()
          .map((prop) => {
            let value = aria[name][prop];
            let depth = 1;
            return `${constructIndent(depth)}${createKeyName(prop)}: ${triageValue(value, depth).join('\n')},`;
          }).join('\n'),
        '};',
        '',
        `export default ${camelName};`,
      ];

      fs.mkdir(path.join(baseDir), function () {
        fs.writeFile(
          path.join(baseDir, `${camelName}.js`),
          file.join('\n'),
          {
            encoding: 'utf8'
          },
          function (err) {
            if (err) throw err;
            console.log(`Created file ${baseDir}/${camelName}.js`);
          });
      });
  });
});

function requiresMapper (roles, depth) {
  return roles.map(role => {
    return `${constructIndent(depth)}import ${role[1]} from \'./etc/objects/${role[1]}\';`;
  }).join('\n');
}

function requiresCombiner(roles, depth) {
  return roles.map(role => {
    return `${constructIndent(depth)}[\'${role[0]}\', ${role[1]}]`;
  }).join(',\n');
}

const srcDir = 'src';

fs.readFile(path.join('scripts/axmodel.json'), {
  encoding: 'utf8'
}, (error, data) => {
  if (error) {
    console.error(error);
    process.exit();
  }

  const literalRequires = [];

  let aria = JSON.parse(data);
  Object.keys(aria)
    .forEach((name) => {
      const camelName = createCamelName(name);
      literalRequires.push([name, camelName]);
    });

    // Create a rollup maps.
    fs.writeFile(
      path.join('src', `AXObjectsMap.js`),
      '/**\n'
      + ' * @flow\n'
      + ' */\n'
      + `${requiresMapper(literalRequires, 0)}\n`
      + `\n`
      + `const AXObjectsMap: MapOfAXObjectDefinitions = new Map([\n`
      + `${requiresCombiner(literalRequires, 1)}\n`
      + `]);\n`
      + `\n`
      + `export default AXObjectsMap;`,
      {
        encoding: 'ascii'
      },
      function (err) {
        if (err) throw err;
        console.log(`Created file ./src/AXObjectsMap.js`);
      }
    );
});
