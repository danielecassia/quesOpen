import Grid from '@mui/material/Grid';
import { FormControl, FormHelperText, InputLabel, Input } from '@mui/material';
import AddCommentIcon from '@mui/icons-material/AddComment';
import Comentario from '../Comentario/Comentario';
import {
  useNavigate
} from "react-router-dom";
import { useParams } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Alert } from '@mui/material';

import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export function AcessarDiscussao(){
  const navigate = useNavigate();
  
  let {id_disc} = useParams();
  const [discussao, setDiscussao] = useState([]);

    useEffect( () => {
        axios.get(`/discussoes/discussaoporid/${id_disc}`)
        .then(
            (res) => setDiscussao(res.data))
        .catch((err) => console.log(err.response))
    }, []);

    console.log(discussao);

    const [usuarioAtual, setUsuarioAtual] = useState([]);
    function getDataAsync() {
        const url = `/usuarios/me`;
        axios(url)
          .then(response => {        
            setUsuarioAtual(response.data);
          })
    };
    useEffect(() => {
        getDataAsync();
    }, []); 
    console.log(usuarioAtual);
  if(discussao.length==0){
    return(<div><h4>Erro ao carregar discussão ou não foi possível encontrar</h4></div>)
  }
  else{
    if(usuarioAtual == null || usuarioAtual.length == 0){
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
      if(usuarioAtual.id_usuario == discussao[0].usuarioIdUsuario){
        function handleDelete() {
          axios.delete(`/discussoes/${discussao[0].id_discussao}`);
          navigate('/home');
        }
        return (
          <div>
            <Grid container spacing={3} sx={{marginTop: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                <Button variant="contained" sx={{ bgcolor: 'black', "&:hover": { bgcolor: 'red' } }}
                  onClick={() => handleDelete()}
                  >
                Deletar Discussao
                </Button>
              </Typography>
            </Grid>
              <Grid item xs={6} container direction="column"
                sx={{alignItems: 'center', display: 'flex', marginTop: 'initial', width: '100%'}}>
                <Grid item sx={{width: '100%'}}>
                  <FormControl sx={{width: '100%'}}>
                    <InputLabel htmlFor="my-input"/>
                    <Input id="my-input" 
                      aria-describedby="my-helper-text"
                      value={discussao[0].titulo}
                      />
                  </FormControl>
                </Grid>
                <Grid item xs sx={{alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                  <FormControl sx={{width: '100%'}}>
                    <InputLabel htmlFor="my-input"/>
                    <Input id="my-input" aria-describedby="my-helper-text"
                      value={discussao[0].descricao}
                      />
                  </FormControl>
                </Grid>
                <Grid sx={{width: '100%'}}>
                  <Comentario id_discussao={id_disc}/>
                </Grid>
                <Grid sx={{width: '100%', display: 'flex', flexDirection: 'row-reverse'}}>
                  <AddCommentIcon sx={{    cursor: 'pointer'}}
                    onClick={() => navigate(`CriaComentario`)}
                  />
                </Grid>
              </Grid>
            </Grid>
      
          </div>
        );
      } else{
        return (
          <div>
            <Grid container spacing={3} sx={{marginTop: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Grid item xs={6} container direction="column"
                sx={{alignItems: 'center', display: 'flex', marginTop: 'initial', width: '100%'}}>
                <Grid item sx={{width: '100%'}}>
                  <FormControl sx={{width: '100%'}}>
                    <InputLabel htmlFor="my-input"/>
                    <Input id="my-input" 
                      aria-describedby="my-helper-text"
                      value={discussao[0].titulo}
                      />
                  </FormControl>
                </Grid>
                <Grid item xs sx={{alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                  <FormControl sx={{width: '100%'}}>
                    <InputLabel htmlFor="my-input"/>
                    <Input id="my-input" aria-describedby="my-helper-text"
                      value={discussao[0].descricao}
                      />
                  </FormControl>
                </Grid>
                <Grid sx={{width: '100%'}}>
                  <Comentario id_discussao={id_disc}/>
                </Grid>
                <Grid sx={{width: '100%', display: 'flex', flexDirection: 'row-reverse'}} >
                  <AddCommentIcon sx={{    cursor: 'pointer'}}
                    id = "comentario"
                    onClick={() => navigate(`CriaComentario`)}
                  />
                </Grid>
              </Grid>
            </Grid>
      
          </div>
        );
      }
    }    
    }
};
