module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: ['<rootDir>/build/'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^utils/(.*)$': '/src/utils/$1',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
};
