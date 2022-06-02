import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import PostMinhasDiscussoes from "../Post/PostsMinhasDiscussoes";
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import {
  useNavigate
  } from "react-router-dom";


export function MInhasDiscussoes(){
  const navigate = useNavigate();

  const[usuarioAtual, setUsuarioAtual] = React.useState({});
  
  useEffect (() => {
    axios.get(`/usuarios/me/`)
    .then((res) => setUsuarioAtual(res.data))
    .catch((err) => console.log(err.response))
  }, []);

  const idUsuarioLogado = usuarioAtual.id_usuario;

  return (
    <div>
      {/* AQUI É SÓ DESCOMENTAR AS COISAS E FAZER A REQUISIÇÃO CERTINHA  */}
      <Box flex={3} p={{ xs: 0, md: 2 }}>
        <Button variant="contained" sx={{bgcolor:'gray', "&:hover":{bgcolor:'black'}}}
          onClick={()=>navigate(`criaDiscussao`)}>
          Criar Nova Discussão
        </Button>
          <PostMinhasDiscussoes id_usuario={idUsuarioLogado}/>
      </Box>

    </div>
  );
};