/* eslint-env mocha */
import expect from 'expect';
import AXObjectRoleMap from '../../src/AXObjectRoleMap';

describe('AXObjectRoleMap', function () {
  it('should be a Map', function () {
    expect(AXObjectRoleMap instanceof Map).toBe(true);
  });
  describe('content', function () {
    it('should have specific elements', function () {
      expect(Array.from(AXObjectRoleMap.entries())).toEqual(
        expect.arrayContaining(
          [
            ["AlertDialogRole", expect.anything()],
            ["AlertRole", expect.anything()],
            ["ApplicationRole", expect.anything()],
            ["ArticleRole", expect.anything()],
            ["BannerRole", expect.anything()],
            ["BusyIndicatorRole", expect.anything()],
            ["ButtonRole", expect.anything()],
            ["CellRole", expect.anything()],
            ["CheckBoxRole", expect.anything()],
            ["ColumnHeaderRole", expect.anything()],
            ["ComboBoxRole", expect.anything()],
            ["ComplementaryRole", expect.anything()],
            ["ContentInfoRole", expect.anything()],
            ["DialogRole", expect.anything()],
            ["DirectoryRole", expect.anything()],
            ["DocumentRole", expect.anything()],
            ["FeedRole", expect.anything()],
            ["FigureRole", expect.anything()],
            ["FormRole", expect.anything()],
            ["GridRole", expect.anything()],
            ["GroupRole", expect.anything()],
            ["HeadingRole", expect.anything()],
            ["ImageRole", expect.anything()],
            ["LinkRole", expect.anything()],
            ["ListBoxOptionRole", expect.anything()],
            ["ListBoxRole", expect.anything()],
            ["ListItemRole", expect.anything()],
            ["ListRole", expect.anything()],
            ["LogRole", expect.anything()],
            ["MainRole", expect.anything()],
            ["MarqueeRole", expect.anything()],
            ["MathRole", expect.anything()],
            ["MenuBarRole", expect.anything()],
            ["MenuItemRole", expect.anything()],
            ["MenuItemCheckBoxRole", expect.anything()],
            ["MenuItemRadioRole", expect.anything()],
            ["MenuRole", expect.anything()],
            ["NavigationRole", expect.anything()],
            ["NoneRole", expect.anything()],
            ["NoteRole", expect.anything()],
            ["PresentationalRole", expect.anything()],
            ["ProgressIndicatorRole", expect.anything()],
            ["RadioButtonRole", expect.anything()],
            ["RadioGroupRole", expect.anything()],
            ["RegionRole", expect.anything()],
            ["RowHeaderRole", expect.anything()],
            ["RowRole", expect.anything()],
            ["ScrollBarRole", expect.anything()],
            ["SearchRole", expect.anything()],
            ["SearchBoxRole", expect.anything()],
            ["SliderRole", expect.anything()],
            ["SpinButtonRole", expect.anything()],
            ["SplitterRole", expect.anything()],
            ["StatusRole", expect.anything()],
            ["SwitchRole", expect.anything()],
            ["TabGroupRole", expect.anything()],
            ["TabRole", expect.anything()],
            ["TableRole", expect.anything()],
            ["TabListRole", expect.anything()],
            ["TabPanelRole", expect.anything()],
            ["TermRole", expect.anything()],
            ["TextFieldRole", expect.anything()],
            ["TimerRole", expect.anything()],
            ["ToggleButtonRole", expect.anything()],
            ["ToolbarRole", expect.anything()],
            ["TreeRole", expect.anything()],
            ["TreeGridRole", expect.anything()],
            ["TreeItemRole", expect.anything()],
            ["UserInterfaceTooltipRole", expect.anything()],
          ]
        )
      );
    });
  });
});
