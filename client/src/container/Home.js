import {useState,useEffect} from 'react'
import axios from 'axios';
import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useSecret } from '../hooks/useSecret';
export const Home = () => {

    const {
        secret,
        count,
        message,
        handleCountChange,
        handleSecretChange,
        createSecret,
    } = useSecret()

    return (
    <Container >
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '55px',
            marginTop: '50px'
        }}>
            <Typography variant='h1' fontSize={40}>ONE TIME SECRET</Typography>
            <TextField
          id="outlined-multiline-static"
          label="Your secret"
          multiline
          rows={4}
          value={secret}
          onChange={handleSecretChange}
        />
        <Typography color={'gray'}>If none value is set, the count value will be 1 by default</Typography>
            <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={count}
          onChange={handleCountChange}
        />
        <Button >CREATE SECRET</Button>
        <Typography color={'gray'}>{message}</Typography>
        </Box>
    </Container>
    )
}
