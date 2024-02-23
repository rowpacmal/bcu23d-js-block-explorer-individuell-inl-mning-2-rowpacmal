import { it, expect, describe } from 'vitest';
import verifyWalletAddress from '../func/verifyWalletAddress.js';

describe('verifyWalletAddress()', () => {
  it('should not return "null" if the input is a wallet address', () => {
    const address = '0x316FA6680fefC5A34B6Fd0acdaaBFefC365c1352';

    const func = verifyWalletAddress(address);

    expect(func).not.toBeNull();
  });

  it('should return "null" if the input is not a wallet address', () => {
    const hash =
      '0x1a0f465570df7153b641f346351a69c1978660ffddd094d16102d6cccd9ba888';

    const func = verifyWalletAddress(hash);

    expect(func).toBeNull();
  });
});
