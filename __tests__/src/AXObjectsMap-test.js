/* eslint-env mocha */
import expect from 'expect';
import AXObjectsMap from '../../src/AXObjectsMap';

const entriesList = [
  ["AbbrRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'abbr',},},],type: 'structure',})],
  ["AlertDialogRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'alertdialog',},},],type: 'window',})],
  ["AlertRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'alert',},},],type: 'structure',})],
  ["AnnotationRole", expect.objectContaining({relatedConcepts: [],type: 'structure',})],
  ["ApplicationRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'application',},},],type: 'window',})],
  ["ArticleRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'article',},},{module: 'HTML',concept: {name: 'article',},},],type: 'structure',})],
  ["AudioRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'audio',},},],type: 'widget',})],
  ["BannerRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'banner',},},],type: 'structure',})],
  ["BlockquoteRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'blockquote',},},],type: 'structure',})],
  ["BusyIndicatorRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {attributes: [{name: 'aria-busy',value: 'true',},],},},],type: 'widget',})],
  ["ButtonRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'button',},},{module: 'HTML',concept: {name: 'button',},},],type: 'widget',})],
  ["CanvasRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'canvas',},},],type: 'widget',})],
  ["CaptionRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'caption',},},],type: 'structure',})],
  ["CellRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'cell',},},{module: 'ARIA',concept: {name: 'gridcell',},},{module: 'HTML',concept: {name: 'td',},},],type: 'widget',})],
  ["CheckBoxRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'checkbox',},},{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'checkbox',},],},},],type: 'widget',})],
  ["ColorWellRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'color',},],},},],type: 'widget',})],
  ["ColumnHeaderRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'columnheader',},},{module: 'HTML',concept: {name: 'th',},},],type: 'widget',})],
  ["ColumnRole", expect.objectContaining({relatedConcepts: [],type: 'structure',})],
  ["ComboBoxRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'combobox',},},{module: 'HTML',concept: {name: 'select',},},],type: 'widget',})],
  ["ComplementaryRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'complementary',},},],type: 'structure',})],
  ["ContentInfoRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'structureinfo',},},],type: 'structure',})],
  ["DateRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'date',},],},},],type: 'widget',})],
  ["DateTimeRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'datetime',},],},},],type: 'widget',})],
  ["DefinitionRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'dfn',},},],type: 'structure',})],
  ["DescriptionListDetailRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'dd',},},],type: 'structure',})],
  ["DescriptionListRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'dl',},},],type: 'structure',})],
  ["DescriptionListTermRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'dt',},},],type: 'structure',})],
  ["DetailsRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'details',},},],type: 'structure',})],
  ["DialogRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'dialog',},},{module: 'HTML',concept: {name: 'dialog',},},],type: 'window',})],
  ["DirectoryRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'directory',},},{module: 'HTML',concept: {name: 'dir',},},],type: 'structure',})],
  ["DisclosureTriangleRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {constraints: ['scoped to a details element',],name: 'summary',},},],type: 'widget',})],
  ["DivRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'div',},},],type: 'generic',})],
  ["DocumentRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'document',},},],type: 'structure',})],
  ["EmbeddedObjectRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'embed',},},],type: 'widget',})],
  ["FeedRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'feed',},},],type: 'structure',})],
  ["FigcaptionRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'figcaption',},},],type: 'structure',})],
  ["FigureRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'figure',},},{module: 'HTML',concept: {name: 'figure',},},],type: 'structure',})],
  ["FooterRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'footer',},},],type: 'structure',})],
  ["FormRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'form',},},{module: 'HTML',concept: {name: 'form',},},],type: 'structure',})],
  ["GridRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'grid',},},],type: 'widget',})],
  ["GroupRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'group',},},],type: 'structure',})],
  ["HeadingRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'heading',},},{module: 'HTML',concept: {name: 'h1',},},{module: 'HTML',concept: {name: 'h2',},},{module: 'HTML',concept: {name: 'h3',},},{module: 'HTML',concept: {name: 'h4',},},{module: 'HTML',concept: {name: 'h5',},},{module: 'HTML',concept: {name: 'h6',},},],type: 'structure',})],
  ["IframePresentationalRole", expect.objectContaining({relatedConcepts: [],type: 'window',})],
  ["IframeRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'iframe',},},],type: 'window',})],
  ["IgnoredRole", expect.objectContaining({relatedConcepts: [],type: 'structure',})],
  ["ImageMapLinkRole", expect.objectContaining({relatedConcepts: [],type: 'widget',})],
  ["ImageMapRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'img',attributes: [{name: 'usemap',},],},},],type: 'structure',})],
  ["ImageRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'img',},},{module: 'HTML',concept: {name: 'img',},},],type: 'structure',})],
  ["InlineTextBoxRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'input',},},],type: 'widget',})],
  ["InputTimeRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'time',},],},},],type: 'widget',})],
  ["LabelRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'label',},},],type: 'structure',})],
  ["LegendRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'legend',},},],type: 'structure',})],
  ["LineBreakRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'br',},},],type: 'structure',})],
  ["LinkRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'link',},},{module: 'HTML',concept: {name: 'a',attributes: [{name: 'href',},],},},],type: 'widget',})],
  ["ListBoxOptionRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'option',},},{module: 'HTML',concept: {name: 'option',},},],type: 'widget',})],
  ["ListBoxRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'listbox',},},{module: 'HTML',concept: {name: 'datalist',},},{module: 'HTML',concept: {name: 'select',},},],type: 'widget',})],
  ["ListItemRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'listitem',},},{module: 'HTML',concept: {name: 'li',},},],type: 'structure',})],
  ["ListMarkerRole", expect.objectContaining({relatedConcepts: [],type: 'structure',})],
  ["ListRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'list',},},{module: 'HTML',concept: {name: 'ul',},},{module: 'HTML',concept: {name: 'ol',},},],type: 'structure',})],
  ["LogRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'log',},},],type: 'structure',})],
  ["MainRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'main',},},{module: 'HTML',concept: {name: 'main',},},],type: 'structure',})],
  ["MarkRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'mark',},},],type: 'structure',})],
  ["MarqueeRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'marquee',},},{module: 'HTML',concept: {name: 'marquee',},},],type: 'structure',})],
  ["MathRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'math',},},],type: 'structure',})],
  ["MenuBarRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'menubar',},},],type: 'structure',})],
  ["MenuButtonRole", expect.objectContaining({relatedConcepts: [],type: 'widget',})],
  ["MenuItemRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'menuitem',},},{module: 'HTML',concept: {name: 'menuitem',},},],type: 'widget',})],
  ["MenuItemCheckBoxRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'menuitemcheckbox',},},],type: 'widget',})],
  ["MenuItemRadioRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'menuitemradio',},},],type: 'widget',})],
  ["MenuListOptionRole", expect.objectContaining({relatedConcepts: [],type: 'widget',})],
  ["MenuListPopupRole", expect.objectContaining({relatedConcepts: [],type: 'widget',})],
  ["MenuRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'menu',},},{module: 'HTML',concept: {name: 'menu',},},],type: 'structure',})],
  ["MeterRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'meter',},},],type: 'structure',})],
  ["NavigationRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'navigation',},},{module: 'HTML',concept: {name: 'nav',},},],type: 'structure',})],
  ["NoneRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'none',},},],type: 'structure',})],
  ["NoteRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'note',},},],type: 'structure',})],
  ["OutlineRole", expect.objectContaining({relatedConcepts: [],type: 'structure',})],
  ["ParagraphRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'p',},},],type: 'structure',})],
  ["PopUpButtonRole", expect.objectContaining({relatedConcepts: [],type: 'widget',})],
  ["PreRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'pre',},},],type: 'structure',})],
  ["PresentationalRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'presentation',},},],type: 'structure',})],
  ["ProgressIndicatorRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'progressbar',},},{module: 'HTML',concept: {name: 'progress',},},],type: 'structure',})],
  ["RadioButtonRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'radio',},},{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'radio',},],},},],type: 'widget',})],
  ["RadioGroupRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'radiogroup',},},],type: 'structure',})],
  ["RegionRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'region',},},],type: 'structure',})],
  ["RootWebAreaRole", expect.objectContaining({relatedConcepts: [],type: 'structure',})],
  ["RowHeaderRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'rowheader',},},{module: 'HTML',concept: {name: 'th',attributes: [{name: 'scope',value: 'row',},],},},],type: 'widget',})],
  ["RowRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'row',},},{module: 'HTML',concept: {name: 'tr',},},],type: 'structure',})],
  ["RubyRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'ruby',},},],type: 'structure',})],
  ["RulerRole", expect.objectContaining({relatedConcepts: [],type: 'structure',})],
  ["ScrollAreaRole", expect.objectContaining({relatedConcepts: [],type: 'structure',})],
  ["ScrollBarRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'scrollbar',},},],type: 'widget',})],
  ["SeamlessWebAreaRole", expect.objectContaining({relatedConcepts: [],type: 'structure',})],
  ["SearchRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'search',},},],type: 'structure',})],
  ["SearchBoxRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'searchbox',},},{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'search',},],},},],type: 'widget',})],
  ["SliderRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'slider',},},{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'range',},],},},],type: 'widget',})],
  ["SliderThumbRole", expect.objectContaining({relatedConcepts: [],type: 'structure',})],
  ["SpinButtonRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'spinbutton',},},{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'number',},],},},],type: 'widget',})],
  ["SpinButtonPartRole", expect.objectContaining({relatedConcepts: [],type: 'structure',})],
  ["SplitterRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'separator',},},],type: 'widget',})],
  ["StaticTextRole", expect.objectContaining({relatedConcepts: [],type: 'structure',})],
  ["StatusRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'status',},},],type: 'structure',})],
  ["SVGRootRole", expect.objectContaining({relatedConcepts: [],type: 'structure',})],
  ["SwitchRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'switch',},},{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'checkbox',},],},},],type: 'widget',})],
  ["TabGroupRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'tablist',},},],type: 'structure',})],
  ["TabRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'tab',},},],type: 'widget',})],
  ["TableHeaderContainerRole", expect.objectContaining({relatedConcepts: [],type: 'structure',})],
  ["TableRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'table',},},{module: 'HTML',concept: {name: 'table',},},],type: 'structure',})],
  ["TabListRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'tablist',},},],type: 'structure',})],
  ["TabPanelRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'tabpanel',},},],type: 'structure',})],
  ["TermRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'term',},},],type: 'structure',})],
  ["TextAreaRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {attributes: [{name: 'aria-multiline',value: 'true',},],name: 'textbox',},},{module: 'HTML',concept: {name: 'textarea',},},],type: 'widget',})],
  ["TextFieldRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'textbox',},},{module: 'HTML',concept: {name: 'input',},},{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'text',},],},},],type: 'widget',})],
  ["TimeRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'time',},},],type: 'structure',})],
  ["TimerRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'timer',},},],type: 'structure',})],
  ["ToggleButtonRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {attributes: [{name: 'aria-pressed',},],},},],type: 'widget',})],
  ["ToolbarRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'toolbar',},},],type: 'structure',})],
  ["TreeRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'tree',},},],type: 'widget',})],
  ["TreeGridRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'treegrid',},},],type: 'widget',})],
  ["TreeItemRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'treeitem',},},],type: 'widget',})],
  ["UserInterfaceTooltipRole", expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'tooltip',},},],type: 'structure',})],
  ["VideoRole", expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'video',},},],type: 'widget',})],
  ["WebAreaRole", expect.objectContaining({relatedConcepts: [],type: 'structure',})],
  ["WindowRole", expect.objectContaining({relatedConcepts: [],type: 'window',})],
];

describe('AXObjectsMap', function () {
  describe('iteration', function () {
    it('should have an iterator defined', function () {
      expect(AXObjectsMap[Symbol.iterator]).not.toBeUndefined();
    });
    it('should have a specific length', function () {
      expect([...AXObjectsMap].length).toEqual(124);
    });
    describe('should support the spread operator', function () {
      test.each([...AXObjectsMap])(`Testing role: '%s' with element %o`, (role, elements) => {
        expect(entriesList).toEqual(
          expect.arrayContaining([[role, elements]]),
        );
      });
    });
    describe('should support the for..of pattern', function () {
      const output = [];
      for (const [key, value] of AXObjectsMap) {
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
      test.each(AXObjectsMap.entries())(`Testing role: '%s' with element %o`, (role, elements) => {
        expect(entriesList).toEqual(
          expect.arrayContaining([[role, elements]]),
        );
      });
      test.each([...AXObjectsMap.entries()])(`Testing role: '%s' with element %o`, (role, elements) => {
        expect(entriesList).toEqual(
          expect.arrayContaining([[role, elements]]),
        );
      });
    });
    describe('forEach()', function () {
      const output = [];
      let context;
      AXObjectsMap.forEach((value, key, map) => {
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
      expect(AXObjectsMap.get("AbbrRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'abbr',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("AlertDialogRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'alertdialog',},},],type: 'window',}),);
      expect(AXObjectsMap.get("AlertRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'alert',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("AnnotationRole")).toEqual(expect.objectContaining({relatedConcepts: [],type: 'structure',}),);
      expect(AXObjectsMap.get("ApplicationRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'application',},},],type: 'window',}),);
      expect(AXObjectsMap.get("ArticleRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'article',},},{module: 'HTML',concept: {name: 'article',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("AudioRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'audio',},},],type: 'widget',}),);
      expect(AXObjectsMap.get("BannerRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'banner',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("BlockquoteRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'blockquote',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("BusyIndicatorRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {attributes: [{name: 'aria-busy',value: 'true',},],},},],type: 'widget',}),);
      expect(AXObjectsMap.get("ButtonRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'button',},},{module: 'HTML',concept: {name: 'button',},},],type: 'widget',}),);
      expect(AXObjectsMap.get("CanvasRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'canvas',},},],type: 'widget',}),);
      expect(AXObjectsMap.get("CaptionRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'caption',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("CellRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'cell',},},{module: 'ARIA',concept: {name: 'gridcell',},},{module: 'HTML',concept: {name: 'td',},},],type: 'widget',}),);
      expect(AXObjectsMap.get("CheckBoxRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'checkbox',},},{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'checkbox',},],},},],type: 'widget',}),);
      expect(AXObjectsMap.get("ColorWellRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'color',},],},},],type: 'widget',}),);
      expect(AXObjectsMap.get("ColumnHeaderRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'columnheader',},},{module: 'HTML',concept: {name: 'th',},},],type: 'widget',}),);
      expect(AXObjectsMap.get("ColumnRole")).toEqual(expect.objectContaining({relatedConcepts: [],type: 'structure',}),);
      expect(AXObjectsMap.get("ComboBoxRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'combobox',},},{module: 'HTML',concept: {name: 'select',},},],type: 'widget',}),);
      expect(AXObjectsMap.get("ComplementaryRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'complementary',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("ContentInfoRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'structureinfo',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("DateRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'date',},],},},],type: 'widget',}),);
      expect(AXObjectsMap.get("DateTimeRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'datetime',},],},},],type: 'widget',}),);
      expect(AXObjectsMap.get("DefinitionRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'dfn',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("DescriptionListDetailRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'dd',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("DescriptionListRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'dl',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("DescriptionListTermRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'dt',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("DetailsRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'details',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("DialogRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'dialog',},},{module: 'HTML',concept: {name: 'dialog',},},],type: 'window',}),);
      expect(AXObjectsMap.get("DirectoryRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'directory',},},{module: 'HTML',concept: {name: 'dir',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("DisclosureTriangleRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {constraints: ['scoped to a details element',],name: 'summary',},},],type: 'widget',}),);
      expect(AXObjectsMap.get("DivRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'div',},},],type: 'generic',}),);
      expect(AXObjectsMap.get("DocumentRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'document',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("EmbeddedObjectRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'embed',},},],type: 'widget',}),);
      expect(AXObjectsMap.get("FeedRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'feed',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("FigcaptionRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'figcaption',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("FigureRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'figure',},},{module: 'HTML',concept: {name: 'figure',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("FooterRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'footer',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("FormRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'form',},},{module: 'HTML',concept: {name: 'form',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("GridRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'grid',},},],type: 'widget',}),);
      expect(AXObjectsMap.get("GroupRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'group',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("HeadingRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'heading',},},{module: 'HTML',concept: {name: 'h1',},},{module: 'HTML',concept: {name: 'h2',},},{module: 'HTML',concept: {name: 'h3',},},{module: 'HTML',concept: {name: 'h4',},},{module: 'HTML',concept: {name: 'h5',},},{module: 'HTML',concept: {name: 'h6',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("IframePresentationalRole")).toEqual(expect.objectContaining({relatedConcepts: [],type: 'window',}),);
      expect(AXObjectsMap.get("IframeRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'iframe',},},],type: 'window',}),);
      expect(AXObjectsMap.get("IgnoredRole")).toEqual(expect.objectContaining({relatedConcepts: [],type: 'structure',}),);
      expect(AXObjectsMap.get("ImageMapLinkRole")).toEqual(expect.objectContaining({relatedConcepts: [],type: 'widget',}),);
      expect(AXObjectsMap.get("ImageMapRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'img',attributes: [{name: 'usemap',},],},},],type: 'structure',}),);
      expect(AXObjectsMap.get("ImageRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'img',},},{module: 'HTML',concept: {name: 'img',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("InlineTextBoxRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'input',},},],type: 'widget',}),);
      expect(AXObjectsMap.get("InputTimeRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'time',},],},},],type: 'widget',}),);
      expect(AXObjectsMap.get("LabelRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'label',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("LegendRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'legend',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("LineBreakRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'br',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("LinkRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'link',},},{module: 'HTML',concept: {name: 'a',attributes: [{name: 'href',},],},},],type: 'widget',}),);
      expect(AXObjectsMap.get("ListBoxOptionRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'option',},},{module: 'HTML',concept: {name: 'option',},},],type: 'widget',}),);
      expect(AXObjectsMap.get("ListBoxRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'listbox',},},{module: 'HTML',concept: {name: 'datalist',},},{module: 'HTML',concept: {name: 'select',},},],type: 'widget',}),);
      expect(AXObjectsMap.get("ListItemRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'listitem',},},{module: 'HTML',concept: {name: 'li',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("ListMarkerRole")).toEqual(expect.objectContaining({relatedConcepts: [],type: 'structure',}),);
      expect(AXObjectsMap.get("ListRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'list',},},{module: 'HTML',concept: {name: 'ul',},},{module: 'HTML',concept: {name: 'ol',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("LogRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'log',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("MainRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'main',},},{module: 'HTML',concept: {name: 'main',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("MarkRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'mark',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("MarqueeRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'marquee',},},{module: 'HTML',concept: {name: 'marquee',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("MathRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'math',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("MenuBarRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'menubar',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("MenuButtonRole")).toEqual(expect.objectContaining({relatedConcepts: [],type: 'widget',}),);
      expect(AXObjectsMap.get("MenuItemRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'menuitem',},},{module: 'HTML',concept: {name: 'menuitem',},},],type: 'widget',}),);
      expect(AXObjectsMap.get("MenuItemCheckBoxRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'menuitemcheckbox',},},],type: 'widget',}),);
      expect(AXObjectsMap.get("MenuItemRadioRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'menuitemradio',},},],type: 'widget',}),);
      expect(AXObjectsMap.get("MenuListOptionRole")).toEqual(expect.objectContaining({relatedConcepts: [],type: 'widget',}),);
      expect(AXObjectsMap.get("MenuListPopupRole")).toEqual(expect.objectContaining({relatedConcepts: [],type: 'widget',}),);
      expect(AXObjectsMap.get("MenuRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'menu',},},{module: 'HTML',concept: {name: 'menu',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("MeterRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'meter',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("NavigationRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'navigation',},},{module: 'HTML',concept: {name: 'nav',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("NoneRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'none',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("NoteRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'note',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("OutlineRole")).toEqual(expect.objectContaining({relatedConcepts: [],type: 'structure',}),);
      expect(AXObjectsMap.get("ParagraphRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'p',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("PopUpButtonRole")).toEqual(expect.objectContaining({relatedConcepts: [],type: 'widget',}),);
      expect(AXObjectsMap.get("PreRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'pre',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("PresentationalRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'presentation',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("ProgressIndicatorRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'progressbar',},},{module: 'HTML',concept: {name: 'progress',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("RadioButtonRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'radio',},},{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'radio',},],},},],type: 'widget',}),);
      expect(AXObjectsMap.get("RadioGroupRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'radiogroup',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("RegionRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'region',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("RootWebAreaRole")).toEqual(expect.objectContaining({relatedConcepts: [],type: 'structure',}),);
      expect(AXObjectsMap.get("RowHeaderRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'rowheader',},},{module: 'HTML',concept: {name: 'th',attributes: [{name: 'scope',value: 'row',},],},},],type: 'widget',}),);
      expect(AXObjectsMap.get("RowRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'row',},},{module: 'HTML',concept: {name: 'tr',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("RubyRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'ruby',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("RulerRole")).toEqual(expect.objectContaining({relatedConcepts: [],type: 'structure',}),);
      expect(AXObjectsMap.get("ScrollAreaRole")).toEqual(expect.objectContaining({relatedConcepts: [],type: 'structure',}),);
      expect(AXObjectsMap.get("ScrollBarRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'scrollbar',},},],type: 'widget',}),);
      expect(AXObjectsMap.get("SeamlessWebAreaRole")).toEqual(expect.objectContaining({relatedConcepts: [],type: 'structure',}),);
      expect(AXObjectsMap.get("SearchRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'search',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("SearchBoxRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'searchbox',},},{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'search',},],},},],type: 'widget',}),);
      expect(AXObjectsMap.get("SliderRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'slider',},},{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'range',},],},},],type: 'widget',}),);
      expect(AXObjectsMap.get("SliderThumbRole")).toEqual(expect.objectContaining({relatedConcepts: [],type: 'structure',}),);
      expect(AXObjectsMap.get("SpinButtonRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'spinbutton',},},{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'number',},],},},],type: 'widget',}),);
      expect(AXObjectsMap.get("SpinButtonPartRole")).toEqual(expect.objectContaining({relatedConcepts: [],type: 'structure',}),);
      expect(AXObjectsMap.get("SplitterRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'separator',},},],type: 'widget',}),);
      expect(AXObjectsMap.get("StaticTextRole")).toEqual(expect.objectContaining({relatedConcepts: [],type: 'structure',}),);
      expect(AXObjectsMap.get("StatusRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'status',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("SVGRootRole")).toEqual(expect.objectContaining({relatedConcepts: [],type: 'structure',}),);
      expect(AXObjectsMap.get("SwitchRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'switch',},},{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'checkbox',},],},},],type: 'widget',}),);
      expect(AXObjectsMap.get("TabGroupRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'tablist',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("TabRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'tab',},},],type: 'widget',}),);
      expect(AXObjectsMap.get("TableHeaderContainerRole")).toEqual(expect.objectContaining({relatedConcepts: [],type: 'structure',}),);
      expect(AXObjectsMap.get("TableRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'table',},},{module: 'HTML',concept: {name: 'table',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("TabListRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'tablist',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("TabPanelRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'tabpanel',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("TermRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'term',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("TextFieldRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'textbox',},},{module: 'HTML',concept: {name: 'input',},},{module: 'HTML',concept: {name: 'input',attributes: [{name: 'type',value: 'text',},],},},],type: 'widget',}),);
      expect(AXObjectsMap.get("TimeRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'time',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("TimerRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'timer',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("ToggleButtonRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {attributes: [{name: 'aria-pressed',},],},},],type: 'widget',}),);
      expect(AXObjectsMap.get("ToolbarRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'toolbar',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("TreeRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'tree',},},],type: 'widget',}),);
      expect(AXObjectsMap.get("TreeGridRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'treegrid',},},],type: 'widget',}),);
      expect(AXObjectsMap.get("TreeItemRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'treeitem',},},],type: 'widget',}),);
      expect(AXObjectsMap.get("UserInterfaceTooltipRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'ARIA',concept: {name: 'tooltip',},},],type: 'structure',}),);
      expect(AXObjectsMap.get("VideoRole")).toEqual(expect.objectContaining({relatedConcepts: [{module: 'HTML',concept: {name: 'video',},},],type: 'widget',}),);
      expect(AXObjectsMap.get("WebAreaRole")).toEqual(expect.objectContaining({relatedConcepts: [],type: 'structure',}),);
      expect(AXObjectsMap.get("WindowRole")).toEqual(expect.objectContaining({relatedConcepts: [],type: 'window',}),);
    });
    it('has()', function () {
      expect(AXObjectsMap.has('DialogRole')).toEqual(true);
      expect(AXObjectsMap.has('DoveRole')).toEqual(false);
    });
    describe('keys(), iteration', function () {
      const entriesKeys = entriesList.map(entry => entry[0]);
      test.each(AXObjectsMap.keys())('Testing key: %o', (key) => {
        expect(entriesKeys).toEqual(
          expect.arrayContaining([key]),
        );
      });
      test.each([...AXObjectsMap.keys()])('Testing key: %o', (key) => {
        expect(entriesKeys).toEqual(
          expect.arrayContaining([key]),
        );
      });
    });
    describe('values(), iteration', function () {
      const entriesValues = entriesList.map(entry => entry[1]);
      test.each(AXObjectsMap.values().map(value => [value]))('Testing value: %o', (value) => {
        expect(entriesValues).toEqual(
          expect.arrayContaining([value]),
        );
      });
      test.each([...AXObjectsMap.values()].map(value => [value]))('Testing value: %o', (value) => {
        expect(entriesValues).toEqual(
          expect.arrayContaining([value]),
        );
      });
    });
  });
});
