import { FormValidatorConfigType } from "../../types";
import {
  isNotFalsy,
  isValidEmail,
  isValidZipCode,
  doesMeetPasswordRequirements,
  curriedLengthIsLessThan,
  isValidEmailList,
} from "./validator-functions";

export function getLengthMustBeLessThanNumberConfig(
  length: number
): FormValidatorConfigType {
  return {
    validator: curriedLengthIsLessThan(length + 1),
    message: `Must be less than ${length} characters.`,
  };
}

export const genericMaxLength = 256; // use lengthValidation256
export const genericMaxLengthPlusOne = genericMaxLength + 1;
export const lengthValidationGeneric = getLengthMustBeLessThanNumberConfig(
  genericMaxLength
);
export const lengthValidation10 = getLengthMustBeLessThanNumberConfig(10);
export const lengthValidation50 = getLengthMustBeLessThanNumberConfig(50);
export const lengthValidation30 = getLengthMustBeLessThanNumberConfig(30);
export const lengthValidation256 = getLengthMustBeLessThanNumberConfig(256);
export const lengthValidation512 = getLengthMustBeLessThanNumberConfig(512);

export const requiredEmptyMessageConfig: FormValidatorConfigType = {
  validator: isNotFalsy,
  message: "",
};

export const emailIsRequiredConfig: FormValidatorConfigType = {
  validator: isNotFalsy,
  message: "Email is required.",
};

export const emailIsValidConfig: FormValidatorConfigType = {
  validator: isValidEmail,
  message: "Please enter a valid email address.",
};

export const listOfEmailsIsValidConfig: FormValidatorConfigType = {
  validator: isValidEmailList,
  message: "Please enter a comma separated list of valid email address.",
};

export const emailValidationConfigs: FormValidatorConfigType[] = [
  emailIsRequiredConfig,
  emailIsValidConfig,
  {
    validator: curriedLengthIsLessThan(320),
    message: "Must be less than 320 characters.",
  },
];

export const zipCodeIsValidConfig: FormValidatorConfigType = {
  validator: isValidZipCode,
  message: "Please enter a valid zipcode.",
};

export const passwordRequiredConfig: FormValidatorConfigType = {
  validator: isNotFalsy,
  message: "Password is required.",
};

export const newPasswordComplexityConfig: FormValidatorConfigType[] = [
  passwordRequiredConfig,
  {
    validator: curriedLengthIsLessThan(101),
    message: "Cannot exceed 100 characters.",
  },
  {
    validator: doesMeetPasswordRequirements,
    message: "Does not meet requirements.",
  },
];

export function getRequiredValidationConfig(fieldDescriptor: string) {
  return {
    validator: isNotFalsy,
    message: `${fieldDescriptor} is required.`,
  };
}

export const firstNameValidators = [
  getRequiredValidationConfig("First Name"),
  getLengthMustBeLessThanNumberConfig(256),
];

export const lastNameValidators = [
  getRequiredValidationConfig("Last Name"),
  getLengthMustBeLessThanNumberConfig(256),
];
