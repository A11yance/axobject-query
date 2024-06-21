import test from 'tape';
import deepEqual from 'deep-equal-json';
import inspect from 'object-inspect';

import AXObjectRoleMap from '../../src/AXObjectRoleMap';

const entriesList = [
  ["AlertDialogRole", [{"name": "alertdialog"}]],
  ["AlertRole", [{"name": "alert"}]],
  ["ApplicationRole", [{"name": "application"}]],
  ["ArticleRole", [{"name": "article"}]],
  ["BannerRole", [{"name": "banner"}]],
  ["BusyIndicatorRole", [{"attributes": [{"name": "aria-busy", "value": "true"}]}]],
  ["ButtonRole", [{"name": "button"}]],
  ["CellRole", [{"name": "cell"}, {"name": "gridcell"}]],
  ["CheckBoxRole", [{"name": "checkbox"}]],
  ["ColumnHeaderRole", [{"name": "columnheader"}]],
  ["ComboBoxRole", [{"name": "combobox"}]],
  ["ComplementaryRole", [{"name": "complementary"}]],
  ["ContentInfoRole", [{"name": "structureinfo"}]],
  ["DialogRole", [{"name": "dialog"}]],
  ["DirectoryRole", [{"name": "directory"}]],
  ["DocumentRole", [{"name": "document"}]],
  ["FeedRole", [{"name": "feed"}]],
  ["FigureRole", [{"name": "figure"}]],
  ["FormRole", [{"name": "form"}]],
  ["GridRole", [{"name": "grid"}]],
  ["GroupRole", [{"name": "group"}]],
  ["HeadingRole", [{"name": "heading"}]],
  ["ImageRole", [{"name": "img"}]],
  ["LinkRole", [{"name": "link"}]],
  ["ListBoxOptionRole", [{"name": "option"}]],
  ["ListBoxRole", [{"name": "listbox"}]],
  ["ListItemRole", [{"name": "listitem"}]],
  ["ListRole", [{"name": "list"}]],
  ["LogRole", [{"name": "log"}]],
  ["MainRole", [{"name": "main"}]],
  ["MarqueeRole", [{"name": "marquee"}]],
  ["MathRole", [{"name": "math"}]],
  ["MenuBarRole", [{"name": "menubar"}]],
  ["MenuItemRole", [{"name": "menuitem"}]],
  ["MenuItemCheckBoxRole", [{"name": "menuitemcheckbox"}]],
  ["MenuItemRadioRole", [{"name": "menuitemradio"}]],
  ["MenuRole", [{"name": "menu"}]],
  ["NavigationRole", [{"name": "navigation"}]],
  ["NoneRole", [{"name": "none"}]],
  ["NoteRole", [{"name": "note"}]],
  ["PresentationalRole", [{"name": "presentation"}]],
  ["ProgressIndicatorRole", [{"name": "progressbar"}]],
  ["RadioButtonRole", [{"name": "radio"}]],
  ["RadioGroupRole", [{"name": "radiogroup"}]],
  ["RegionRole", [{"name": "region"}]],
  ["RowHeaderRole", [{"name": "rowheader"}]],
  ["RowRole", [{"name": "row"}]],
  ["ScrollBarRole", [{"name": "scrollbar"}]],
  ["SearchRole", [{"name": "search"}]],
  ["SearchBoxRole", [{"name": "searchbox"}]],
  ["SliderRole", [{"name": "slider"}]],
  ["SpinButtonRole", [{"name": "spinbutton"}]],
  ["SplitterRole", [{"name": "separator"}]],
  ["StatusRole", [{"name": "status"}]],
  ["SwitchRole", [{"name": "switch"}]],
  ["TabGroupRole", [{"name": "tablist"}]],
  ["TabRole", [{"name": "tab"}]],
  ["TableRole", [{"name": "table"}]],
  ["TabListRole", [{"name": "tablist"}]],
  ["TabPanelRole", [{"name": "tabpanel"}]],
  ["TermRole", [{"name": "term"}]],
  ["TextAreaRole", [{"attributes": [{"name": "aria-multiline", "value": "true"}], "name": "textbox"}]],
  ["TextFieldRole", [{"name": "textbox"}]],
  ["TimerRole", [{"name": "timer"}]],
  ["ToggleButtonRole", [{"attributes": [{"name": "aria-pressed"}]}]],
  ["ToolbarRole", [{"name": "toolbar"}]],
  ["TreeRole", [{"name": "tree"}]],
  ["TreeGridRole", [{"name": "treegrid"}]],
  ["TreeItemRole", [{"name": "treeitem"}]],
  ["UserInterfaceTooltipRole", [{"name": "tooltip"}]],
];

