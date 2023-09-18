import { Box, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

function SignupPage() {
    const navigate = useNavigate()
    return (
        <>

            <Box>
                <Typography variant="h4">Sign Up Page</Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                        navigate('/')
                    }}
                >Home</Button>
            </Box>
        </>
    )
}

export default SignupPage