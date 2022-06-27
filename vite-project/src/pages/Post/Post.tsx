import { Favorite, MoreVert } from "@mui/icons-material";
import { styled } from '@mui/material/styles';
import {
  Avatar,
  Card,
  CardContent,
  CardActionArea,
  CardHeader,
  Box,
  Link,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";


const Post = (props) => { 
  let maiusc = (props.disc.usuario.nome_usuario[0]).toUpperCase();
  return (
    // {console.log(props.disc.id_discussao);}
    <Link key={props.disc.id_discussao} href={`acessaDiscussao/${props.disc.id_discussao}`} sx={{textDecoration: 'none'}}>
    {/* discussao_infos = {props.disc.id_discussao} */}
      <Card sx={{ margin: 2 }}>
        <CardActionArea>
          <CardHeader 
            avatar={
              <Avatar sx={{ bgcolor: "gray" }} aria-label="recipe">
                {maiusc}
              </Avatar>
            }
            title={props.disc.titulo}
            subheader={(props.disc.data_discussao.substring(0, 10))}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {props.disc.descricao}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  </Link> 

  );
};

export default Post;