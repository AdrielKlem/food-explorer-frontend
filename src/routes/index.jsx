import { BrowserRouter } from "react-router-dom"

import { Input } from '../components/Input'

export function Routes() {
    return(
        <BrowserRouter>
            <Input 
                name={"Email"}
                placeholder={"Opa"}
            />
        </BrowserRouter>
    )
}