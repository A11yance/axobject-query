import test from 'tape';
import deepEqual from 'deep-equal-json';
import inspect from 'object-inspect';

import AXObjectsMap from '../../src/AXObjectsMap';

const entriesList = [
  ["AbbrRole", {relatedConcepts: [{module: 'HTML',concept: {name: 'abbr',},},],type: 'structure',}],
  ["AlertDialogRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'alertdialog',},},],type: 'window',}],
  ["AlertRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'alert',},},],type: 'structure',}],
  ["AnnotationRole", {relatedConcepts: [],type: 'structure',}],
  ["ApplicationRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'application',},},],type: 'window',}],
  ["ArticleRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'article',},},{module: 'HTML',concept: {name: 'article',},},],type: 'structure',}],
  ["AudioRole", {relatedConcepts: [{module: 'HTML',concept: {name: 'audio',},},],type: 'widget',}],
  ["BannerRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'banner',},},],type: 'structure',}],
  ["BlockquoteRole", {relatedConcepts: [{module: 'HTML',concept: {name: 'blockquote',},},],type: 'structure',}],
  ["BusyIndicatorRole", {relatedConcepts: [{module: 'ARIA',concept: {attributes: [{name: 'aria-busy',value: 'true',},],},},],type: 'widget',}],
  ["ButtonRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'button',},},{module: 'HTML',concept: {name: 'button',},},],type: 'widget',}],
  ["CanvasRole", {relatedConcepts: [{module: 'HTML',concept: {name: 'canvas',},},],type: 'widget',}],
  ["CaptionRole", {relatedConcepts: [{module: 'HTML',concept: {name: 'caption',},},],type: 'structure',}],
  ["CellRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'cell',},},{module: 'ARIA',concept: {name: 'gridcell',},},{module: 'HTML',concept: {name: 'td',},},],type: 'widget',}],
  ["CheckBoxRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'checkbox',},},{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'checkbox',},],},},],type: 'widget',}],
  ["ColorWellRole", {relatedConcepts: [{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'color',},],},},],type: 'widget',}],
  ["ColumnHeaderRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'columnheader',},},{module: 'HTML',concept: {name: 'th',},},],type: 'widget',}],
  ["ColumnRole", {relatedConcepts: [],type: 'structure',}],
  ["ComboBoxRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'combobox',},},{module: 'HTML',concept: {name: 'select',},},],type: 'widget',}],
  ["ComplementaryRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'complementary',},},],type: 'structure',}],
  ["ContentInfoRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'structureinfo',},},],type: 'structure',}],
  ["DateRole", {relatedConcepts: [{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'date',},],},},],type: 'widget',}],
  ["DateTimeRole", {relatedConcepts: [{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'datetime',},],},},],type: 'widget',}],
  ["DefinitionRole", {relatedConcepts: [{module: 'HTML',concept: {name: 'dfn',},},],type: 'structure',}],
  ["DescriptionListDetailRole", {relatedConcepts: [{module: 'HTML',concept: {name: 'dd',},},],type: 'structure',}],
  ["DescriptionListRole", {relatedConcepts: [{module: 'HTML',concept: {name: 'dl',},},],type: 'structure',}],
  ["DescriptionListTermRole", {relatedConcepts: [{module: 'HTML',concept: {name: 'dt',},},],type: 'structure',}],
  ["DetailsRole", {relatedConcepts: [{module: 'HTML',concept: {name: 'details',},},],type: 'structure',}],
  ["DialogRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'dialog',},},{module: 'HTML',concept: {name: 'dialog',},},],type: 'window',}],
  ["DirectoryRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'directory',},},{module: 'HTML',concept: {name: 'dir',},},],type: 'structure',}],
  ["DisclosureTriangleRole", {relatedConcepts: [{module: 'HTML',concept: {attributes: [{name: 'open',value: 'open',},],constraints: ['scoped to a details element',],name: 'summary',},},{module: 'HTML',concept: {attributes: [{name: 'aria-expanded',},],constraints: ['scoped to a details element',],name: 'summary',},},],type: 'widget',}],
  ["DivRole", {relatedConcepts: [{module: 'HTML',concept: {name: 'div',},},],type: 'generic',}],
  ["DocumentRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'document',},},],type: 'structure',}],
  ["EmbeddedObjectRole", {relatedConcepts: [{module: 'HTML',concept: {name: 'embed',},},],type: 'widget',}],
  ["FeedRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'feed',},},],type: 'structure',}],
  ["FigcaptionRole", {relatedConcepts: [{module: 'HTML',concept: {name: 'figcaption',},},],type: 'structure',}],
  ["FigureRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'figure',},},{module: 'HTML',concept: {name: 'figure',},},],type: 'structure',}],
  ["FooterRole", {relatedConcepts: [{module: 'HTML',concept: {name: 'footer',},},],type: 'structure',}],
  ["FormRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'form',},},{module: 'HTML',concept: {name: 'form',},},],type: 'structure',}],
  ["GridRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'grid',},},],type: 'widget',}],
  ["GroupRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'group',},},],type: 'structure',}],
  ["HeadingRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'heading',},},{module: 'HTML',concept: {name: 'h1',},},{module: 'HTML',concept: {name: 'h2',},},{module: 'HTML',concept: {name: 'h3',},},{module: 'HTML',concept: {name: 'h4',},},{module: 'HTML',concept: {name: 'h5',},},{module: 'HTML',concept: {name: 'h6',},},],type: 'structure',}],
  ["IframePresentationalRole", {relatedConcepts: [],type: 'window',}],
  ["IframeRole", {relatedConcepts: [{module: 'HTML',concept: {name: 'iframe',},},],type: 'window',}],
  ["IgnoredRole", {relatedConcepts: [],type: 'structure',}],
  ["ImageMapLinkRole", {relatedConcepts: [],type: 'widget',}],
  ["ImageMapRole", {relatedConcepts: [{module: 'HTML',concept: {name: 'img',attributes: [{name: 'usemap',},],},},],type: 'structure',}],
  ["ImageRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'img',},},{module: 'HTML',concept: {name: 'img',},},],type: 'structure',}],
  ["InlineTextBoxRole", {relatedConcepts: [{module: 'HTML',concept: {name: 'input',},},],type: 'widget',}],
  ["InputTimeRole", {relatedConcepts: [{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'time',},],},},],type: 'widget',}],
  ["LabelRole", {relatedConcepts: [{module: 'HTML',concept: {name: 'label',},},],type: 'structure',}],
  ["LegendRole", {relatedConcepts: [{module: 'HTML',concept: {name: 'legend',},},],type: 'structure',}],
  ["LineBreakRole", {relatedConcepts: [{module: 'HTML',concept: {name: 'br',},},],type: 'structure',}],
  ["LinkRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'link',},},{module: 'HTML',concept: {name: 'a',attributes: [{name: 'href',},],},},],type: 'widget',}],
  ["ListBoxOptionRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'option',},},{module: 'HTML',concept: {name: 'option',},},],type: 'widget',}],
  ["ListBoxRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'listbox',},},{module: 'HTML',concept: {name: 'datalist',},},{module: 'HTML',concept: {name: 'select',},},],type: 'widget',}],
  ["ListItemRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'listitem',},},{module: 'HTML',concept: {name: 'li',},},],type: 'structure',}],
  ["ListMarkerRole", {relatedConcepts: [],type: 'structure',}],
  ["ListRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'list',},},{module: 'HTML',concept: {name: 'ul',},},{module: 'HTML',concept: {name: 'ol',},},],type: 'structure',}],
  ["LogRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'log',},},],type: 'structure',}],
  ["MainRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'main',},},{module: 'HTML',concept: {name: 'main',},},],type: 'structure',}],
  ["MarkRole", {relatedConcepts: [{module: 'HTML',concept: {name: 'mark',},},],type: 'structure',}],
  ["MarqueeRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'marquee',},},{module: 'HTML',concept: {name: 'marquee',},},],type: 'structure',}],
  ["MathRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'math',},},],type: 'structure',}],
  ["MenuBarRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'menubar',},},],type: 'structure',}],
  ["MenuButtonRole", {relatedConcepts: [],type: 'widget',}],
  ["MenuItemRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'menuitem',},},{module: 'HTML',concept: {name: 'menuitem',},},],type: 'widget',}],
  ["MenuItemCheckBoxRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'menuitemcheckbox',},},],type: 'widget',}],
  ["MenuItemRadioRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'menuitemradio',},},],type: 'widget',}],
  ["MenuListOptionRole", {relatedConcepts: [],type: 'widget',}],
  ["MenuListPopupRole", {relatedConcepts: [],type: 'widget',}],
  ["MenuRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'menu',},},{module: 'HTML',concept: {name: 'menu',},},],type: 'structure',}],
  ["MeterRole", {relatedConcepts: [{module: 'HTML',concept: {name: 'meter',},},],type: 'structure',}],
  ["NavigationRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'navigation',},},{module: 'HTML',concept: {name: 'nav',},},],type: 'structure',}],
  ["NoneRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'none',},},],type: 'structure',}],
  ["NoteRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'note',},},],type: 'structure',}],
  ["OutlineRole", {relatedConcepts: [],type: 'structure',}],
  ["ParagraphRole", {relatedConcepts: [{module: 'HTML',concept: {name: 'p',},},],type: 'structure',}],
  ["PopUpButtonRole", {relatedConcepts: [],type: 'widget',}],
  ["PreRole", {relatedConcepts: [{module: 'HTML',concept: {name: 'pre',},},],type: 'structure',}],
  ["PresentationalRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'presentation',},},],type: 'structure',}],
  ["ProgressIndicatorRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'progressbar',},},{module: 'HTML',concept: {name: 'progress',},},],type: 'structure',}],
  ["RadioButtonRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'radio',},},{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'radio',},],},},],type: 'widget',}],
  ["RadioGroupRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'radiogroup',},},],type: 'structure',}],
  ["RegionRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'region',},},],type: 'structure',}],
  ["RootWebAreaRole", {relatedConcepts: [],type: 'structure',}],
  ["RowHeaderRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'rowheader',},},{module: 'HTML',concept: {name: 'th',attributes: [{name: 'scope',value: 'row',},],},},],type: 'widget',}],
  ["RowRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'row',},},{module: 'HTML',concept: {name: 'tr',},},],type: 'structure',}],
  ["RubyRole", {relatedConcepts: [{module: 'HTML',concept: {name: 'ruby',},},],type: 'structure',}],
  ["RulerRole", {relatedConcepts: [],type: 'structure',}],
  ["ScrollAreaRole", {relatedConcepts: [],type: 'structure',}],
  ["ScrollBarRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'scrollbar',},},],type: 'widget',}],
  ["SeamlessWebAreaRole", {relatedConcepts: [],type: 'structure',}],
  ["SearchRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'search',},},],type: 'structure',}],
  ["SearchBoxRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'searchbox',},},{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'search',},],},},],type: 'widget',}],
  ["SliderRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'slider',},},{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'range',},],},},],type: 'widget',}],
  ["SliderThumbRole", {relatedConcepts: [],type: 'structure',}],
  ["SpinButtonRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'spinbutton',},},{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'number',},],},},],type: 'widget',}],
  ["SpinButtonPartRole", {relatedConcepts: [],type: 'structure',}],
  ["SplitterRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'separator',},},],type: 'widget',}],
  ["StaticTextRole", {relatedConcepts: [],type: 'structure',}],
  ["StatusRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'status',},},],type: 'structure',}],
  ["SVGRootRole", {relatedConcepts: [],type: 'structure',}],
  ["SwitchRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'switch',},},{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'checkbox',},],},},],type: 'widget',}],
  ["TabGroupRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'tablist',},},],type: 'structure',}],
  ["TabRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'tab',},},],type: 'widget',}],
  ["TableHeaderContainerRole", {relatedConcepts: [],type: 'structure',}],
  ["TableRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'table',},},{module: 'HTML',concept: {name: 'table',},},],type: 'structure',}],
  ["TabListRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'tablist',},},],type: 'structure',}],
  ["TabPanelRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'tabpanel',},},],type: 'structure',}],
  ["TermRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'term',},},],type: 'structure',}],
  ["TextAreaRole", {relatedConcepts: [{module: 'ARIA',concept: {attributes: [{name: 'aria-multiline',value: 'true',},],name: 'textbox',},},{module: 'HTML',concept: {name: 'textarea',},},],type: 'widget',}],
  ["TextFieldRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'textbox',},},{module: 'HTML',concept: {name: 'input',},},{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'text',},],},},],type: 'widget',}],
  ["TimeRole", {relatedConcepts: [{module: 'HTML',concept: {name: 'time',},},],type: 'structure',}],
  ["TimerRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'timer',},},],type: 'structure',}],
  ["ToggleButtonRole", {relatedConcepts: [{module: 'ARIA',concept: {attributes: [{name: 'aria-pressed',},],},},],type: 'widget',}],
  ["ToolbarRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'toolbar',},},],type: 'structure',}],
  ["TreeRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'tree',},},],type: 'widget',}],
  ["TreeGridRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'treegrid',},},],type: 'widget',}],
  ["TreeItemRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'treeitem',},},],type: 'widget',}],
  ["UserInterfaceTooltipRole", {relatedConcepts: [{module: 'ARIA',concept: {name: 'tooltip',},},],type: 'structure',}],
  ["VideoRole", {relatedConcepts: [{module: 'HTML',concept: {name: 'video',},},],type: 'widget',}],
  ["WebAreaRole", {relatedConcepts: [],type: 'structure',}],
  ["WindowRole", {relatedConcepts: [],type: 'window',}],
];

test('AXObjectsMap', async (t) => {
  t.test('iteration', (st) => {
    st.notEqual(AXObjectsMap[Symbol.iterator], undefined, 'has an iterator defined');
    st.equal([...AXObjectsMap].length, 124, 'has a specific length');

    st.test('supports the spread operator', async (s2t) => {
      [...AXObjectsMap].forEach(([role, elements]) => {
        const found = entriesList.find(([r]) => r === role);

        s2t.deepEqual(found, [role, elements], `spread has role: ${role}`);
      });
    });

    st.test('supports the for..of pattern', async (s2t) => {
      const output = [];
      for (const [key, value] of AXObjectsMap) {
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
      for (const [role, elements] of AXObjectsMap.entries()) {
        const found = entriesList.find(([r]) => r === role);

        s2t.deepEqual(found, [role, elements], `for-of has role: ${role}`);
      }


      [...AXObjectsMap.entries()].forEach(([role, elements]) => {
        const found = entriesList.find(([r]) => r === role);

        s2t.deepEqual(found, [role, elements], `spread has role: ${role}`);
      });
    });

    st.test('forEach()', async (s2t) => {
      const output = [];
      let context;
      AXObjectsMap.forEach((value, key, map) => {
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
      s2t.deepEqual(AXObjectsMap.get("AbbrRole"), {relatedConcepts: [{module: 'HTML',concept: {name: 'abbr',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("AlertDialogRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'alertdialog',},},],type: 'window',});
      s2t.deepEqual(AXObjectsMap.get("AlertRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'alert',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("AnnotationRole"), {relatedConcepts: [],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("ApplicationRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'application',},},],type: 'window',});
      s2t.deepEqual(AXObjectsMap.get("ArticleRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'article',},},{module: 'HTML',concept: {name: 'article',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("AudioRole"), {relatedConcepts: [{module: 'HTML',concept: {name: 'audio',},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("BannerRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'banner',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("BlockquoteRole"), {relatedConcepts: [{module: 'HTML',concept: {name: 'blockquote',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("BusyIndicatorRole"), {relatedConcepts: [{module: 'ARIA',concept: {attributes: [{name: 'aria-busy',value: 'true',},],},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("ButtonRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'button',},},{module: 'HTML',concept: {name: 'button',},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("CanvasRole"), {relatedConcepts: [{module: 'HTML',concept: {name: 'canvas',},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("CaptionRole"), {relatedConcepts: [{module: 'HTML',concept: {name: 'caption',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("CellRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'cell',},},{module: 'ARIA',concept: {name: 'gridcell',},},{module: 'HTML',concept: {name: 'td',},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("CheckBoxRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'checkbox',},},{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'checkbox',},],},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("ColorWellRole"), {relatedConcepts: [{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'color',},],},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("ColumnHeaderRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'columnheader',},},{module: 'HTML',concept: {name: 'th',},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("ColumnRole"), {relatedConcepts: [],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("ComboBoxRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'combobox',},},{module: 'HTML',concept: {name: 'select',},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("ComplementaryRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'complementary',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("ContentInfoRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'structureinfo',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("DateRole"), {relatedConcepts: [{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'date',},],},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("DateTimeRole"), {relatedConcepts: [{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'datetime',},],},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("DefinitionRole"), {relatedConcepts: [{module: 'HTML',concept: {name: 'dfn',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("DescriptionListDetailRole"), {relatedConcepts: [{module: 'HTML',concept: {name: 'dd',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("DescriptionListRole"), {relatedConcepts: [{module: 'HTML',concept: {name: 'dl',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("DescriptionListTermRole"), {relatedConcepts: [{module: 'HTML',concept: {name: 'dt',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("DetailsRole"), {relatedConcepts: [{module: 'HTML',concept: {name: 'details',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("DialogRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'dialog',},},{module: 'HTML',concept: {name: 'dialog',},},],type: 'window',});
      s2t.deepEqual(AXObjectsMap.get("DirectoryRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'directory',},},{module: 'HTML',concept: {name: 'dir',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("DisclosureTriangleRole"), {relatedConcepts: [{module: 'HTML',concept: {attributes: [{name: 'open',value: 'open',},],constraints: ['scoped to a details element',],name: 'summary',},},{module: 'HTML',concept: {attributes: [{name: 'aria-expanded',},],constraints: ['scoped to a details element',],name: 'summary',},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("DivRole"), {relatedConcepts: [{module: 'HTML',concept: {name: 'div',},},],type: 'generic',});
      s2t.deepEqual(AXObjectsMap.get("DocumentRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'document',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("EmbeddedObjectRole"), {relatedConcepts: [{module: 'HTML',concept: {name: 'embed',},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("FeedRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'feed',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("FigcaptionRole"), {relatedConcepts: [{module: 'HTML',concept: {name: 'figcaption',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("FigureRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'figure',},},{module: 'HTML',concept: {name: 'figure',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("FooterRole"), {relatedConcepts: [{module: 'HTML',concept: {name: 'footer',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("FormRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'form',},},{module: 'HTML',concept: {name: 'form',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("GridRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'grid',},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("GroupRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'group',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("HeadingRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'heading',},},{module: 'HTML',concept: {name: 'h1',},},{module: 'HTML',concept: {name: 'h2',},},{module: 'HTML',concept: {name: 'h3',},},{module: 'HTML',concept: {name: 'h4',},},{module: 'HTML',concept: {name: 'h5',},},{module: 'HTML',concept: {name: 'h6',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("IframePresentationalRole"), {relatedConcepts: [],type: 'window',});
      s2t.deepEqual(AXObjectsMap.get("IframeRole"), {relatedConcepts: [{module: 'HTML',concept: {name: 'iframe',},},],type: 'window',});
      s2t.deepEqual(AXObjectsMap.get("IgnoredRole"), {relatedConcepts: [],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("ImageMapLinkRole"), {relatedConcepts: [],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("ImageMapRole"), {relatedConcepts: [{module: 'HTML',concept: {name: 'img',attributes: [{name: 'usemap',},],},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("ImageRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'img',},},{module: 'HTML',concept: {name: 'img',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("InlineTextBoxRole"), {relatedConcepts: [{module: 'HTML',concept: {name: 'input',},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("InputTimeRole"), {relatedConcepts: [{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'time',},],},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("LabelRole"), {relatedConcepts: [{module: 'HTML',concept: {name: 'label',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("LegendRole"), {relatedConcepts: [{module: 'HTML',concept: {name: 'legend',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("LineBreakRole"), {relatedConcepts: [{module: 'HTML',concept: {name: 'br',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("LinkRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'link',},},{module: 'HTML',concept: {name: 'a',attributes: [{name: 'href',},],},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("ListBoxOptionRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'option',},},{module: 'HTML',concept: {name: 'option',},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("ListBoxRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'listbox',},},{module: 'HTML',concept: {name: 'datalist',},},{module: 'HTML',concept: {name: 'select',},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("ListItemRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'listitem',},},{module: 'HTML',concept: {name: 'li',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("ListMarkerRole"), {relatedConcepts: [],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("ListRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'list',},},{module: 'HTML',concept: {name: 'ul',},},{module: 'HTML',concept: {name: 'ol',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("LogRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'log',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("MainRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'main',},},{module: 'HTML',concept: {name: 'main',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("MarkRole"), {relatedConcepts: [{module: 'HTML',concept: {name: 'mark',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("MarqueeRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'marquee',},},{module: 'HTML',concept: {name: 'marquee',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("MathRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'math',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("MenuBarRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'menubar',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("MenuButtonRole"), {relatedConcepts: [],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("MenuItemRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'menuitem',},},{module: 'HTML',concept: {name: 'menuitem',},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("MenuItemCheckBoxRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'menuitemcheckbox',},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("MenuItemRadioRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'menuitemradio',},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("MenuListOptionRole"), {relatedConcepts: [],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("MenuListPopupRole"), {relatedConcepts: [],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("MenuRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'menu',},},{module: 'HTML',concept: {name: 'menu',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("MeterRole"), {relatedConcepts: [{module: 'HTML',concept: {name: 'meter',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("NavigationRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'navigation',},},{module: 'HTML',concept: {name: 'nav',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("NoneRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'none',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("NoteRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'note',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("OutlineRole"), {relatedConcepts: [],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("ParagraphRole"), {relatedConcepts: [{module: 'HTML',concept: {name: 'p',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("PopUpButtonRole"), {relatedConcepts: [],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("PreRole"), {relatedConcepts: [{module: 'HTML',concept: {name: 'pre',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("PresentationalRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'presentation',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("ProgressIndicatorRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'progressbar',},},{module: 'HTML',concept: {name: 'progress',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("RadioButtonRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'radio',},},{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'radio',},],},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("RadioGroupRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'radiogroup',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("RegionRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'region',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("RootWebAreaRole"), {relatedConcepts: [],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("RowHeaderRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'rowheader',},},{module: 'HTML',concept: {name: 'th',attributes: [{name: 'scope',value: 'row',},],},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("RowRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'row',},},{module: 'HTML',concept: {name: 'tr',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("RubyRole"), {relatedConcepts: [{module: 'HTML',concept: {name: 'ruby',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("RulerRole"), {relatedConcepts: [],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("ScrollAreaRole"), {relatedConcepts: [],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("ScrollBarRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'scrollbar',},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("SeamlessWebAreaRole"), {relatedConcepts: [],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("SearchRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'search',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("SearchBoxRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'searchbox',},},{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'search',},],},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("SliderRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'slider',},},{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'range',},],},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("SliderThumbRole"), {relatedConcepts: [],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("SpinButtonRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'spinbutton',},},{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'number',},],},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("SpinButtonPartRole"), {relatedConcepts: [],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("SplitterRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'separator',},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("StaticTextRole"), {relatedConcepts: [],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("StatusRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'status',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("SVGRootRole"), {relatedConcepts: [],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("SwitchRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'switch',},},{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'checkbox',},],},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("TabGroupRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'tablist',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("TabRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'tab',},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("TableHeaderContainerRole"), {relatedConcepts: [],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("TableRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'table',},},{module: 'HTML',concept: {name: 'table',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("TabListRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'tablist',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("TabPanelRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'tabpanel',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("TermRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'term',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("TextFieldRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'textbox',},},{module: 'HTML',concept: {name: 'input',},},{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'text',},],},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("TimeRole"), {relatedConcepts: [{module: 'HTML',concept: {name: 'time',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("TimerRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'timer',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("ToggleButtonRole"), {relatedConcepts: [{module: 'ARIA',concept: {attributes: [{name: 'aria-pressed',},],},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("ToolbarRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'toolbar',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("TreeRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'tree',},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("TreeGridRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'treegrid',},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("TreeItemRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'treeitem',},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("UserInterfaceTooltipRole"), {relatedConcepts: [{module: 'ARIA',concept: {name: 'tooltip',},},],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("VideoRole"), {relatedConcepts: [{module: 'HTML',concept: {name: 'video',},},],type: 'widget',});
      s2t.deepEqual(AXObjectsMap.get("WebAreaRole"), {relatedConcepts: [],type: 'structure',});
      s2t.deepEqual(AXObjectsMap.get("WindowRole"), {relatedConcepts: [],type: 'window',});
    });

    st.test('has()', (s2t) => {
      s2t.equal(AXObjectsMap.has('DialogRole'), true);
      s2t.equal(AXObjectsMap.has('DoveRole'), false);

      s2t.end();
    });
    
    st.test('keys(), iteration', async (s2t) => {
      const entriesKeys = entriesList.map(entry => entry[0]);
      for (const key of AXObjectsMap.keys()) {
        s2t.ok(entriesKeys.find((k) => k === key), `for-of has key: ${key}`);
      }

      [...AXObjectsMap.keys()].forEach(([key]) => {
          s2t.ok(entriesKeys.find(([k]) => k === key), `spread has key: ${key}`);
      });
    });


    st.test('values(), iteration', async (s2t) => {
      const entriesValues = entriesList.map(([, values]) => values);
      
      for (const values of AXObjectsMap.values()) {
        s2t.ok(
          entriesValues.some((vs) => deepEqual(values, vs)),
          `for-of has values: ${inspect(values)}`
        );
      }

      [...AXObjectsMap.values()].forEach((values) => {
        s2t.ok(
          entriesValues.some((vs) => deepEqual(values, vs)),
          `spread has values: ${inspect(values)}`
        );
      });
    });
  });
});
