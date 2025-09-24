import BaseView from "./base-view";
import LayoutBase from "./layout-base";
import {
  LargeView,
  MediumView,
  SmallView,
  XLargeView,
} from "./responsive-views";
export { withLayout } from "./with-layout";

export const Layout = Object.assign(LayoutBase, {
  View: BaseView,
  SmallView,
  MediumView,
  LargeView,
  XLargeView,
});
