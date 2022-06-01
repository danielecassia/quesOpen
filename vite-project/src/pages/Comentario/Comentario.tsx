import { Favorite, MoreVert } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";


export function Comentario() {
  return (
    <Card sx={{ margin: 2 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "gray" }} aria-label="recipe">
                C
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title='Comentário'
            subheader='sei la'
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              testeeeeeeeeeeeeeeeeeeee
            </Typography>
          </CardContent>
      </Card>
  );
};
