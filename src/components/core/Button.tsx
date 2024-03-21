import styled from 'styled-components'
import { breakpointsMedias } from 'constants/breakpoints'
import configColor from 'constants/configColor'

interface IB extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
    typeBt?: "green" | "white" | "yellow" | "red",
    className?: string,
    disabled?: boolean,
}

const Button = ({ text, typeBt = "green", className, disabled = false, ...props }: IB) => {
    return (
        <Wrap className={`bt-${typeBt} ${className}`} disabled={disabled} {...props}>
            <div className=''>
                <span className={`color-black  text-3 text-center`}>
                    {text}
                </span>
            </div>
        </Wrap>
    )
}
export default Button

const Wrap = styled.button`
    /* max-width: 100%; */
    width: 100%;
    height: 72px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: 100% 100%;
    background-position: center;
    .bt-left {
        height: 100%;
        width: auto;
        transition: all 0.2s ease-in-out;
    }
    .bt-right {
        transform: rotateY(180deg);
    }
    .bt-mid {
        height: 100%;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0px;
        transition: all 0.2s ease-in-out;
    }
    &.bt-green {
        .bt-mid {
            background-color: ${configColor.green};
        }
    }
    &.bt-white {

    }
    &.bt-red {
   
    }
    &:hover {

    }

    &:disabled{
        opacity: 0.4;
        cursor: not-allowed;
    }
    &.bt-loading {
        opacity: 0.4;
        cursor: not-allowed;
        :hover {

        }
    }
    @keyframes rotate-center-2 {
        0% {
            transform: rotate(0);
        }
        100% {
           transform: rotate(360deg);
        }
    }
    ${breakpointsMedias.max1199} {
       
    }
`