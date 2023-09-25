import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Change } from '../pages/Change'
import { Footer } from '../components/Footer'

export function AppRoutes() {
    return(
        <Routes>
            <Route path='/d' element={<Home />} />
            <Route path='/' element={<Change />} />
        </Routes>
    )
}