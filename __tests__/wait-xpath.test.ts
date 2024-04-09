import { assert, test } from 'vitest';

import Parser from '../dist/index.es.js';
import htmlContent from './data/products.html';

const parser = new Parser(htmlContent);

test('must have an object with target', async () => {
  const response = await parser.waitXPath('//span[contains(@class, "a-color-price")]/span');
  assert.strictEqual(response.found, true);
});

test('must have an object with error', async () => {
  try {
    await parser.waitXPath('//span[contains(@class, "class-not-exists")]/span', 3);
  } catch (error: any) {
    assert.strictEqual(error.message, 'Element not found');
  }
});
