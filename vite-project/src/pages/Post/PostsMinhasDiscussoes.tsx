import { Favorite, MoreVert } from "@mui/icons-material";
import { styled } from '@mui/material/styles';
import {
  Avatar,
  Card,
  CardContent,
  CardActionArea,
  CardHeader,
  Box,
  Link,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const PostMinhasDiscussoes = (props) => { 
  let idUsuarioLogado = props.id_usuario;
  const [discussoesDisc, setDiscussoesDisc] = useState([]);
  useEffect(() => {
    axios.get(`/discussoes/discussoes-usuario/${idUsuarioLogado}`)
    .then(
        (res) => setDiscussoesDisc(res.data))
    .catch((err) => console.log(err.response))
  });

  console.log(discussoesDisc);
  
  const itensDiscussao = discussoesDisc.map(discussao =>
  (
    <Link href={`/home/discussao/acessaDiscussao/${discussao.id_discussao}`}>
    <Card sx={{ margin: 2 }}>
      <CardActionArea>
        <CardHeader 
          avatar={
            <Avatar sx={{ bgcolor: "gray" }} aria-label="recipe">
              {discussao.usuario.nome_usuario[0]}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={discussao.titulo}
          subheader={discussao.data_discussao.substring(0,10)}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {discussao.descricao}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
</Link> 
  ));
  
  return (
    <div>{itensDiscussao}</div>
  );
};

export default PostMinhasDiscussoes;