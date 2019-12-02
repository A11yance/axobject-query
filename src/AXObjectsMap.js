/**
 * @flow
 */
import AbbrRole from './etc/objects/AbbrRole';
import AlertDialogRole from './etc/objects/AlertDialogRole';
import AlertRole from './etc/objects/AlertRole';
import AnnotationRole from './etc/objects/AnnotationRole';
import ApplicationRole from './etc/objects/ApplicationRole';
import ArticleRole from './etc/objects/ArticleRole';
import AudioRole from './etc/objects/AudioRole';
import BannerRole from './etc/objects/BannerRole';
import BlockquoteRole from './etc/objects/BlockquoteRole';
import BusyIndicatorRole from './etc/objects/BusyIndicatorRole';
import ButtonRole from './etc/objects/ButtonRole';
import CanvasRole from './etc/objects/CanvasRole';
import CaptionRole from './etc/objects/CaptionRole';
import CellRole from './etc/objects/CellRole';
import CheckBoxRole from './etc/objects/CheckBoxRole';
import ColorWellRole from './etc/objects/ColorWellRole';
import ColumnHeaderRole from './etc/objects/ColumnHeaderRole';
import ColumnRole from './etc/objects/ColumnRole';
import ComboBoxRole from './etc/objects/ComboBoxRole';
import ComplementaryRole from './etc/objects/ComplementaryRole';
import ContentInfoRole from './etc/objects/ContentInfoRole';
import DateRole from './etc/objects/DateRole';
import DateTimeRole from './etc/objects/DateTimeRole';
import DefinitionRole from './etc/objects/DefinitionRole';
import DescriptionListDetailRole from './etc/objects/DescriptionListDetailRole';
import DescriptionListRole from './etc/objects/DescriptionListRole';
import DescriptionListTermRole from './etc/objects/DescriptionListTermRole';
import DetailsRole from './etc/objects/DetailsRole';
import DialogRole from './etc/objects/DialogRole';
import DirectoryRole from './etc/objects/DirectoryRole';
import DisclosureTriangleRole from './etc/objects/DisclosureTriangleRole';
import DivRole from './etc/objects/DivRole';
import DocumentRole from './etc/objects/DocumentRole';
import EmbeddedObjectRole from './etc/objects/EmbeddedObjectRole';
import FeedRole from './etc/objects/FeedRole';
import FigcaptionRole from './etc/objects/FigcaptionRole';
import FigureRole from './etc/objects/FigureRole';
import FooterRole from './etc/objects/FooterRole';
import FormRole from './etc/objects/FormRole';
import GridRole from './etc/objects/GridRole';
import GroupRole from './etc/objects/GroupRole';
import HeadingRole from './etc/objects/HeadingRole';
import IframePresentationalRole from './etc/objects/IframePresentationalRole';
import IframeRole from './etc/objects/IframeRole';
import IgnoredRole from './etc/objects/IgnoredRole';
import ImageMapLinkRole from './etc/objects/ImageMapLinkRole';
import ImageMapRole from './etc/objects/ImageMapRole';
import ImageRole from './etc/objects/ImageRole';
import InlineTextBoxRole from './etc/objects/InlineTextBoxRole';
import InputTimeRole from './etc/objects/InputTimeRole';
import LabelRole from './etc/objects/LabelRole';
import LegendRole from './etc/objects/LegendRole';
import LineBreakRole from './etc/objects/LineBreakRole';
import LinkRole from './etc/objects/LinkRole';
import ListBoxOptionRole from './etc/objects/ListBoxOptionRole';
import ListBoxRole from './etc/objects/ListBoxRole';
import ListItemRole from './etc/objects/ListItemRole';
import ListMarkerRole from './etc/objects/ListMarkerRole';
import ListRole from './etc/objects/ListRole';
import LogRole from './etc/objects/LogRole';
import MainRole from './etc/objects/MainRole';
import MarkRole from './etc/objects/MarkRole';
import MarqueeRole from './etc/objects/MarqueeRole';
import MathRole from './etc/objects/MathRole';
import MenuBarRole from './etc/objects/MenuBarRole';
import MenuButtonRole from './etc/objects/MenuButtonRole';
import MenuItemRole from './etc/objects/MenuItemRole';
import MenuItemCheckBoxRole from './etc/objects/MenuItemCheckBoxRole';
import MenuItemRadioRole from './etc/objects/MenuItemRadioRole';
import MenuListOptionRole from './etc/objects/MenuListOptionRole';
import MenuListPopupRole from './etc/objects/MenuListPopupRole';
import MenuRole from './etc/objects/MenuRole';
import MeterRole from './etc/objects/MeterRole';
import NavigationRole from './etc/objects/NavigationRole';
import NoneRole from './etc/objects/NoneRole';
import NoteRole from './etc/objects/NoteRole';
import OutlineRole from './etc/objects/OutlineRole';
import ParagraphRole from './etc/objects/ParagraphRole';
import PopUpButtonRole from './etc/objects/PopUpButtonRole';
import PreRole from './etc/objects/PreRole';
import PresentationalRole from './etc/objects/PresentationalRole';
import ProgressIndicatorRole from './etc/objects/ProgressIndicatorRole';
import RadioButtonRole from './etc/objects/RadioButtonRole';
import RadioGroupRole from './etc/objects/RadioGroupRole';
import RegionRole from './etc/objects/RegionRole';
import RootWebAreaRole from './etc/objects/RootWebAreaRole';
import RowHeaderRole from './etc/objects/RowHeaderRole';
import RowRole from './etc/objects/RowRole';
import RubyRole from './etc/objects/RubyRole';
import RulerRole from './etc/objects/RulerRole';
import ScrollAreaRole from './etc/objects/ScrollAreaRole';
import ScrollBarRole from './etc/objects/ScrollBarRole';
import SeamlessWebAreaRole from './etc/objects/SeamlessWebAreaRole';
import SearchRole from './etc/objects/SearchRole';
import SearchBoxRole from './etc/objects/SearchBoxRole';
import SliderRole from './etc/objects/SliderRole';
import SliderThumbRole from './etc/objects/SliderThumbRole';
import SpinButtonRole from './etc/objects/SpinButtonRole';
import SpinButtonPartRole from './etc/objects/SpinButtonPartRole';
import SplitterRole from './etc/objects/SplitterRole';
import StaticTextRole from './etc/objects/StaticTextRole';
import StatusRole from './etc/objects/StatusRole';
import SVGRootRole from './etc/objects/SVGRootRole';
import SwitchRole from './etc/objects/SwitchRole';
import TabGroupRole from './etc/objects/TabGroupRole';
import TabRole from './etc/objects/TabRole';
import TableHeaderContainerRole from './etc/objects/TableHeaderContainerRole';
import TableRole from './etc/objects/TableRole';
import TabListRole from './etc/objects/TabListRole';
import TabPanelRole from './etc/objects/TabPanelRole';
import TermRole from './etc/objects/TermRole';
import TextFieldRole from './etc/objects/TextFieldRole';
import TimeRole from './etc/objects/TimeRole';
import TimerRole from './etc/objects/TimerRole';
import ToggleButtonRole from './etc/objects/ToggleButtonRole';
import ToolbarRole from './etc/objects/ToolbarRole';
import TreeRole from './etc/objects/TreeRole';
import TreeGridRole from './etc/objects/TreeGridRole';
import TreeItemRole from './etc/objects/TreeItemRole';
import UserInterfaceTooltipRole from './etc/objects/UserInterfaceTooltipRole';
import VideoRole from './etc/objects/VideoRole';
import WebAreaRole from './etc/objects/WebAreaRole';
import WindowRole from './etc/objects/WindowRole';

