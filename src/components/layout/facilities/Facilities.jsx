import { Box, Typography } from '@mui/material';
import React from 'react';
import Car from '../../../assets/Icon/car.png';
import Breakfast from '../../../assets/Icon/an-sansg.png';
import Swimming from '../../../assets/Icon/be-boi.png';
import Gym from '../../../assets/Icon/gym.png';
import Safe from '../../../assets/Icon/kets.png';
import Spa from '../../../assets/Icon/spa.png';
import Wifi from '../../../assets/Icon/wifi.png';
import FacilitiesHighlight from '../../ui/facilities/FacilitiesHighlight';
function Facilities() {
  return (
    <Box sx={{ width: '100%', mb: '100px' }}>
      <Typography
        variant='h2'
        sx={{
          fontFamily: 'THCartoon9',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          m: '100px 0',
        }}
      >
        Những tiện ích giữa lòng cố đô
      </Typography>
      <Box
        sx={{
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
          }}
        >
          <FacilitiesHighlight img={Car} title={'Bãi đậu xe'} />
          <FacilitiesHighlight img={Breakfast} title={'Bữa Sáng'} />
          <FacilitiesHighlight img={Swimming} title={'Bể bơi'} />
          <FacilitiesHighlight img={Gym} title={'Thể Thao'} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-evenly',
          }}
        >
          <FacilitiesHighlight img={Safe} title={'An Toàn'} />
          <FacilitiesHighlight img={Spa} title={'Thư Giản'} />
          <FacilitiesHighlight img={Wifi} title={'Wifi'} />
        </Box>
      </Box>
    </Box>
  );
}

export default Facilities;
