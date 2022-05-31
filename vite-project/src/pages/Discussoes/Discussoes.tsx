import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "../Post/Post";
import ResponsiveAppBar from '../components/Navbar/Navbar';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export function DiscussoesTeste(){

  let {id} = useParams();
  const [discussoesDisc, setDiscussoesDisc] = useState([]);

    useEffect(() => {
        axios.get(`/discussoes/discussoes-disciplina/${id}`)
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
          <Stack spacing={1}>
          </Stack>
          {itensDisciplinas}
            {/* <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post /> */}
      </Box>

    </div>
  );
};
