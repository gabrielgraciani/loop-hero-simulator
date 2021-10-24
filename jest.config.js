module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts(x)?",
    "!src/styles/**",
    "!src/redux/**",
    "!src/interfaces/**",
    "!src/enum/**"
  ],
  setupFilesAfterEnv: [
    "<rootDir>/src/tests/setupTests.ts"
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
  },
  coverageReporters: ["lcov", "json", "json-summary"]
}
