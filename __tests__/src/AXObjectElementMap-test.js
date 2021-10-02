/* eslint-env mocha */
import expect from 'expect';
import AXObjectElementMap from '../../src/AXObjectElementMap';

describe('AXObjectElementMap', function () {
  describe('content', function () {
    it('should have specific elements', function () {
      expect(AXObjectElementMap.entries()).toEqual(
        expect.arrayContaining(
          [
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
            ["DisclosureTriangleRole", [{"name": "summary"}]],
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
            ["TextFieldRole", [{"name": "input"}, {"attributes": [{"name": "type", "value": "text"}], "name": "input"}]],
            ["TimeRole", [{"name": "time"}]],
            ["VideoRole", [{"name": "video"}]],
          ]
        )
      );
    });
  });
});
