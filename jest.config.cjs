module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ["./jest.config.cjs"],
    transformIgnorePatterns: [],
    moduleNameMapper: {
        "^animate.css$":"<rootDir>/mocks/AnimationEffect.css.js",
        '\\.(css|less)$':'<rootDir>/test/mocks/styleMock.cjs'
    },
    transformIgnorePatterns: ["/node_modules/(?!query-string)/"],
    // setupFiles: ['./jest.setup.js']
};

