import * as Yup from "yup";

/*
**************************************************************************
  HOOK TO HANDLE FORM CONFIG AND VALIDATION SCHEMA (VALIDATION OF FORMS)
**************************************************************************
*/

export function useValidationSchema(formType) {
    // HOW THIS WORKS IS THAT formType IS THE KEY OF THE formConfig OBJECT, formConfig OBJECT WILL RETURN initialValues and validationSchema OBJECTS IF IT MATCHES THE KEY, EXAMPLE IF formType IS login_form, formConfig OBJECT WILL RETURN initialValues and validationSchema OBJECTS FOR login_form

    // IF THERE IS NO FORM TYPE, RETURN NOTHING
    if (!formType) {
        return;
    }

    const formConfig = {
        login_form: {
            initialValues: {
                email: "",
            },
            validationSchema: Yup.object().shape({
                email: Yup.string()
                    .required("Email is required")
                    .email("Email must be a valid email"),
            }),
        },
        registration_form: {
            initialValues: {
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                confirm_password: "",
            },
            validationSchema: Yup.object().shape({
                email: Yup.string()
                    .required("Email is required")
                    .email("Email must be a valid email"),
                password: Yup.string().required("Password is required"),
            }),
        },
        seeker_login_form: {
            initialValues: {
                email: "",
            },
            validationSchema: Yup.object().shape({
                email: Yup.string()
                    .required("Email is required")
                    .email("Email must be a valid email"),
            }),
        },
        seeker_registration_form: {
            initialValues: {
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                business_name: "",
                mobile_number: "",
            },
            validationSchema: Yup.object().shape({
                email: Yup.string()
                    .required("Email is required")
                    .email("Email must be a valid email"),
                password: Yup.string().required("Password is required"),
            }),
        },
    };

    return formConfig[formType];
}
