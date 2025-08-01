import { useEffect, useState } from "react";
import {
    Box,
    Card,
    TextField,
    Button,
    Typography,
    IconButton,
    InputAdornment,
    Link,
    Container,
    Grid,
    Paper,
    Divider,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import StyledTextField from "../../Components/Textfield/textfields";
import testImage from '../../assets/temp.webp';
import StyledButtons from "../../Components/Button/buttons";
import { GoogleLogin } from "@react-oauth/google";
import { useValidationSchema } from "../../utils/hooks/form/validation-schema";

const Login = () => {

    const { initialValues, validationSchema } = useValidationSchema('login_form');

    const handleLogin = (values) => {
        console.log(values);
    }

    return (
        <>
            {/* BG */}
            <Box
                sx={{
                    minHeight: "100vh",
                    backgroundColor: "#f5f5f5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 2
                }}
            >
                <Card
                    sx={{
                        maxWidth: 1200,
                        width: "100%",
                        borderRadius: 4,
                        overflow: "hidden",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                        height: { xs: 'auto', md: '650px' },
                    }}
                >
                    <Grid
                        container
                        sx={{
                            height: '100%',
                            width: '100%',
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            flexWrap: 'nowrap',
                        }}
                    >
                        {/* LEFT - IMAGE PART */}
                        <Grid
                            item
                            xs={12}
                            md={6}
                            sx={{
                                flex: 1,
                                minWidth: 0,
                                p: 0,
                                height: { xs: 300, md: '100%' },
                            }}
                        >
                            <Box
                                component="img"
                                src={testImage}
                                alt="Hero"
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                        </Grid>

                        {/* RIGHT - LOGIN FORM PART */}
                        <Grid
                            item
                            xs={12}
                            md={6}
                            sx={{
                                flex: 1,
                                minWidth: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#fff",
                                p: { xs: 4, md: 6 },
                            }}
                        >
                            <Box sx={{ width: "100%", px: 2 }}>
                                <Typography
                                    textAlign="center"
                                    sx={{
                                        fontWeight: "bold", mb: 2, fontFamily: "Kanit, sans-serif", fontSize: { xs: '1.875rem;', md: '2.8rem;' }
                                    }}
                                >
                                    CareerNest
                                </Typography>

                                <Typography
                                    textAlign="center"
                                    variant="subtitle2"
                                    sx={{
                                        color: "#757575",
                                        mb: { xs: 2, md: 4 },
                                        fontFamily: "Poppins, sans-serif",
                                        fontSize: { xs: '0.95rem', md: '1rem' }
                                    }}
                                >
                                    Welcome back, Hunter!
                                </Typography>

                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={(values) => handleLogin(values)}
                                >
                                    {({ isValid, values }) => (
                                        <Form>
                                            {/* GOOGLE LOGIN BUTTON */}
                                            <Box sx={{ mb: 3, mt: 3, display: "flex", justifyContent: "center" }}>
                                                <GoogleLogin
                                                    shape="rectangular"
                                                    type="standard"
                                                    size="large"
                                                    width="800px"
                                                    text="continue_with"
                                                    theme="filled"
                                                    cancel_on_tap_outside={true}
                                                    onSuccess={(credentialResponse) => {
                                                        console.log(credentialResponse);
                                                    }}
                                                    onError={() => {
                                                        console.log("Login Failed");
                                                    }}
                                                />
                                            </Box>

                                            {/* DIVIDER */}
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    mb: 3
                                                }}
                                            >
                                                <Divider
                                                    sx={{
                                                        flex: 1,
                                                        backgroundColor: "#ccc",
                                                    }}
                                                />
                                                <Typography
                                                    sx={{
                                                        px: 2,
                                                        fontFamily: "Poppins, sans-serif",
                                                        color: "text.secondary",
                                                    }}
                                                >
                                                    or
                                                </Typography>

                                                <Divider
                                                    sx={{
                                                        flex: 1,
                                                        backgroundColor: "#ccc",
                                                    }}
                                                />
                                            </Box>

                                            {/* EMAIL FIELD */}
                                            <Box sx={{ mb: 4 }}>
                                                <Field name="email">
                                                    {({ field, meta }) => (
                                                        <StyledTextField
                                                            field={{
                                                                ...field,
                                                                onChange: (e) =>
                                                                    field.onChange(
                                                                        e
                                                                    ),
                                                            }}
                                                            meta={meta}
                                                            id={"email"}
                                                            placeholder={'Email Address'}
                                                            type={"email"}
                                                            variant="outlined"
                                                        />
                                                    )}
                                                </Field>
                                            </Box>

                                            {/* LOGIN BUTTON */}
                                            <Box sx={{ mb: 3 }}>
                                                <StyledButtons
                                                    fullWidth
                                                    buttonLabel={"Email me the Code"}
                                                    isLoading={false}
                                                    disabled={!isValid || Object.values(values).some(values => values === '')}
                                                    type={"submit"}
                                                    variant={"contained"}
                                                    sx={{ backgroundColor: "#087071" }}
                                                />
                                            </Box>

                                            {/* IS EMPLOYER */}
                                            <Box sx={{ mb: 8 }}>
                                                <Typography textAlign="center" mt={3} sx={{ fontFamily: 'Poppins, sans-serif', textDecoration: 'underline' }}>
                                                    <Link href="/seeker/register" sx={{ color: "#087071", fontWeight: 600 }}>
                                                        Are you an Employer?
                                                    </Link>
                                                </Typography>
                                            </Box>
                                        </Form>
                                    )}
                                </Formik>

                                {/* TERMS */}
                                <Typography
                                    textAlign="center"
                                    variant="body2"
                                    sx={{
                                        color: "text.secondary",
                                        fontFamily: "Poppins, sans-serif",
                                        fontSize: '0.8rem'
                                    }}
                                >
                                    By continuing, you agree to our&nbsp;
                                    <Link href="#" target="_blank" rel="noopener" underline="hover">
                                        Terms of Service
                                    </Link>
                                    &nbsp;and&nbsp;
                                    <Link href="#" target="_blank" rel="noopener" underline="hover">
                                        Privacy Policy
                                    </Link>
                                    {" "} You may receive updates and relevant information. You can unsubscribe anytime through your account settings.
                                </Typography>

                            </Box>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
        </>
    );
};

export default Login;
