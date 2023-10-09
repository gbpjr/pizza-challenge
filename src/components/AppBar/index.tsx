import * as React from 'react'

import { AppBar as MUIAppBar } from '@mui/material'
import AudioPlayer from '../AudioPlayer'

import {
  Box,
  Toolbar,
} from '@mui/material'

const AppBar: React.FC = () => {

  return (
    <Box sx={{ flexGrow: 1}}>
      <MUIAppBar
        position="static"
        elevation={0}
        color='transparent'
      >
        <Toolbar>
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'flex' } }}>
            <AudioPlayer/>
          </Box>
        </Toolbar>
      </MUIAppBar>
    </Box>
  )
}

export default AppBar