import { call, put, takeEvery } from "redux-saga/effects";
import agentApi from "../../../api/agent";
import agentActions from "../../actions/agent";
import agentActionsTypes from "../../actions/agent/types";

function* sendAgentDataHandler(action) {
  try {
    yield call(() => agentApi.sendAgentData(action.payload));
    yield put(agentActions.sendAgentDataSuccess());

    window.location = "/loading";
  } catch (e) {
    console.log(e);
    yield put(agentActions.sendAgentDataFailed(e));
  }
}

function* sendAgentData() {
  yield takeEvery(agentActionsTypes.SEND_AGENT_DATA, sendAgentDataHandler);
}

export default [sendAgentData];