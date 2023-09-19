import {
    Box, Container, Typography,
    // useMediaQuery, useTheme 
} from "@mui/material"

function Footer() {

    // const theme = useTheme()
    // const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Box
            sx={{
                width: '100%',
                backgroundColor: '#00000010',
                borderTop: '1px solid rgba(0,0,0,0.2)',
                mt: 4,
            }}
        >
            <Container maxWidth="xl">
                <Box sx={{
                    pt: 2,
                    pb: 2,
                    // minHeight: '70px',
                    display: 'flex',
                    // flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    {/* <Typography
                        sx={{
                            fontSize: '0.9rem',
                            color: 'rgba(0,0,0,0.9)'
                        }}
                    >
                        &copy; 2023 Result Sheet
                    </Typography> */}
                    <Typography
                        sx={{
                            fontSize: '0.6rem',
                            color: 'rgba(255,255,255,0.8)',
                            letterSpacing: '0.07rem',
                        }}
                    >
                        Made with ❤️
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '0.6rem',
                            color: 'rgba(255,255,255,0.8)',
                            letterSpacing: '0.07rem',
                        }}
                    >
                        by
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '0.6rem',
                            color: 'rgba(255,255,255,0.8)',
                            letterSpacing: '0.07rem',
                        }}
                    >
                        <a className="link" target="_blank" href="https://janithpm.tech">Janithpm</a> & <a className="link" target="_blank" href="https://dasunidewani.github.io/">DasuniDewani</a>
                    </Typography>
                </Box>
            </Container>

        </Box>
    )
}

export default Footer