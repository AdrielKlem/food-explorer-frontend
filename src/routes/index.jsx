import { BrowserRouter } from "react-router-dom"

import { Details } from '../pages/Details'

export function Routes() {
    return(
        <BrowserRouter>
            <Details />
        </BrowserRouter>
    )
}