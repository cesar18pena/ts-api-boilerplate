module.exports = {
  collectCoverage: true,
  coveragePathIgnorePatterns: ['./node_modules/'],
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '\\.(ts)$': 'ts-jest',
  },
  testEnvironment: 'node',
  testRegex: '/tests/.*\\.(ts|js)$',
};