const AXObjectsMap: MapOfAXObjectDefinitions = new Map([
  ['AbbrRole', AbbrRole],
  ['AlertDialogRole', AlertDialogRole],
  ['AlertRole', AlertRole],
  ['AnnotationRole', AnnotationRole],
  ['ApplicationRole', ApplicationRole],
  ['ArticleRole', ArticleRole],
  ['AudioRole', AudioRole],
  ['BannerRole', BannerRole],
  ['BlockquoteRole', BlockquoteRole],
  ['BusyIndicatorRole', BusyIndicatorRole],
  ['ButtonRole', ButtonRole],
  ['CanvasRole', CanvasRole],
  ['CaptionRole', CaptionRole],
  ['CellRole', CellRole],
  ['CheckBoxRole', CheckBoxRole],
  ['ColorWellRole', ColorWellRole],
  ['ColumnHeaderRole', ColumnHeaderRole],
  ['ColumnRole', ColumnRole],
  ['ComboBoxRole', ComboBoxRole],
  ['ComplementaryRole', ComplementaryRole],
  ['ContentInfoRole', ContentInfoRole],
  ['DateRole', DateRole],
  ['DateTimeRole', DateTimeRole],
  ['DefinitionRole', DefinitionRole],
  ['DescriptionListDetailRole', DescriptionListDetailRole],
  ['DescriptionListRole', DescriptionListRole],
  ['DescriptionListTermRole', DescriptionListTermRole],
  ['DetailsRole', DetailsRole],
  ['DialogRole', DialogRole],
  ['DirectoryRole', DirectoryRole],
  ['DisclosureTriangleRole', DisclosureTriangleRole],
  ['DivRole', DivRole],
  ['DocumentRole', DocumentRole],
  ['EmbeddedObjectRole', EmbeddedObjectRole],
  ['FeedRole', FeedRole],
  ['FigcaptionRole', FigcaptionRole],
  ['FigureRole', FigureRole],
  ['FooterRole', FooterRole],
  ['FormRole', FormRole],
  ['GridRole', GridRole],
  ['GroupRole', GroupRole],
  ['HeadingRole', HeadingRole],
  ['IframePresentationalRole', IframePresentationalRole],
  ['IframeRole', IframeRole],
  ['IgnoredRole', IgnoredRole],
  ['ImageMapLinkRole', ImageMapLinkRole],
  ['ImageMapRole', ImageMapRole],
  ['ImageRole', ImageRole],
  ['InlineTextBoxRole', InlineTextBoxRole],
  ['InputTimeRole', InputTimeRole],
  ['LabelRole', LabelRole],
  ['LegendRole', LegendRole],
  ['LineBreakRole', LineBreakRole],
  ['LinkRole', LinkRole],
  ['ListBoxOptionRole', ListBoxOptionRole],
  ['ListBoxRole', ListBoxRole],
  ['ListItemRole', ListItemRole],
  ['ListMarkerRole', ListMarkerRole],
  ['ListRole', ListRole],
  ['LogRole', LogRole],
  ['MainRole', MainRole],
  ['MarkRole', MarkRole],
  ['MarqueeRole', MarqueeRole],
  ['MathRole', MathRole],
  ['MenuBarRole', MenuBarRole],
  ['MenuButtonRole', MenuButtonRole],
  ['MenuItemRole', MenuItemRole],
  ['MenuItemCheckBoxRole', MenuItemCheckBoxRole],
  ['MenuItemRadioRole', MenuItemRadioRole],
  ['MenuListOptionRole', MenuListOptionRole],
  ['MenuListPopupRole', MenuListPopupRole],
  ['MenuRole', MenuRole],
  ['MeterRole', MeterRole],
  ['NavigationRole', NavigationRole],
  ['NoneRole', NoneRole],
  ['NoteRole', NoteRole],
  ['OutlineRole', OutlineRole],
  ['ParagraphRole', ParagraphRole],
  ['PopUpButtonRole', PopUpButtonRole],
  ['PreRole', PreRole],
  ['PresentationalRole', PresentationalRole],
  ['ProgressIndicatorRole', ProgressIndicatorRole],
  ['RadioButtonRole', RadioButtonRole],
  ['RadioGroupRole', RadioGroupRole],
  ['RegionRole', RegionRole],
  ['RootWebAreaRole', RootWebAreaRole],
  ['RowHeaderRole', RowHeaderRole],
  ['RowRole', RowRole],
  ['RubyRole', RubyRole],
  ['RulerRole', RulerRole],
  ['ScrollAreaRole', ScrollAreaRole],
  ['ScrollBarRole', ScrollBarRole],
  ['SeamlessWebAreaRole', SeamlessWebAreaRole],
  ['SearchRole', SearchRole],
  ['SearchBoxRole', SearchBoxRole],
  ['SliderRole', SliderRole],
  ['SliderThumbRole', SliderThumbRole],
  ['SpinButtonRole', SpinButtonRole],
  ['SpinButtonPartRole', SpinButtonPartRole],
  ['SplitterRole', SplitterRole],
  ['StaticTextRole', StaticTextRole],
  ['StatusRole', StatusRole],
  ['SVGRootRole', SVGRootRole],
  ['SwitchRole', SwitchRole],
  ['TabGroupRole', TabGroupRole],
  ['TabRole', TabRole],
  ['TableHeaderContainerRole', TableHeaderContainerRole],
  ['TableRole', TableRole],
  ['TabListRole', TabListRole],
  ['TabPanelRole', TabPanelRole],
  ['TermRole', TermRole],
  ['TextFieldRole', TextFieldRole],
  ['TimeRole', TimeRole],
  ['TimerRole', TimerRole],
  ['ToggleButtonRole', ToggleButtonRole],
  ['ToolbarRole', ToolbarRole],
  ['TreeRole', TreeRole],
  ['TreeGridRole', TreeGridRole],
  ['TreeItemRole', TreeItemRole],
  ['UserInterfaceTooltipRole', UserInterfaceTooltipRole],
  ['VideoRole', VideoRole],
  ['WebAreaRole', WebAreaRole],
  ['WindowRole', WindowRole]
]);

export default AXObjectsMap;