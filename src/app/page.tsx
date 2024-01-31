import Image from "next/image";
import {
    AppBar, Badge,
    Box,
    Button,
    Container,
    FormControl, IconButton,
    InputLabel,
    MenuItem,
    Select,
    Slider,
    Toolbar, Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Box>
            <AppBar position="absolute">
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
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
        <Box>
            <Button>Button</Button>
            <Button variant={"contained"}>Button</Button>
            <Button variant={"outlined"}>Button</Button>
        </Box>
        <Box>
            ABC
            abc
            한글이어라
        </Box>
        <Box>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Box>

        <Box>
            <Slider
                defaultValue={30}
            />
        </Box>
    </Box>
  );
}
