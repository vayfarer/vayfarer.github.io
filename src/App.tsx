import React from "react"
import { Grid, Box } from "@mui/material"
import AppRouter from "./router"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import BioCard from "./components/common/BioCard"

const App: React.FC = () => (
  <Box sx={{flexGrow: 1}}>
    <Navbar />

    <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, p: 2, mx: "auto", maxWidth: "1280px" }}>
      <Box sx={{ flex: "0 0 25%", mb: { xs: 2, sm: 0 }, maxWidth: "200px", }}>
        <BioCard />
      </Box>

      <Box sx={{ flex: "1" }}>
        <AppRouter />
      </Box>
    </Box>
  </Box>
)

export default App