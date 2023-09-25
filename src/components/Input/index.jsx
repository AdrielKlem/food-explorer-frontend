import { Container } from "./styles"

export function Input({icon: Icon, name, ...rest}) {
    return (
        <Container>
            {name && <label htmlFor={name}>{name}</label>}
            {Icon && <Icon size={20} />}
            <input 
                id={name}
                {...rest}
            />
        </Container>
    )
}