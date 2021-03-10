import {
  containsLowercaseLetter,
  containsNumber,
  containsUppercaseLetter,
  isValidEmail,
  isNotFalsy,
  doesMeetPasswordRequirements,
  curriedDoValuesMatch,
  curriedLengthIsMoreThan,
  curriedLengthIsLessThan,
  runValidatorsAndReturnErrorMessage,
  getIsFormValid,
} from './validator-functions';
import {
  emailValidationConfigs,
  newPasswordComplexityConfig,
} from './validation-configs';

describe('FormValidations', () => {
  const tooShortString = 'aA1';
  const tooLongString =
    // eslint-disable-next-line max-len
    '12345678912345678912345678912345678912345678912345674567891A12345678912345678912345678912345678912345678912345674567891A12345678';
  const stringWithoutLowercaseLetters = '!234A5678';
  const stringWithoutUppercaseLetters = '!2aa345678';
  const stringWithoutNumbers = 'stringWithoutNumbers?';
  const validPasswordString = '$v4lidPAssw0rdStr1ng%';
  const validEmailString = 'test@email.com';
  const emptyString = '';

  describe('containsLowercaseLetter', () => {
    test('should return true if string contains a lowercase letter', () => {
      expect(containsLowercaseLetter(stringWithoutNumbers)).toBe(true);
      expect(containsLowercaseLetter(stringWithoutUppercaseLetters)).toBe(true);
      expect(containsLowercaseLetter(validPasswordString)).toBe(true);
      expect.assertions(3);
    });
    test('should return false if string DOES NOT contain a lowercase letter', () => {
      expect(containsLowercaseLetter(stringWithoutLowercaseLetters)).toBe(
        false
      );
      expect(containsLowercaseLetter(emptyString)).toBe(false);
      expect.assertions(2);
    });
  });

  describe('containsUppercaseLetter', () => {
    test('should return true if string contains an uppercase letter', () => {
      expect(containsUppercaseLetter(stringWithoutNumbers)).toBe(true);
      expect(containsUppercaseLetter(stringWithoutLowercaseLetters)).toBe(true);
      expect(containsUppercaseLetter(validPasswordString)).toBe(true);
      expect.assertions(3);
    });
    test('should return false if string DOES NOT contain an uppercase letter', () => {
      expect(containsUppercaseLetter(stringWithoutUppercaseLetters)).toBe(
        false
      );
      expect(containsUppercaseLetter(emptyString)).toBe(false);
      expect.assertions(2);
    });
  });

  describe('containsNumber', () => {
    test('should return true if string contains a number', () => {
      expect(containsNumber(stringWithoutLowercaseLetters)).toBe(true);
      expect(containsNumber(stringWithoutUppercaseLetters)).toBe(true);
      expect(containsNumber(validPasswordString)).toBe(true);
      expect.assertions(3);
    });
    test('should return false if string DOES NOT contain a number', () => {
      expect(containsNumber(stringWithoutNumbers)).toBe(false);
      expect(containsNumber(emptyString)).toBe(false);
      expect.assertions(2);
    });
  });

  describe('curriedLengthIsLessThan', () => {
    test('should return true if string is longer than given number of chracters', () => {
      expect(curriedLengthIsLessThan(8)(tooShortString)).toBe(true);
      expect(curriedLengthIsLessThan(8)(emptyString)).toBe(true);
      expect.assertions(2);
    });
    test('should return false if string is shorter than given number of chracters', () => {
      expect(curriedLengthIsLessThan(8)(tooLongString)).toBe(false);
      expect.assertions(1);
    });
  });

  describe('curriedLengthIsMoreThan', () => {
    test('should return true if string is shorter than given number of chracters', () => {
      expect(curriedLengthIsMoreThan(8)(validPasswordString)).toBe(true);
      expect.assertions(1);
    });
    test('should return false if string is longer than given number of chracters', () => {
      expect(curriedLengthIsMoreThan(128)(tooLongString)).toBe(false);
      expect(curriedLengthIsMoreThan(8)(emptyString)).toBe(false);
      expect.assertions(2);
    });
  });

  describe('curriedDoValuesMatch', () => {
    test('should return true if string is matches the given value', () => {
      expect(curriedDoValuesMatch(tooLongString)(tooLongString)).toBe(true);
      expect(
        curriedDoValuesMatch(validPasswordString)(validPasswordString)
      ).toBe(true);
      expect(curriedDoValuesMatch(emptyString)(emptyString)).toBe(true);
      expect.assertions(3);
    });
    test('should return false if string does not match the given value', () => {
      expect(curriedDoValuesMatch(tooShortString)(tooLongString)).toBe(false);
      expect(curriedDoValuesMatch('4')(4)).toBe(false);
      expect.assertions(2);
    });
  });

  describe('isValidEmail', () => {
    test('should return true if string is a valid email', () => {
      expect(isValidEmail(validEmailString)).toBe(true);
      expect.assertions(1);
    });
    test('should return false if string is not valid email', () => {
      expect(isValidEmail(validPasswordString)).toBe(false);
      expect(curriedLengthIsMoreThan(8)(emptyString)).toBe(false);
      expect.assertions(2);
    });
  });

  describe('isNotFalsy', () => {
    test('should return true if string is not falsy', () => {
      expect(isNotFalsy(validEmailString)).toBe(true);
      expect(isNotFalsy(validPasswordString)).toBe(true);
      expect(isNotFalsy(tooShortString)).toBe(true);
      expect.assertions(3);
    });
    test('should return true if string is falsy', () => {
      expect(isNotFalsy(0)).toBe(false);
      expect(isNotFalsy(null)).toBe(false);
      expect(isNotFalsy(null)).toBe(false);
      expect(isNotFalsy(emptyString)).toBe(false);
      expect.assertions(4);
    });
  });

  describe('doesMeetPasswordRequirements', () => {
    test('should return true if string meets password requiremennts', () => {
      expect(doesMeetPasswordRequirements(validPasswordString)).toBe(true);
      expect.assertions(1);
    });
    test('should return false if string does not meet password requiremennts', () => {
      expect(doesMeetPasswordRequirements(tooShortString)).toBe(false);
      expect(doesMeetPasswordRequirements(tooLongString)).toBe(false);
      expect(doesMeetPasswordRequirements(stringWithoutLowercaseLetters)).toBe(
        false
      );
      expect(doesMeetPasswordRequirements(stringWithoutNumbers)).toBe(false);
      expect(doesMeetPasswordRequirements(stringWithoutUppercaseLetters)).toBe(
        false
      );
      expect.assertions(5);
    });
  });

  describe('runValidatorsAndReturnErrorMessage', () => {
    test('should return error message for first failed validator in list', () => {
      expect(
        runValidatorsAndReturnErrorMessage(
          validPasswordString,
          emailValidationConfigs
        )
      ).toBe('Please enter a valid email address.');
      expect(
        runValidatorsAndReturnErrorMessage(
          emptyString,
          newPasswordComplexityConfig
        )
      ).toBe('Password is required.');
      expect.assertions(2);
      expect(
        runValidatorsAndReturnErrorMessage(
          validEmailString,
          newPasswordComplexityConfig
        )
      ).toBe('Does not meet requirements.');
      expect.assertions(3);
    });
    test('should return null if all validators pass', () => {
      expect(
        runValidatorsAndReturnErrorMessage(
          validEmailString,
          emailValidationConfigs
        )
      ).toBe(null);
      expect(
        runValidatorsAndReturnErrorMessage(
          validPasswordString,
          newPasswordComplexityConfig
        )
      ).toBe(null);
      expect.assertions(2);
    });
  });

  describe('getIsFormValid', () => {
    test('should return true all if errors are null', () => {
      expect(getIsFormValid({ email: null, password: null })).toBe(true);
      expect.assertions(1);
    });
    test('should return false all if any error is not null', () => {
      expect(getIsFormValid({ email: 'Error', password: null })).toBe(false);
      expect(getIsFormValid({ email: null, password: undefined })).toBe(false);
      expect.assertions(2);
    });
  });
});
