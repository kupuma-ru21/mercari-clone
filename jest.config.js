module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!<rootDir>/src/main/**/*',
    '!<rootDir>/src/**/router.tsx',
    '!<rootDir>/src/**/index.{ts,tsx}',
  ],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/src/main/config/jest-setup.ts'],
  testEnvironment: 'jsdom',
  transform: { '.+\\.(ts|tsx)$': 'ts-jest' },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '\\.scss$': 'identity-obj-proxy',
  },
};
