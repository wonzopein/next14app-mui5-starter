"use client"

import {
    Box, Button,
    Card,
    CardContent,
    Checkbox,
    Container, createTheme,
    FormControlLabel,
    Grid, Link,
    TextField,
    Typography
} from "@mui/material";
import React from "react";

export default function Signin() {

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("id"),
            password: data.get("password"),
        });
    };

    return (
        // <Box sx={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        //     <Grid sx={{ width: "480px", height: "570px", bgcolor: "primary.main" }} container direction="column" justifyContent="center" alignItems="center">
        //         D
        //     </Grid>
        // </Box>
        <Box component={"form"}
             onSubmit={handleSubmit}
             sx={{ width: "100%", height: "100%", bgcolor: "primary.main", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Card sx={{ minWidth: 200, minHeight: 275, display: "flex", p: 3}}>
                <CardContent sx={{ width:"100%"}}>
                    <Typography variant={"h5"} component={"div"}>
                        SIGN IN
                    </Typography>
                    <Typography variant={"body2"}>
                        Sign in to your account
                    </Typography>
                    <TextField required fullWidth margin={"normal"} id={"id"} name={"id"} label={"아이디"} />
                    <TextField required fullWidth margin={"normal"} id={"password"} name={"password"} type={"password"} label={"패스워드"} />
                    <Button fullWidth variant={"contained"} type={"submit"} sx={{ my:2}}>로그인</Button>
                </CardContent>
            </Card>
        </Box>
        // <Container component="main" sx={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        //     <Box
        //         sx={{
        //             display: "flex",
        //             flexDirection: "column",
        //             alignItems: "center",
        //         }}
        //     >
        //         <Typography component="h1" variant="h5">
        //             Sign in
        //         </Typography>
        //         <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        //             <TextField
        //                 margin="normal"
        //                 required
        //                 fullWidth
        //                 id="email"
        //                 label="Email Address"
        //                 name="email"
        //                 autoComplete="email"
        //                 autoFocus
        //             />
        //             <TextField
        //                 margin="normal"
        //                 required
        //                 fullWidth
        //                 name="password"
        //                 label="Password"
        //                 type="password"
        //                 id="password"
        //                 autoComplete="current-password"
        //             />
        //             {/*<FormControlLabel*/}
        //             {/*    control={<Checkbox value="remember" color="primary" />}*/}
        //             {/*    label="Remember me"*/}
        //             {/*/>*/}
        //             <Button
        //                 type="submit"
        //                 fullWidth
        //                 variant="contained"
        //                 sx={{ mt: 3, mb: 2 }}
        //             >
        //                 Sign In
        //             </Button>
        //             <Grid container>
        //                 <Grid item xs>
        //                     <Link href="#" variant="body2">
        //                         Forgot password?
        //                     </Link>
        //                 </Grid>
        //                 <Grid item>
        //                     <Link href="#" variant="body2">
        //                         {"Don't have an account? Sign Up"}
        //                     </Link>
        //                 </Grid>
        //             </Grid>
        //         </Box>
        //     </Box>
        // </Container>
    )
}