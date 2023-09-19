import { Box, Button, FormControl, FormControlLabel, Link, Switch, TextField, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

import classes from "@/styles/signin/signinPage.style"

import '@/scss/signin.scss'

function SignInPage() {
    const navigate = useNavigate()
    return (
        <Box className = "mainContainer">
            <Box
            className="signInBox" // sass method eka
            >
                <Typography
                    variant="h4"
                    sx={classes.signInBoxTitle} // mui style object method eka
                >Sign In
                </Typography>
                <Typography
                    // variant="h6"
                    sx={classes.signInBoxSubTitle} // mui style object method eka
                >Welcome back! Please enter your details
                </Typography>
                <Box className="signInForm">
                    <FormControl >
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            size="small"
                            
                        />
                    </FormControl>
                    <FormControl>
                        <TextField
                            fullWidth
                            label="Password"
                            variant="outlined"
                            type="password"
                            size="small"
                        />
                    </FormControl>
                    <Box className='rememberMe'>
                        <FormControlLabel 
                            control={<Switch  color="primary" />}
                            label={
                                <Typography variant="body2" style={{ fontSize: '14px' }}>
                                    Remember me
                                </Typography>
                            }
                            labelPlacement="end"
                            color="default"
                        />
                        <Link href="#" underline="always" style={{ fontSize: '14px' }}>
                        {'Forgot Password?'}
                        </Link>
                    </Box>
                    <Button
                        variant="contained"
                        color="success"
                        sx={classes.signInBoxButton}
                        onClick={() => {
                            navigate('')
                            // navigate('/auth/signup')
                        }}
                    >Sign In
                    </Button>
                    <Box className='signUp'>
                        <Typography style={{ fontSize: '14px' , marginRight: '10px'  }}>
                            Don't you have an account?
                        </Typography>
                        <Link href="#" underline="always" style={{ fontSize: '14px' }}>
                            {'Sign Up'}
                        </Link>
                    </Box>
                </Box>                
            </Box>
            <Box className="imageBox">
                <Typography> image area</Typography>
            </Box>
        </Box>
    )
}

export default SignInPage