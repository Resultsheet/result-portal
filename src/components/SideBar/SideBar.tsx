import React, { useEffect, useState } from 'react';
import '@/scss/sidebar.scss'
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Box, SwipeableDrawer, AppBar, Toolbar, Typography, Menu, Container, Avatar, Tooltip, MenuItem, IconButton, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { useAppSelector, useAppDispatch } from '@/Redux/store';
import { removeUser } from '@/Redux/features/authSlice';

import logo from '@/assets/logo-round.svg'

const ddw = 220;
const mdw = '75%';
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

interface sidebarPropType {
    children: React.ReactNode
}


export default function SideBar({ children }: sidebarPropType) {

    const currentUser = useAppSelector(state => state.auth);

    const [menuItems, setMenuItems] = useState<string[]>([]);

    useEffect(() => {
        if (currentUser.role === 'MANAGER') setMenuItems(['Services', 'Packages', 'Products', 'LeaveManagement'])
        else if (currentUser.role === 'RECEPTIONIST') setMenuItems(['Appointment', 'Client', 'Staff', 'QuickSale', 'Leave'])
        else if (currentUser.role === 'OWNER') setMenuItems(['Insights', 'Staff', 'Sales'])
        else setMenuItems(settings)
    }, [])



    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(removeUser());
        navigate('/signin');
        handleCloseUserMenu()
    }


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerWidth, setDrawerWidth] = useState<number | string>(isMobile ? mdw : ddw);
    const [openDrawer, setOpenDrawer] = useState(true);

    useEffect(() => {
        if (isMobile) {
            setDrawerWidth(mdw)
        }
        else {
            setDrawerWidth(ddw)
        }
    }, [isMobile])



    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{

                    }}>
                        {
                            isMobile ? <IconButton
                                sx={{
                                    marginRight: '1.5rem'
                                }}
                                onClick={() => setOpenDrawer(!openDrawer)}
                            ><MenuIcon sx={{
                                display: 'block',
                                color: 'white',
                                fontSize: '1.5rem',
                            }} /></IconButton>
                                :
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        cursor: 'pointer',
                                        gap: '0.75rem',

                                    }}
                                >
                                    <img
                                        style={{
                                            height: '2rem',
                                            width: '2rem',
                                        }}
                                        src={logo}
                                        alt='Result Sheet'
                                    />

                                    <Typography
                                        noWrap
                                        sx={{
                                            color: 'white',
                                            fontWeight: '300',
                                            fontSize: '1.2rem',
                                        }}
                                    >
                                        Result Sheet
                                    </Typography>

                                </Box>
                        }


                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0, border: '3px solid #fff' }}>
                                    <Avatar
                                        sx={{
                                            width: '2.2rem',
                                            height: '2.2rem',
                                        }}

                                        alt="Remy Sharp" src={'https://source.boringavatars.com/beam/120/Stefan?colors=264653,f4a261,e76f51'} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {/* {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))} */}

                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">Profile</Typography>
                                </MenuItem>
                                <MenuItem onClick={handleLogout}>
                                    <Typography textAlign="center">Logout</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <SwipeableDrawer
                variant={!isMobile ? "permanent" : "temporary"}
                anchor="left"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        backgroundColor: theme.palette.secondary.main,
                        boxSizing: 'border-box',
                        color: '#fff',
                        paddingTop: '1rem',
                        boxShadow: '2px 0px 5px rgba(0,0,0,0.2)',
                    },
                    [`& .MuiBackdrop-root`]: {
                        backdropFilter: 'blur(2px)',
                        backgroundColor: 'rgba(0,0,0,0.2)',
                    }
                }}

            >
                <Toolbar />
                <Box sx={{ overflow: 'hidden', marginInline: '1.5rem', flexGrow: 1 }}>
                    <Box>
                        {
                            menuItems.map((text: string, index: number) => (
                                <>
                                    <Link
                                        key={index}
                                        to={`/${currentUser.role.toLowerCase()}/${text.toLowerCase()}`}
                                        style={{
                                            textDecoration: 'none',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                // backgroundColor: 'red',
                                                fontSize: '1rem',
                                                fontWeight: 400,
                                                mb: '0.2rem',
                                                py: '0.5rem',
                                                px: '1rem',
                                                color: theme.palette.secondary.contrastText,
                                                borderBottom: '1px solid transparent',
                                                borderRadius: '0.5rem',
                                                [`&:hover`]: {
                                                    backgroundColor: theme.palette.primary.light,
                                                    color: theme.palette.primary.contrastText,

                                                }
                                            }}
                                        >
                                            {text}
                                        </Typography>
                                    </Link>
                                </>
                            ))
                        }
                    </Box>

                </Box>

                {
                    isMobile && <>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                                gap: '0.75rem',
                                px: 2,
                                py: 2,
                                backgroundColor: '#00000008',
                                borderTop: '1px solid rgba(0,0,0,0.2)',
                            }}
                        >
                            {/* <Typography
                                    sx={{
                                        fontSize: '1rem',
                                        color: 'rgba(255,255,255,0.9)'
                                    }}
                                >
                                    &copy;
                                </Typography> */}
                            <img
                                style={{
                                    height: '2rem',
                                    width: '2rem',
                                }}
                                src={logo}
                                alt='Result Sheet'
                            />

                            <Typography
                                noWrap
                                sx={{
                                    color: 'white',
                                    fontWeight: '300',
                                    fontSize: '1rem',
                                }}
                            >
                                Result Sheet
                            </Typography>


                        </Box>
                    </>
                }
                {
                    isMobile && <>
                        <Box
                            sx={{
                                width: '100%',
                                backgroundColor: '#00000010',
                                borderTop: '1px solid rgba(0,0,0,0.2)',
                                px: 2,
                                py: 2,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >

                            <Typography
                                sx={{
                                    fontSize: '0.5rem',
                                    color: 'rgba(255,255,255,0.8)',
                                    letterSpacing: '0.07rem',
                                    textAlign: 'center',
                                }}
                            >
                                Made with ❤️ by <a className="link" target="_blank" href="https://janithpm.tech">JPM</a> & <a className="link" target="_blank" href="https://dasunidewani.github.io/">DDU</a>
                            </Typography>
                            {/* <Typography
                                sx={{
                                    fontSize: '0.5rem',
                                    color: 'rgba(255,255,255,0.8)',
                                    letterSpacing: '0.07rem',
                                }}
                            >
                                by
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '0.5rem',
                                    color: 'rgba(255,255,255,0.8)',
                                    letterSpacing: '0.07rem',
                                }}
                            >
                                <a className="link" target="_blank" href="https://janithpm.tech">Janithpm</a> & <a className="link" target="_blank" href="https://dasunidewani.github.io/">DasuniDewani</a>
                            </Typography> */}
                        </Box>
                    </>
                }
            </SwipeableDrawer>
            <div className='children'>
                <Toolbar sx={{
                    marginBottom: '1rem',
                }} />
                {children}
            </div>
            {/* <Footer /> */}
        </Box>
    );
}
