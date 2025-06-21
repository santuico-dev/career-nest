import {
    Box,
    Card,
    Typography,
    Link,
    Grid,
    Divider,
    Alert,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import testImage from '../../../assets/temp.webp';
import StyledButtons from "../../../Components/Button/buttons";
import { useValidationSchema } from "../../../utils/hooks/form/validation-schema";
import StyledTextField from "../../../Components/Textfield/textfields";

const SeekerRegister = () => {

    const { initialValues, validationSchema } = useValidationSchema('seeker_registration_form');

    const handleRegister = (values) => {
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

                                {/* TITLE, SUBTITLE, AND LOOKING FOR A JOB LINK */}
                                <Box>
                                    {/* LOOKING FOR A JOB LINK */}
                                    <Typography
                                        textAlign="right"
                                        sx={{
                                            fontWeight: 500, mb: { xs: 4, md: 2 }, fontFamily: "Poppins, sans-serif", fontSize: { xs: '0.675rem;', md: '0.875rem;' }, textDecoration: 'underline'
                                        }}
                                    >
                                        <Link href="/" sx={{ color: "#087071", fontWeight: 700 }}>
                                            Are you looking for a job?
                                        </Link>
                                    </Typography>

                                    {/* TITLE */}
                                    <Typography
                                        textAlign="center"
                                        sx={{
                                            fontWeight: "bold", mb: { xs: 4, md: 2 }, fontFamily: "Kanit, sans-serif", fontSize: { xs: '1.875rem;', md: '2.2rem;' }
                                        }}
                                    >
                                        EMPLOYER REGISTRATION
                                    </Typography>

                                    {/* SUBTITLE */}
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
                                        <Alert severity="info" sx={{ fontFamily: "Poppins, sans-serif" }}>Post a job and find a talent for FREE!</Alert>
                                    </Typography>
                                </Box>

                                {/* FIELDS */}
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={(values) => handleRegister(values)}
                                >
                                    {({ isValid, values }) => (
                                        <Form>
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
                                                            placeholder={'sample@domain.com'}
                                                            type={"email"}
                                                            variant="outlined"
                                                        />
                                                    )}
                                                </Field>
                                            </Box>

                                            {/* REGISTER BUTTON */}
                                            <Box sx={{ mb: 3 }}>
                                                <StyledButtons
                                                    fullWidth
                                                    buttonLabel={"Register"}
                                                    isLoading={false}
                                                    disabled={!isValid || Object.values(values).some(values => values === '')}
                                                    type={"submit"}
                                                    variant={"contained"}
                                                    sx={{ backgroundColor: "#087071" }}
                                                />
                                            </Box>

                                            {/* LOGIN IF ALREADY HAVE AN ACCOUNT (SEEKER) */}
                                            <Box sx={{ mb: 5 }}>
                                                <Typography textAlign="center" mt={3} sx={{ fontFamily: 'Poppins, sans-serif' }}>
                                                    Already have an employer account?{" "}
                                                    <Link href="/seeker/login" underline="hover" sx={{ color: "#087071", fontWeight: 700 }}>
                                                        Login
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

                        {/* RIGHT - IMAGE PART */}
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
                    </Grid>
                </Card>
            </Box>
        </>
    );
};

export default SeekerRegister;
