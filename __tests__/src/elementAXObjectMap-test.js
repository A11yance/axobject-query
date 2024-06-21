import test from 'tape';
import deepEqual from 'deep-equal-json';
import inspect from 'object-inspect';

import elementAXObjectMap from 'axobject-query/src/elementAXObjectMap';

const entriesList = [
  [{"name": "abbr"}, ["AbbrRole"]],
  [{"name": "article"}, ["ArticleRole"]],
  [{"name": "audio"}, ["AudioRole"]],
  [{"name": "blockquote"}, ["BlockquoteRole"]],
  [{"name": "button"}, ["ButtonRole"]],
  [{"name": "canvas"}, ["CanvasRole"]],
  [{"name": "caption"}, ["CaptionRole"]],
  [{"name": "td"}, ["CellRole"]],
  [{"attributes": [{"name": "type", "value": "checkbox"}], "name": "input"}, ["CheckBoxRole", "SwitchRole"]],
  [{"attributes": [{"name": "type", "value": "color"}], "name": "input"}, ["ColorWellRole"]],
  [{"name": "th"}, ["ColumnHeaderRole"]],
  [{"name": "select"}, ["ComboBoxRole", "ListBoxRole"]],
  [{"attributes": [{"name": "type", "value": "date"}], "name": "input"}, ["DateRole"]],
  [{"attributes": [{"name": "type", "value": "datetime"}], "name": "input"}, ["DateTimeRole"]],
  [{"name": "dfn"}, ["DefinitionRole"]],
  [{"name": "dd"}, ["DescriptionListDetailRole"]],
  [{"name": "dl"}, ["DescriptionListRole"]],
  [{"name": "dt"}, ["DescriptionListTermRole"]],
  [{"name": "details"}, ["DetailsRole"]],
  [{"name": "dialog"}, ["DialogRole"]],
  [{"name": "dir"}, ["DirectoryRole"]],
  [{"attributes": [{"name": "open", "value": "open"}], "constraints": ["scoped to a details element"], "name": "summary"}, ["DisclosureTriangleRole"]],
  [{"attributes": [{"name": "aria-expanded"}], "constraints": ["scoped to a details element"], "name": "summary"}, ["DisclosureTriangleRole"]],
  [{"name": "div"}, ["DivRole"]],
  [{"name": "embed"}, ["EmbeddedObjectRole"]],
  [{"name": "figcaption"}, ["FigcaptionRole"]],
  [{"name": "figure"}, ["FigureRole"]],
  [{"name": "footer"}, ["FooterRole"]],
  [{"name": "form"}, ["FormRole"]],
  [{"name": "h1"}, ["HeadingRole"]],
  [{"name": "h2"}, ["HeadingRole"]],
  [{"name": "h3"}, ["HeadingRole"]],
  [{"name": "h4"}, ["HeadingRole"]],
  [{"name": "h5"}, ["HeadingRole"]],
  [{"name": "h6"}, ["HeadingRole"]],
  [{"name": "iframe"}, ["IframeRole"]],
  [{"attributes": [{"name": "usemap"}], "name": "img"}, ["ImageMapRole"]],
  [{"name": "img"}, ["ImageRole"]],
  [{"name": "input"}, ["InlineTextBoxRole", "TextFieldRole"]],
  [{"attributes": [{"name": "type", "value": "time"}], "name": "input"}, ["InputTimeRole"]],
  [{"name": "label"}, ["LabelRole"]],
  [{"name": "legend"}, ["LegendRole"]],
  [{"name": "br"}, ["LineBreakRole"]],
  [{"attributes": [{"name": "href"}], "name": "a"}, ["LinkRole"]],
  [{"name": "option"}, ["ListBoxOptionRole"]],
  [{"name": "datalist"}, ["ListBoxRole"]],
  [{"name": "select"}, ["ComboBoxRole", "ListBoxRole"]],
  [{"name": "li"}, ["ListItemRole"]],
  [{"name": "ul"}, ["ListRole"]],
  [{"name": "ol"}, ["ListRole"]],
  [{"name": "main"}, ["MainRole"]],
  [{"name": "mark"}, ["MarkRole"]],
  [{"name": "marquee"}, ["MarqueeRole"]],
  [{"name": "menuitem"}, ["MenuItemRole"]],
  [{"name": "menu"}, ["MenuRole"]],
  [{"name": "meter"}, ["MeterRole"]],
  [{"name": "nav"}, ["NavigationRole"]],
  [{"name": "p"}, ["ParagraphRole"]],
  [{"name": "pre"}, ["PreRole"]],
  [{"name": "progress"}, ["ProgressIndicatorRole"]],
  [{"attributes": [{"name": "type", "value": "radio"}], "name": "input"}, ["RadioButtonRole"]],
  [{"attributes": [{"name": "scope", "value": "row"}], "name": "th"}, ["RowHeaderRole"]],
  [{"name": "tr"}, ["RowRole"]],
  [{"name": "ruby"}, ["RubyRole"]],
  [{"attributes": [{"name": "type", "value": "search"}], "name": "input"}, ["SearchBoxRole"]],
  [{"attributes": [{"name": "type", "value": "range"}], "name": "input"}, ["SliderRole"]],
  [{"attributes": [{"name": "type", "value": "number"}], "name": "input"}, ["SpinButtonRole"]],
  [{"attributes": [{"name": "type", "value": "checkbox"}], "name": "input"}, ["CheckBoxRole", "SwitchRole"]],
  [{"name": "table"}, ["TableRole"]],
  [{"name": "textarea"}, ["TextAreaRole"]],
  [{"name": "input"}, ["InlineTextBoxRole", "TextFieldRole"]],
  [{"attributes": [{"name": "type", "value": "text"}], "name": "input"}, ["TextFieldRole"]],
  [{"name": "time"}, ["TimeRole"]],
  [{"name": "video"}, ["VideoRole"]],
];

