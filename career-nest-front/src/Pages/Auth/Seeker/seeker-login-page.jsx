import {
    Box,
    Card,
    Typography,
    Link,
    Grid,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import StyledTextField from "../../../Components/Textfield/textfields";
import testImage from '../../../assets/temp.webp';
import StyledButtons from "../../../Components/Button/buttons";
import { useValidationSchema } from "../../../utils/hooks/form/validation-schema";

const SeekerLogin = () => {

    const { initialValues, validationSchema } = useValidationSchema('seeker_login_form');

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
                                {/* TITLE AND SUBTITLE */}
                                <Box>
                                    {/* TITLE */}
                                    <Typography
                                        textAlign="center"
                                        sx={{
                                            fontWeight: "bold", mb: 2, fontFamily: "Kanit, sans-serif", fontSize: { xs: '1.875rem;', md: '2.8rem;' }
                                        }}
                                    >
                                        CareerNest
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
                                        Welcome back, Seeker!
                                    </Typography>
                                </Box>

                                {/* FIELDS */}
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={(values) => handleLogin(values)}
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
                                                            placeholder={'Email Address'}
                                                            type={"email"}
                                                            variant="outlined"
                                                        />
                                                    )}
                                                </Field>
                                            </Box>

                                            {/* PASSWORD */}
                                            <Box sx={{ mb: 4 }}>
                                                <Field name="password">
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
                                                            id={"password"}
                                                            placeholder={'Password'}
                                                            type={"password"}
                                                            variant="outlined"
                                                        />
                                                    )}
                                                </Field>
                                            </Box>

                                            {/* LOGIN BUTTON */}
                                            <Box sx={{ mb: 3 }}>
                                                <StyledButtons
                                                    fullWidth
                                                    buttonLabel={"Login"}
                                                    isLoading={false}
                                                    disabled={!isValid || Object.values(values).some(values => values === '')}
                                                    type={"submit"}
                                                    variant={"contained"}
                                                    sx={{ backgroundColor: "#087071" }}
                                                />
                                            </Box>

                                            {/* IS EMPLOYER */}
                                            <Box sx={{ mb: 8 }}>
                                                <Typography textAlign="center" mt={3} sx={{ fontFamily: 'Poppins, sans-serif' }}>
                                                    Dont have an employer account? {" "}
                                                    <Link href="/seeker/register" sx={{ color: "#087071", fontWeight: 600 }}>
                                                        Register
                                                    </Link>
                                                </Typography>
                                            </Box>
                                        </Form>
                                    )}
                                </Formik>
                            </Box>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
        </>
    );
};

export default SeekerLogin;
