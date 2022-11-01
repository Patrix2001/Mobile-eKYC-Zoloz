import {CONNECT_INIT, CONNECT_RESULT} from '../constants';

const ConnectAuth = () => {
  const init = async (
    metaInfo,
    serviceLevel = 'CONNECT0001',
    sceneCode = 'Testing Login',
  ) => {
    try {
      const url = CONNECT_INIT;
      const options = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          metaInfo: metaInfo,
          sceneCode: sceneCode,
          serviceLevel: serviceLevel,
        }),
      };
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const result = async transactionId => {
    try {
      const url = CONNECT_RESULT;
      const options = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          state: transactionId,
        }),
      };
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    init,
    result,
  };
};

export default ConnectAuth;
