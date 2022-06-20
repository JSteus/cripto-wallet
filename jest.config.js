module.exports = {
  testPathIgnorePatterns: ["/node_modules"],
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "test-file-stub",
    "\\.(scss|css|sass|png)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
};
