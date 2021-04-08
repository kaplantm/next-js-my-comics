import { isBlank } from "@lib/utils/string-utils";
import { useEffect, useState } from "react";

type FormFieldKey<T> = keyof T;
type PartialFormFields<T> = Partial<{ [key in FormFieldKey<T>]: string }>;
type FormFieldValidators<T> = Partial<
  { [key in FormFieldKey<T>]: (val: any, formFields?: any) => string }
>;

type useFormStateReturnType<T> = {
  onFormFieldUpdate: (event: any) => void;
  formFieldValues: T;
  setFormFieldValues: (value: T) => void;
  formFieldErrors: PartialFormFields<T>;
  setFormFieldErrors: (value: T) => void;
  setSubmissionInProgress: (value: boolean) => void;
  submissionInProgress: boolean;
  formError: string;
  setFormError: (value: string) => void;
  formFieldHasBlurred: PartialFormFields<T>;
  onFormFieldBlur: (event: any) => void;
  hasAllRequiredFields: boolean;
  hasFormFieldErrors: boolean;
  disableSubmitButton: boolean;
  getPropsForFormField: (
    fieldName: FormFieldKey<T>
  ) => {
    name: FormFieldKey<T>;
    value: any;
    error: boolean;
    helperText: string;
    onChange: (event: any) => void;
  };
};

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
 * * disableSubmitButton: the suggested disabled state of the form submit button
 */
export function useFormState<T>(
  initialFormFields: T,
  opts: {
    requiredFields?: FormFieldKey<T>[];
    errorValidatorsForFields?: FormFieldValidators<T>;
    initialErrors?: PartialFormFields<T>;
  } = {}
): useFormStateReturnType<T> {
  const [formFieldValues, setFormFieldValues] = useState<T>(initialFormFields);
  const [formFieldHasBlurred, setFormFieldHasBlurred] = useState<
    PartialFormFields<T>
  >({});
  // formError: general state hook for either a global form error or form submission error
  const [formError, setFormError] = useState<string>(null);
  const [formFieldErrors, setFormFieldErrors] = useState<PartialFormFields<T>>(
    opts?.initialErrors || {}
  );
  const [hasAllRequiredFields, setHasAllRequiredFields] = useState(false);

  function onFormFieldUpdate(event: any) {
    const { value } = event.target;
    const name = event.target.name as FormFieldKey<T>;
    if (Object.keys(initialFormFields).indexOf(name as string) === -1) {
      console.warn(
        `${name} is missing from your list of initial formFieldValues: ${Object.keys(
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

  function onFormFieldBlur(event: any) {
    const name = event.target.name as FormFieldKey<T>;
    if (!formFieldHasBlurred[name]) {
      setFormFieldHasBlurred((prev) => ({ ...prev, [name]: true }));
    }
  }

  useEffect(() => {
    if (opts?.requiredFields) {
      const remainingFields = opts.requiredFields.filter((name: keyof T) =>
        isBlank(formFieldValues[name])
      );
      setHasAllRequiredFields(remainingFields.length === 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formFieldValues]);

  const [submissionInProgress, setSubmissionInProgress] = useState(false);
  const hasFormFieldErrors = Object.keys(formFieldErrors).some(
    (key: string) => !!formFieldErrors[key as keyof T]
  );
  const disableSubmitButton =
    !hasAllRequiredFields || submissionInProgress || hasFormFieldErrors;

  const getPropsForFormField = (fieldName: FormFieldKey<T>) => ({
    name: fieldName,
    value: formFieldValues[fieldName],
    error: !!formFieldErrors[fieldName],
    helperText: formFieldErrors[fieldName],
    onChange: onFormFieldUpdate,
  });

  return {
    onFormFieldUpdate,
    formFieldValues,
    setFormFieldValues,
    getPropsForFormField,
    formFieldErrors,
    setFormFieldErrors,
    setSubmissionInProgress,
    submissionInProgress,
    formError,
    setFormError,
    hasAllRequiredFields,
    hasFormFieldErrors,
    disableSubmitButton,
    formFieldHasBlurred,
    onFormFieldBlur,
  };
}
