import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { Footer } from '../components/Footer'

export function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/d' element={<Details />} />
        </Routes>
    )
}