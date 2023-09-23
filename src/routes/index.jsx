import { BrowserRouter } from "react-router-dom"

import { Button } from '../components/Button'

export function Routes() {
    return(
        <BrowserRouter>
            <Button title="Entrar" />
        </BrowserRouter>
    )
}