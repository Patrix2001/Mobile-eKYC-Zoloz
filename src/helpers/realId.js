import {REAL_ID_INIT, REAL_ID_RESULT} from '../constants';

const RealId = () => {
  const init = async (
    metaInfo,
    docType = '00620000001',
    serviceLevel = 'REALID0001',
    operationMode = 'STANDARD',
  ) => {
    try {
      const url = REAL_ID_INIT;
      const options = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          metaInfo: metaInfo,
          docType: docType,
          serviceLevel: serviceLevel,
          operationMode: operationMode,
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
      const url = REAL_ID_RESULT;
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

export default RealId;
