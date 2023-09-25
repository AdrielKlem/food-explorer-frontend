import { BrowserRouter } from "react-router-dom"

import { SignIn } from '../pages/SignIn'

export function Routes() {
    return(
        <BrowserRouter>
            <SignIn />
        </BrowserRouter>
    )
}