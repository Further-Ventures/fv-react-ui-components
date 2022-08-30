module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: ['<rootDir>/build/'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
};
