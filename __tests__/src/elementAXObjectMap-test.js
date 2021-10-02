/* eslint-env mocha */
import expect from 'expect';
import elementAXObjectMap from '../../src/elementAXObjectMap';

describe('elementAXObjectMap', function () {
  describe('content', function () {
    it('should have specific elements', function () {
      expect(elementAXObjectMap.entries()).toEqual(
        expect.arrayContaining(
          [
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
            [{"name": "summary"}, ["DisclosureTriangleRole"]],
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
            [{"name": "input"}, ["InlineTextBoxRole", "TextFieldRole"]],
            [{"attributes": [{"name": "type", "value": "text"}], "name": "input"}, ["TextFieldRole"]],
            [{"name": "time"}, ["TimeRole"]],
            [{"name": "video"}, ["VideoRole"]]
          ]
        )
      );
    });
  });
});
