import Grid from '@mui/material/Grid';
import { FormControl, FormHelperText, InputLabel, Input } from '@mui/material';
import AddCommentIcon from '@mui/icons-material/AddComment';
import Comentario from '../Comentario/Comentario';
import {
  useNavigate
} from "react-router-dom";
import { useParams } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

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

    const [usuarioAtual, setUsuarioAtual] = useState([]);
    function getDataAsync() {
        const url = `/usuarios/me`;
        axios(url)
          .then(response => {        
            setUsuarioAtual(response.data);
          })
    };
    // const [mount, ]
    useEffect(() => {
        getDataAsync();
    }, []); 
    console.log(discussao);
    console.log(usuarioAtual);

  //   const [comentarios, setComentario] = useState([]);
  // useEffect (() => {
  //   axios.get(`/comentarios/discussao/${id_disc}`)
  //   .then((res) => setComentario(res.data))
  //   .catch((err) => console.log(err.response))
  // }, []);
  // console.log(comentarios);

  // const ComentariosDiscussao = comentarios.map(comentario => (
  //   <Comentario coment={comentario}/>
  //   <Comentario/>
  // ));
  const [conteudoDiscussao, setConteudoDiscussao] = useState('');

  if(discussao.length==0){
    return(<div><h4>Carregando...</h4></div>)
  }
  else{
    if(usuarioAtual.length == 0){
      return(<div>a</div>);
    }
    else{
      if(usuarioAtual.id_usuario == discussao.usuarioIdUsuario){
        function handleDelete() {
          axios.delete(`/discussoes/${discussao.id_discussao}`);
          navigate('/');
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
                      value={discussao.titulo}
                      />
                  </FormControl>
                </Grid>
                <Grid item xs sx={{alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                  <FormControl sx={{width: '100%'}}>
                    <InputLabel htmlFor="my-input"/>
                    <Input id="my-input" aria-describedby="my-helper-text"
                      value={discussao.descricao}
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
                      value={discussao.titulo}
                      />
                  </FormControl>
                </Grid>
                <Grid item xs sx={{alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                  <FormControl sx={{width: '100%'}}>
                    <InputLabel htmlFor="my-input"/>
                    <Input id="my-input" aria-describedby="my-helper-text"
                      value={discussao.descricao}
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
      }
    }    
    }
};
