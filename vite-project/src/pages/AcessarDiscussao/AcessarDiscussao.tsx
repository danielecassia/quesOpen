import Grid from '@mui/material/Grid';
import ResponsiveAppBar from '../components/Navbar/Navbar';
import { FormControl, FormHelperText, InputLabel, Input } from '@mui/material';
import { Comentario } from '../Comentario/Comentario';

export function AcessarDiscussao(){

  return (
    <div>
      <ResponsiveAppBar/>
      <Grid container spacing={2} sx={{marginTop: 'auto'}}>
        <Grid item xs container direction="column" spacing={2}
          sx={{alignItems: 'center', display: 'flex', marginTop: 'initial', width: '100%'}}>
            Aqui vamos pegar os dados do back e preencher os inputs
          <Grid item xs>
            <FormControl>
              <InputLabel htmlFor="my-input">Título</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text"/>
            </FormControl>
          </Grid>
          <Grid item xs sx={{alignItems: 'center', justifyContent: 'center'}}>
            <FormControl>
              <InputLabel htmlFor="my-input">Discussões</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
          </Grid>
          <Grid>
            <Comentario/>
          </Grid>
        </Grid>
      </Grid>

    </div>
  );
};
