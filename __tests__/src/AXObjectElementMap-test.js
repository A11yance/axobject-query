import test from 'tape';
import inspect from 'object-inspect';
import deepEqual from 'deep-equal-json';

import AXObjectElementMap from 'axobject-query/src/AXObjectElementMap';

const entriesList = [
  ["AbbrRole", [{"name": "abbr"}]],
  ["ArticleRole", [{"name": "article"}]],
  ["AudioRole", [{"name": "audio"}]],
  ["BlockquoteRole", [{"name": "blockquote"}]],
  ["ButtonRole", [{"name": "button"}]],
  ["CanvasRole", [{"name": "canvas"}]],
  ["CaptionRole", [{"name": "caption"}]],
  ["CellRole", [{"name": "td"}]],
  ["CheckBoxRole", [{"attributes": [{"name": "type", "value": "checkbox"}], "name": "input"}]],
  ["ColorWellRole", [{"attributes": [{"name": "type", "value": "color"}], "name": "input"}]],
  ["ColumnHeaderRole", [{"name": "th"}]],
  ["ComboBoxRole", [{"name": "select"}]],
  ["DateRole", [{"attributes": [{"name": "type", "value": "date"}], "name": "input"}]],
  ["DateTimeRole", [{"attributes": [{"name": "type", "value": "datetime"}], "name": "input"}]],
  ["DefinitionRole", [{"name": "dfn"}]],
  ["DescriptionListDetailRole", [{"name": "dd"}]],
  ["DescriptionListRole", [{"name": "dl"}]],
  ["DescriptionListTermRole", [{"name": "dt"}]],
  ["DetailsRole", [{"name": "details"}]],
  ["DialogRole", [{"name": "dialog"}]],
  ["DirectoryRole", [{"name": "dir"}]],
  ["DisclosureTriangleRole", [{"constraints": ["scoped to a details element"], "name": "summary"}]],
  ["DivRole", [{"name": "div"}]],
  ["EmbeddedObjectRole", [{"name": "embed"}]],
  ["FigcaptionRole", [{"name": "figcaption"}]],
  ["FigureRole", [{"name": "figure"}]],
  ["FooterRole", [{"name": "footer"}]],
  ["FormRole", [{"name": "form"}]],
  ["HeadingRole", [{"name": "h1"}, {"name": "h2"}, {"name": "h3"}, {"name": "h4"}, {"name": "h5"}, {"name": "h6"}]],
  ["IframeRole", [{"name": "iframe"}]],
  ["ImageMapRole", [{"attributes": [{"name": "usemap"}], "name": "img"}]],
  ["ImageRole", [{"name": "img"}]],
  ["InlineTextBoxRole", [{"name": "input"}]],
  ["InputTimeRole", [{"attributes": [{"name": "type", "value": "time"}], "name": "input"}]],
  ["LabelRole", [{"name": "label"}]],
  ["LegendRole", [{"name": "legend"}]],
  ["LineBreakRole", [{"name": "br"}]],
  ["LinkRole", [{"attributes": [{"name": "href"}], "name": "a"}]],
  ["ListBoxOptionRole", [{"name": "option"}]],
  ["ListBoxRole", [{"name": "datalist"}, {"name": "select"}]],
  ["ListItemRole", [{"name": "li"}]],
  ["ListRole", [{"name": "ul"}, {"name": "ol"}]],
  ["MainRole", [{"name": "main"}]],
  ["MarkRole", [{"name": "mark"}]],
  ["MarqueeRole", [{"name": "marquee"}]],
  ["MenuItemRole", [{"name": "menuitem"}]],
  ["MenuRole", [{"name": "menu"}]],
  ["MeterRole", [{"name": "meter"}]],
  ["NavigationRole", [{"name": "nav"}]],
  ["ParagraphRole", [{"name": "p"}]],
  ["PreRole", [{"name": "pre"}]],
  ["ProgressIndicatorRole", [{"name": "progress"}]],
  ["RadioButtonRole", [{"attributes": [{"name": "type", "value": "radio"}], "name": "input"}]],
  ["RowHeaderRole", [{"attributes": [{"name": "scope", "value": "row"}], "name": "th"}]],
  ["RowRole", [{"name": "tr"}]],
  ["RubyRole", [{"name": "ruby"}]],
  ["SearchBoxRole", [{"attributes": [{"name": "type", "value": "search"}], "name": "input"}]],
  ["SliderRole", [{"attributes": [{"name": "type", "value": "range"}], "name": "input"}]],
  ["SpinButtonRole", [{"attributes": [{"name": "type", "value": "number"}], "name": "input"}]],
  ["SwitchRole", [{"attributes": [{"name": "type", "value": "checkbox"}], "name": "input"}]],
  ["TableRole", [{"name": "table"}]],
  ["TextAreaRole", [{"name": "textarea"}]],
  ["TextFieldRole", [{"name": "input"}, {"attributes": [{"name": "type", "value": "text"}], "name": "input"}]],
  ["TimeRole", [{"name": "time"}]],
  ["VideoRole", [{"name": "video"}]],
];

