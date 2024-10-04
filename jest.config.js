module.exports = {
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['html', 'text'],
    coverageThreshold: {
      global: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100,
      },
    },
  };
  