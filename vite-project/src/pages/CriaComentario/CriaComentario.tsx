import Grid from '@mui/material/Grid';
import * as React from 'react';
import { FormControl, FormHelperText, InputLabel, Input, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from '@mui/material';

export function CriaComentario(){
  const navigate = useNavigate();
  const {id_disc} = useParams(); 

  const [usuarioAtual, setUsuarioAtual] = React.useState([]);
    function getDataAsync() {
        const url = `/usuarios/me`;
        axios(url)
          .then(response => {        
            setUsuarioAtual(response.data);
          })
    };
    React.useEffect(() => {
        getDataAsync();
    }, []);
    const [descricao, setDescricao] = React.useState('');

  if(usuarioAtual.length == 0){
    return(
      <div>
      <Link to='/'><Alert className='alert-discussao' variant="filled">
          Erro! Usuário não logado.
      </Alert>
      </Link>
      </div>
      
    );
  }
  else{
    const idUsuarioLogado = usuarioAtual.id_usuario;
  //   return (
  //     <div>
  //       <form onSubmit={onClickComentario}>
  //       <Grid container spacing={2}>
  //         <Grid item xs container direction="column" spacing={2}
  //           sx={{alignItems: 'center', display: 'flex'}}>
  //           <Grid item xs sx={{alignItems: 'center', justifyContent: 'center'}}>
  //             <FormControl>
  //               <InputLabel htmlFor="my-input">Comentário</InputLabel>
  //               <Input id="my-input" aria-describedby="my-helper-text" value={descricao} onChange={(ev) => setDescricao(ev.target.value)}/>
  //             </FormControl>
  //           </Grid>
  //           <Button type='submit'>Comentar</Button>
  //         </Grid>
  //       </Grid>
  //       </form>
  //     </div>
  //   );
  // }
  function onClickComentario(ev) {
    ev.preventDefault();
    axios.post('/comentarios/', {descricao, idUsuarioLogado, id_disc})
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
}
}