test('AXObjectRoleMap', async (t) => {
  t.test('iteration', async (st) => {
    st.notEqual(AXObjectRoleMap[Symbol.iterator], undefined, 'has an iterator defined');
    st.equal([...AXObjectRoleMap].length, 70, 'has a specific length');

    st.test('supports the spread operator', async (s2t) => {
      [...AXObjectRoleMap].forEach(([role, elements]) => {
        const found = entriesList.find(([r]) => r === role);

        s2t.deepEqual(found, [role, elements], `spread has role: ${role}`);
      });
    });

    st.test('supports the for..of pattern', async (s2t) => {
      const output = [];
      for (const [key, value] of AXObjectRoleMap) {
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
      for (const [role, elements] of AXObjectRoleMap.entries()) {
        const found = entriesList.find(([r]) => r === role);

        s2t.deepEqual(found, [role, elements], `for-of has role: ${role}`);
      }


      [...AXObjectRoleMap.entries()].forEach(([role, elements]) => {
        const found = entriesList.find(([r]) => r === role);

        s2t.deepEqual(found, [role, elements], `spread has role: ${role}`);
      });
    });

    st.test('forEach()', async (s2t) => {
      const output = [];
      let context;
      AXObjectRoleMap.forEach((value, key, map) => {
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
      s2t.deepEqual(AXObjectRoleMap.get("AlertDialogRole"), [{"name": "alertdialog"}]);
      s2t.deepEqual(AXObjectRoleMap.get("AlertRole"), [{"name": "alert"}]);
      s2t.deepEqual(AXObjectRoleMap.get("ApplicationRole"), [{"name": "application"}]);
      s2t.deepEqual(AXObjectRoleMap.get("ArticleRole"), [{"name": "article"}]);
      s2t.deepEqual(AXObjectRoleMap.get("BannerRole"), [{"name": "banner"}]);
      s2t.deepEqual(AXObjectRoleMap.get("BusyIndicatorRole"), [{"attributes": [{"name": "aria-busy", "value": "true"}]}]);
      s2t.deepEqual(AXObjectRoleMap.get("ButtonRole"), [{"name": "button"}]);
      s2t.deepEqual(AXObjectRoleMap.get("CellRole"), [{"name": "cell"}, {"name": "gridcell"}]);
      s2t.deepEqual(AXObjectRoleMap.get("CheckBoxRole"), [{"name": "checkbox"}]);
      s2t.deepEqual(AXObjectRoleMap.get("ColumnHeaderRole"), [{"name": "columnheader"}]);
      s2t.deepEqual(AXObjectRoleMap.get("ComboBoxRole"), [{"name": "combobox"}]);
      s2t.deepEqual(AXObjectRoleMap.get("ComplementaryRole"), [{"name": "complementary"}]);
      s2t.deepEqual(AXObjectRoleMap.get("ContentInfoRole"), [{"name": "structureinfo"}]);
      s2t.deepEqual(AXObjectRoleMap.get("DialogRole"), [{"name": "dialog"}]);
      s2t.deepEqual(AXObjectRoleMap.get("DirectoryRole"), [{"name": "directory"}]);
      s2t.deepEqual(AXObjectRoleMap.get("DocumentRole"), [{"name": "document"}]);
      s2t.deepEqual(AXObjectRoleMap.get("FeedRole"), [{"name": "feed"}]);
      s2t.deepEqual(AXObjectRoleMap.get("FigureRole"), [{"name": "figure"}]);
      s2t.deepEqual(AXObjectRoleMap.get("FormRole"), [{"name": "form"}]);
      s2t.deepEqual(AXObjectRoleMap.get("GridRole"), [{"name": "grid"}]);
      s2t.deepEqual(AXObjectRoleMap.get("GroupRole"), [{"name": "group"}]);
      s2t.deepEqual(AXObjectRoleMap.get("HeadingRole"), [{"name": "heading"}]);
      s2t.deepEqual(AXObjectRoleMap.get("ImageRole"), [{"name": "img"}]);
      s2t.deepEqual(AXObjectRoleMap.get("LinkRole"), [{"name": "link"}]);
      s2t.deepEqual(AXObjectRoleMap.get("ListBoxOptionRole"), [{"name": "option"}]);
      s2t.deepEqual(AXObjectRoleMap.get("ListBoxRole"), [{"name": "listbox"}]);
      s2t.deepEqual(AXObjectRoleMap.get("ListItemRole"), [{"name": "listitem"}]);
      s2t.deepEqual(AXObjectRoleMap.get("ListRole"), [{"name": "list"}]);
      s2t.deepEqual(AXObjectRoleMap.get("LogRole"), [{"name": "log"}]);
      s2t.deepEqual(AXObjectRoleMap.get("MainRole"), [{"name": "main"}]);
      s2t.deepEqual(AXObjectRoleMap.get("MarqueeRole"), [{"name": "marquee"}]);
      s2t.deepEqual(AXObjectRoleMap.get("MathRole"), [{"name": "math"}]);
      s2t.deepEqual(AXObjectRoleMap.get("MenuBarRole"), [{"name": "menubar"}]);
      s2t.deepEqual(AXObjectRoleMap.get("MenuItemRole"), [{"name": "menuitem"}]);
      s2t.deepEqual(AXObjectRoleMap.get("MenuItemCheckBoxRole"), [{"name": "menuitemcheckbox"}]);
      s2t.deepEqual(AXObjectRoleMap.get("MenuItemRadioRole"), [{"name": "menuitemradio"}]);
      s2t.deepEqual(AXObjectRoleMap.get("MenuRole"), [{"name": "menu"}]);
      s2t.deepEqual(AXObjectRoleMap.get("NavigationRole"), [{"name": "navigation"}]);
      s2t.deepEqual(AXObjectRoleMap.get("NoneRole"), [{"name": "none"}]);
      s2t.deepEqual(AXObjectRoleMap.get("NoteRole"), [{"name": "note"}]);
      s2t.deepEqual(AXObjectRoleMap.get("PresentationalRole"), [{"name": "presentation"}]);
      s2t.deepEqual(AXObjectRoleMap.get("ProgressIndicatorRole"), [{"name": "progressbar"}]);
      s2t.deepEqual(AXObjectRoleMap.get("RadioButtonRole"), [{"name": "radio"}]);
      s2t.deepEqual(AXObjectRoleMap.get("RadioGroupRole"), [{"name": "radiogroup"}]);
      s2t.deepEqual(AXObjectRoleMap.get("RegionRole"), [{"name": "region"}]);
      s2t.deepEqual(AXObjectRoleMap.get("RowHeaderRole"), [{"name": "rowheader"}]);
      s2t.deepEqual(AXObjectRoleMap.get("RowRole"), [{"name": "row"}]);
      s2t.deepEqual(AXObjectRoleMap.get("ScrollBarRole"), [{"name": "scrollbar"}]);
      s2t.deepEqual(AXObjectRoleMap.get("SearchRole"), [{"name": "search"}]);
      s2t.deepEqual(AXObjectRoleMap.get("SearchBoxRole"), [{"name": "searchbox"}]);
      s2t.deepEqual(AXObjectRoleMap.get("SliderRole"), [{"name": "slider"}]);
      s2t.deepEqual(AXObjectRoleMap.get("SpinButtonRole"), [{"name": "spinbutton"}]);
      s2t.deepEqual(AXObjectRoleMap.get("SplitterRole"), [{"name": "separator"}]);
      s2t.deepEqual(AXObjectRoleMap.get("StatusRole"), [{"name": "status"}]);
      s2t.deepEqual(AXObjectRoleMap.get("SwitchRole"), [{"name": "switch"}]);
      s2t.deepEqual(AXObjectRoleMap.get("TabGroupRole"), [{"name": "tablist"}]);
      s2t.deepEqual(AXObjectRoleMap.get("TabRole"), [{"name": "tab"}]);
      s2t.deepEqual(AXObjectRoleMap.get("TableRole"), [{"name": "table"}]);
      s2t.deepEqual(AXObjectRoleMap.get("TabListRole"), [{"name": "tablist"}]);
      s2t.deepEqual(AXObjectRoleMap.get("TabPanelRole"), [{"name": "tabpanel"}]);
      s2t.deepEqual(AXObjectRoleMap.get("TermRole"), [{"name": "term"}]);
      s2t.deepEqual(AXObjectRoleMap.get("TextAreaRole"), [{"attributes": [{"name": "aria-multiline", "value": "true"}], "name": "textbox"}]);
      s2t.deepEqual(AXObjectRoleMap.get("TextFieldRole"), [{"name": "textbox"}]);
      s2t.deepEqual(AXObjectRoleMap.get("TimerRole"), [{"name": "timer"}]);
      s2t.deepEqual(AXObjectRoleMap.get("ToggleButtonRole"), [{"attributes": [{"name": "aria-pressed"}]}]);
      s2t.deepEqual(AXObjectRoleMap.get("ToolbarRole"), [{"name": "toolbar"}]);
      s2t.deepEqual(AXObjectRoleMap.get("TreeRole"), [{"name": "tree"}]);
      s2t.deepEqual(AXObjectRoleMap.get("TreeGridRole"), [{"name": "treegrid"}]);
      s2t.deepEqual(AXObjectRoleMap.get("TreeItemRole"), [{"name": "treeitem"}]);
      s2t.deepEqual(AXObjectRoleMap.get("UserInterfaceTooltipRole"), [{"name": "tooltip"}]);
    });

    st.test('has()', (s2t) => {
      s2t.equal(AXObjectRoleMap.has('DialogRole'), true);
      s2t.equal(AXObjectRoleMap.has('DoveRole'), false);

      s2t.end();
    });

    st.test('keys(), iteration', async (s2t) => {
      const entriesKeys = entriesList.map(entry => entry[0]);
      for (const key of AXObjectRoleMap.keys()) {
        s2t.ok(entriesKeys.find((k) => k === key), `for-of has key: ${key}`);
      }

      [...AXObjectRoleMap.keys()].forEach(([key]) => {
          s2t.ok(entriesKeys.find(([k]) => k === key), `spread has key: ${key}`);
      });
    });


    st.test('values(), iteration', async (s2t) => {
      const entriesValues = entriesList.map(([, values]) => values);
      
      for (const values of AXObjectRoleMap.values()) {
        s2t.ok(
          entriesValues.some((vs) => deepEqual(values, vs)),
          `for-of has values: ${inspect(values)}`
        );
      }

      [...AXObjectRoleMap.values()].forEach((values) => {
        s2t.ok(
          entriesValues.some((vs) => deepEqual(values, vs)),
          `spread has values: ${inspect(values)}`
        );
      });
    });
  });
});
