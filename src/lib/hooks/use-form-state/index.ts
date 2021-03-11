/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from "react";
import { isBlank } from "../../utils/string-utils";

type FormFieldKey<T> = keyof T;
type FormFieldErrors<T> = Partial<{ [key in FormFieldKey<T>]: string }>;
type FormFieldValidators<T> = Partial<
  { [key in FormFieldKey<T>]: (val: any, formFields?: any) => string }
>;

/**
 * Generates boilerplate form logic for pages with a disableable next button.
 * @param initialFormFields a flat object that will determine the shape of the form data
 * @param opts an options object for validations and errors
 * @param opts.requiredFields an array of keys that should be a subset of initialFormFields
 * @param opts.errorValidatorsForFields optional validators on a case by case basis
 * @param opts.initialErrors any initial errors we want the form to have
 *
 * @returns an object with the following fields:
 * * onFormFieldUpdate: callback to update and validate form fields
 * * formFieldValues: the current values of the form
 * * formFieldErrors: the current errors of the form
 * * submissionInProgress / setSubmissionInProgress: boolean state hook
 * * formError / setFormError: general state hook for either a global form error or form submission error
 * * hasAllRequiredFields: if false, a required field is missing or blank
 * * hasFormFieldErrors: if true, at least one key/val exists on formFieldErrors
 * * disableNextButton: the suggested disabled state of the form submit button
 */
export function useFormState<T>(
  initialFormFields: T,
  opts: {
    requiredFields?: FormFieldKey<T>[];
    errorValidatorsForFields?: FormFieldValidators<T>;
    initialErrors?: FormFieldErrors<T>;
  } = {}
) {
  const [formFieldValues, setFormFieldValues] = useState<T>(initialFormFields);
  // formError: general state hook for either a global form error or form submission error
  const [formError, setFormError] = useState<string>(null);
  const [formFieldErrors, setFormFieldErrors] = useState<FormFieldErrors<T>>(
    opts?.initialErrors || {}
  );
  const [hasAllRequiredFields, setHasAllRequiredFields] = useState(false);
  function onFormFieldUpdate(event: any) {
    const { value } = event.target;
    const name = event.target.name as FormFieldKey<T>;
    if (Object.keys(initialFormFields).indexOf(name as string) === -1) {
      console.warn(
        `useFormState - ${name} is missing from your list of initial formFieldValues: ${Object.keys(
          initialFormFields
        ).join(", ")}`
      );
    }
    if (
      opts?.errorValidatorsForFields &&
      opts?.errorValidatorsForFields[name]
    ) {
      setFormFieldErrors((prev) => {
        const newFormFieldErrors = { ...prev };
        newFormFieldErrors[name] = opts?.errorValidatorsForFields[name](
          value,
          formFieldValues
        );
        return newFormFieldErrors;
      });
    }
    setFormFieldValues((prev) => {
      const newFormFieldValues = { ...prev };
      newFormFieldValues[name] = value;
      return newFormFieldValues;
    });
  }
  useEffect(() => {
    if (opts?.requiredFields) {
      /* eslint-disable function-paren-newline */
      const remainingFields = opts.requiredFields.filter((name: keyof T) =>
        isBlank(formFieldValues[name])
      );
      /* eslint-enable function-paren-newline */
      setHasAllRequiredFields(remainingFields.length === 0);
    }
  }, [formFieldValues]);

  const [submissionInProgress, setSubmissionInProgress] = useState(false);
  const hasFormFieldErrors = Object.keys(formFieldErrors).some(
    (key) => !!formFieldErrors[key as keyof T]
  );
  const disableNextButton =
    !hasAllRequiredFields || submissionInProgress || hasFormFieldErrors;

  const getPropsForFormField = (fieldName: FormFieldKey<T>) => {
    return {
      name: fieldName,
      value: formFieldValues[fieldName],
      error: !!formFieldErrors[fieldName],
      helperText: formFieldErrors[fieldName],
      onChange: onFormFieldUpdate,
    };
  };
  return {
    onFormFieldUpdate,
    formFieldValues,
    setFormFieldValues,
    formFieldErrors,
    setFormFieldErrors,
    setSubmissionInProgress,
    submissionInProgress,
    formError,
    setFormError,
    hasAllRequiredFields,
    hasFormFieldErrors,
    disableNextButton,
    getPropsForFormField,
  };
}
