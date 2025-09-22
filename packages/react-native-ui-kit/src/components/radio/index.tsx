import RadioBase from "./radio-base";
import RadioGroup from "./radio-group";
import RadioItem from "./radio-item";

export const Radio = Object.assign(RadioBase, {
  Item: RadioItem,
  Group: RadioGroup,
});
