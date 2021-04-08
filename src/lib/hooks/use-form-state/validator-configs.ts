import { FormValidatorConfigType } from "@lib/types";
import { isNotFalsy } from "./validator-functions";

export const requiredConfig: FormValidatorConfigType = {
  validator: isNotFalsy,
  message: "Required",
};

export const onlyRequiredConfigSet = [requiredConfig];
