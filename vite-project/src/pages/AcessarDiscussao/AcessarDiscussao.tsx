import Grid from '@mui/material/Grid';
import { FormControl, FormHelperText, InputLabel, Input } from '@mui/material';
import AddCommentIcon from '@mui/icons-material/AddComment';
import Comentario from '../Comentario/Comentario';
import {
  useNavigate
} from "react-router-dom";
import { useParams } from 'react-router-dom';

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
    // console.log(discussao);

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
              onClick={() => navigate(`criarComentario`)}
            />
          </Grid>
        </Grid>
      </Grid>

    </div>
  );
};
