import React from "react"
import { Container, Typography, Stack, Card, CardContent, Box } from "@mui/material"

const projects = [
  {
    title: "Stock Market Trading using Artificial Intelligence (Oregon State University Capstone)",
    description: `OSU Capstone team used machine learning, optimization, and data analysis techniques to train neural 
    network models to make optimal stock trading decisions. The agent models were trained and evaluated on historic time 
    series stock market data retrived by yahoo_fin library.`, 
    role: `Roles: Project Manager and Software Engineer. Responsibilities included identifying requirements and constraints, 
    software design, project management including task decomposition and delegation, software development.`, 
    technology: "Technology: Python, PyTorch, Pymoo, Pandas, Numpy, Yahoo-finance, PyPlot, Multiprocessing, Flask", 
    links: [],
  },
  {
    title: "Robot Design Competition 2012 (Northwestern University)",
    description: `Design and build autonomous robot (Esteban) to compete against other student teams. Esteban achieved
    first place at competition using superior mechanical, electrical, and programming logic design.`, 
    role: "Roles: Mechatronics Engineer and Software Engineer.", 
    technology: "Technology: C, PIC32 microcontroller programming, PID control code, CAD, machine shop fabrication", 
    links: ["https://github.com/lsapoz/esteban", "https://www.mccormick.northwestern.edu/news/articles/2012/05/2012-design-competition-winners.html"],
  },
  {
    title: "Shields River Road (WFLHD) (Montana)",
    description: `Rehabilitate approximately 14 miles of Shields River Road in order to improve access to Federal Lands. 
    Project was completed on schedule and under budget.`, 
    role: "Roles: Pavement and Materials Engineer. Responsibilities included site investigation, pavement design, engineering support during construction, mix design evaluation, control strip evaluation, quality assurance.", 
    technology: "", 
    links: ["https://highways.dot.gov/federal-lands/projects/mt/flap-park-34-2"],
  },
];

const Projects: React.FC = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mt: 2}}>
        Selected Projects
      </Typography>

      <Stack direction="column" spacing={1} mt={2}>
        {projects.map((p) => (
        <Card sx={{ mt: 4, bgcolor: "transparent",}}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {p.title}
            </Typography>

            <Typography variant="body1">
                <Stack direction="column" spacing={1} mt={2}>
                    <Box>{p.description}</Box>
                    <Box>{p.role}</Box>
                    <Box>{p.technology}</Box>
                    {p.links.map((url) => (

                    <Typography component="a" href={url} target="_blank" rel="noopener noreferrer">
                      {url}
                    </Typography>
                    ))}
                </Stack>
            </Typography>
          </CardContent>
        </Card>
        ))}
      </Stack>
    </Container>
  )
}

export default Projects