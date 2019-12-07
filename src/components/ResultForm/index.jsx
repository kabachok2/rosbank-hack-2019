import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

function ResultForm({ data = {} }) {
  console.log(data);

  return (
    <Grid>
      <Paper>
        <Typography variant="h5" component="h2">
          {`Результат обработки заявки ${data.latitude}`}
        </Typography>
      </Paper>
    </Grid>
  );
}

export default ResultForm;
