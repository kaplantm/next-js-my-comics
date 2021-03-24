module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    "@lib/(.*)": "<rootDir>/src/lib/$1",
    "@components/(.*)": "<rootDir>/src/components/$1",
    "@hoc-components/(.*)": "<rootDir>/src/hoc-components/$1",
    "@page-containers/(.*)": "<rootDir>/src/page-containers/$1",
    "@page-layouts/(.*)": "<rootDir>/src/page-layouts/$1",
    "@redux/(.*)": "<rootDir>/src/redux/$1",
    "@mocks/(.*)": "<rootDir>/src/mocks/$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: ["**/**/*.spec.(ts|tsx)"],
  setupFiles: ["./jest.setup.js"],
  testPathIgnorePatterns: ["./.next/", "./node_modules/"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json",
    },
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
};
