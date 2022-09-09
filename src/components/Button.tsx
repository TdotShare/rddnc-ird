import React from 'react'

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes  {}

const Button:React.FC<ButtonProps> = props => {
    const {children, ...rest} = props;

    return (
        <button {...rest}>{children}</button>
    )
}


export default Button