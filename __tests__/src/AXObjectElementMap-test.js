/* eslint-env mocha */
import expect from 'expect';
import AXObjectElementMap from '../../src/AXObjectElementMap';

describe('AXObjectElementMap', function () {
  it('should be a Map', function () {
    expect(AXObjectElementMap instanceof Map).toBe(true);
  });
  describe('content', function () {
    it('should have specific elements', function () {
      expect(Array.from(AXObjectElementMap.entries())).toEqual(
        expect.arrayContaining(
          [
            ["AbbrRole",expect.anything()],
            ["ArticleRole",expect.anything()],
            ["AudioRole",expect.anything()],
            ["BlockquoteRole",expect.anything()],
            ["ButtonRole",expect.anything()],
            ["CanvasRole",expect.anything()],
            ["CaptionRole",expect.anything()],
            ["CellRole",expect.anything()],
            ["CheckBoxRole",expect.anything()],
            ["ColorWellRole",expect.anything()],
            ["ColumnHeaderRole",expect.anything()],
            ["ComboBoxRole",expect.anything()],
            ["DateRole",expect.anything()],
            ["DateTimeRole",expect.anything()],
            ["DefinitionRole",expect.anything()],
            ["DescriptionListDetailRole",expect.anything()],
            ["DescriptionListRole",expect.anything()],
            ["DescriptionListTermRole",expect.anything()],
            ["DetailsRole",expect.anything()],
            ["DialogRole",expect.anything()],
            ["DirectoryRole",expect.anything()],
            ["DisclosureTriangleRole",expect.anything()],
            ["DivRole",expect.anything()],
            ["EmbeddedObjectRole",expect.anything()],
            ["FigcaptionRole",expect.anything()],
            ["FigureRole",expect.anything()],
            ["FooterRole",expect.anything()],
            ["FormRole",expect.anything()],
            ["HeadingRole",expect.anything()],
            ["IframeRole",expect.anything()],
            ["ImageMapRole",expect.anything()],
            ["ImageRole",expect.anything()],
            ["InlineTextBoxRole",expect.anything()],
            ["InputTimeRole",expect.anything()],
            ["LabelRole",expect.anything()],
            ["LegendRole",expect.anything()],
            ["LineBreakRole",expect.anything()],
            ["LinkRole",expect.anything()],
            ["ListBoxOptionRole",expect.anything()],
            ["ListBoxRole",expect.anything()],
            ["ListItemRole",expect.anything()],
            ["ListRole",expect.anything()],
            ["MainRole",expect.anything()],
            ["MarkRole",expect.anything()],
            ["MarqueeRole",expect.anything()],
            ["MenuItemRole",expect.anything()],
            ["MenuRole",expect.anything()],
            ["MeterRole",expect.anything()],
            ["NavigationRole",expect.anything()],
            ["ParagraphRole",expect.anything()],
            ["PreRole",expect.anything()],
            ["ProgressIndicatorRole",expect.anything()],
            ["RadioButtonRole",expect.anything()],
            ["RowHeaderRole",expect.anything()],
            ["RowRole",expect.anything()],
            ["RubyRole",expect.anything()],
            ["SearchBoxRole",expect.anything()],
            ["SliderRole",expect.anything()],
            ["SpinButtonRole",expect.anything()],
            ["SwitchRole",expect.anything()],
            ["TableRole",expect.anything()],
            ["TextFieldRole",expect.anything()],
            ["TimeRole",expect.anything()],
            ["VideoRole",expect.anything()],
          ]
        )
      );
    });
  });
});
