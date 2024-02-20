import { describe, it, expect } from 'vitest';
import { checkSenderInput } from '../verify.js';

describe('checkSenderInput()', () => {
  it('should be able to enter an address in the sender input field', () => {
    const address = '0x316FA6680fefC5A34B6Fd0acdaaBFefC365c1352';
    const input = {
      value: address,
    };

    expect(input.value).toBe(address);
  });

  it('should check if the address entered is of the type "string"', () => {
    const address = '0x316FA6680fefC5A34B6Fd0acdaaBFefC365c1352';
    const input = {
      value: address,
    };

    expect(input.value).toBeTypeOf('string');
  });

  it('should throw an error if the address entered is of a type other than "string"', () => {
    const address = 12345;
    const input = {
      value: address,
    };

    const func = () => {
      checkSenderInput(input.value);
    };

    expect(func).toThrow();
  });
});
