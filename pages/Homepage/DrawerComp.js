import React,{useState} from "react";
import { Drawer,IconButton ,List,ListItemButton,ListItemIcon,ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const PAGES = ["HOME", "ARTICLES", "TOPICS", "CONTACT US", "Sign In", "Sign Up"];
const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
            {
                PAGES.map((page,index)=> (
                    <ListItemButton onClick={()=> setOpenDrawer(false)} key={index}>
                        <ListItemIcon>
                            <ListItemText>{page}</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                ))
            }
            
        </List>
      </Drawer>
      <IconButton sx={{marginLeft:"auto"}} onClick={()=> setOpenDrawer(!openDrawer)}>
        <MenuIcon/>
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
