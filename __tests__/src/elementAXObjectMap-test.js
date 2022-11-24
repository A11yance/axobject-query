/* eslint-env mocha */
import expect from 'expect';
import elementAXObjectMap from '../../src/elementAXObjectMap';

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

describe('elementAXObjectMap', function () {
  describe('iteration', function () {
    it('should have an iterator defined', function () {
      expect(elementAXObjectMap[Symbol.iterator]).toBeDefined();
    });
    it('should have a specific length', function () {
      expect([...elementAXObjectMap].length).toEqual(71);
    });
    describe('should support the spread operator', function () {
      test.each([...elementAXObjectMap])(`Testing role: '%s' with element %o`, (role, elements) => {
        expect(entriesList).toEqual(
          expect.arrayContaining([[role, elements]]),
        );
      });
    });
    describe('should support the for..of pattern', function () {
      const output = [];
      for (const [key, value] of elementAXObjectMap) {
        output.push([key, value]);
      }
      test.each(output)(`Testing role: '%s' with element %o`, (role, elements) => {
        expect(entriesList).toEqual(
          expect.arrayContaining([[role, elements]]),
        );
      });
    });
    it('should support one-by-one iteration with the next method', function () {
      const iter = elementAXObjectMap[Symbol.iterator]();
      const item =iter.next();
      expect(item.value).toBeDefined();
      expect(item.done).toBe(false);
    });
  });
  describe('content', function () {
    describe('entries(), iteration', function () {
      test.each(elementAXObjectMap.entries())(`Testing role: '%s' with element %o`, (role, elements) => {
        expect(entriesList).toEqual(
          expect.arrayContaining([[role, elements]]),
        );
      });
      test.each([...elementAXObjectMap.entries()])(`Testing role: '%s' with element %o`, (role, elements) => {
        expect(entriesList).toEqual(
          expect.arrayContaining([[role, elements]]),
        );
      });
    });
    describe('forEach()', function () {
      const output = [];
      let context;
      elementAXObjectMap.forEach((value, key, map) => {
        output.push([key, value]);
        if (!context) {
          context = map;
        }
      });
      test.each(output)(`Testing role: '%s' with element %o`, (role, elements) => {
        expect(entriesList).toEqual(
          expect.arrayContaining([[role, elements]]),
        );
      });
      test.each(context)(`Testing role: '%s' with element %o`, (role, elements) => {
        expect(entriesList).toEqual(
          expect.arrayContaining([[role, elements]]),
        );
      });
    });
    it('get()', function () {
      expect(elementAXObjectMap.get({'name': 'abbr'})).toEqual(["AbbrRole"]);
      expect(elementAXObjectMap.get({"name": "article"})).toEqual(["ArticleRole"]);
      expect(elementAXObjectMap.get({"name": "audio"})).toEqual(["AudioRole"]);
      expect(elementAXObjectMap.get({"name": "blockquote"})).toEqual(["BlockquoteRole"]);
      expect(elementAXObjectMap.get({"name": "button"})).toEqual(["ButtonRole"]);
      expect(elementAXObjectMap.get({"name": "canvas"})).toEqual(["CanvasRole"]);
      expect(elementAXObjectMap.get({"name": "caption"})).toEqual(["CaptionRole"]);
      expect(elementAXObjectMap.get({"name": "td"})).toEqual(["CellRole"]);
      expect(elementAXObjectMap.get({"attributes": [{"name": "type", "value": "checkbox"}], "name": "input"})).toEqual(["CheckBoxRole", "SwitchRole"]);
      expect(elementAXObjectMap.get({"attributes": [{"name": "type", "value": "color"}], "name": "input"})).toEqual(["ColorWellRole"]);
      expect(elementAXObjectMap.get({"name": "th"})).toEqual(["ColumnHeaderRole"]);
      expect(elementAXObjectMap.get({"name": "select"})).toEqual(["ComboBoxRole", "ListBoxRole"]);
      expect(elementAXObjectMap.get({"attributes": [{"name": "type", "value": "date"}], "name": "input"})).toEqual(["DateRole"]);
      expect(elementAXObjectMap.get({"attributes": [{"name": "type", "value": "datetime"}], "name": "input"})).toEqual(["DateTimeRole"]);
      expect(elementAXObjectMap.get({"name": "dfn"})).toEqual(["DefinitionRole"]);
      expect(elementAXObjectMap.get({"name": "dd"})).toEqual(["DescriptionListDetailRole"]);
      expect(elementAXObjectMap.get({"name": "dl"})).toEqual(["DescriptionListRole"]);
      expect(elementAXObjectMap.get({"name": "dt"})).toEqual(["DescriptionListTermRole"]);
      expect(elementAXObjectMap.get({"name": "details"})).toEqual(["DetailsRole"]);
      expect(elementAXObjectMap.get({"name": "dialog"})).toEqual(["DialogRole"]);
      expect(elementAXObjectMap.get({"name": "dir"})).toEqual(["DirectoryRole"]);
      expect(elementAXObjectMap.get({"attributes": [{"name": "open", "value": "open"}], "name": "summary"})).toEqual(["DisclosureTriangleRole"]),
      expect(elementAXObjectMap.get({"attributes": [{"name": "aria-expanded"}], "name": "summary"})).toEqual(["DisclosureTriangleRole"]),
      expect(elementAXObjectMap.get({"name": "div"})).toEqual(["DivRole"]);
      expect(elementAXObjectMap.get({"name": "embed"})).toEqual(["EmbeddedObjectRole"]);
      expect(elementAXObjectMap.get({"name": "figcaption"})).toEqual(["FigcaptionRole"]);
      expect(elementAXObjectMap.get({"name": "figure"})).toEqual(["FigureRole"]);
      expect(elementAXObjectMap.get({"name": "footer"})).toEqual(["FooterRole"]);
      expect(elementAXObjectMap.get({"name": "form"})).toEqual(["FormRole"]);
      expect(elementAXObjectMap.get({"name": "h1"})).toEqual(["HeadingRole"]);
      expect(elementAXObjectMap.get({"name": "h2"})).toEqual(["HeadingRole"]);
      expect(elementAXObjectMap.get({"name": "h3"})).toEqual(["HeadingRole"]);
      expect(elementAXObjectMap.get({"name": "h4"})).toEqual(["HeadingRole"]);
      expect(elementAXObjectMap.get({"name": "h5"})).toEqual(["HeadingRole"]);
      expect(elementAXObjectMap.get({"name": "h6"})).toEqual(["HeadingRole"]);
      expect(elementAXObjectMap.get({"name": "iframe"})).toEqual(["IframeRole"]);
      expect(elementAXObjectMap.get({"attributes": [{"name": "usemap"}], "name": "img"})).toEqual(["ImageMapRole"]);
      expect(elementAXObjectMap.get({"name": "img"})).toEqual(["ImageRole"]);
      expect(elementAXObjectMap.get({"name": "input"})).toEqual(["InlineTextBoxRole", "TextFieldRole"]);
      expect(elementAXObjectMap.get({"attributes": [{"name": "type", "value": "time"}], "name": "input"})).toEqual(["InputTimeRole"]);
      expect(elementAXObjectMap.get({"name": "label"})).toEqual(["LabelRole"]);
      expect(elementAXObjectMap.get({"name": "legend"})).toEqual(["LegendRole"]);
      expect(elementAXObjectMap.get({"name": "br"})).toEqual(["LineBreakRole"]);
      expect(elementAXObjectMap.get({"attributes": [{"name": "href"}], "name": "a"})).toEqual(["LinkRole"]);
      expect(elementAXObjectMap.get({"name": "option"})).toEqual(["ListBoxOptionRole"]);
      expect(elementAXObjectMap.get({"name": "datalist"})).toEqual(["ListBoxRole"]);
      expect(elementAXObjectMap.get({"name": "select"})).toEqual(["ComboBoxRole", "ListBoxRole"]);
      expect(elementAXObjectMap.get({"name": "li"})).toEqual(["ListItemRole"]);
      expect(elementAXObjectMap.get({"name": "ul"})).toEqual(["ListRole"]);
      expect(elementAXObjectMap.get({"name": "ol"})).toEqual(["ListRole"]);
      expect(elementAXObjectMap.get({"name": "main"})).toEqual(["MainRole"]);
      expect(elementAXObjectMap.get({"name": "mark"})).toEqual(["MarkRole"]);
      expect(elementAXObjectMap.get({"name": "marquee"})).toEqual(["MarqueeRole"]);
      expect(elementAXObjectMap.get({"name": "menuitem"})).toEqual(["MenuItemRole"]);
      expect(elementAXObjectMap.get({"name": "menu"})).toEqual(["MenuRole"]);
      expect(elementAXObjectMap.get({"name": "meter"})).toEqual(["MeterRole"]);
      expect(elementAXObjectMap.get({"name": "nav"})).toEqual(["NavigationRole"]);
      expect(elementAXObjectMap.get({"name": "p"})).toEqual(["ParagraphRole"]);
      expect(elementAXObjectMap.get({"name": "pre"})).toEqual(["PreRole"]);
      expect(elementAXObjectMap.get({"name": "progress"})).toEqual(["ProgressIndicatorRole"]);
      expect(elementAXObjectMap.get({"attributes": [{"name": "type", "value": "radio"}], "name": "input"})).toEqual(["RadioButtonRole"]);
      expect(elementAXObjectMap.get({"attributes": [{"name": "scope", "value": "row"}], "name": "th"})).toEqual(["RowHeaderRole"]);
      expect(elementAXObjectMap.get({"name": "tr"})).toEqual(["RowRole"]);
      expect(elementAXObjectMap.get({"name": "ruby"})).toEqual(["RubyRole"]);
      expect(elementAXObjectMap.get({"attributes": [{"name": "type", "value": "search"}], "name": "input"})).toEqual(["SearchBoxRole"]);
      expect(elementAXObjectMap.get({"attributes": [{"name": "type", "value": "range"}], "name": "input"})).toEqual(["SliderRole"]);
      expect(elementAXObjectMap.get({"attributes": [{"name": "type", "value": "number"}], "name": "input"})).toEqual(["SpinButtonRole"]);
      expect(elementAXObjectMap.get({"attributes": [{"name": "type", "value": "checkbox"}], "name": "input"})).toEqual(["CheckBoxRole", "SwitchRole"]);
      expect(elementAXObjectMap.get({"name": "table"})).toEqual(["TableRole"]);
      expect(elementAXObjectMap.get({"name": "input"})).toEqual(["InlineTextBoxRole", "TextFieldRole"]);
      expect(elementAXObjectMap.get({"attributes": [{"name": "type", "value": "text"}], "name": "input"})).toEqual(["TextFieldRole"]);
      expect(elementAXObjectMap.get({"name": "time"})).toEqual(["TimeRole"]);
      expect(elementAXObjectMap.get({"name": "video"})).toEqual(["VideoRole"]);
    });
    it('has()', function () {
      expect(elementAXObjectMap.has({"attributes": [{"name": "type", "value": "radio"}], "name": "input"})).toEqual(true);
      expect(elementAXObjectMap.has({"attributes": [{"name": "type", "value": "tv"}], "name": "input"})).toEqual(false);
    });
    describe('keys(), iteration', function() {
      const entriesKeys = entriesList.map(entry => entry[0]);
      test.each(elementAXObjectMap.keys())('Testing key: %o', (key) => {
        expect(entriesKeys).toEqual(
          expect.arrayContaining([key]),
        );
      });
      test.each([...elementAXObjectMap.keys()])('Testing key: %o', (key) => {
        expect(entriesKeys).toEqual(
          expect.arrayContaining([key]),
        );
      });
    });
    describe('values(), iteration', function() {
      const entriesValues = entriesList.map(entry => entry[1]);
      test.each(elementAXObjectMap.values().map(value => [value]))('Testing value: %o', (value) => {
        expect(entriesValues).toEqual(
          expect.arrayContaining([value]),
        );
      });
      test.each([...elementAXObjectMap.values()].map(value => [value]))('Testing value: %o', (value) => {
        expect(entriesValues).toEqual(
          expect.arrayContaining([value]),
        );
      });
    });
  });
});
