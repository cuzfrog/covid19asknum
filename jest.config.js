module.exports = {
  roots: [
    "<rootDir>/test"
  ],
  testEnvironment: "jsdom",
  setupFiles: ["<rootDir>/test/setup/test-setup.js"],
  setupFilesAfterEnv: ["jest-extended/all", "<rootDir>/test/setup/jest-dom.js"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/setup/__mocks__/file-mock.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "src/(.*)": "<rootDir>/src/$1",
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
  collectCoverage: false,
  coverageDirectory: "<rootDir>/build/coverage",
  collectCoverageFrom: [
    "src/**/*.{ts,tsx,js,jsx}",
  ],
};
