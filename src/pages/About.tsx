import React from "react"
import { Container, Typography, Stack } from "@mui/material"
import BioCard from "../components/common/BioCard"

const About: React.FC = () => (
  <Container sx={{ mt: 4 }}>
    <Typography variant="h4" sx={{ mt: 2}}>
      About
    </Typography>
    <Stack spacing={2}>
      <Typography component="p" variant="body1">
        Hello! I am Mike Chen, a software engineer from a background in civil engineering. After 13 years in civil 
        service and some personal reflection during a pandemic, I decided to seek new opportunities for growth and 
        pursue a longstanding interest in technology. Since then I have completed a degree in computer science and have 
        been building my professional experience and skills in software development. While this new journey is proving 
        very exciting, I will always remain a transportation infrastructure nerd at heart. 
      </Typography>
      <Typography component="p" variant="body1"> 
        I am a detail oriented professional with extensive experience working in cross-functional teams on complex 
        projects with competing priorities and constrained resources. I have worked on the entire infrastructure cycle
        from conceptual design through asset management to decommissioning. 
      </Typography>
    </Stack>

    <Typography variant="h4" sx={{ mt: 2}}>
      Personal Interests
    </Typography>
    <Stack spacing={2}>
      <Typography component="p" variant="body1">
        In my free time I enjoy mountaineering, board games, gardening, and cooking. Recently I have started learning to
        sing. 
      </Typography>
    </Stack>
  </Container>
)

export default About