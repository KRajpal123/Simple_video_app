import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Box } from '@mui/material'
import {Navbar,Feed,VideoDetail,ChannelDetails,Search} from './components/component'
const App = () => {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor:"#000"}}>
   <Navbar />
    <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetails />} />
        <Route path='/search/:searchTerm' element={<Search />} />
    </Routes>
    </Box>
    </BrowserRouter>
  )
}

export default App
