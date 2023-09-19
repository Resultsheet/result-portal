import { Box, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

function HomePage() {
    const navigate = useNavigate()
    return (
        <Box>
            <Typography variant="h4">Home Page</Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    navigate('/auth/signin')
                }}
            >Sign In</Button>
        </Box>
    )
}

export default HomePage