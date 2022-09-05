import styled from "styled-components";

const Button: ({text, onClick, className}: {text: string, onClick?: any, className?: string}, ...extraProps: any[]) => JSX.Element = ({text, onClick, className, ...extraProps}) => {
    return <button className={className} onClick={onClick} {...extraProps}>{text}</button>
}

const PrimaryButton = styled(Button)`
    font-size: 1.5rem;
    background-color: ${({theme}) => theme.colors.primary.green};
    color: ${({theme}) => theme.colors.grayScale.white};
    outline: none;
    border: 0;
    padding: 1.5rem 3.25rem;
    border-radius: 0.625rem;
`

export default PrimaryButton