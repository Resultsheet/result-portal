import { Box, Button, FormControl, FormControlLabel, Grid, Link, Switch, TextField, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

import classes from "@/styles/signin/signinPage.style"

import im from '@/assets/images/signIn.png'
import '@/scss/signin.scss'

function SignInPage() {
    const navigate = useNavigate()
    return (
        <Grid
        container 
        // className = "mainContainer"
        >
            <Grid item xs={12} lg={6}
            sx={{
                height: '100dvh',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center'
            }}

            >
                <Typography
                    variant="h4"
                    sx={{
                        mb:3,
                        fontWeight: 600
                    }} // mui style object method eka
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
                            control={<Switch  color="default" />}
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
                            navigate('/auth/classes')
                        }}
                    >Sign In
                    </Button>
                    <Box className='signUp'>
                        <Typography style={{ fontSize: '14px' , marginRight: '10px'  }}>
                            Don't you have an account?
                        </Typography>
                        <Link href="/auth/signup" underline="always" style={{ fontSize: '14px' }}>
                            {'Sign Up'}
                        </Link>
                    </Box>
                </Box>                
            </Grid>
            <Grid item xs={12} lg={6} className="imageBox" >
                <img src={im} alt="" className="signInImg"/>
            </Grid>
        </Grid>
    )
}

export default SignInPage