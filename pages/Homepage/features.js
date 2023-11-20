import { Grid, Typography } from "@mui/material";
import CardHome from "./cardHome";

const homeCards = [
  {
    title: "Search Topics",
    modalText: "When you type letter or word in the search bar it will show you topic related data",
  },
  {
    title: "Advanced search",
     modalText: "When you give the Topic Domain, Article Type and search key it will show you related data",
  },
  {
    title: "Articles",
    modalText: "You can search or publish articles",
  },
];

const Features = () => {
  return (
    <div
      className="features"
      style={{ backgroundColor: "#ffffff", backgroundRepeat: "no-repeat" }}
    >
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        pt={5}
        pl={5}
        pb={5}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#8a00c2",
            justifyContent: "center",
            marginLeft: 5,
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
          }}
        >
          Use Case
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid
          sx={{ pb: { md: 10, sm: 10, xs: 10 } }}
          container
          item
          direction="column"
          justify={"center"}
          alignItems={"center"}
          lg={3}
          md={6}
          sm={12}
        >
          <CardHome
            V1={homeCards[0].title}
            V2={homeCards[0].content}
            img="./asset/Search.png"
            modalTitle={homeCards[0].title}
            modalText={homeCards[0].modalText}
          />
        </Grid>

        <Grid
          sx={{ pb: { md: 10, sm: 10, xs: 10 } }}
          container
          item
          direction="column"
          justify={"center"}
          alignItems={"center"}
          lg={3}
          md={6}
          sm={12}
        >
          <CardHome
            V1={homeCards[1].title}
            V2={homeCards[1].content}
            img="./asset/advanced.jpg"
            modalTitle={homeCards[1].title}
            modalText={homeCards[1].modalText}
          />
        </Grid>

        <Grid
          sx={{ pb: { md: 10, sm: 10, xs: 10 } }}
          container
          item
          direction="column"
          justify={"center"}
          alignItems={"center"}
          lg={3}
          md={6}
          sm={12}
        >
          <CardHome
            V1={homeCards[2].title}
            V2={homeCards[2].content}
            img="./asset/publish.jpg"
            modalTitle={homeCards[2].title}
            modalText={homeCards[2].modalText}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Features;
