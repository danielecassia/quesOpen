import { Favorite, MoreVert } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";
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

const Comentario = (props) => {
    
    // let maiusc = props.comentario.usuario.nome_usuario;
    const [comentarios, setComentario] = useState([]);
    useEffect (() => {
      axios.get(`/comentarios/discussao/${props.id_discussao}`)
      .then((res) => setComentario(res.data))
      .catch((err) => console.log(err.response))
    }, []);

    const ComentariosDiscussao = comentarios.map(comentario => (
        <Card sx={{ margin: 2, width: '100%'}}>
            <CardActionArea>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "gray" }} aria-label="recipe">
                            {comentario.usuario.nome_usuario[0].toUpperCase()}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title={comentario.usuario.nome_usuario}
                    subheader={comentario.data_comentario.substring(0,10)}
                    
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {comentario.descricao_comentario}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    ));

    return (
        
        <div>{ComentariosDiscussao}</div>
    )
}

export default Comentario
