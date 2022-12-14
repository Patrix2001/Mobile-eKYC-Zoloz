const BASE_URL_API = '';

const REAL_ID_INIT = `${BASE_URL_API}/api/realid/initialize`;
const REAL_ID_RESULT = `${BASE_URL_API}/api/realid/result`;

const FACECAPTURE_INIT = `${BASE_URL_API}/api/facecapture/initialize`;
const FACECAPTURE_RESULT = `${BASE_URL_API}/api/facecapture/result`;

const ID_RECOGNITION_INIT = `${BASE_URL_API}/api/idrecognition/initialize`;
const ID_RECOGNITION_RESULT = `${BASE_URL_API}/api/idrecognition/result`;

const CONNECT_INIT = `${BASE_URL_API}/api/connect/initialize`;
const CONNECT_RESULT = `${BASE_URL_API}/api/connect/result`;

export {
  BASE_URL_API,
  CONNECT_INIT,
  CONNECT_RESULT,
  REAL_ID_INIT,
  REAL_ID_RESULT,
  FACECAPTURE_INIT,
  FACECAPTURE_RESULT,
  ID_RECOGNITION_INIT,
  ID_RECOGNITION_RESULT,
};
