import React from "react";
import { Container, Typography, Box, TextField } from "@material-ui/core";
import { useFormState } from "../src/lib/hooks/use-form-state";
import {
  curriedValueIsMoreThanOrEqual,
  runValidatorsAndReturnErrorMessage,
} from "../src/lib/hooks/use-form-state/validator-functions";
import {
  emailValidationConfigs,
  firstNameValidators,
  isWholeNumberConfig,
  lastNameValidators,
  lengthValidation256,
} from "../src/lib/hooks/use-form-state/validation-configs";
import LoaderButton from "../src/components/loader-button";
import { sleep } from "../src/lib/utils";
import AppTextField from "../src/components/form-inputs/app-text-field";

// TODO: add to filtered list
export default function useFormStatePage() {
  const {
    setSubmissionInProgress,
    onFormFieldUpdate,
    getPropsForFormField,
    formError,
    setFormError,
    formFieldValues,
    formFieldErrors,
    disableNextButton,
    submissionInProgress,
  } = useFormState(
    {
      firstName: "Jim",
      lastName: "Gordon",
      email: "jim@gcpd.gov",
      quote:
        "Bruce Wayne is a nice young chap - but he certainly must lead a boring life...",
      age: 38,
    },
    {
      requiredFields: ["firstName", "lastName"],
      errorValidatorsForFields: {
        firstName: (val: string) =>
          runValidatorsAndReturnErrorMessage(val, firstNameValidators),
        lastName: (val: string) =>
          runValidatorsAndReturnErrorMessage(val, lastNameValidators),
        email: (val: string) =>
          runValidatorsAndReturnErrorMessage(val, emailValidationConfigs),
        quote: (val: string) =>
          runValidatorsAndReturnErrorMessage(val, [lengthValidation256]),
        age: (val: string) =>
          runValidatorsAndReturnErrorMessage(val, [
            isWholeNumberConfig,
            {
              validator: curriedValueIsMoreThanOrEqual(14),
              message: "Must be at least 14 years old",
            },
          ]),
      },
    }
  );

  async function mockSubmission() {
    setSubmissionInProgress(true);
    await sleep();
    setSubmissionInProgress(false);
    setFormError(null);
  }
  async function mockBadSubmission() {
    setSubmissionInProgress(true);
    await sleep();
    setSubmissionInProgress(false);
    setFormError("Something went wrong");
  }

  return (
    <Container maxWidth="md">
      <Typography>
        This page has an example implementation of a custom{" "}
        <code>useFormState</code>hook to handle form submissions. You can choose
        to borrow this hook for your projects in lieu of a separate form
        library. You may find it beneficial to fully own the form management
        code in your project rather than use a library so it is fully
        extensible. You can find all the files needed to implement this hook in{" "}
        <code>src/lib/hooks/use-form-state</code>
      </Typography>
      <Box display="flex" flexDirection="column" justifyContent="center" mt={2}>
        <AppTextField
          {...getPropsForFormField("firstName")}
          label="First name"
        />
        <AppTextField {...getPropsForFormField("lastName")} label="Last name" />
        <AppTextField {...getPropsForFormField("age")} label="Age" />
        <AppTextField {...getPropsForFormField("quote")} label="Quote" />
      </Box>
      <Box mt={2} display="flex" alignItems="center">
        <LoaderButton
          loading={submissionInProgress}
          disabled={disableNextButton}
          onClick={mockSubmission}
        >
          Submit
        </LoaderButton>
        <LoaderButton
          loading={submissionInProgress}
          disabled={disableNextButton}
          onClick={mockBadSubmission}
        >
          Submit and throw error
        </LoaderButton>
        <Typography color="error">{formError}</Typography>
      </Box>
    </Container>
  );
}
