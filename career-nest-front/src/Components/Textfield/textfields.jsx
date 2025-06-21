import React, { useState } from "react";
import {
    TextField,
    InputAdornment,
    IconButton,
    FormHelperText,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const StyledTextField = ({
    field,
    meta,
    id,
    label,
    inputProps,
    errorText,
    type,
    disabled,
    isFullwidth = true,
    width,
    variant = "filled",
    isSearch,
    startIcon,
    placeholder,
    onChange
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            {/* THE FIELD HERE IS MORE THE FORMIK VALIDATION */}
            <TextField
                {...field}
                id={id}
                disabled={disabled}
                label={label}
                placeholder={placeholder}
                type={showPassword && type === "password" ? "text" : type}
                variant={variant}
                fullWidth={isFullwidth}
                // onChange={(e) => onChange(e)}
                InputLabelProps={{
                    sx: { fontFamily: "Poppins, sans-serif", fontSize: { xs: 14, md: 16 } },
                }}
                inputProps={{
                    style: {
                        fontSize: { xs: 14, md: 16 },
                        fontFamily: "Poppins, sans-serif",
                    },
                    ...inputProps,
                }}
                sx={{
                    "& input": {
                        fontFamily: "Poppins, sans-serif",
                    },
                    background: '#fff',
                    width: width,
                }}
                error={meta.touched && Boolean(meta.error)}
                InputProps={{
                    // THIS HANDLES THE PASSWORD VISIBILITY AND ALSO IF THE TYPE OF THE INPUT IS SEARCH
                    endAdornment:
                        type === "password" ? (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleTogglePasswordVisibility}
                                >
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ) : null,
                    startAdornment: isSearch ? (
                        <InputAdornment position="start">
                            {startIcon}
                        </InputAdornment>
                    ) : null,
                }}
            />
            {/* THIS JUST DISPLAYS ERROR MESSAGES */}
            {meta.touched && meta.error && (
                <FormHelperText
                    sx={{ fontFamily: "Kanit", fontSize: 14, color: "red" }}
                >
                    {errorText || meta.error}
                </FormHelperText>
            )}
        </>
    );
};

export default StyledTextField;
