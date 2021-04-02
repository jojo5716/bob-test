module.exports = {
    setupTestFrameworkScriptFile: '<rootDir>tests/setup.js',
    collectCoverage: true,
    coverageDirectory: 'coverage/',
    coverageReporters: ['lcov', 'text'],
    collectCoverageFrom: ['src/**/*.(js|jsx)'],
    coverageThreshold: {
        global: {
            statements: 98,
            branches: 99,
            functions: 95,
            lines: 99,
        },
    },
    testMatch: ['<rootDir>/tests/**/*test.js'],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    verbose: true,
    transformIgnorePatterns: ['/node_modules/'],
    moduleNameMapper: {
        '^@constants(.*)': '<rootDir>/src/constants/$1',
        '^@core(.*)': '<rootDir>/src/core/$1',
        '^@src(.*)': '<rootDir>/src/$1',
        '^@views(.*)': '<rootDir>/src/views/$1',
        '^@components(.*)': '<rootDir>/src/components/$1',
        '^@api(.*)': '<rootDir>/src/api/$1',
    },
    modulePathIgnorePatterns: [
        '<rootDir>/src/server.js',
        '<rootDir>/src/index.js',
        '<rootDir>/src/index-with-styles.js',
        '<rootDir>/src/core/store/configureStore*',
    ],
};