test('AXObjectElementMap', async (t) => {
  t.test('iteration', async (st) => {
    st.notEqual(AXObjectElementMap[Symbol.iterator], undefined, 'has an iterator defined');
    st.equal([...AXObjectElementMap].length, 65, 'has a specific length');

    st.test('supports the spread operator', async (s2t) => {
      [...AXObjectElementMap].forEach(([role, elements]) => {
        const found = entriesList.find(([r]) => r === role);

        s2t.deepEqual(found, [role, elements], `spread has role: ${role}`);
      });
    });

    st.test('supports the for..of pattern', async (s2t) => {
      const output = [];
      for (const [key, value] of AXObjectElementMap) {
        output.push([key, value]);
      }

      output.forEach(([role, elements]) => {
        const found = entriesList.find(([r]) => r === role);

        s2t.deepEqual(found, [role, elements], `for-of has role: ${role}`);
      });
    });
  });

  t.test('content', async (st) => {
    st.test('entries(), iteration', async (s2t) => {
      for (const [role, elements] of AXObjectElementMap.entries()) {
        const found = entriesList.find(([r]) => r === role);

        s2t.deepEqual(found, [role, elements], `for-of has role: ${role}`);
      }


      [...AXObjectElementMap.entries()].forEach(([role, elements]) => {
        const found = entriesList.find(([r]) => r === role);

        s2t.deepEqual(found, [role, elements], `spread has role: ${role}`);
      });
    });

    st.test('forEach()', async (s2t) => {
      const output = [];
      let context;
      AXObjectElementMap.forEach((value, key, map) => {
        output.push([key, value]);
        if (!context) {
          context = map;
        }
      });

      output.forEach(([role, elements]) => {
        const found = entriesList.find(([r]) => r === role);

        s2t.deepEqual(found, [role, elements], `output has role: ${role}`);
      });

      context.forEach(([role, elements]) => {
        const found = entriesList.find(([r]) => r === role);

        s2t.deepEqual(found, [role, elements], `context has role: ${role}`);
      });
    });

    st.test('get()', async (s2t) => {
      s2t.deepEqual(AXObjectElementMap.get("AbbrRole"), [{"name": "abbr"}]);
      s2t.deepEqual(AXObjectElementMap.get("ArticleRole"), [{"name": "article"}]);
      s2t.deepEqual(AXObjectElementMap.get("AudioRole"), [{"name": "audio"}]);
      s2t.deepEqual(AXObjectElementMap.get("BlockquoteRole"), [{"name": "blockquote"}]);
      s2t.deepEqual(AXObjectElementMap.get("ButtonRole"), [{"name": "button"}]);
      s2t.deepEqual(AXObjectElementMap.get("CanvasRole"), [{"name": "canvas"}]);
      s2t.deepEqual(AXObjectElementMap.get("CaptionRole"), [{"name": "caption"}]);
      s2t.deepEqual(AXObjectElementMap.get("CellRole"), [{"name": "td"}]);
      s2t.deepEqual(AXObjectElementMap.get("CheckBoxRole"), [{"attributes": [{"name": "type", "value": "checkbox"}], "name": "input"}]);
      s2t.deepEqual(AXObjectElementMap.get("ColorWellRole"), [{"attributes": [{"name": "type", "value": "color"}], "name": "input"}]);
      s2t.deepEqual(AXObjectElementMap.get("ColumnHeaderRole"), [{"name": "th"}]);
      s2t.deepEqual(AXObjectElementMap.get("ComboBoxRole"), [{"name": "select"}]);
      s2t.deepEqual(AXObjectElementMap.get("DateRole"), [{"attributes": [{"name": "type", "value": "date"}], "name": "input"}]);
      s2t.deepEqual(AXObjectElementMap.get("DateTimeRole"), [{"attributes": [{"name": "type", "value": "datetime"}], "name": "input"}]);
      s2t.deepEqual(AXObjectElementMap.get("DefinitionRole"), [{"name": "dfn"}]);
      s2t.deepEqual(AXObjectElementMap.get("DescriptionListDetailRole"), [{"name": "dd"}]);
      s2t.deepEqual(AXObjectElementMap.get("DescriptionListRole"), [{"name": "dl"}]);
      s2t.deepEqual(AXObjectElementMap.get("DescriptionListTermRole"), [{"name": "dt"}]);
      s2t.deepEqual(AXObjectElementMap.get("DetailsRole"), [{"name": "details"}]);
      s2t.deepEqual(AXObjectElementMap.get("DialogRole"), [{"name": "dialog"}]);
      s2t.deepEqual(AXObjectElementMap.get("DirectoryRole"), [{"name": "dir"}]);
      s2t.deepEqual(AXObjectElementMap.get("DisclosureTriangleRole"), [{"constraints": ["scoped to a details element"], "name": "summary"}]);
      s2t.deepEqual(AXObjectElementMap.get("DivRole"), [{"name": "div"}]);
      s2t.deepEqual(AXObjectElementMap.get("EmbeddedObjectRole"), [{"name": "embed"}]);
      s2t.deepEqual(AXObjectElementMap.get("FigcaptionRole"), [{"name": "figcaption"}]);
      s2t.deepEqual(AXObjectElementMap.get("FigureRole"), [{"name": "figure"}]);
      s2t.deepEqual(AXObjectElementMap.get("FooterRole"), [{"name": "footer"}]);
      s2t.deepEqual(AXObjectElementMap.get("FormRole"), [{"name": "form"}]);
      s2t.deepEqual(AXObjectElementMap.get("HeadingRole"), [{"name": "h1"}, {"name": "h2"}, {"name": "h3"}, {"name": "h4"}, {"name": "h5"}, {"name": "h6"}]);
      s2t.deepEqual(AXObjectElementMap.get("IframeRole"), [{"name": "iframe"}]);
      s2t.deepEqual(AXObjectElementMap.get("ImageMapRole"), [{"attributes": [{"name": "usemap"}], "name": "img"}]);
      s2t.deepEqual(AXObjectElementMap.get("ImageRole"), [{"name": "img"}]);
      s2t.deepEqual(AXObjectElementMap.get("InlineTextBoxRole"), [{"name": "input"}]);
      s2t.deepEqual(AXObjectElementMap.get("InputTimeRole"), [{"attributes": [{"name": "type", "value": "time"}], "name": "input"}]);
      s2t.deepEqual(AXObjectElementMap.get("LabelRole"), [{"name": "label"}]);
      s2t.deepEqual(AXObjectElementMap.get("LegendRole"), [{"name": "legend"}]);
      s2t.deepEqual(AXObjectElementMap.get("LineBreakRole"), [{"name": "br"}]);
      s2t.deepEqual(AXObjectElementMap.get("LinkRole"), [{"attributes": [{"name": "href"}], "name": "a"}]);
      s2t.deepEqual(AXObjectElementMap.get("ListBoxOptionRole"), [{"name": "option"}]);
      s2t.deepEqual(AXObjectElementMap.get("ListBoxRole"), [{"name": "datalist"}, {"name": "select"}]);
      s2t.deepEqual(AXObjectElementMap.get("ListItemRole"), [{"name": "li"}]);
      s2t.deepEqual(AXObjectElementMap.get("ListRole"), [{"name": "ul"}, {"name": "ol"}]);
      s2t.deepEqual(AXObjectElementMap.get("MainRole"), [{"name": "main"}]);
      s2t.deepEqual(AXObjectElementMap.get("MarkRole"), [{"name": "mark"}]);
      s2t.deepEqual(AXObjectElementMap.get("MarqueeRole"), [{"name": "marquee"}]);
      s2t.deepEqual(AXObjectElementMap.get("MenuItemRole"), [{"name": "menuitem"}]);
      s2t.deepEqual(AXObjectElementMap.get("MenuRole"), [{"name": "menu"}]);
      s2t.deepEqual(AXObjectElementMap.get("MeterRole"), [{"name": "meter"}]);
      s2t.deepEqual(AXObjectElementMap.get("NavigationRole"), [{"name": "nav"}]);
      s2t.deepEqual(AXObjectElementMap.get("ParagraphRole"), [{"name": "p"}]);
      s2t.deepEqual(AXObjectElementMap.get("PreRole"), [{"name": "pre"}]);
      s2t.deepEqual(AXObjectElementMap.get("ProgressIndicatorRole"), [{"name": "progress"}]);
      s2t.deepEqual(AXObjectElementMap.get("RadioButtonRole"), [{"attributes": [{"name": "type", "value": "radio"}], "name": "input"}]);
      s2t.deepEqual(AXObjectElementMap.get("RowHeaderRole"), [{"attributes": [{"name": "scope", "value": "row"}], "name": "th"}]);
      s2t.deepEqual(AXObjectElementMap.get("RowRole"), [{"name": "tr"}]);
      s2t.deepEqual(AXObjectElementMap.get("RubyRole"), [{"name": "ruby"}]);
      s2t.deepEqual(AXObjectElementMap.get("SearchBoxRole"), [{"attributes": [{"name": "type", "value": "search"}], "name": "input"}]);
      s2t.deepEqual(AXObjectElementMap.get("SliderRole"), [{"attributes": [{"name": "type", "value": "range"}], "name": "input"}]);
      s2t.deepEqual(AXObjectElementMap.get("SpinButtonRole"), [{"attributes": [{"name": "type", "value": "number"}], "name": "input"}]);
      s2t.deepEqual(AXObjectElementMap.get("SwitchRole"), [{"attributes": [{"name": "type", "value": "checkbox"}], "name": "input"}]);
      s2t.deepEqual(AXObjectElementMap.get("TableRole"), [{"name": "table"}]);
      s2t.deepEqual(AXObjectElementMap.get("TextAreaRole"), [{"name": "textarea"}]),
      s2t.deepEqual(AXObjectElementMap.get("TextFieldRole"), [{"name": "input"}, {"attributes": [{"name": "type", "value": "text"}], "name": "input"}]);
      s2t.deepEqual(AXObjectElementMap.get("TimeRole"), [{"name": "time"}]);
      s2t.deepEqual(AXObjectElementMap.get("VideoRole"), [{"name": "video"}]);
    });

    st.test('has()', (s2t) => {
      s2t.equal(AXObjectElementMap.has('DivRole'), true);
      s2t.equal(AXObjectElementMap.has('DoveRole'), false);

      s2t.end();
    });

    st.test('keys(), iteration', async (s2t) => {
      const entriesKeys = entriesList.map(entry => entry[0]);
      for (const key of AXObjectElementMap.keys()) {
        s2t.ok(entriesKeys.find((k) => k === key), `for-of has key: ${key}`);
      }

      [...AXObjectElementMap.keys()].forEach(([key]) => {
          s2t.ok(entriesKeys.find(([k]) => k === key), `spread has key: ${key}`);
      });
    });

    st.test('values(), iteration', async (s2t) => {
      const entriesValues = entriesList.map(([, values]) => values);
      
      for (const values of AXObjectElementMap.values()) {
        s2t.ok(
          entriesValues.some((vs) => deepEqual(values, vs)),
          `for-of has values: ${inspect(values)}`
        );
      }

      [...AXObjectElementMap.values()].forEach((values) => {
        s2t.ok(
          entriesValues.some((vs) => deepEqual(values, vs)),
          `spread has values: ${inspect(values)}`
        );
      });
    });
  });
});
