import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import PostMinhasDiscussoes from "../Post/PostsMinhasDiscussoes";
import { useEffect } from "react";
import axios from "axios";
import {
  useNavigate
} from "react-router-dom";


export function MInhasDiscussoes() {
  const navigate = useNavigate();

  const [usuarioAtual, setUsuarioAtual] = React.useState({});

  useEffect(() => {
    axios.get(`/usuarios/me/`)
      .then((res) => setUsuarioAtual(res.data))
      .catch((err) => console.log(err.response))
  }, []);

  const idUsuarioLogado = usuarioAtual.id_usuario;

  return (
    <div>
      {/* AQUI É SÓ DESCOMENTAR AS COISAS E FAZER A REQUISIÇÃO CERTINHA  */}
      <Box flex={3} p={{ xs: 0, md: 2 }}>
        <PostMinhasDiscussoes id_usuario={idUsuarioLogado} />
      </Box>

    </div>
  );
};