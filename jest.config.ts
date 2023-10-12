import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  // [...]
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  preset: "ts-jest",
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "node",
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/**/*.(spec|test).ts",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
};

export default jestConfig;
