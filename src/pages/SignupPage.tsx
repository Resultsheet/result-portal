import { Box, Button, FormControl, FormControlLabel, Switch, TextField, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

import classes from "@/styles/signin/signupPage.style"

import im from '@/assets/images/signIn.png'
import '@/scss/signup.scss'

function SignupPage() {
    const navigate = useNavigate()
    return (
        <Box className = "mainContainer">
            <Box
            className="signUpBox" // sass method eka
            >
                <Typography
                    variant="h4"
                    sx={classes.signInBoxTitle} // mui style object method eka
                >Sign Up
                </Typography>
                <Box className="signUpForm">
                    <FormControl >
                        <TextField
                            fullWidth
                            label="First Name"
                            variant="outlined"
                            size="small"
                            
                        />
                    </FormControl>
                    <FormControl >
                        <TextField
                            fullWidth
                            label="Last Name"
                            variant="outlined"
                            size="small"
                            
                        />
                    </FormControl>
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
                    <FormControl>
                        <TextField
                            fullWidth
                            label="Confirm Password"
                            variant="outlined"
                            type="password"
                            size="small"
                        />
                    </FormControl>
                    <Box className='agree'>
                        <FormControlLabel 
                            control={<Switch  color="default" />}
                            label={
                                <Typography variant="body2" style={{ fontSize: '14px' }}>
                                I agree to the Terms of User
                                </Typography>
                            }
                            labelPlacement="end"
                            color="default"
                        />
                    </Box>
                    <Button
                        variant="contained"
                        color="success"
                        sx={classes.signInBoxButton}
                        onClick={() => {
                            navigate('')
                        }}
                    >Sign Up
                    </Button>
                </Box>                
            </Box>
            <Box className="imageBox">
                <img src={im} alt="" className="signUpImage"/>
            </Box>
        </Box>
    )
}

export default SignupPage