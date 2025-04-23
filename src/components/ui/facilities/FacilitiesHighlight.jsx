import { Box, Typography } from '@mui/material';
import React from 'react';

function FacilitiesHighlight({ img, title }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src={img}
        alt={img}
        draggable={false}
        style={{
          width: '100%',
          maxWidth: '85px',
          height: '85px',
          userSelect: 'none',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
      <Typography>{title}</Typography>
    </Box>
  );
}

export default FacilitiesHighlight;
