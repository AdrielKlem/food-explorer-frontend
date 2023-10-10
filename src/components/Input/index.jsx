import { Container } from "./styles"

export function Input({icon: Icon, name, onIconClick, ...rest}) {
    return (
        <Container $Icon={!!Icon}>
            {name && <label htmlFor={name}>{name}</label>}
            {Icon && (
                <button
                    className="icon-container"
                    onClick={onIconClick}
                >
                    <Icon size={20} />
                </button>
            )}
            <input 
                id={name}
                {...rest}
            />
        </Container>
    )
}