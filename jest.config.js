module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,js}',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!jest.config.js',
  ],
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '\\.(ts)$': 'ts-jest',
  },
  testEnvironment: 'node',
  testRegex: '/tests/.*\\.(ts|js)$',
};
