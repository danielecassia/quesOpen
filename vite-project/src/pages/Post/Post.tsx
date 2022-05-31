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

// typagem das props
interface typeProps{
    title: string
    description: string
    date: string
}

const Post = ({title, description, date} : typeProps) => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert/>
          </IconButton>
        }
        title={title}
        subheader={date}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
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