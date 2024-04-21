module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  passWithNoTests: true,
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: './coverage',
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/index.{js,ts}', '!src/**/*.d.ts'],
  moduleNameMapper: {
    '\\.module\\.scss$': '<rootDir>/tests/styleMock.ts',
    '\\.scss$': '<rootDir>/tests/styleMock.ts',
  },
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/coverage/'],
};
