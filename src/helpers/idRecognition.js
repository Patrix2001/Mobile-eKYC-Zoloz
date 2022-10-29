/* eslint-disable prettier/prettier */
import {ID_RECOGNITION_INIT, ID_RECOGNITION_RESULT} from '../constants';

const IdRecognition = () => {
  const init = async (metaInfo, docType, serviceLevel) => {
    try {
      const url = ID_RECOGNITION_INIT;
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
      const url = ID_RECOGNITION_RESULT;
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

export default IdRecognition;
