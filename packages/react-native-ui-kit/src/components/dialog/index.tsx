import DialogBase from "./dialog-base";
import DialogContent from "./dialog-content";
import DialogDescription from "./dialog-description";
import DialogHeader from "./dialog-header";
import DialogTitle from "./dialog-title";
import DialogTrigger from "./dialog-trigger";

export const Dialog = Object.assign(DialogBase, {
  Title: DialogTitle,
  Header: DialogHeader,
  Content: DialogContent,
  Trigger: DialogTrigger,
  Description: DialogDescription,
});
