import Api from './config.js';

const getEtherscanApi = async (walletAddress) => {
  if (typeof ethereum !== 'undefined') {
    const chainId = await ethereum.request({ method: 'eth_chainId' });

    let apiEndpoint = null;

    switch (chainId) {
      case '0x1':
        apiEndpoint = `${Api.baseUrl}api?module=account&action=txlist&address=${walletAddress.value}&apikey=${Api.key}`;
        break;

      case '0xaa36a7':
        apiEndpoint = `${Api.testnetUrl}api?module=account&action=txlist&address=${walletAddress.value}&apikey=${Api.key}`;
        break;

      default:
        console.warn(
          `The application is not configured for the selected network. Transaction history may not be recorded as expected. Verify your wallet settings for the correct supported network (mainnet, testnet, etc.). If issues persist, consult the application's documentation or contact support for assistance.`
        );
        break;
    }

    if (apiEndpoint !== null) {
      try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();

        return data;
      } catch (error) {
        throw error;
      }
    } else {
      console.error(`'Can't find a valid endpoint.`);
    }
  } else {
    console.error('No wallet provider detected.');
  }
};

export default getEtherscanApi;
