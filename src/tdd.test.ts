/* eslint-disable */
// disabled eslint не мешает проведению TDD
import { describe, expect, it } from 'vitest';

describe('TDD', () => {
  it('it works', () => {
    console.log('ready');
    expect('ready').toEqual('ready');
  });
});
