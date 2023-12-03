
// import { Box } from "@mui/system";
import "./Home.css";
import React from "react";
import { 
  // Paper,
   Typography,
    // IconButton,
     Button,
      Stack } from "@mui/material";
// import { Close } from "@mui/icons-material";
import { 
  // styled,
   useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";

// import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

// const receviedDateFromAPI = [{}, {}, {}, {}];

const Home = () => {
  const theme = useTheme();


  const myList = [
    { text: "This impressive paella is a perfect party dish and a fun meal tocook together with your guests." ,
  image:"https://i.etsystatic.com/12212700/r/il/b95bb9/3041211407/il_794xN.3041211407_2kia.jpg"
  },
    {
      text: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.",
      image:"//mui.com/static/images/cards/paella.jpg"
    },
    {
      image:"https://i.etsystatic.com/12212700/r/il/619fed/1764022704/il_1140xN.1764022704_nifu.jpg"

    },
    {
      image:"https://i.etsystatic.com/12212700/r/il/de612d/1811474049/il_794xN.1811474049_n4oz.jpg"

    }
  ];

  return (
    <Stack
      direction={"row"}
      sx={{ flexWrap: "wrap", justifyContent: "center" }}
    >
      {/* {receviedDateFromAPI.map((item) => { */}
        {myList.map((item) => {
        return (
          <Card sx={{ maxWidth: 277, mb: 6, mx: 2 }}
            key={item.image}
          >
            <CardMedia
              component="img"
              height="194"
              // image="//mui.com/static/images/cards/paella.jpg"
              image={item.image}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests.
                
              </Typography>
            </CardContent>
            <CardActions
              sx={{ justifyContent: "space-between" }}
              disableSpacing
            >
              <Button
                sx={{ textTransform: "capitalize", p: 1, lineHeight: 1.1 }}
                variant="contained"
                color="primary"
              >
                Add to cart
              </Button>

              <Typography
                mr={1}
                variant="body1"
                color={theme.palette.error.light}
              >
                $100
              </Typography>
            </CardActions>
          </Card>
        );
      })}
    </Stack>
  );
};

export default Home;
