module.exports = {
    setupTestFrameworkScriptFile: '<rootDir>test/setup.js',
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
    testMatch: ['<rootDir>/test/**/*test.js'],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    verbose: true,
    transformIgnorePatterns: ['/node_modules/'],
    moduleNameMapper: {
        '^@src(.*)': '<rootDir>/src/$1',
    },
    modulePathIgnorePatterns: [],
};
