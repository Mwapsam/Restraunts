
export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json',
        diagnostics: true,
        isolatedModules: true,
      },
    },
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
  };
  