/* eslint-env mocha */
import expect from 'expect';
import AXObjectElementMap from '../../src/AXObjectElementMap';

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
  ["DisclosureTriangleRole", [{"attributes": [{"name": "open", "value": "open"}], "constraints": ["scoped to a details element"], "name": "summary"}, {"attributes": [{"name": "aria-expanded"}], "constraints": ["scoped to a details element"], "name": "summary"}]],
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

describe('AXObjectElementMap', function () {
  describe('iteration', function () {
    it('should have an iterator defined', function () {
      expect(AXObjectElementMap[Symbol.iterator]).not.toBeUndefined();
    });
    it('should have a specific length', function () {
      expect([...AXObjectElementMap].length).toEqual(65);
    });
    describe('should support the spread operator', function () {
      test.each([...AXObjectElementMap])(`Testing role: '%s' with element %o`, (role, elements) => {
        expect(entriesList).toEqual(
          expect.arrayContaining([[role, elements]]),
        );
      });
    });
    describe('should support the for..of pattern', function () {
      const output = [];
      for (const [key, value] of AXObjectElementMap) {
        output.push([key, value]);
      }
      test.each(output)(`Testing role: '%s' with element %o`, (role, elements) => {
        expect(entriesList).toEqual(
          expect.arrayContaining([[role, elements]]),
        );
      });
    });
  });
  describe('content', function () {
    describe('entries(), iteration', function () {
      test.each(AXObjectElementMap.entries())(`Testing role: '%s' with element %o`, (role, elements) => {
        expect(entriesList).toEqual(
          expect.arrayContaining([[role, elements]]),
        );
      });
      test.each([...AXObjectElementMap.entries()])(`Testing role: '%s' with element %o`, (role, elements) => {
        expect(entriesList).toEqual(
          expect.arrayContaining([[role, elements]]),
        );
      });
    });
    describe('forEach()', function () {
      const output = [];
      let context;
      AXObjectElementMap.forEach((value, key, map) => {
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
      expect(AXObjectElementMap.get("AbbrRole")).toEqual([{"name": "abbr"}]);
      expect(AXObjectElementMap.get("ArticleRole")).toEqual([{"name": "article"}]);
      expect(AXObjectElementMap.get("AudioRole")).toEqual([{"name": "audio"}]);
      expect(AXObjectElementMap.get("BlockquoteRole")).toEqual([{"name": "blockquote"}]);
      expect(AXObjectElementMap.get("ButtonRole")).toEqual([{"name": "button"}]);
      expect(AXObjectElementMap.get("CanvasRole")).toEqual([{"name": "canvas"}]);
      expect(AXObjectElementMap.get("CaptionRole")).toEqual([{"name": "caption"}]);
      expect(AXObjectElementMap.get("CellRole")).toEqual([{"name": "td"}]);
      expect(AXObjectElementMap.get("CheckBoxRole")).toEqual([{"attributes": [{"name": "type", "value": "checkbox"}], "name": "input"}]);
      expect(AXObjectElementMap.get("ColorWellRole")).toEqual([{"attributes": [{"name": "type", "value": "color"}], "name": "input"}]);
      expect(AXObjectElementMap.get("ColumnHeaderRole")).toEqual([{"name": "th"}]);
      expect(AXObjectElementMap.get("ComboBoxRole")).toEqual([{"name": "select"}]);
      expect(AXObjectElementMap.get("DateRole")).toEqual([{"attributes": [{"name": "type", "value": "date"}], "name": "input"}]);
      expect(AXObjectElementMap.get("DateTimeRole")).toEqual([{"attributes": [{"name": "type", "value": "datetime"}], "name": "input"}]);
      expect(AXObjectElementMap.get("DefinitionRole")).toEqual([{"name": "dfn"}]);
      expect(AXObjectElementMap.get("DescriptionListDetailRole")).toEqual([{"name": "dd"}]);
      expect(AXObjectElementMap.get("DescriptionListRole")).toEqual([{"name": "dl"}]);
      expect(AXObjectElementMap.get("DescriptionListTermRole")).toEqual([{"name": "dt"}]);
      expect(AXObjectElementMap.get("DetailsRole")).toEqual([{"name": "details"}]);
      expect(AXObjectElementMap.get("DialogRole")).toEqual([{"name": "dialog"}]);
      expect(AXObjectElementMap.get("DirectoryRole")).toEqual([{"name": "dir"}]);
      expect(AXObjectElementMap.get("DisclosureTriangleRole")).toEqual([{"attributes": [{"name": "open", "value": "open"}], "constraints": ["scoped to a details element"], "name": "summary"}, {"attributes": [{"name": "aria-expanded"}], "constraints": ["scoped to a details element"], "name": "summary"}]);
      expect(AXObjectElementMap.get("DivRole")).toEqual([{"name": "div"}]);
      expect(AXObjectElementMap.get("EmbeddedObjectRole")).toEqual([{"name": "embed"}]);
      expect(AXObjectElementMap.get("FigcaptionRole")).toEqual([{"name": "figcaption"}]);
      expect(AXObjectElementMap.get("FigureRole")).toEqual([{"name": "figure"}]);
      expect(AXObjectElementMap.get("FooterRole")).toEqual([{"name": "footer"}]);
      expect(AXObjectElementMap.get("FormRole")).toEqual([{"name": "form"}]);
      expect(AXObjectElementMap.get("HeadingRole")).toEqual([{"name": "h1"}, {"name": "h2"}, {"name": "h3"}, {"name": "h4"}, {"name": "h5"}, {"name": "h6"}]);
      expect(AXObjectElementMap.get("IframeRole")).toEqual([{"name": "iframe"}]);
      expect(AXObjectElementMap.get("ImageMapRole")).toEqual([{"attributes": [{"name": "usemap"}], "name": "img"}]);
      expect(AXObjectElementMap.get("ImageRole")).toEqual([{"name": "img"}]);
      expect(AXObjectElementMap.get("InlineTextBoxRole")).toEqual([{"name": "input"}]);
      expect(AXObjectElementMap.get("InputTimeRole")).toEqual([{"attributes": [{"name": "type", "value": "time"}], "name": "input"}]);
      expect(AXObjectElementMap.get("LabelRole")).toEqual([{"name": "label"}]);
      expect(AXObjectElementMap.get("LegendRole")).toEqual([{"name": "legend"}]);
      expect(AXObjectElementMap.get("LineBreakRole")).toEqual([{"name": "br"}]);
      expect(AXObjectElementMap.get("LinkRole")).toEqual([{"attributes": [{"name": "href"}], "name": "a"}]);
      expect(AXObjectElementMap.get("ListBoxOptionRole")).toEqual([{"name": "option"}]);
      expect(AXObjectElementMap.get("ListBoxRole")).toEqual([{"name": "datalist"}, {"name": "select"}]);
      expect(AXObjectElementMap.get("ListItemRole")).toEqual([{"name": "li"}]);
      expect(AXObjectElementMap.get("ListRole")).toEqual([{"name": "ul"}, {"name": "ol"}]);
      expect(AXObjectElementMap.get("MainRole")).toEqual([{"name": "main"}]);
      expect(AXObjectElementMap.get("MarkRole")).toEqual([{"name": "mark"}]);
      expect(AXObjectElementMap.get("MarqueeRole")).toEqual([{"name": "marquee"}]);
      expect(AXObjectElementMap.get("MenuItemRole")).toEqual([{"name": "menuitem"}]);
      expect(AXObjectElementMap.get("MenuRole")).toEqual([{"name": "menu"}]);
      expect(AXObjectElementMap.get("MeterRole")).toEqual([{"name": "meter"}]);
      expect(AXObjectElementMap.get("NavigationRole")).toEqual([{"name": "nav"}]);
      expect(AXObjectElementMap.get("ParagraphRole")).toEqual([{"name": "p"}]);
      expect(AXObjectElementMap.get("PreRole")).toEqual([{"name": "pre"}]);
      expect(AXObjectElementMap.get("ProgressIndicatorRole")).toEqual([{"name": "progress"}]);
      expect(AXObjectElementMap.get("RadioButtonRole")).toEqual([{"attributes": [{"name": "type", "value": "radio"}], "name": "input"}]);
      expect(AXObjectElementMap.get("RowHeaderRole")).toEqual([{"attributes": [{"name": "scope", "value": "row"}], "name": "th"}]);
      expect(AXObjectElementMap.get("RowRole")).toEqual([{"name": "tr"}]);
      expect(AXObjectElementMap.get("RubyRole")).toEqual([{"name": "ruby"}]);
      expect(AXObjectElementMap.get("SearchBoxRole")).toEqual([{"attributes": [{"name": "type", "value": "search"}], "name": "input"}]);
      expect(AXObjectElementMap.get("SliderRole")).toEqual([{"attributes": [{"name": "type", "value": "range"}], "name": "input"}]);
      expect(AXObjectElementMap.get("SpinButtonRole")).toEqual([{"attributes": [{"name": "type", "value": "number"}], "name": "input"}]);
      expect(AXObjectElementMap.get("SwitchRole")).toEqual([{"attributes": [{"name": "type", "value": "checkbox"}], "name": "input"}]);
      expect(AXObjectElementMap.get("TableRole")).toEqual([{"name": "table"}]);
      expect(AXObjectElementMap.get("TextAreaRole")).toEqual([{"name": "textarea"}]),
      expect(AXObjectElementMap.get("TextFieldRole")).toEqual([{"name": "input"}, {"attributes": [{"name": "type", "value": "text"}], "name": "input"}]);
      expect(AXObjectElementMap.get("TimeRole")).toEqual([{"name": "time"}]);
      expect(AXObjectElementMap.get("VideoRole")).toEqual([{"name": "video"}]);
    });
    it('has()', function () {
      expect(AXObjectElementMap.has('DivRole')).toEqual(true);
      expect(AXObjectElementMap.has('DoveRole')).toEqual(false);
    });
    describe('keys(), iteration', function() {
      const entriesKeys = entriesList.map(entry => entry[0]);
      test.each(AXObjectElementMap.keys())('Testing key: %o', (key) => {
        expect(entriesKeys).toEqual(
          expect.arrayContaining([key]),
        );
      });
      test.each([...AXObjectElementMap.keys()])('Testing key: %o', (key) => {
        expect(entriesKeys).toEqual(
          expect.arrayContaining([key]),
        );
      });
    });
    describe('values(), iteration', function() {
      const entriesValues = entriesList.map(entry => entry[1]);
      test.each(AXObjectElementMap.values().map(value => [value]))('Testing value: %o', (value) => {
        expect(entriesValues).toEqual(
          expect.arrayContaining([value]),
        );
      });
      test.each([...AXObjectElementMap.values()].map(value => [value]))('Testing value: %o', (value) => {
        expect(entriesValues).toEqual(
          expect.arrayContaining([value]),
        );
      });
    });
  });
});
