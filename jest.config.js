module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  passWithNoTests: true,
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: './coverage',
};
