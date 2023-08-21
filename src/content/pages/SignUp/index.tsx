import {Helmet} from 'react-helmet-async';
import {Box, Container, Grid, Card} from '@mui/material';
import Footer from 'src/components/Footer';

import {SignUpForm} from "./SignUpForm";
import Logo from "../../../components/LogoSign";

function DashboardCrypto() {
    return (
        <>
            <Helmet>
                <title>New Page</title>
            </Helmet>
            <Container maxWidth="lg">
                <Box display="flex" justifyContent="center" py={5} alignItems="center">
                    <Logo />
                </Box>
                <Card sx={{ p: 10, mb: 10, borderRadius: 12 }}>
                        <SignUpForm/>
                </Card>
            </Container>
            <Footer/>
        </>
    );
}

export default DashboardCrypto;
