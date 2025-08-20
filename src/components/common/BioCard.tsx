import React from "react"
import { Card, CardContent, CardMedia, Typography, IconButton, Stack, Box } from "@mui/material"
import { GitHub, LinkedIn, LocationCity } from "@mui/icons-material"
import profilePic from "../../assets/mc_profile.jpg"

const BioCard: React.FC = () => {
  return (
    <Card
      sx={{
        maxWidth: 200,
        mt: 4,
        boxShadow: "none",
        border: "none",
        bgcolor: "transparent",
      }}
    >
      <CardMedia
        component="img"
        image={profilePic}
        alt="Profile Picture"
        sx={{
            width: 140,
            height: 140,
            borderRadius: "50%", 
            objectFit: "cover", 
            mx: "auto", 
            mt: 2
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Michael Chen
        </Typography>

        <Typography variant="body2" color="text.secondary">
            <Stack direction="column" spacing={1} mt={2}>
                <Box>Software Engineer</Box>
                <Box>Portland, OR</Box>
                <Stack direction="row" spacing={1} mt={2}>
                    <IconButton component="a" href="https://github.com/vayfarer" target="_blank" rel="noopener noreferrer">
                        <GitHub />
                    </IconButton>
                    <IconButton component="a" href="https://www.linkedin.com/in/michael-chen-pe-855b9337" target="_blank" rel="noopener noreferrer">
                        <LinkedIn />
                    </IconButton>
                </Stack>
            </Stack>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default BioCard