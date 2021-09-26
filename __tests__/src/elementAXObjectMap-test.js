/* eslint-env mocha */
import expect from 'expect';
import elementAXObjectMap from '../../src/elementAXObjectMap';

describe('elementAXObjectMap', function () {
  it('should be a Map', function () {
    expect(elementAXObjectMap instanceof Map).toBe(true);
  });
  describe('content', function () {
    it('should have specific elements', function () {
      expect(Array.from(elementAXObjectMap.entries())).toEqual(
        expect.arrayContaining(
          [
            [{"name": "abbr"}, new Set("AbbrRole")],
            [{"name": "article"}, new Set("ArticleRole")],
            [{"name": "audio"}, new Set("AudioRole")],
            [{"name": "blockquote"}, new Set("BlockquoteRole")],
            [{"name": "button"}, new Set("ButtonRole")],
            [{"name": "canvas"}, new Set("CanvasRole")],
            [{"name": "caption"}, new Set("CaptionRole")],
            [{"name": "td"}, new Set("CellRole")],
            [{"attributes": [{"name": "type", "value": "checkbox"}], "name": "input"}, new Set("CheckBoxRole", "SwitchRole")],
            [{"attributes": [{"name": "type", "value": "color"}], "name": "input"}, new Set("ColorWellRole")],
            [{"name": "th"}, new Set("ColumnHeaderRole")],
            [{"name": "select"}, new Set("ComboBoxRole", "ListBoxRole")],
            [{"attributes": [{"name": "type", "value": "date"}], "name": "input"}, new Set("DateRole")],
            [{"attributes": [{"name": "type", "value": "datetime"}], "name": "input"}, new Set("DateTimeRole")],
            [{"name": "dfn"}, new Set("DefinitionRole")],
            [{"name": "dd"}, new Set("DescriptionListDetailRole")],
            [{"name": "dl"}, new Set("DescriptionListRole")],
            [{"name": "dt"}, new Set("DescriptionListTermRole")],
            [{"name": "details"}, new Set("DetailsRole")],
            [{"name": "dialog"}, new Set("DialogRole")],
            [{"name": "dir"}, new Set("DirectoryRole")],
            [{"name": "summary"}, new Set("DisclosureTriangleRole")],
            [{"name": "div"}, new Set("DivRole")],
            [{"name": "embed"}, new Set("EmbeddedObjectRole")],
            [{"name": "figcaption"}, new Set("FigcaptionRole")],
            [{"name": "figure"}, new Set("FigureRole")],
            [{"name": "footer"}, new Set("FooterRole")],
            [{"name": "form"}, new Set("FormRole")],
            [{"name": "h1"}, new Set("HeadingRole")],
            [{"name": "h2"}, new Set("HeadingRole")],
            [{"name": "h3"}, new Set("HeadingRole")],
            [{"name": "h4"}, new Set("HeadingRole")],
            [{"name": "h5"}, new Set("HeadingRole")],
            [{"name": "h6"}, new Set("HeadingRole")],
            [{"name": "iframe"}, new Set("IframeRole")],
            [{"attributes": [{"name": "usemap"}], "name": "img"}, new Set("ImageMapRole")],
            [{"name": "img"}, new Set("ImageRole")],
            [{"name": "input"}, new Set("InlineTextBoxRole", "TextFieldRole")],
            [{"attributes": [{"name": "type", "value": "time"}], "name": "input"}, new Set("InputTimeRole")],
            [{"name": "label"}, new Set("LabelRole")],
            [{"name": "legend"}, new Set("LegendRole")],
            [{"name": "br"}, new Set("LineBreakRole")],
            [{"attributes": [{"name": "href"}], "name": "a"}, new Set("LinkRole")],
            [{"name": "option"}, new Set("ListBoxOptionRole")],
            [{"name": "datalist"}, new Set("ListBoxRole")],
            [{"name": "select"}, new Set("ComboBoxRole", "ListBoxRole")],
            [{"name": "li"}, new Set("ListItemRole")],
            [{"name": "ul"}, new Set("ListRole")],
            [{"name": "ol"}, new Set("ListRole")],
            [{"name": "main"}, new Set("MainRole")],
            [{"name": "mark"}, new Set("MarkRole")],
            [{"name": "marquee"}, new Set("MarqueeRole")],
            [{"name": "menuitem"}, new Set("MenuItemRole")],
            [{"name": "menu"}, new Set("MenuRole")],
            [{"name": "meter"}, new Set("MeterRole")],
            [{"name": "nav"}, new Set("NavigationRole")],
            [{"name": "p"}, new Set("ParagraphRole")],
            [{"name": "pre"}, new Set("PreRole")],
            [{"name": "progress"}, new Set("ProgressIndicatorRole")],
            [{"attributes": [{"name": "type", "value": "radio"}], "name": "input"}, new Set("RadioButtonRole")],
            [{"attributes": [{"name": "scope", "value": "row"}], "name": "th"}, new Set("RowHeaderRole")],
            [{"name": "tr"}, new Set("RowRole")],
            [{"name": "ruby"}, new Set("RubyRole")],
            [{"attributes": [{"name": "type", "value": "search"}], "name": "input"}, new Set("SearchBoxRole")],
            [{"attributes": [{"name": "type", "value": "range"}], "name": "input"}, new Set("SliderRole")],
            [{"attributes": [{"name": "type", "value": "number"}], "name": "input"}, new Set("SpinButtonRole")],
            [{"attributes": [{"name": "type", "value": "checkbox"}], "name": "input"}, new Set("CheckBoxRole", "SwitchRole")],
            [{"name": "table"}, new Set("TableRole")],
            [{"name": "input"}, new Set("InlineTextBoxRole", "TextFieldRole")],
            [{"attributes": [{"name": "type", "value": "text"}], "name": "input"}, new Set("TextFieldRole")],
            [{"name": "time"}, new Set("TimeRole")],
            [{"name": "video"}, new Set("VideoRole")]
          ]
        )
      );
    });
  });
});
