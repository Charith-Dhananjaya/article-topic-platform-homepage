import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';



const Footer = () => {
    return ( 
    <div className="footer"
    style={{
                backgroundColor:'#7600bc',
                backgroundRepeat: "no-repeat",

    

            }}>
        
        
        <Grid container direction="row" justifyContent="space-evenly" alignItems="center" style={{ padding: "50px"}}>
            
            {/*Column 1 */}
            <Grid container direction="column" justify={"center"} alignItems={"center"} item lg={3} md={12} sm={12}
                      xs={12}>
                
                <Typography style={{ color: "#ffffff" }} variant="h5">About us</Typography>
                <Typography style={{ color: "#ffffff" }} variant="h6">We manage your consent</Typography>
                <ul className='social icons'style={{display:'flex', justifyContent:'space-between', listStyleType:'none' }}>
                    <li style={{width:"30%", textAlign:"center", color:"#ffffff"}}><FacebookIcon /></li>
                    <li style={{width:"30%", textAlign:"center",color:"#ffffff"}}><InstagramIcon /></li>
                    <li style={{width:"30%", textAlign:"center",color:"#ffffff"}}><LinkedInIcon /></li>

                </ul>
            </Grid>

            {/*Column 2 */}
            <Grid container direction="column" justify={"center"} alignItems={"center"} item lg={3} md={12} sm={12}
                      xs={12}>
                <Typography variant={"h5"} style={{ color: "#ffffff" }}>Useful links</Typography>
                <Typography variant={"h6"} style={{ color: "#ffffff" }}>Home</Typography>
                <Typography variant={"h6"} style={{ color: "#ffffff" }}>Features</Typography>
                <Typography variant={"h6"} style={{ color: "#ffffff" }}>About Us</Typography>
            </Grid>
            

            {/*Column 3 */}
            <Grid container direction="column" justify={"center"} alignItems={"center"} item lg={3} md={12} sm={12} xs={12}>
            <Typography variant={"h5"} style={{ color: "#ffffff" }}>Contact with us</Typography>
            <Typography variant={"h6"} style={{ color: "#ffffff" }}><DraftsOutlinedIcon />Writergate@gmail.com</Typography>
            <Typography variant={"h6"} style={{ color: "#ffffff" }}><LocalPhoneIcon />+9400-000-0000</Typography>
                


            </Grid>
        
            
        
        </Grid>
        <Grid container direction="row" justifyContent={"center"}
                  style={{backgroundColor : "#8a00c2", padding: "50px"}}
            >
                <Typography style={{textAlign:"center", color:"#ffffff"}}>Copyright Writergate © 2023. All rights reserved.
                </Typography>
        </Grid>
        

        

    
    
    </div> );
}


 
export default Footer;
