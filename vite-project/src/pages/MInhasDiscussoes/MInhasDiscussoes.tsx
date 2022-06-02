import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "../Post/Post";
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import {
  useNavigate
  } from "react-router-dom";

export function MInhasDiscussoes(){
  // const navigate = useNavigate();

  // let {id_disc} = useParams();
  // const [discussoesDisc, setDiscussoesDisc] = useState([]);

  //   useEffect(() => {
  //       axios.get(`/discussoes/discussoes-disciplina/${id_disc}`)
  //       .then(
  //           (res) => setDiscussoesDisc(res.data))
  //       .catch((err) => console.log(err.response))
  //   }, []);

  //   const itensDisciplinas = discussoesDisc.map(discussao =>
  //     (
  //     <Post disc={discussao}/>
  // ));

  return (
    <div>
      AQUI É SÓ DESCOMENTAR AS COISAS E FAZER A REQUISIÇÃO CERTINHA 
      {/* <Box flex={3} p={{ xs: 0, md: 2 }}>
        <Button variant="contained" sx={{bgcolor:'gray', "&:hover":{bgcolor:'black'}}}
          onClick={()=>navigate(`criaDiscussao`)}>
          Criar Nova Discussão
        </Button>
          {itensDisciplinas}
      </Box> */}

    </div>
  );
};
