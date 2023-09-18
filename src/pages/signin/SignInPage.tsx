import { Box, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

function SignInPage() {
    const navigate = useNavigate()
    return (
        <Box>
            <Typography variant="h4">Sign In Page</Typography>
            <Button
                variant="contained"
                color="success"
                onClick={() => {
                    navigate('/auth/signup')
                }}
            >Sign Up</Button>
        </Box>
    )
}

export default SignInPage