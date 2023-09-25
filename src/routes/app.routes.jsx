import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Details } from '../pages/Details'

export function AppRoutes() {
    return(
        <Routes>
            <Route path='/d' element={<Home />} />
            <Route path='/' element={<Details />} />
        </Routes>
    )
}