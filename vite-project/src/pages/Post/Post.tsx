import { Favorite, MoreVert } from "@mui/icons-material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

const Post = (props) => {
  let maiusc = (props.disc.usuario.nome_usuario[0]).toUpperCase();
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {maiusc}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert/>
          </IconButton>
        }
        title={props.disc.titulo}
        subheader={(props.disc.data_discussao.substring(0,10))}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.disc.descricao}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="comentar">
          <Checkbox
            icon={<ChatBubbleOutlineIcon />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;