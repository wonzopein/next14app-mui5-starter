import {
    AppBar,
    Badge,
    Box,
    Container,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem, ListItemButton, ListItemIcon, ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';

const drawerWidth = 240;

export default function AppLayout({children}:{children:React.ReactNode}){

    const drawer = (
        <div>
            <Toolbar variant={"dense"} />
            <Divider />
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return(
        <Box sx={{ display: 'flex'}}>
            <AppBar position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}>
                <Toolbar variant={"dense"}>
                    <IconButton color="inherit" aria-label="Open drawer">
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap>
                        Dashboard
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={2} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer variant="temporary"
                        ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}>
                    {drawer}
                    <Divider />
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

            <Container>
                <Toolbar variant={"dense"} />
                {children}
            </Container>
        </Box>
    )
}