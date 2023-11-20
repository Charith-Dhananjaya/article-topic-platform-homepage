import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";

const pages = [
  { label: "Home", link: "/" },
  { label: "Articles", link: "/articles" },
  { label: "Contact Us", link: "/contact" },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ background: "#444444", color: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            passHref
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#ffffff",
              textDecoration: "none",
              "&:hover": {
                color: "#000000",
              },
            }}
          >
            WriterGate
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Link href={page.link} passHref>
                    <Typography textAlign="center" sx={{ color: "black" }}>
                      {page.label}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/signin" passHref>
                  <Typography textAlign="center" sx={{ color: "black" }}>
                    Sign In
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/signup" passHref>
                  <Typography textAlign="center" sx={{ color: "black" }}>
                    Sign Up
                  </Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component={Link}
            href="/"
            passHref
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            WriterGate
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.label}
                component={Link}
                href={page.link}
                onClick={handleCloseNavMenu}
                passHref
                sx={{
                  my: 2,
                  color: "white",
                  display: { xs: "none", md: "block" },
                  "&:hover": {
                    color: "#000000",
                  },
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <Link href="/signin" passHref>
              <Button
                sx={{
                  marginLeft: "auto",
                  background: "#808080",
                  color: "#ffffff",
                  "&:hover": {
                    color: "#000000",
                  },
                  borderColor: "#ffffff",
                }}
                variant="outlined"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/signup" passHref>
              <Button
                sx={{
                  marginLeft: "10px",
                  background: "#808080",
                  color: "#ffffff",
                  "&:hover": {
                    color: "#000000",
                  },
                  borderColor: "#ffffff",
                }}
                variant="outlined"
              >
                Sign Up
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
