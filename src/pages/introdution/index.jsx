import React from "react";

import { connect } from "react-redux";

import { Grid, Box } from "@material-ui/core";

import agentActions from "../../workflows/actions/agent";
import IntrodutionForm from "../../components/IntrodutionForm";

import PropTypes from "prop-types";

/**
 * Страница с формой для ввода данных
 */
function IntrodutionPage({ sendAgentData, isRequestLoading }) {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item>
        <IntrodutionForm
          onButtonClick={sendAgentData}
          isLoading={isRequestLoading}
        ></IntrodutionForm>
      </Grid>
    </Grid>
  );
}

const mapDispatchToProps = dispatch => ({
  sendAgentData: data => dispatch(agentActions.sendAgentData(data))
});

const mapStateToProps = (state, ownProps) => ({
  isRequestLoading: state.loading
});

IntrodutionForm.propTypes = {
  sendAgentData: PropTypes.func,
  isRequestLoading: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(IntrodutionPage);
