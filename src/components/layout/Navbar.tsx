import React from "react"
import { AppBar, Toolbar, Typography, Button } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"

const Navbar: React.FC = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component={RouterLink} to="/" sx={{ flexGrow: 1, color: "inherit", textDecoration: "none", }}>
        Michael Chen
      </Typography>

      <Button
        color="inherit"
        component="a"
        href="/MichaelChen.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </Button>
      <Button color="inherit" component={RouterLink} to="/projects">
        Projects
      </Button>
    </Toolbar>
  </AppBar>
)

export default Navbar