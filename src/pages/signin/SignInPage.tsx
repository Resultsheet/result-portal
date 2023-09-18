import { Box, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

import classes from "../../styles/signin/signinPage.style"

function SignInPage() {
    const navigate = useNavigate()
    return (
        <Box>
            <Typography
                variant="h4"
                sx={classes.signInBoxTitle}
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
                }}

            >Inline css</Typography>
        </Box>
    )
}

export default SignInPage