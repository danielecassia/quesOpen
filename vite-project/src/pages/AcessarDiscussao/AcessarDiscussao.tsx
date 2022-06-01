import Grid from '@mui/material/Grid';
import { FormControl, FormHelperText, InputLabel, Input } from '@mui/material';
import Comentario from '../Comentario/Comentario';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { Navigate } from 'react-router-dom';
import {
  useNavigate
  } from "react-router-dom";

export function AcessarDiscussao(){
  const navigate = useNavigate();

  return (
    <div>
      <Grid container spacing={3} sx={{marginTop: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Grid item xs={6} container direction="column"
          sx={{alignItems: 'center', display: 'flex', marginTop: 'initial', width: '100%'}}>
            Aqui vamos pegar os dados do back e preencher os inputs
          <Grid item sx={{width: '100%'}}>
            <FormControl sx={{width: '100%'}}>
              <InputLabel htmlFor="my-input">Título</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text"/>
            </FormControl>
          </Grid>
          <Grid item xs sx={{alignItems: 'center', justifyContent: 'center', width: '100%'}}>
            <FormControl sx={{width: '100%'}}>
              <InputLabel htmlFor="my-input">Discussões</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
          </Grid>
          <Grid sx={{width: '100%'}}>
            <Comentario/>
          </Grid>
          <Grid sx={{width: '100%', display: 'flex', flexDirection: 'row-reverse'}}>
            <AddCommentIcon sx={{    cursor: 'pointer'}}
              onClick={() => navigate(`criarComentario`)}
            />
          </Grid>
        </Grid>
      </Grid>

    </div>
  );
};
