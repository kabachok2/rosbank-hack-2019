import React from "react";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { Button, Grid, Typography, Box } from "@material-ui/core";
import useStyles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Loading from "../../components/Loading";

const StyledInput = withStyles({
  root: {
    marginBottom: 20
  }
})(TextField);

/**
 * Страница с формой для ввода данных
 */
function FormPage() {
  const classes = useStyles();

  useEffect(() => {}, []);

  console.log(classes);
  return (
    <Box
      alignItems="center"
      display="flex"
      justifyContent="center"
      height="100vh"
    >
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h2">
          Создание новой заявки
        </Typography>

        <br></br>

        <Grid container direction="column">
          <StyledInput
            className={classes.input}
            label="Код агента"
            variant="outlined"
            required
          />
          <StyledInput label="Номер телефона" variant="outlined" required />
          <StyledInput label="Номер ИНН" variant="outlined" required />
          <StyledInput
            label="Комментарий"
            multiline={true}
            variant="outlined"
          />

          <Button variant="contained">Отправить</Button>
        </Grid>
      </Paper>
    </Box>
  );
}

export default FormPage;
