import { toast } from "react-toastify";
// import { formMode } from "json/enums";
import apiErrorMsg from "../json/apiErrorMsg";

let { code, msg } = apiErrorMsg;

function showAPIError(error) {
  debugger;
  const errorMapping = {
    [code.ERR_NETWORK]: msg.NETWORK_MSG,
    [code.ERR_BAD_REQUEST]: error.response.data.title || error.message,
  };
  toast.error(errorMapping[error.code]);
  return {};
}

export { showAPIError };
