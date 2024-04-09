import { defineConfig } from 'vitest/config';

export default defineConfig(() => {
  return {
    test: {
      environment: 'jsdom',
      include: ['**/*.test.ts'],
      pool: 'forks',
      clearMocks: true,
      testTimeout: 60000, // 30 seconds in milliseconds
    },
  };
});