test('elementAXObjectMap', async (t) => {
    t.test('iteration', (st) => {

    st.notEqual(elementAXObjectMap[Symbol.iterator], undefined, 'has an iterator defined');
    st.equal([...elementAXObjectMap].length, 70, 'has a specific length');

    st.test('supports the spread operator', async (s2t) => {
      [...elementAXObjectMap].forEach(([role, elements]) => {
        const found = entriesList.find(([r]) => deepEqual(r, role));

        s2t.deepEqual(found, [role, elements], `spread has role: ${role}`);
      });
    });

    st.test('supports the for..of pattern', async (s2t) => {
      const output = [];
      for (const [key, value] of elementAXObjectMap) {
        output.push([key, value]);
      }

      output.forEach(([role, elements]) => {
        const found = entriesList.find(([r]) => deepEqual(r, role));

        s2t.deepEqual(found, [role, elements], `for-of has role: ${role}`);
      });
    });

    st.test('supports one-by-one iteration with the next method', async (s2t) => {
      const iter = elementAXObjectMap[Symbol.iterator]();
      const item = iter.next();
      s2t.notEqual(item.value, undefined, 'has a value');
      s2t.equal(item.done, false);
    });
  });

  t.test('content', async (st) => {
    st.test('entries(), iteration', async (s2t) => {
      for (const [role, elements] of elementAXObjectMap.entries()) {
        const found = entriesList.find(([r]) => deepEqual(r, role));

        s2t.deepEqual(found, [role, elements], `for-of has role: ${role}`);
      }


      [...elementAXObjectMap.entries()].forEach(([role, elements]) => {
        const found = entriesList.find(([r]) => deepEqual(r, role));

        s2t.deepEqual(found, [role, elements], `spread has role: ${role}`);
      });
    });

    st.test('forEach()', async (s2t) => {
      const output = [];
      let context;
      elementAXObjectMap.forEach((value, key, map) => {
        output.push([key, value]);
        if (!context) {
          context = map;
        }
      });

      output.forEach(([role, elements]) => {
        const found = entriesList.find(([r]) => deepEqual(r, role));

        s2t.deepEqual(found, [role, elements], `output has role: ${role}`);
      });

      context.forEach(([role, elements]) => {
        const found = entriesList.find(([r]) => deepEqual(r, role));

        s2t.deepEqual(found, [role, elements], `context has role: ${role}`);
      });
    });

    st.test('get()', async (s2t) => {
      s2t.deepEqual(elementAXObjectMap.get({'name': 'abbr'}), ["AbbrRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "article"}), ["ArticleRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "audio"}), ["AudioRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "blockquote"}), ["BlockquoteRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "button"}), ["ButtonRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "canvas"}), ["CanvasRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "caption"}), ["CaptionRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "td"}), ["CellRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"attributes": [{"name": "type", "value": "checkbox"}], "name": "input"}), ["CheckBoxRole", "SwitchRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"attributes": [{"name": "type", "value": "color"}], "name": "input"}), ["ColorWellRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "th"}), ["ColumnHeaderRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "select"}), ["ComboBoxRole", "ListBoxRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"attributes": [{"name": "type", "value": "date"}], "name": "input"}), ["DateRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"attributes": [{"name": "type", "value": "datetime"}], "name": "input"}), ["DateTimeRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "dfn"}), ["DefinitionRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "dd"}), ["DescriptionListDetailRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "dl"}), ["DescriptionListRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "dt"}), ["DescriptionListTermRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "details"}), ["DetailsRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "dialog"}), ["DialogRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "dir"}), ["DirectoryRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"attributes": [{"name": "open", "value": "open"}], "name": "summary"}), ["DisclosureTriangleRole"]),
      s2t.deepEqual(elementAXObjectMap.get({"attributes": [{"name": "aria-expanded"}], "name": "summary"}), ["DisclosureTriangleRole"]),
      s2t.deepEqual(elementAXObjectMap.get({"name": "div"}), ["DivRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "embed"}), ["EmbeddedObjectRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "figcaption"}), ["FigcaptionRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "figure"}), ["FigureRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "footer"}), ["FooterRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "form"}), ["FormRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "h1"}), ["HeadingRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "h2"}), ["HeadingRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "h3"}), ["HeadingRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "h4"}), ["HeadingRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "h5"}), ["HeadingRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "h6"}), ["HeadingRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "iframe"}), ["IframeRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"attributes": [{"name": "usemap"}], "name": "img"}), ["ImageMapRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "img"}), ["ImageRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "input"}), ["InlineTextBoxRole", "TextFieldRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"attributes": [{"name": "type", "value": "time"}], "name": "input"}), ["InputTimeRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "label"}), ["LabelRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "legend"}), ["LegendRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "br"}), ["LineBreakRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"attributes": [{"name": "href"}], "name": "a"}), ["LinkRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "option"}), ["ListBoxOptionRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "datalist"}), ["ListBoxRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "select"}), ["ComboBoxRole", "ListBoxRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "li"}), ["ListItemRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "ul"}), ["ListRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "ol"}), ["ListRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "main"}), ["MainRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "mark"}), ["MarkRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "marquee"}), ["MarqueeRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "menuitem"}), ["MenuItemRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "menu"}), ["MenuRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "meter"}), ["MeterRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "nav"}), ["NavigationRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "p"}), ["ParagraphRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "pre"}), ["PreRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "progress"}), ["ProgressIndicatorRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"attributes": [{"name": "type", "value": "radio"}], "name": "input"}), ["RadioButtonRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"attributes": [{"name": "scope", "value": "row"}], "name": "th"}), ["RowHeaderRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "tr"}), ["RowRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "ruby"}), ["RubyRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"attributes": [{"name": "type", "value": "search"}], "name": "input"}), ["SearchBoxRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"attributes": [{"name": "type", "value": "range"}], "name": "input"}), ["SliderRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"attributes": [{"name": "type", "value": "number"}], "name": "input"}), ["SpinButtonRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"attributes": [{"name": "type", "value": "checkbox"}], "name": "input"}), ["CheckBoxRole", "SwitchRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "table"}), ["TableRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "input"}), ["InlineTextBoxRole", "TextFieldRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"attributes": [{"name": "type", "value": "text"}], "name": "input"}), ["TextFieldRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "time"}), ["TimeRole"]);
      s2t.deepEqual(elementAXObjectMap.get({"name": "video"}), ["VideoRole"]);
    });
    
    st.test('has()', (s2t) => {
      s2t.equal(elementAXObjectMap.has({"attributes": [{"name": "type", "value": "radio"}], "name": "input"}), true);
      s2t.equal(elementAXObjectMap.has({"attributes": [{"name": "type", "value": "tv"}], "name": "input"}), false);

      s2t.end();
    });

    st.test('keys(), iteration', async (s2t) => {
      const entriesKeys = entriesList.map(entry => entry[0]);
      for (const key of elementAXObjectMap.keys()) {
        s2t.ok(entriesKeys.find((k) => deepEqual(k, key)), `for-of has key: ${inspect(key)}`);
      }

      [...elementAXObjectMap.keys()].forEach((key) => {
          s2t.ok(entriesKeys.find((k) => deepEqual(k, key)), `spread has key: ${inspect(key)}`);
      });
    });


    st.test('values(), iteration', async (s2t) => {
      const entriesValues = entriesList.map(([, values]) => values);
      
      for (const values of elementAXObjectMap.values()) {
        s2t.ok(
          entriesValues.some((vs) => deepEqual(values, vs)),
          `for-of has values: ${inspect(values)}`
        );
      }

      [...elementAXObjectMap.values()].forEach((values) => {
        s2t.ok(
          entriesValues.some((vs) => deepEqual(values, vs)),
          `spread has values: ${inspect(values)}`
        );
      });
    });
  });
});
