import { BrowserRouter } from "react-router-dom"

import { Logo } from '../components/Logo'

export function Routes() {
    return(
        <BrowserRouter>
            <Logo />
        </BrowserRouter>
    )
}