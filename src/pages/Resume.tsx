import React from "react"
import { Container, Typography } from "@mui/material"

const Resume: React.FC = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <iframe
        src="/MichaelChen.pdf"
        width="100%"
        height="90vh"
        style={{ border: "none" }}
        title="Resume"
      />
    </Container>
  )
}

export default Resume