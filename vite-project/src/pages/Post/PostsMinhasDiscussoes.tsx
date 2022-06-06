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
  function getDataAsync() {
    const url = `/discussoes/discussoes-usuario/${idUsuarioLogado}`;
    axios(url)
      .then(response =>        
        setDiscussoesDisc(response.data));
}
  useEffect(() => {
    getDataAsync();
  },[]);
    
  if(discussoesDisc.length == 0){
    return(
      <div align="center">
        <h4>Sem discussões criadas</h4>
      </div>
    );
  }
  else{
    return (
      <div>{discussoesDisc.map(discussao =>
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
        ))}</div>
    );
  }
};

export default PostMinhasDiscussoes;