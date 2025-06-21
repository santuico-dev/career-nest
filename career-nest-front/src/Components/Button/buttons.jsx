import { Button, CircularProgress, Typography } from '@mui/material'

const StyledButtons = ({ buttonLabel, isLoading, onClick, ...props }) => {
    return (
        <>
            <Button
                {...props}
                sx={{
                    ...props.sx,
                    opacity:
                        isLoading ? 0.7 : 1,
                }}
                onClick={onClick}
            >
                <Typography
                    sx={{
                        fontFamily: "Kanit",
                        fontWeight: 500,
                        fontSize: {
                            xs: "0.875rem",
                            md: "1rem",
                        },
                        padding: 0.5,
                        visibility: isLoading ? "hidden" : "visible",
                    }}
                >
                    {buttonLabel}
                </Typography>

                {isLoading && (
                    <CircularProgress
                        size={24}
                        color="inherit"
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            marginTop: "-12px",
                            marginLeft: "-12px",
                        }}
                    />
                )}
            </Button>
        </>
    )
}

export default StyledButtons
