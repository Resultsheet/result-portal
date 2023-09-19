import React, { useEffect, useState } from 'react';
import '@/scss/sidebar.scss'
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Box, SwipeableDrawer, AppBar, Toolbar, List, Typography, ListItem, ListItemText, Menu, Container, Avatar, Tooltip, MenuItem, IconButton, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { useAppSelector, useAppDispatch } from '@/Redux/store';
import { removeUser } from '@/Redux/features/authSlice';
import Footer from '../Footer';

const drawerWidth = 200;
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
    const [openDrawer, setOpenDrawer] = useState(false);

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
                                <Typography
                                    variant="h6"
                                    noWrap
                                    sx={{ marginLeft: '0.75rem' }}
                                >
                                    Result Sheet
                                </Typography>
                        }


                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src={'https://source.boringavatars.com/beam/120/Stefan?colors=264653,f4a261,e76f51'} />
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
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}

            >
                <Toolbar />
                <Box sx={{ overflow: 'hidden', marginInline: '1.5rem' }}>
                    <List>
                        {menuItems.map((text, index: number) => (
                            <ListItem key={text} disablePadding className='sidebar-link'>
                                {/* <ListItemButton> */}
                                {/* <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon> */}
                                <Link
                                    key={index}
                                    className="sidebar-link-text"
                                    to={`/${currentUser.role.toLowerCase()}/${text.toLowerCase()}`}
                                >
                                    <ListItemText primary={text} />
                                </Link>
                                {/* </ListItemButton> */}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </SwipeableDrawer>
            <div className='siteContent'>
                <div className='children'>
                    <Toolbar sx={{
                        marginBottom: '1rem',
                    }} />
                    {children}
                </div>
                <Footer />
            </div>
        </Box>
    );
}
