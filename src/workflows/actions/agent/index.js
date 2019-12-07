import types from "./types";

/* ------------------------------------------------ */

const sendAgentData = data => ({
  type: types.SEND_AGENT_DATA,
  payload: data
});

const sendAgentDataSuccess = () => ({
  type: types.SEND_AGENT_DATA_SUCCESS
});

const sendAgentDataFailed = response => ({
  type: types.SEND_AGENT_DATA_FAILED
});

export default {
  sendAgentData,
  sendAgentDataSuccess,
  sendAgentDataFailed
};
