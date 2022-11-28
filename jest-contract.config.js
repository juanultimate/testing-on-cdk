module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/test/contract'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
