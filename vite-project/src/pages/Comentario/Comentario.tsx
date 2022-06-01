import { Favorite, MoreVert } from "@mui/icons-material";

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

const Comentario = () => {

    return (
        <Card sx={{ margin: 2, width: '100%'}}>
            <CardActionArea>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "gray" }} aria-label="recipe">
                            A
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title='Nome da pessoa'
                    subheader='20 min atras'
                    
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Comentario Legal
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

    )
}

export default Comentario
