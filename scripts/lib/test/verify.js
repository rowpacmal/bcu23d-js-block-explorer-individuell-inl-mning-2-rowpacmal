export function checkSenderInput(address) {
  if (typeof address === 'string') {
    return address;
  } else {
    throw new Error('The value must be a type of "string"');
  }
}
