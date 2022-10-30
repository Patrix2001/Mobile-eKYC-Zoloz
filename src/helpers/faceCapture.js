import {FACECAPTURE_INIT, FACECAPTURE_RESULT} from '../constants';

const FaceCapture = () => {
  const init = async (metaInfo, serviceLevel) => {
    try {
      const url = FACECAPTURE_INIT;
      const options = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          metaInfo: metaInfo,
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
      const url = FACECAPTURE_RESULT;
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

export default FaceCapture;
