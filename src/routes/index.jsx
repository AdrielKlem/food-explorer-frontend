import { BrowserRouter } from "react-router-dom"

import { SignUp } from '../pages/SignUp'

export function Routes() {
    return(
        <BrowserRouter>
            <SignUp />
        </BrowserRouter>
    )
}