import Grid from '@mui/material/Grid';
import * as React from 'react';
import { FormControl, FormHelperText, InputLabel, Input, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export function CriaDiscussao(){

  const navigate = useNavigate();
  const {id_disc} = useParams(); 
  // const [usuarioAtual, setUsuarioAtual] = useState('');
  // axios.get('/usuarios/me').then((res) => setUsuarioAtual(res.data))
  // .catch((err) => console.log("NAO TA LOGADO"));
  // console.log(usuarioAtual);
  // if(usuarioAtual=='undefined' || usuarioAtual == ''){
  //   navigate('/');
  // }

  const [titulo, setTitulo] = React.useState('');
  const [descricao, setDescricao] = React.useState('');

  function onClickDiscussao(ev) {
    ev.preventDefault();
    axios.post('/discussoes', {titulo, descricao, id_disc})
    .then((res) => navigate(`/home/discussao/${id_disc}`))
    .catch((error) => alert(error.message));
  }

  return (
    <div>
      <form onSubmit={onClickDiscussao}>
      <Grid container spacing={2}>
        <Grid item xs container direction="column" spacing={2}
          sx={{alignItems: 'center', display: 'flex'}}>
          <Grid item xs>
            <FormControl>
              <InputLabel htmlFor="my-input">Título</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" value={titulo} onChange={(ev) => setTitulo(ev.target.value)}/>
            </FormControl>
          </Grid>
          <Grid item xs sx={{alignItems: 'center', justifyContent: 'center'}}>
            <FormControl>
              <InputLabel htmlFor="my-input">Discussões</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" value={descricao} onChange={(ev) => setDescricao(ev.target.value)}/>
            </FormControl>
          </Grid>
          <Button type='submit'>Enviar</Button>
        </Grid>
      </Grid>
      </form>

    </div>
  );
};
