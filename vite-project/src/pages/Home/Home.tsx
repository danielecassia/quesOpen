import ImagemTeste from '../../assets/imagens/logo.svg';
import Mat from '../../assets/imagens/materias.png';
import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Item(props: BoxProps) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '1px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                p: 1,
                m: 1,
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}

export function Home() {
    const navigate = useNavigate();
    const [disciplinas, setDisciplinas] = useState([]);

    useEffect(() => {
        axios.get('/disciplinas')
        .then(
            (res) => setDisciplinas(res.data))
        .catch((err) => console.log(err.response))
    }, []); 

    const itensDisciplinas = disciplinas.map(disciplina =>
        (
        <Link key={disciplina.id_disciplina} to={`./discussao/${disciplina.id_disciplina}`} sx={{textDecoration: 'none'}}>            
            <Card sx={{ maxWidth: 345, marginLeft: 5, marginBottom: 5, maxHeight: 400}}>
                <CardActionArea sx={{ alignItems: 'center' }}>
                    <CardMedia
                        component="img"
                        height="80%"
                        image={Mat}
                        alt="green iguana"
                    />
                    <CardContent sx={{textDecoration: 'none'}}>
                        <Typography gutterBottom variant="h5" component="div" >
                            {disciplina.nome_disciplina}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    ));
    
    return (
        <div className="containerHome" style={{ width: '100%', height: '80%', overflow:'hidden'}}>
            <div className="divBoxHome">
                <Box sx={{ gridAutoRows: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', justifyContent: 'space-around',
                        justifyItems: 'center', width: '70%', marginTop:' 30px', marginBottom:' 30px', textDecoration: 'none'}}>
                            {itensDisciplinas}
                    </Box>
                </Box>
            </div>
        </div>
    );
}