const verifyWalletAddress = (address) => {
  const regex = /^0x[0-9,a-f,A-F]{40}$/;

  if (regex.test(address)) {
    return address;
  } else {
    return null;
  }
};

export default verifyWalletAddress;
