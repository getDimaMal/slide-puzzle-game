import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],

  transform: {
    '^.+\\.ts$': ['ts-jest', { tsconfig: '<rootDir>/tests/jest.tsconfig.json' }],
    '^.+\\.module\\.(css|scss|sass)$': 'jest-css-modules-transform',
  },
  moduleNameMapper: {
    '^.(css|scss|sass)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js|jsx)', '**/?(*.)+(spec|test).+(ts|tsx|js|jsx)'],

  testPathIgnorePatterns: [
    '/.husky/',
    '/.github/',
    '/node_modules/',
    '/coverage/',
    '/public/',
    '/tests/',
    '/dist/',
    '/out/',
  ],

  collectCoverage: true,
  coverageReporters: ['html'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts', '!src/**/index.ts', '!src/**/__tests__/**'],

  coverageThreshold: {
    global: {
      lines: 80,
      branches: 80,
      functions: 80,
      statements: 80,
    },
  },
};

export default config;
