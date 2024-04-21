module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  passWithNoTests: true,
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: './coverage',
  moduleNameMapper: {
    '\\.module\\.scss$': '<rootDir>/tests/styleMock.ts',
    '\\.scss$': '<rootDir>/tests/styleMock.ts',
  },
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
};
