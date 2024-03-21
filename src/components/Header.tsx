import configColor from 'constants/configColor';
import styled from 'styled-components';
import bgLogo from 'assets/images/bg-logo.png';
import logo from 'assets/images/logo.png';

function Header() {
    return (
        <Wrap>
            <div className="container">
                <div className="header-wrap">
                    <a href="#keyValue" className="menu-item ">
                        <span className="text-2 color-white">Key Value</span>
                    </a>
                    <a href="#event" className="menu-item text-2 color-white">
                        <span className="text-2 color-white">Event</span>
                    </a>
                    <a href='#banner' className="logo">
                        <div>
                            <img src={logo} alt="" />
                        </div>
                    </a>
                    <a href="#community" className="menu-item text-2 color-white">
                        <span className="text-2 color-white">Community</span>
                    </a>
                    <a href="#contact" className="menu-item text-2 color-white">
                        <span className="text-2 color-white">Contact</span>
                    </a>
                </div>

            </div>
        </Wrap>
    );
}

export default Header;

const Wrap = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    z-index: 2;
    .container {
        max-width: 1416px;
        margin-top: 40px;
        height: 70px;
        position: relative;
        &::after {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            filter: blur(16px);
            z-index: 0;
            top: 0;
            -webkit-filter: blur(16px);
            background-image: linear-gradient(to right,#12121117 0%,#836c2744 50%,  #12121117 100%);
        }
       
        .header-wrap {
            z-index: 1;
            position: relative;
            width: 100%;
            padding: 0 8px;
            display: flex;
            align-items: center;
            height: 100%;
            background-image: linear-gradient(to right,#12121117 0%,#ac791345 50%,  #12121117 100%);
            border-top: 1px solid #e1ba5f1c;
            .menu-item {
                width: calc((100% - 234px) / 4);
                display: flex;
                align-items: center;
                height: 100%;
                text-align: center;
                justify-content: center;
                position: relative;
                &:nth-child(2) {
                    margin-right: auto;
                }
                &::before {
                    position: absolute;
                    content: "";
                    transition: 0.5s ease-in-out;
                    width: 100%;
                    height: 100%;
                    background-image: linear-gradient(to bottom,#fcbe0344 0%, #12121117 100%);
                    opacity: 0;
                }
                &::after {
                    position: absolute;
                    content: "";
                    top: 0;
                    left: 50%;
                    transition: 0.5s ease-in-out;
                    width: 0%;
                    height: 2px;
                    background-color: ${configColor.yellow};
                    transform: translateX(-50%);
                }
                &:hover {
                    &::before {
                        opacity: 1;
                    }
                    &::after {
                        width: 100%;
                    }
                }
            }
            .logo {
                position: absolute;
                width: 218px;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                display: flex;
                align-items: center;
                justify-content: center;
                > div {
                    > img {
                        width: 138px;
                        height: auto;
                    }
                    position: relative;
                    &::before {
                        position: absolute;
                        content: "";
                        transition: 0.3s ease-in-out;
                        width: 203px;
                        height: 205px;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%) scale(0.9);
                        background-image: url(${bgLogo});
                        opacity: 0;
                    }
                }
                &:hover {
                    > div {
                        &::before {
                            transform: translate(-50%, -50%) scale(1);
                            opacity: 1;
                        }
                    }
                }
            }
        }
    }
`
