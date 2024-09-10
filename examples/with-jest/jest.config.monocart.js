const nextJest = require("next/jest");
const coverageOptions = require('./mcr.config.unit');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  collectCoverage: true,
  coverageProvider: 'v8',
  coverageDirectory: "./coverage/unit-monocart",
  collectCoverageFrom: [
      "app/**/*.{tsx,ts}",
      "pages/**/*.{tsx,ts}",
      "!dist"
   ],
   coverageReporters: ['none'],
   reporters: [
     "default",
     ['jest-monocart-coverage', coverageOptions]
   ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
