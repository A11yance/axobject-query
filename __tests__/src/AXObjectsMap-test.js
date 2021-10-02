/* eslint-env mocha */
import expect from 'expect';
import AXObjectsMap from '../../src/AXObjectsMap';

describe('AXObjectsMap', function () {
  describe('content', function () {
    it('should have specific entries', function () {
      expect(AXObjectsMap.entries()).toEqual(
        expect.arrayContaining(
          [
            ["AbbrRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'abbr',
                  },
                },
              ],
              type: 'structure',
            })],
            ["AlertDialogRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'alertdialog',
                  },
                },
              ],
              type: 'window',
            })],
            ["AlertRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'alert',
                  },
                },
              ],
              type: 'structure',
            })],
            ["AnnotationRole", expect.objectContaining({
              relatedConcepts: [],
              type: 'structure',
            })],
            ["ApplicationRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'application',
                  },
                },
              ],
              type: 'window',
            })],
            ["ArticleRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'article',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'article',
                  },
                },
              ],
              type: 'structure',
            })],
            ["AudioRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'audio',
                  },
                },
              ],
              type: 'widget',
            })],
            ["BannerRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'banner',
                  },
                },
              ],
              type: 'structure',
            })],
            ["BlockquoteRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'blockquote',
                  },
                },
              ],
              type: 'structure',
            })],
            ["BusyIndicatorRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    attributes: [
                      {
                        name: 'aria-busy',
                        value: 'true',
                      },
                    ],
                  },
                },
              ],
              type: 'widget',
            })],
            ["ButtonRole", expect.objectContaining({
                relatedConcepts: [
                  {
                    module: 'ARIA',
                    concept: {
                      name: 'button',
                    },
                  },
                  {
                    module: 'HTML',
                    concept: {
                      name: 'button',
                    },
                  },
                ],
                type: 'widget',
              })],
            ["CanvasRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'canvas',
                  },
                },
              ],
              type: 'widget',
            })],
            ["CaptionRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'caption',
                  },
                },
              ],
              type: 'structure',
            })],
            ["CellRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'cell',
                  },
                },
                {
                  module: 'ARIA',
                  concept: {
                    name: 'gridcell',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'td',
                  },
                },
              ],
              type: 'widget',
            })],
            ["CheckBoxRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'checkbox',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'input',
                    attributes: [
                      {
                        name: 'type',
                        value: 'checkbox',
                      },
                    ],
                  },
                },
              ],
              type: 'widget',
            })],
            ["ColorWellRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'input',
                    attributes: [
                      {
                        name: 'type',
                        value: 'color',
                      },
                    ],
                  },
                },
              ],
              type: 'widget',
            })],
            ["ColumnHeaderRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'columnheader',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'th',
                  },
                },
              ],
              type: 'widget',
            })],
            ["ColumnRole", expect.objectContaining({
              relatedConcepts: [],
              type: 'structure',
            })],
            ["ComboBoxRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'combobox',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'select',
                  },
                },
              ],
              type: 'widget',
            })],
            ["ComplementaryRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'complementary',
                  },
                },
              ],
              type: 'structure',
            })],
            ["ContentInfoRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'structureinfo',
                  },
                },
              ],
              type: 'structure',
            })],
            ["DateRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'input',
                    attributes: [
                      {
                        name: 'type',
                        value: 'date',
                      },
                    ],
                  },
                },
              ],
              type: 'widget',
            })],
            ["DateTimeRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'input',
                    attributes: [
                      {
                        name: 'type',
                        value: 'datetime',
                      },
                    ],
                  },
                },
              ],
              type: 'widget',
            })],
            ["DefinitionRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'dfn',
                  },
                },
              ],
              type: 'structure',
            })],
            ["DescriptionListDetailRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'dd',
                  },
                },
              ],
              type: 'structure',
            })],
            ["DescriptionListRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'dl',
                  },
                },
              ],
              type: 'structure',
            })],
            ["DescriptionListTermRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'dt',
                  },
                },
              ],
              type: 'structure',
            })],
            ["DetailsRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'details',
                  },
                },
              ],
              type: 'structure',
            })],
            ["DialogRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'dialog',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'dialog',
                  },
                },
              ],
              type: 'window',
            })],
            ["DirectoryRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'directory',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'dir',
                  },
                },
              ],
              type: 'structure',
            })],
            ["DisclosureTriangleRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'summary',
                  },
                },
              ],
              type: 'widget',
            })],
            ["DivRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'div',
                  },
                },
              ],
              type: 'generic',
            })],
            ["DocumentRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'document',
                  },
                },
              ],
              type: 'structure',
            })],
            ["EmbeddedObjectRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'embed',
                  },
                },
              ],
              type: 'widget',
            })],
            ["FeedRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'feed',
                  },
                },
              ],
              type: 'structure',
            })],
            ["FigcaptionRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'figcaption',
                  },
                },
              ],
              type: 'structure',
            })],
            ["FigureRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'figure',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'figure',
                  },
                },
              ],
              type: 'structure',
            })],
            ["FooterRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'footer',
                  },
                },
              ],
              type: 'structure',
            })],
            ["FormRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'form',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'form',
                  },
                },
              ],
              type: 'structure',
            })],
            ["GridRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'grid',
                  },
                },
              ],
              type: 'widget',
            })],
            ["GroupRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'group',
                  },
                },
              ],
              type: 'structure',
            })],
            ["HeadingRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'heading',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'h1',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'h2',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'h3',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'h4',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'h5',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'h6',
                  },
                },
              ],
              type: 'structure',
            })],
            ["IframePresentationalRole", expect.objectContaining({
              relatedConcepts: [],
              type: 'window',
            })],
            ["IframeRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'iframe',
                  },
                },
              ],
              type: 'window',
            })],
            ["IgnoredRole", expect.objectContaining({
              relatedConcepts: [],
              type: 'structure',
            })],
            ["ImageMapLinkRole", expect.objectContaining({
              relatedConcepts: [],
              type: 'widget',
            })],
            ["ImageMapRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'img',
                    attributes: [
                      {
                        name: 'usemap',
                      },
                    ],
                  },
                },
              ],
              type: 'structure',
            })],
            ["ImageRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'img',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'img',
                  },
                },
              ],
              type: 'structure',
            })],
            ["InlineTextBoxRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'input',
                  },
                },
              ],
              type: 'widget',
            })],
            ["InputTimeRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'input',
                    attributes: [
                      {
                        name: 'type',
                        value: 'time',
                      },
                    ],
                  },
                },
              ],
              type: 'widget',
            })],
            ["LabelRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'label',
                  },
                },
              ],
              type: 'structure',
            })],
            ["LegendRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'legend',
                  },
                },
              ],
              type: 'structure',
            })],
            ["LineBreakRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'br',
                  },
                },
              ],
              type: 'structure',
            })],
            ["LinkRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'link',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'a',
                    attributes: [
                      {
                        name: 'href',
                      },
                    ],
                  },
                },
              ],
              type: 'widget',
            })],
            ["ListBoxOptionRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'option',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'option',
                  },
                },
              ],
              type: 'widget',
            })],
            ["ListBoxRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'listbox',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'datalist',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'select',
                  },
                },
              ],
              type: 'widget',
            })],
            ["ListItemRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'listitem',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'li',
                  },
                },
              ],
              type: 'structure',
            })],
            ["ListMarkerRole", expect.objectContaining({
              relatedConcepts: [],
              type: 'structure',
            })],
            ["ListRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'list',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'ul',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'ol',
                  },
                },
              ],
              type: 'structure',
            })],
            ["LogRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'log',
                  },
                },
              ],
              type: 'structure',
            })],
            ["MainRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'main',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'main',
                  },
                },
              ],
              type: 'structure',
            })],
            ["MarkRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'mark',
                  },
                },
              ],
              type: 'structure',
            })],
            ["MarqueeRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'marquee',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'marquee',
                  },
                },
              ],
              type: 'structure',
            })],
            ["MathRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'math',
                  },
                },
              ],
              type: 'structure',
            })],
            ["MenuBarRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'menubar',
                  },
                },
              ],
              type: 'structure',
            })],
            ["MenuButtonRole", expect.objectContaining({
              relatedConcepts: [],
              type: 'widget',
            })],
            ["MenuItemRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'menuitem',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'menuitem',
                  },
                },
              ],
              type: 'widget',
            })],
            ["MenuItemCheckBoxRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'menuitemcheckbox',
                  },
                },
              ],
              type: 'widget',
            })],
            ["MenuItemRadioRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'menuitemradio',
                  },
                },
              ],
              type: 'widget',
            })],
            ["MenuListOptionRole", expect.objectContaining({
              relatedConcepts: [],
              type: 'widget',
            })],
            ["MenuListPopupRole", expect.objectContaining({
              relatedConcepts: [],
              type: 'widget',
            })],
            ["MenuRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'menu',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'menu',
                  },
                },
              ],
              type: 'structure',
            })],
            ["MeterRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'meter',
                  },
                },
              ],
              type: 'structure',
            })],
            ["NavigationRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'navigation',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'nav',
                  },
                },
              ],
              type: 'structure',
            })],
            ["NoneRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'none',
                  },
                },
              ],
              type: 'structure',
            })],
            ["NoteRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'note',
                  },
                },
              ],
              type: 'structure',
            })],
            ["OutlineRole", expect.objectContaining({
              relatedConcepts: [],
              type: 'structure',
            })],
            ["ParagraphRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'p',
                  },
                },
              ],
              type: 'structure',
            })],
            ["PopUpButtonRole", expect.objectContaining({
              relatedConcepts: [],
              type: 'widget',
            })],
            ["PreRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'pre',
                  },
                },
              ],
              type: 'structure',
            })],
            ["PresentationalRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'presentation',
                  },
                },
              ],
              type: 'structure',
            })],
            ["ProgressIndicatorRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'progressbar',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'progress',
                  },
                },
              ],
              type: 'structure',
            })],
            ["RadioButtonRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'radio',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'input',
                    attributes: [
                      {
                        name: 'type',
                        value: 'radio',
                      },
                    ],
                  },
                },
              ],
              type: 'widget',
            })],
            ["RadioGroupRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'radiogroup',
                  },
                },
              ],
              type: 'structure',
            })],
            ["RegionRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'region',
                  },
                },
              ],
              type: 'structure',
            })],
            ["RootWebAreaRole", expect.objectContaining({
              relatedConcepts: [],
              type: 'structure',
            })],
            ["RowHeaderRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'rowheader',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'th',
                    attributes: [
                      {
                        name: 'scope',
                        value: 'row',
                      },
                    ],
                  },
                },
              ],
              type: 'widget',
            })],
            ["RowRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'row',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'tr',
                  },
                },
              ],
              type: 'structure',
            })],
            ["RubyRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'ruby',
                  },
                },
              ],
              type: 'structure',
            })],
            ["RulerRole", expect.objectContaining({
              relatedConcepts: [],
              type: 'structure',
            })],
            ["ScrollAreaRole", expect.objectContaining({
              relatedConcepts: [],
              type: 'structure',
            })],
            ["ScrollBarRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'scrollbar',
                  },
                },
              ],
              type: 'widget',
            })],
            ["SeamlessWebAreaRole", expect.objectContaining({
              relatedConcepts: [],
              type: 'structure',
            })],
            ["SearchRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'search',
                  },
                },
              ],
              type: 'structure',
            })],
            ["SearchBoxRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'searchbox',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'input',
                    attributes: [
                      {
                        name: 'type',
                        value: 'search',
                      },
                    ],
                  },
                },
              ],
              type: 'widget',
            })],
            ["SliderRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'slider',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'input',
                    attributes: [
                      {
                        name: 'type',
                        value: 'range',
                      },
                    ],
                  },
                },
              ],
              type: 'widget',
            })],
            ["SliderThumbRole", expect.objectContaining({
              relatedConcepts: [],
              type: 'structure',
            })],
            ["SpinButtonRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'spinbutton',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'input',
                    attributes: [
                      {
                        name: 'type',
                        value: 'number',
                      },
                    ],
                  },
                },
              ],
              type: 'widget',
            })],
            ["SpinButtonPartRole", expect.objectContaining({
              relatedConcepts: [],
              type: 'structure',
            })],
            ["SplitterRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'separator',
                  },
                },
              ],
              type: 'widget',
            })],
            ["StaticTextRole", expect.objectContaining({
              relatedConcepts: [],
              type: 'structure',
            })],
            ["StatusRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'status',
                  },
                },
              ],
              type: 'structure',
            })],
            ["SVGRootRole", expect.objectContaining({
              relatedConcepts: [],
              type: 'structure',
            })],
            ["SwitchRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'switch',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'input',
                    attributes: [
                      {
                        name: 'type',
                        value: 'checkbox',
                      },
                    ],
                  },
                },
              ],
              type: 'widget',
            })],
            ["TabGroupRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'tablist',
                  },
                },
              ],
              type: 'structure',
            })],
            ["TabRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'tab',
                  },
                },
              ],
              type: 'widget',
            })],
            ["TableHeaderContainerRole", expect.objectContaining({
              relatedConcepts: [],
              type: 'structure',
            })],
            ["TableRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'table',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'table',
                  },
                },
              ],
              type: 'structure',
            })],
            ["TabListRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'tablist',
                  },
                },
              ],
              type: 'structure',
            })],
            ["TabPanelRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'tabpanel',
                  },
                },
              ],
              type: 'structure',
            })],
            ["TermRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'term',
                  },
                },
              ],
              type: 'structure',
            })],
            ["TextFieldRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'textbox',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'input',
                  },
                },
                {
                  module: 'HTML',
                  concept: {
                    name: 'input',
                    attributes: [
                      {
                        name: 'type',
                        value: 'text',
                      },
                    ],
                  },
                },
              ],
              type: 'widget',
            })],
            ["TimeRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'time',
                  },
                },
              ],
              type: 'structure',
            })],
            ["TimerRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'timer',
                  },
                },
              ],
              type: 'structure',
            })],
            ["ToggleButtonRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    attributes: [
                      {
                        name: 'aria-pressed',
                      },
                    ],
                  },
                },
              ],
              type: 'widget',
            })],
            ["ToolbarRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'toolbar',
                  },
                },
              ],
              type: 'structure',
            })],
            ["TreeRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'tree',
                  },
                },
              ],
              type: 'widget',
            })],
            ["TreeGridRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'treegrid',
                  },
                },
              ],
              type: 'widget',
            })],
            ["TreeItemRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'treeitem',
                  },
                },
              ],
              type: 'widget',
            })],
            ["UserInterfaceTooltipRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'ARIA',
                  concept: {
                    name: 'tooltip',
                  },
                },
              ],
              type: 'structure',
            })],
            ["VideoRole", expect.objectContaining({
              relatedConcepts: [
                {
                  module: 'HTML',
                  concept: {
                    name: 'video',
                  },
                },
              ],
              type: 'widget',
            })],
            ["WebAreaRole", expect.objectContaining({
              relatedConcepts: [],
              type: 'structure',
            })],
            ["WindowRole", expect.objectContaining({
              relatedConcepts: [],
              type: 'window',
            })],
          ]
        )
      );
    });
  });
});
