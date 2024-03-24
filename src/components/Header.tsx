import configColor from 'constants/configColor';
import styled from 'styled-components';
import bgLogo from 'assets/images/bg-logo.png';
import logo from 'assets/images/logo.png';
import { breakpointsMedias } from 'constants/breakpoints';
import { useState } from 'react';
import drum from 'assets/images/bg-footer.png';
import bgText from 'assets/images/bg-text.png';
import { listContact } from './Footer';

function Header() {
    const [show, setShow] = useState(false);

    const menu = [{
        href: "#keyValue",
        text: "Key Value"
    }, {
        href: "#event",
        text: "Event"
    }, {
        href: "#community",
        text: "Community"
    }, {
        href: "#contact",
        text: "Contact"
    }]

    return (
        <Wrap className={show ? "header-black" : ""}>
            <div className="container">
                <div className="header-wrap">
                    {menu.map((item, index) => <a key={index} href={item.href} className="menu-item ">
                        <span className="text-2 color-white">{item.text}</span>
                    </a>)}
                    <a href='#banner' className="logo" onClick={() => { setShow(false) }}>
                        <div>
                            <img src={logo} alt="" />
                        </div>
                    </a>
                    <div className="menu-bt" onClick={() => { setShow(!show) }}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            {show && <WrapMenu>
                {menu.map((item, index) => <a
                    key={index}
                    href={item.href}
                    className="menu-item "
                    onClick={() => { setShow(false) }}
                >
                    <span className="text-2 ">{item.text}</span>
                </a>)}
                <div className="f-list">
                    {listContact.map((item, index) => <a href={item.link} target='_blank' rel='noreferrer' key={index} className='fl-item'>
                        <div className="fli-img" >
                            <div className="" style={{
                                border: `1px solid ${item.color}`,
                                background: item.bg
                            }}></div>
                            <img src={item.icon} alt="" />
                        </div>
                        <span className='text-1' style={{ color: item.color }}>{item.text}</span>
                    </a>)}
                </div>
            </WrapMenu>}
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
        z-index: 1;
        &::after {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            filter: blur(16px);
            z-index: 0;
            top: 0;
            -webkit-filter: blur(16px);
            background-image: linear-gradient(to right,#2B2618 0%,#2B2618 20%, #56420A 50%,#2B2618 80%, #2B2618 100%);
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
            .menu-bt {
                display: none;
            }
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
    ${breakpointsMedias.max1199} {
        .container {
            .header-wrap {
                .menu-item {
                    width: calc((100% - 184px) / 4);
                }
            }
        }
    }
    ${breakpointsMedias.max767} {
        .container {
            padding: 0;
            &::after {
                filter: blur(1px);
                background-image: linear-gradient(to right,#231C0A 0%,#46360A 50%,  #231C0A 100%);
            }
            .header-wrap {
                .menu-item {
                    display: none;
                }
                .menu-bt {
                    display: flex;
                    margin-left: auto;
                    margin-right: 16px;
                    width: 50px;
                    height: 50px;
                    border: 1px solid #e1ba5f87;
                    border-radius: 50%;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    gap: 3px;
                    cursor: pointer;
                    > div {
                        background-color: #E2BC5E;
                        border-radius: 5px;
                        width: 18px;
                        height: 2px;
                    }
                }
            }
        }
        &.header-black {
            .container {
                &::after {
                    background-image: linear-gradient(to right,#12100C 0%,#12100C 45%,#221C0D 50%, #12100C 55%, #12100C 100%);
                }
                .header-wrap {
                    .menu-bt {
                        border: 1px solid ${configColor.yellow};
                        > div {
                            background-color: ${configColor.yellow};
                        }
                    }
                }
            }
        }
    }
`

const WrapMenu = styled.div`
    z-index: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    background: #12100C;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 130px;
    &::before {
        position: absolute;
        width: 100%;
        height: 100%;
        content: "";
        top: 0;
        left: 0;
        background-image: url(${drum});
        background-size: 190% auto;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.5;
        z-index: 0;
    }
    .menu-item {
        z-index: 1;
        flex: 1;
        max-height: 130px;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 255px;
        border-bottom: 1px solid #e1ba5f34;
        > span {
            font-size: 43px;
            line-height: 50px;
            text-align: center;
            background: url(${bgText}) 0 0 / cover no-repeat;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        &:nth-child(4) {
            border-bottom: unset;
        }
    }
    .f-list {
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 49px;
        justify-content: center;
        margin-bottom: 60px;
    }
    .fl-item {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 0 24px;
        transition: 0.5s ease-in-out;
        flex: 1;
        max-width: 200px;
        justify-content: center;
        .fli-img {
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            > div {
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 50px;
                z-index: 0;
                transition: 0.5s ease-in-out;
            }
            > img {
                width: 32px;
                height: 32px;
                z-index: 1;
                transition: 0.5s ease-in-out;
            }
        }
        &:first-child {
            position: relative;
            &::after {
                position: absolute;
                content: "";
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 1px;
                height: 40px;
                background-color: #e1ba5f69;
            }
        }
        &:hover {
            .fli-img {
                > div {
                    opacity: 0.3;
                }
                > img {
                    transform: scale(0.7);
                }
            }
        }
    }
`
