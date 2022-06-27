import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import PostMinhasDiscussoes from "../Post/PostsMinhasDiscussoes";
import { useEffect } from "react";
import axios from "axios";
import {
  useNavigate
} from "react-router-dom";


export function MinhasDiscussoes() {
  const navigate = useNavigate();

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
    console.log(usuarioAtual);

  if(usuarioAtual.length == 0){
    return(
      <div><h4>Carregando...</h4></div>
    )
  }
  else{
    const idUsuarioLogado = usuarioAtual.id_usuario;
    return (
      <div>
        {/* AQUI É SÓ DESCOMENTAR AS COISAS E FAZER A REQUISIÇÃO CERTINHA  */}
        <Box flex={3} p={{ xs: 0, md: 2 }}>
          <PostMinhasDiscussoes id_usuario={idUsuarioLogado} />
        </Box>
      </div>
    );
  }
};