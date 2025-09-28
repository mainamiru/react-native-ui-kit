import BaseView from "./base-view";
import LayoutBase from "./layout-base";
import {
  LargeView,
  MediumView,
  SmallView,
  XLargeView,
} from "./responsive-views";
export { withLayout } from "./with-layout";

export const LayoutView = Object.assign(LayoutBase, {
  View: BaseView,
  Small: SmallView,
  Large: LargeView,
  Medium: MediumView,
  XLarge: XLargeView,
});
