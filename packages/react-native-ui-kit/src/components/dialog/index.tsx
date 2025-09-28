import DialogBase from "./dialog-base";
import DialogClose from "./dialog-close";
import DialogContent from "./dialog-content";
import DialogDescription from "./dialog-description";
import DialogFooter from "./dialog-footer";
import DialogHeader from "./dialog-header";
import DialogTitle from "./dialog-title";
import DialogTrigger from "./dialog-trigger";

export const Dialog = Object.assign(DialogBase, {
  Close: DialogClose,
  Title: DialogTitle,
  Footer: DialogFooter,
  Header: DialogHeader,
  Content: DialogContent,
  Trigger: DialogTrigger,
  Description: DialogDescription,
});
