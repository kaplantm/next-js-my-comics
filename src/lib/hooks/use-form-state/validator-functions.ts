import { differenceInYears, isAfter, isValid } from "date-fns";
import { FormValidatorConfigType, Nullable } from "../../types";
// TODO: remove?
export const passwordRequirementsNotMetError =
  "Password does not meet requirements";

export function containsLowercaseLetter(value: string): boolean {
  return /[a-z]/g.test(value);
}

export function containsUppercaseLetter(value: string): boolean {
  return /[A-Z]/g.test(value);
}

export function containsNumber(value: string): boolean {
  return /\d/g.test(value);
}

export function isValidEmail(value: string) {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
}

export function isValidEmailList(value: string) {
  if (!value) {
    return true;
  }
  const emailList = value.split(",");
  if (!emailList.length) {
    return true;
  }
  return emailList.every((email) => isValidEmail(email.trim()));
}

// USA zip codes only
export function isValidZipCode(value: string) {
  return /^\d{5}(?:[-\s]\d{4})?$/.test(value);
}

export function isNotFalsy(value: string | number | boolean) {
  return !!value;
}

export function doesMeetPasswordRequirements(value: string) {
  if (!value) {
    return false;
  }
  if (
    value.length < 8 ||
    !containsLowercaseLetter(value) ||
    !containsUppercaseLetter(value) ||
    !containsNumber(value)
  ) {
    return false;
  }
  return true;
}

export function curriedDoValuesMatch(
  valueToMatchTo: string | number | boolean
) {
  return (value: string | number | boolean) => value === valueToMatchTo;
}

export function curriedLengthIsMoreThan(length: number) {
  return (value: string) => (value && value.length > length) || false;
}

export function curriedMustBeOneOf(arr: (string | number)[]) {
  return (value: string | number) => arr.includes(value);
}

export function curriedLengthIsLessThan(length: number) {
  return (value: string) => (value?.length || 0) < length || false;
}

export function curriedValueIsMoreThan(minimumValue: number) {
  return (value: number) => (value && value > minimumValue) || false;
}

export function curriedValueIsMoreThanOrEqual(minimumValue: number) {
  return (value: number) => (value && value >= minimumValue) || false;
}

export function curriedValueIsLessThan(maximumValue: number) {
  return (value: number) => (value && value < maximumValue) || false;
}

export function curriedValueIsLessThanOrEqual(maximumValue: number) {
  return (value: number) =>
    value === 0 || (value && value <= maximumValue) || false;
}

export function isWholeNumber(number: number | string) {
  if (typeof number === "string") {
    return !number.includes(".");
  }
  return number % 1 === 0;
}

export function isDateValid(date: string | number) {
  return isValid(typeof date === "string" ? Date.parse(date as string) : date);
}

export function getYearsSinceNow(date: string) {
  return differenceInYears(Date.now(), Date.parse(date));
}

export const curriedIsAtLeastYearsOld = (years: number) => (date: string) => {
  if (!isDateValid(date)) {
    return true;
  }
  return getYearsSinceNow(date) >= years;
};

export const isAtLeastEighteenYearsOld = curriedIsAtLeastYearsOld(18);

export const isAtLeastFourteenYearsOld = curriedIsAtLeastYearsOld(14);

export const isInPast = (date: string) => {
  if (!isDateValid(date)) {
    return true;
  }
  return isAfter(new Date(), new Date(date));
};

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
): Nullable<string> {
  let errorMessage = null;
  validators.some((validatorConfig) => {
    const didPassValidation = validatorConfig.validator(value, formFields);
    if (didPassValidation === false) {
      errorMessage = validatorConfig.message;
    }
    return !didPassValidation;
  });
  return errorMessage;
}

// Form errors are initialized to undefined and become null if a field passes validation
export function getIsFormValid(errors: { [key: string]: string }) {
  const hasError = Object.values(errors).some(
    (fieldError) => fieldError !== null
  );
  return !hasError;
}
