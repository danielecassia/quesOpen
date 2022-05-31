import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "../Post/Post";
import ResponsiveAppBar from '../components/Navbar/Navbar';

export function DiscussoesTeste(){

  return (
    <div>
      <ResponsiveAppBar/>
      <Box flex={3} p={{ xs: 0, md: 2 }}>
        <Post
        title="Pessoa que criou"
        date = "Data de postagem"
        description="Descrição da discussao"/>
      </Box>

    </div>
  );
};
