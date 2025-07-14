import React from 'react';
import { AppBar, Toolbar, Box, Button, Typography, Link, Card } from '@mui/material';

const Dashboard = () => {
    return (
        <>
        <AppBar position="fixed" elevation={0} sx={{ backgroundColor: '#FFFFFF', color: '#087071',}}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <Link href="#" underline="none" sx={{ color: '#087071', fontWeight: 'bold', fontFamily: 'Kanit', fontSize: '1.2rem' }}>
                        Jobs
                    </Link>
                    <Link href="#" underline="none" sx={{ color: '#087071', fontWeight: 'bold', fontFamily: 'Kanit', fontSize: '1.2rem' }}>
                        Candidates
                    </Link>
                </Box>
                <Button variant='contained' 
                    sx={{
                        backgroundColor: '#10badcff',
                        fontFamily: 'Kanit',
                        color: '#fff',
                        '&:hover': {
                        backgroundColor: '#0992adff',
                        },
                }}>
                    Post a Job
                </Button>
            </Toolbar>
        </AppBar>

        {/*Employer Dashboard Content*/}
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                backgroundColor: '#f5f5f5',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* Your dashboard content here */}
            <Box sx={{borderRadius: '20px', 
                padding: '1.5rem',
                width: '100%',
                maxWidth: '1200px',
                boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)'
            }}
            >
                <Typography variant='h5'sx={{fontSize: '20px', fontWeight: 'bold', fontFamily: 'Kanit'}}>Posted Jobs</Typography>
                {/* Job posted table next */}
            </Box>
        </Box>
        </>
    );
}

export default Dashboard;