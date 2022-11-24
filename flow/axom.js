/**
 * @flow
 */



type AXObjectModelDefinition = {|
  relatedConcepts: Array<AXObjectModelRelation>,
  type: 'window' | 'structure' | 'widget' | 'generic',
|};

type AXObjectModelRelation = {|
  module?: 'HTML' | 'ARIA',
  concept?: AXObjectModelRelationConcept,
|};

/* The concept in a related domain that informs behavior mappings.
 * Related domains include: HTML and ARIA.
 */
type AXObjectModelRelationConcept = {|
  name?: string,
  attributes?: Array<AXObjectModelRelationConceptAttribute>,
  constraints?: Array<
  | 'scoped to a details element'>,
|};

type AXObjectModelRelationConceptAttribute = {|
  name: string,
  value?: string,
|};

type AXObjectName = 
'AbbrRole'
| 'AlertDialogRole'
| 'AlertRole'
| 'AnnotationRole'
| 'ApplicationRole'
| 'ArticleRole'
| 'AudioRole'
| 'BannerRole'
| 'BlockquoteRole'
| 'BusyIndicatorRole'
| 'ButtonRole'
| 'CanvasRole'
| 'CaptionRole'
| 'CellRole'
| 'CheckBoxRole'
| 'ColorWellRole'
| 'ColumnHeaderRole'
| 'ColumnRole'
| 'ComboBoxRole'
| 'ComplementaryRole'
| 'ContentInfoRole'
| 'DateRole'
| 'DateTimeRole'
| 'DefinitionRole'
| 'DescriptionListDetailRole'
| 'DescriptionListRole'
| 'DescriptionListTermRole'
| 'DetailsRole'
| 'DialogRole'
| 'DirectoryRole'
| 'DisclosureTriangleRole'
| 'DivRole'
| 'DocumentRole'
| 'EmbeddedObjectRole'
| 'FeedRole'
| 'FigcaptionRole'
| 'FigureRole'
| 'FooterRole'
| 'FormRole'
| 'GridRole'
| 'GroupRole'
| 'HeadingRole'
| 'IframePresentationalRole'
| 'IframeRole'
| 'IgnoredRole'
| 'ImageMapLinkRole'
| 'ImageMapRole'
| 'ImageRole'
| 'InlineTextBoxRole'
| 'InputTimeRole'
| 'LabelRole'
| 'LegendRole'
| 'LineBreakRole'
| 'LinkRole'
| 'ListBoxOptionRole'
| 'ListBoxRole'
| 'ListItemRole'
| 'ListMarkerRole'
| 'ListRole'
| 'LogRole'
| 'MainRole'
| 'MarkRole'
| 'MarqueeRole'
| 'MathRole'
| 'MenuBarRole'
| 'MenuButtonRole'
| 'MenuItemRole'
| 'MenuItemCheckBoxRole'
| 'MenuItemRadioRole'
| 'MenuListOptionRole'
| 'MenuListPopupRole'
| 'MenuRole'
| 'MeterRole'
| 'NavigationRole'
| 'NoneRole'
| 'NoteRole'
| 'OutlineRole'
| 'ParagraphRole'
| 'PopUpButtonRole'
| 'PreRole'
| 'PresentationalRole'
| 'ProgressIndicatorRole'
| 'RadioButtonRole'
| 'RadioGroupRole'
| 'RegionRole'
| 'RootWebAreaRole'
| 'RowHeaderRole'
| 'RowRole'
| 'RubyRole'
| 'RulerRole'
| 'ScrollAreaRole'
| 'ScrollBarRole'
| 'SeamlessWebAreaRole'
| 'SearchRole'
| 'SearchBoxRole'
| 'SliderRole'
| 'SliderThumbRole'
| 'SpinButtonRole'
| 'SpinButtonPartRole'
| 'SplitterRole'
| 'StaticTextRole'
| 'StatusRole'
| 'SVGRootRole'
| 'SwitchRole'
| 'TabGroupRole'
| 'TabRole'
| 'TableHeaderContainerRole'
| 'TableRole'
| 'TabListRole'
| 'TabPanelRole'
| 'TermRole'
| 'TextAreaRole'
| 'TextFieldRole'
| 'TimeRole'
| 'TimerRole'
| 'ToggleButtonRole'
| 'ToolbarRole'
| 'TreeRole'
| 'TreeGridRole'
| 'TreeItemRole'
| 'UserInterfaceTooltipRole'
| 'VideoRole'
| 'WebAreaRole'
| 'WindowRole';