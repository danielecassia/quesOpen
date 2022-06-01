import Grid from '@mui/material/Grid';
import { FormControl, FormHelperText, InputLabel, Input } from '@mui/material';
import Comentario from '../Comentario/Comentario';
import { useParams } from 'react-router-dom';
import { Card, Avatar, CardActionArea, CardHeader, IconButton, CardContent, Typography } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export function AcessarDiscussao(){
  let {id_disc} = useParams();
  const [discussao, setDiscussao] = useState([]);

    useEffect( () => {
        axios.get(`/discussoes/discussaoporid/${id_disc}`)
        .then(
            (res) => setDiscussao(res.data))
        .catch((err) => console.log(err.response))
    }, [id_disc]);
    console.log(discussao);

    const [comentarios, setComentario] = useState([]);
  useEffect (() => {
    axios.get(`/comentarios/discussao/${id_disc}`)
    .then((res) => setComentario(res.data))
    .catch((err) => console.log(err.response))
  }, []);
  console.log(comentarios);
  
  return (
    <div>
      <Grid container spacing={2} sx={{marginTop: 'auto'}}>
        <Grid item xs container direction="column" spacing={2}
          sx={{alignItems: 'center', display: 'flex', marginTop: 'initial', width: '100%'}}>
            <Card sx={{ margin: 2 }}>
            <CardActionArea>
              <CardHeader 
                avatar={
                  <Avatar sx={{ bgcolor: "gray" }} aria-label="recipe">
                    {/* {maiusc} */}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVert />
                  </IconButton>
                }
                title={discussao.titulo}
                // subheader={(discussao[0].data_discussao.substring(0, 10))}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {discussao.descricao}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          {/* <Grid item xs>
            <FormControl>
              <InputLabel htmlFor="my-input">Título</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text"/>
            </FormControl>
          </Grid> */}
          {/* <Grid item xs sx={{alignItems: 'center', justifyContent: 'center'}}>
            <FormControl>
              <InputLabel htmlFor="my-input">Discussões</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
          </Grid> */}
          <Grid>
            {/* <Comentario/> */}
          </Grid>
        </Grid>
      </Grid>

    </div>
  );
};
