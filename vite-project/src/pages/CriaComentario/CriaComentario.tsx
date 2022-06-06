import Grid from '@mui/material/Grid';
import * as React from 'react';
import { FormControl, FormHelperText, InputLabel, Input, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import axios from 'axios';

export function CriaComentario(){

  const navigate = useNavigate();
  const {id_disc} = useParams(); 

  const[usuarioAtual, setUsuarioAtual] = React.useState({});
  
  useEffect (() => {
    axios.get(`/usuarios/me/`)
    .then((res) => setUsuarioAtual(res.data))
    .catch((err) => console.log(err.response))
  }, []);

  const idUsuarioLogado = usuarioAtual.id_usuario;

  const [titulo, setTitulo] = React.useState('');
  const [descricao, setDescricao] = React.useState('');

  function onClickComentario(ev) {
    ev.preventDefault();
    axios.post('/comentarios/', {titulo, descricao, idUsuarioLogado, id_disc})
    .then((res) => navigate(`/home/discussao/acessaDiscussao/${id_disc}`)) 
    .catch((error) => alert(error.message));
  }

  return (
    <div>
      <form onSubmit={onClickComentario}>
      <Grid container spacing={2} sx={{ alignItems: 'center', justifyContent: 'center'}}>
          <Paper
            sx={{
              p: 2,
              margin: 'auto',
              maxWidth: 700,
              flexGrow: 1,
              alignItems: 'center', 
              display: 'flex',
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <Grid item xs container direction="column" spacing={2}
              sx={{alignItems: 'center', display: 'flex'}}>
              <Grid item xs sx={{alignItems: 'center', justifyContent: 'center', marginBottom: 2}}>
                <FormControl sx={{ width: 500 }}>
                  <InputLabel htmlFor="my-input">Comentário</InputLabel>
                  <Input id="my-input" aria-describedby="my-helper-text" value={descricao} onChange={(ev) => setDescricao(ev.target.value)}/>
                </FormControl>
              </Grid>
              <Button type='submit'>Comentar</Button>
            </Grid>
          </Paper>
      </Grid>
      </form>
    </div>
  );
};
