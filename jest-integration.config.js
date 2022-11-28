module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/test/integration'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
