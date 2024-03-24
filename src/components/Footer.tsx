import configColor from 'constants/configColor';
import styled from 'styled-components';
import icon1 from 'assets/images/icon-subber.png';
import icon2 from 'assets/images/icon-atlas3.png';
import imgTextContact from 'assets/images/img-text-contact.png';
import bgFooter from 'assets/images/bg-footer.png';
import { breakpointsMedias } from 'constants/breakpoints';

export const listContact = [{
    icon: icon1,
    text: "SUBBER",
    link: "",
    color: "red",
    bg: "#EA430F1A"
}, {
    icon: icon2,
    text: "ATLAS3",
    link: "",
    color: "white",
    bg: "#ffffff17"
}]

const Footer = () => {

    return (
        <>

            <Wrap className='footer' id='contact'>
                <div className="container">
                    <div className="footer-title">
                        <img src={imgTextContact} alt="" />
                    </div>
                    <div className="footer-bar">
                        <div className="fb-round"></div>
                        <div className="fb-line"></div>
                        <div className="fb-cross"></div>
                    </div>
                    <div className="footer-link">
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
                </div>
            </Wrap></>

    )
}

export default Footer

const Wrap = styled.div`
    height: 242px;
    width: 100%;
    background: #151109;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    position: relative;
    z-index: 0;
    overflow: hidden;
    &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 70vw;
        height: 70vw;
        background-image: url(${bgFooter});
        background-position: center;
        background-size: cover;
        z-index: 0;
        transform: translateX(-50%);
        opacity: 0.6;
    }
    .container {
        display: flex;
        align-items: center;
        height: 100%;
        z-index: 1;
        .footer-title {
            width: 328px;
            height: auto;
            display: flex;
            margin-right: 40px;
            transition: 0.5s ease-in-out;
            > img {
                width: 100%;
                height: auto;
            }
        }
        .footer-bar {
            display: flex;
            align-items: center;
            flex: 1;
            transition: 0.5s ease-in-out;
            .fb-round {
                width: 16px;
                height: 16px;
                border-radius: 50%;
                border: 1px solid ${configColor.yellow};
            }
            .fb-line {
                flex: 1;
                height: 1px;
                background-color: ${configColor.yellow};
            }
            .fb-cross {
                width: 1px;
                height: 24px;
                background-color: ${configColor.yellow};
            }
        }
        .footer-link {
            display: flex;
            align-items: center;
            .fl-item {
                display: flex;
                align-items: center;
                gap: 16px;
                padding: 0 24px;
                transition: 0.5s ease-in-out;
                .fli-img {
                    width: 70px;
                    height: 70px;
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
                        height: 24px;
                        background-color: ${configColor.yellow};
                    }
                }
                &:last-child {
                    padding-right: 0;
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
        }
        &:hover {
            .footer-title {
                margin-right: 64px;
            }
            .footer-link {
                .fl-item {
                    padding: 0 40px;
                }
            }
        }
    }
    ${breakpointsMedias.max1199} {
        height: 160px;
        &::before {
            width: 750px;
            height: 750px;
            opacity: 0.6;
            top: 0;
            transform: translate(-50%, -76%);
            background-size: cover;
        }
        .container {
            .footer-title {
                width: 228px;
                margin-right: 24px;
            }
            .footer-bar {

            }
            .footer-link {
                .fl-item {
                    gap: 16px;
                    padding: 0 24px;
                    .fli-img {
                        width: 50px;
                        height: 50px;
                        > img {
                            width: 32px;
                            height: 32px;
                        }
                    }
                    &:first-child {
                        &::after {
                            height: 24px;
                        }
                    }
                    &:last-child {
                        padding-right: 0;
                    }
                }
            }
            &:hover {
                .footer-title {
                    margin-right: 32px;
                }
                .footer-link {
                    .fl-item {
                        padding: 0 24px;
                    }
                }
            }
        }
    }
    ${breakpointsMedias.max767} {
        height: 244px;
        &::before {
            opacity: 0.6;
        }
        .container {
            flex-direction: column;
            justify-content: center;
            gap: 24px;
            padding: 0;
            .footer-title {
                width: 228px;
                margin-right: 0;
            }
            .footer-bar {
                display: none;
            }
            .footer-link {
                width: 100%;
                justify-content: center;
                .fl-item {
                    gap: 16px;
                    flex: 1;
                    padding: 0 24px;
                    max-width: 200px;
                    justify-content: center;
                    &:first-child {
                        &::after {
                            height: 40px;
                            background-color: #e1ba5f69;
                        }
                    }
                    &:last-child {
                        padding-right: 24px;
                    }
                }
            }
            &:hover {
                .footer-title {
                    margin-right: 0;
                }
                .footer-link {
                    .fl-item {
                        padding: 0 24px;
                    }
                }
            }
        }
    }
`;
