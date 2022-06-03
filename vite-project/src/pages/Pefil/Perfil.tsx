import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export function Perfil() {
    return (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 700,
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                Nome da Pessoinha
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Email
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Data de Nascimento
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                <Button variant="contained" sx={{ bgcolor: 'black', "&:hover": { bgcolor: 'red' } }}
                                    onClick={() => alert("Conta deletada!!!! PROVISORIOOO")}>
                                    Deletar Conta
                                </Button>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                            Idade
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}
