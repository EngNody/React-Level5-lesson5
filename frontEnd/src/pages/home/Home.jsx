
// import { Box } from "@mui/system";
import "./Home.css";
import React from "react";
import { 
  // Paper,
   Typography,
    // IconButton,
     Button,
      Stack, 
      CircularProgress,
      Box} from "@mui/material";
// import { Close } from "@mui/icons-material";
import { 
  // styled,
   useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { useGetproductsByNameQuery } from '../../redux/productsApi'








// const receviedDateFromAPI = [{}, {}, {}, {}];

const Home = () => {
  const theme = useTheme();
  const { data, error, isLoading } = useGetproductsByNameQuery()
  console.log(data)


  if (isLoading) {
    return(
      <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    )
  }

  // const myList = [
  //   { text: "This impressive paella is a perfect party dish and a fun meal tocook together with your guests." ,
  // // image:"https://i.etsystatic.com/12212700/r/il/b95bb9/3041211407/il_794xN.3041211407_2kia.jpg",
  // id:"1"

  // },
  //   {
  //     text: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.",
  //     // image:"//mui.com/static/images/cards/paella.jpg", 
  //     id:"2"
  //   },
  //   {
  //     // image:"https://i.etsystatic.com/12212700/r/il/619fed/1764022704/il_1140xN.1764022704_nifu.jpg",
  //     id:"3"
  //   },
  //   {
  //     // image:"https://i.etsystatic.com/12212700/r/il/de612d/1811474049/il_794xN.1811474049_n4oz.jpg",
  //     id:"4"

  //   }
  // ];

  return (
    <Stack
      direction={"row"}
      sx={{ flexWrap: "wrap", justifyContent: "center" }}
    >
      {/* {receviedDateFromAPI.map((item) => { */}
      {/* {myList.map((item) => { */}


            {data.map((item) => {

        return (
          <Card className="card" sx={{ maxWidth: 277, mb: 6, mx: 2 }}
            key={item.id}
          >
            <CardMedia
              component="img"
              height="194"
              // image="//mui.com/static/images/cards/paella.jpg"
              image={item.imageLink}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {item.description}
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
               $ {item.price}
              </Typography>
            </CardActions>
          </Card>
        );
      })}
    </Stack>
  );
};

export default Home;
