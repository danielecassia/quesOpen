import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from '@mui/material';
import { Alert } from '@mui/material';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export function Perfil() {
    const navigate = useNavigate();

    function calculaIdade(dataNasc){ 
        var dataAtual = new Date();
        var anoAtual = dataAtual.getFullYear();
        var anoNascParts = dataNasc.split('-');
        var diaNasc =anoNascParts[2];
        var mesNasc =anoNascParts[1];
        var anoNasc =anoNascParts[0];
        var idade = anoAtual - anoNasc;
        var mesAtual = dataAtual.getMonth() + 1; 
        //Se mes atual for menor que o nascimento, nao fez aniversario ainda;  
        if(mesAtual < mesNasc){
        idade--; 
        } else {
        //Se estiver no mes do nascimento, verificar o dia
        if(mesAtual == mesNasc){ 
        if(new Date().getDate() < diaNasc ){ 
        //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
        idade--; 
        }
        }
        } 
        return idade;
       }

    const [usuarioAtual, setUsuarioAtual] = React.useState([]);
    function getDataAsync() {
        const url = `/usuarios/me`;
        axios(url)
          .then(response => {        
            setUsuarioAtual(response.data);
          })
    }
    React.useEffect(() => {
        getDataAsync();
    }, []);    
    if(usuarioAtual.length == 0){
        return(
            <div>
                <Link key={usuarioAtual.id_usuario} to='/'><Alert className='alert-discussao' variant="filled">
                    Erro! Usuário não logado.
                </Alert>
                </Link>
            </div>
        )
    }
    else{
        function handleDelete() {
            axios.delete(`/usuarios/${usuarioAtual.id_usuario}`);
            navigate('/');
          }
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
                                    Nome: {usuarioAtual.nome_usuario}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    E-mail: {usuarioAtual.email}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Data de Nascimento: {usuarioAtual.data_nasc}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                    <Button variant="contained" sx={{ bgcolor: 'black', "&:hover": { bgcolor: 'red' } }}
                                        onClick={() => handleDelete()}>
                                        Deletar Conta
                                    </Button>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" component="div">
                                Idade: {calculaIdade(usuarioAtual.data_nasc)} anos
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}
