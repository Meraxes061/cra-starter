import React, { FunctionComponent } from 'react'
import cx from 'classnames'

import './Button.scss'



type ButtonTheme = 'primary' | 'secondary'
type ButtonSize = 'small' | 'medium' | 'large'

type Props = JSX.IntrinsicElements['button'] & {
    readonly theme?: ButtonTheme
    readonly size?: ButtonSize
    readonly isLoading?: boolean
}
const Button: FunctionComponent<Props> = ({
    theme,
    size = 'medium',
    isLoading,
    children,
    ...rest
}) => {
    const classNames = cx(
        'c-button',
        {
            [`c-button--${theme}`]: theme,
            [`c-button--${size}`]: size,
            isLoading: isLoading,
        }
    )
    return (
        <button className={classNames} {...rest}>
            {isLoading
                ? <span>Loading</span>
                : <span>{children}</span>
            }
        </button>
    )
}

export default Button;