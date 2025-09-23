import TabsBase from "./tabs-base";
import TabsContent from "./tabs-content";
import TabsHeader from "./tabs-header";
import TabsTrigger from "./tabs-trigger";

export const Tabs = Object.assign(TabsBase, {
  Header: TabsHeader,
  Content: TabsContent,
  Trigger: TabsTrigger,
});
