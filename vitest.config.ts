import { defineConfig } from 'vitest/config';

export default defineConfig(() => {
  return {
    test: {
      include: ['**/*.test.ts'],
      pool: 'forks',
      clearMocks: true,
      testTimeout: 60000, // 30 seconds in milliseconds
    },
  };
});
