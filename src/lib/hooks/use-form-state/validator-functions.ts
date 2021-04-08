import { FormValidatorConfigType } from "@lib/types";

export function isNotFalsy(value: string | number | boolean): boolean {
  return !!value;
}

/**
 * Returns an error message of the first validator in the validators param (or null)
 * @param value the value to pass to the validator
 * @param validators the list of validator configs
 * @param formFields (optional) all current values of the parent form
 */
export function runValidatorsAndReturnErrorMessage(
  value: any,
  validators: FormValidatorConfigType[],
  formFields?: any
): string {
  let errorMessage = null;
  validators.some((validatorConfig: FormValidatorConfigType) => {
    const didPassValidation = validatorConfig.validator(value, formFields);
    if (didPassValidation === false) {
      errorMessage = validatorConfig.message;
    }
    return !didPassValidation;
  });
  return errorMessage;
}
