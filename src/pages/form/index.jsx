import React from "react";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { Button, Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";

/**
 * Страница с формой для ввода данных
 */
function FormPage() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h2">
          Создание новой заявки
        </Typography>

        <br></br>

        <Grid container direction="column">
          <TextField id="standard-basic" label="Код агента" />
          <TextField id="standard-basic" label="Номер телефона" />
          <TextField id="standard-basic" label="Номер ИНН" />
          <TextField id="standard-basic" label="Комментарий" />
          <br></br>

          <Button>Отправить</Button>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default FormPage;
