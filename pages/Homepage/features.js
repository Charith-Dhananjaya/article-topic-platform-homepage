import {Grid, Typography} from "@mui/material"
import CardHome from "./cardHome"



const homeCards = [
    {title: "Search Topics", content: "Search Topics content is here"},
    {title: "Advanced search", content: "Advanced search content is here"},
    {title: "Flag mark topics", content: "Flag mark topics content is here"},
    {title: "Articles", content: "Articles content is here"},
];


const Features = () => {
    return (
        <div className="features"
             style={{
                 backgroundColor: '#ffffff',
                 backgroundRepeat: "no-repeat",
                 minHeight: "100vh",
             }}>


            <Grid container direction="row" justifyContent={"flex-start"} alignItems="center" pt={10} pl={5} pb={5}>
                <Typography style={{color: "#8a00c2"}} variant="h2">Features</Typography>
            </Grid>

            <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
                <Grid sx={{pb: {md: 10, sm: 10, xs: 10}}} container item direction="column" justify={"center"}
                      alignItems={"center"} lg={3} md={6} sm={12}>
                    <CardHome V1={homeCards[0].title} V2={homeCards[0].content} img="./asset/Search.png"/>
                </Grid>

                <Grid sx={{pb: {md: 10, sm: 10, xs: 10}}} container item direction="column" justify={"center"}
                      alignItems={"center"} lg={3} md={6} sm={12}>

                    <CardHome V1={homeCards[1].title} V2={homeCards[1].content} img="./asset/advanced.jpg"/>

                </Grid>

                <Grid sx={{pb: {md: 10, sm: 10, xs: 10}}} container item direction="column" justify={"center"}
                      alignItems={"center"} lg={3} md={6} sm={12}>

                    <CardHome V1={homeCards[2].title} V2={homeCards[2].content} img="./asset/flag.png"/>

                </Grid>

                <Grid sx={{pb: {md: 10, sm: 10, xs: 10}}} container item direction="column" justify={"center"}
                      alignItems={"center"} lg={3} md={6} sm={12}>

                    <CardHome V1={homeCards[3].title} V2={homeCards[3].content} img="./asset/publish.jpg"/>

                </Grid>


            </Grid>

            {/*<Grid item lg={3} md={12} sm={12} xs={12} sx={{bgcolor: {lg: "#d00101", md: "#0261ea", sm: "#45ff00", xs: "#121212"}}}>
                <Button variant="contained">Learn more</Button>
            </Grid>
*/}

        </div>);
}

export default Features;
