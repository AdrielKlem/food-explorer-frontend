import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { Change } from '../pages/Change'
import { New } from '../pages/New'

export function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details' element={<Details />} />
            <Route path='/new' element={<New />} />
            <Route path='/change/:id' element={<Change />} />
            <Route path='/details' element={<Details />} />
        </Routes>
    )
}