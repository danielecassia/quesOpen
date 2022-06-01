import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "../Post/Post";
import Button from '@mui/material/Button';
import ResponsiveAppBar from '../components/Navbar/Navbar';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import {
  useNavigate,
  Link
  } from "react-router-dom";

export function DiscussoesTeste(){
  const navigate = useNavigate();

  function OnClickLogout(ev) {
    ev.preventDefault();
    axios.post('/logout')
    .then((res) => navigate('/'))
    .catch((error) => alert(error.message));
  }

  let {id_disc} = useParams();
  const [discussoesDisc, setDiscussoesDisc] = useState([]);

    useEffect(() => {
        axios.get(`/discussoes/discussoes-disciplina/${id_disc}`)
        .then(
            (res) => setDiscussoesDisc(res.data))
        .catch((err) => console.log(err.response))
    }, []);

    const itensDisciplinas = discussoesDisc.map(discussao =>
      (
      <Post disc={discussao}/>
  ));

  return (
    <div>
      <ResponsiveAppBar/>
      <Box flex={3} p={{ xs: 0, md: 2 }}>
        <Button variant="contained" color="success"
          onClick={()=>navigate(`criaDiscussao`)}>
          Criar Nova Discussão
        </Button>
        <Button variant="contained" color="success"
          onClick={OnClickLogout}>
          Logout
        </Button>
          {itensDisciplinas}
      </Box>

    </div>
  );
};
