#!/usr/bin/env node --harmony

var program = require('commander');
var info = require('../package.json');

program
  .version(info.version)
  .option('--elementobject', 'output DOM element to AX Object relationships')
  .option('--objectelement', 'output AX Object to DOM element relationships')
  .option('--objectrole', 'output AX Object to ARIA role relationships')
  .option('--objects', 'output AX objects')
  .parse(process.argv);

const output = Object.create(null);

if (program.elementobject) {
  output['elementobject'] = require('../src/elementAXObjectMap.js').default;
}
if (program.objectelement) {
  output['objectelement'] = require('../src/AXObjectElementMap.js').default;
}
if (program.objectrole) {
  output['objectrole'] = require('../src/AXObjectRoleMap.js').default;
}
if (program.objects) {
  output['objects'] = require('../src/AXObjectsMap.js').default;
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
    output.push('Set {}');
  } else {
    output.push('Set {');
    let tmp = [];
    (new Set(arr)).forEach(
      value => {
        if (value != null) {
          tmp.push(`${constructIndent(depth)}${triageValue(value, (depth))},`);
        }
      }
    );
    output.push(tmp.join('\n'));
    output.push(`${constructIndent(depth - 1)}\}`);
  }
  return output.join('\n');
}

function stringifyObject(value, depth) {
  let output = [];
  const keys = Object.keys(value);
  if (keys.length === 0) {
    output.push('Map {}');
  } else {
    output.push(`Map {`);
    const tmp = [];
    keys.forEach(key => {
      tmp.push(`${constructIndent(depth)}${triageValue(key, (depth - 1), false)} => ${triageValue(value[key], depth)},`);
    });
    output.push(tmp.join('\n'));
    output.push(`${constructIndent(depth - 1)}}`);
  }
  return output.join('\n');
}

function stringifyMap(value, depth) {
  let output = [];
  if (value.size === 0) {
    output.push('Map {}');
  } else {
    output.push(`Map {`);
    const tmp = [];
    value.forEach(value, key => {
      tmp.push(`${constructIndent(depth)}${triageValue(key, (depth - 1), false)} => ${triageValue(value, depth)},`);
    });
    output.push(tmp.join('\n'));
    output.push(`${constructIndent(depth - 1)}}`);
  }
  return output.join('\n');
}

function stringifySet(value, depth) {
  const output = [];
  if (value.size === 0) {
    output.push('Set {}');
  } else {
    output.push('Set {');
    let tmp = [];
    value.forEach(
      value => {
        if (value != null) {
          tmp.push(`${constructIndent(depth)}${triageValue(value, (depth))},`);
        }
      }
    );
    output.push(tmp.join('\n'));
    output.push(`${constructIndent(depth - 1)}\}`);
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
      if (value instanceof Map) {
        output = output.concat(stringifyMap(value, (depth + 1)));
      } else if (value instanceof Set) {
        output = output.concat(stringifySet(value, (depth + 1)));
      } else {
        output = output.concat(stringifyObject(value, (depth + 1)));
      }
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

let hack = [];

Object.keys(output).forEach(type => {
  hack = hack.concat(
    `\$${type} = Map \{`,
    ...[...output[type].keys()]
      .sort((a, b) => a - b)
      .map(prop => {
        const depth = 2;
        return `${constructIndent(depth)}${triageValue(prop, depth, false)} => ${triageValue(output[type].get(prop), depth).join('\n')},`;
      }),
    `${constructIndent(1)}\};`
  );
});

if (hack.length) {
  process.stdout.write(hack.join('\n'));
}
