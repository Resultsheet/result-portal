import { Box, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

import classes from "@/styles/signin/signinPage.style"

import '@/scss/signin.scss'

function SignInPage() {
    const navigate = useNavigate()
    return (
        <Box
            className="signInBox" // sass method eka
        >
            <Typography
                variant="h4"
                sx={classes.signInBoxTitle} // mui style object method eka
            >Sign In Page</Typography>
            <Button
                variant="contained"
                color="success"
                sx={classes.signInBoxButton}
                onClick={() => {
                    navigate('/auth/signup')
                }}
            >Sign Up</Button>

            <Typography
                sx={{
                    color: 'red',
                    fontSize: '1.5rem'
                }} //inline css method eka

            >Inline css</Typography>
        </Box>
    )
}

export default SignInPage