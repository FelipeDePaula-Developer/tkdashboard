import {Helmet} from 'react-helmet-async';
import PageTitle from 'src/components/PageTitle';
import {useState} from 'react';

import PageTitleWrapper from 'src/components/PageTitleWrapper';
import {
    Container,
    Grid,
    Card,
    CardHeader,
    CardContent,
    Divider,
    Button
} from '@mui/material';
import Footer from 'src/components/Footer';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import {pink} from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

import Switch from '@mui/material/Switch';

export function SignUpForm() {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setFormState({
            ...formState,
            [event.target.id]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
        // Here you can handle the form submission. For example, you can send the form data to a server.
    };

    const handleReset = (event) => {
        event.preventDefault();
        setFormState({
            username: '',
            email: '',
            password: ''
        });
        event.target.form.reset();
    };

    return (
        <>
            <Helmet>
                <title>
                    Sign Up Form
                </title>
            </Helmet>
            <PageTitleWrapper>
                <PageTitle
                    heading="Sign Up"
                    subHeading="Please enter with you infos"
                />
            </PageTitleWrapper>
            <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={3}
                >
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title="Personal Infos"/>
                            <Divider/>
                            <CardContent>
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1}
                                    }}
                                    noValidate
                                    autoComplete="off"
                                    width="100%"
                                >
                                    <div>
                                        <TextField
                                            required
                                            id="username"
                                            label="Username"
                                            fullWidth
                                        />
                                        <TextField
                                            required
                                            id="email"
                                            label="email"
                                            fullWidth
                                        />
                                        <TextField
                                            required
                                            id="password"
                                            label="Password"
                                            fullWidth
                                        />
                                        <Button
                                            sx={{ margin: 1 }}
                                            variant="contained"
                                            color="primary"
                                            type="submit">
                                            Submit
                                        </Button>
                                        <Button
                                            sx={{ margin: 1 }}
                                            variant="contained"
                                            color="secondary"
                                            onClick={handleReset}>
                                            Reset
                                        </Button>
                                    </div>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}