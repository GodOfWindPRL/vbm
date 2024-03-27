import styled from 'styled-components';
import star from 'assets/images/star.png';
import textKey from 'assets/images/text-key.png';
import { useEffect } from 'react';
import bgLeft from 'assets/images/bg-key-left.png';
import bgRight from 'assets/images/bg-key-right.png';
import bgMid from 'assets/images/bg-key-mid.png'
import icon1 from 'assets/images/icon-key-1.png'
import icon2 from 'assets/images/icon-key-2.png'
import icon3 from 'assets/images/icon-key-3.png'
import barBot from 'assets/images/bottom-key.png'
import imgBird from 'assets/images/bird.png'
import lightFlow from 'assets/images/light.mp4';
import { breakpointsMedias } from 'constants/breakpoints';

const KeyValue = () => {

    const data = [{
        icon: icon1,
        text: "Connect artist with builder"
    }, {
        icon: icon2,
        text: "Support marketing"
    }, {
        icon: icon3,
        text: "Educate"
    }]

    useEffect(() => {
        const appearMid = document.querySelector('.appear-mid') as any;
        const appear = document.querySelectorAll('.appear-left') as any;
        const appearBird = document.querySelectorAll('.bird') as any;
        const appear2 = document.querySelectorAll('.appear-right') as any;
        const bnMain = document.querySelector('.km-content') as any;
        const cb = function (entries: any) {
            entries.forEach((entry: any) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear-left-active');
                }
            });
        }
        const cb2 = function (entries: any) {
            entries.forEach((entry: any) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('km-content-active');
                }
            });
        }
        const cb3 = function (entries: any) {
            entries.forEach((entry: any) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('key-mid-active');
                }
            });
        }
        const io = new IntersectionObserver(cb);
        const io2 = new IntersectionObserver(cb2);
        const io3 = new IntersectionObserver(cb3);
        bnMain && io2.observe(bnMain);
        appearMid && io3.observe(appearMid);
        for (let item of [...appear, ...appearBird]) {
            io.observe(item);
        }
        for (let item of appear2) {
            io.observe(item);
        }
    }, [])

    return (
        <Wrap id='keyValue'>
            <div className="lightflow">
                <div>
                    <video src={lightFlow} autoPlay muted={true} playsInline loop ></video>
                    <div></div>
                </div>
            </div>
            <div className="key-mid appear-mid"></div>
            <div className="key-shadow ks-top"></div>
            <div className="key-shadow ks-bot"></div>
            <div className="key-left appear-left"></div>
            <div className="key-right appear-right"></div>
            <div className="key-main container" id='key-main'>
                <div className='km-title' >
                    <img src={textKey} alt="" />
                </div>
                <div className="km-c-wrap">
                    <div className="km-content">
                        <div className="kmc-right">
                            <div className="kmcr-top">
                                <span className="kmcrt-text text-2">
                                    We always aim to leverage both internal and external resources, as well as our own capabilities, to support Bitcoin enthusiasts and builders looking to contribute to the Bitcoin ecosystem.
                                </span>
                                <div className="kmcrt-list">
                                    {data.map((item, index) => <div
                                        key={index}
                                        className='kmcrtl-item'
                                    >
                                        <div className='ki'>
                                            <div className="ki-icon">
                                                <div className="">
                                                    <img src={item.icon} alt="" />
                                                </div>
                                            </div>
                                            <span className="text-2 color-white">{item.text}</span>
                                        </div>
                                    </div>)}
                                </div>
                            </div>
                            <div className="kmcr-bot">

                            </div>
                        </div>

                        <div className="star">
                            <img src={star} alt="" />
                        </div>
                    </div>
                    <div className="bird">
                        <img src={imgBird} alt="" />
                    </div>
                </div>
            </div>
        </Wrap>
    );
}

export default KeyValue;

const Wrap = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: relative;
    background-image: linear-gradient(to bottom, #0c0a0362 0%, #000000  100%);
    .lightflow {
        position: absolute;
        width: 553px;
        height: 100%;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        display: flex;
        mix-blend-mode: lighten;
        opacity: 0.3;
        > div {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        > video {
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            position: absolute;
            width: auto;
            height: 1080px;
            z-index: 0;
            /* mix-blend-mode: lighten; */
        }
        > div {
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 1;
            filter: blur(5px);
            background-image: linear-gradient(to bottom, #615f4227 0%, #16161638  100%);
        }
        &::before,
        &::after {
            content: "";
            width: 1px;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 1;
            background-image: linear-gradient(to bottom,#0F0F14  0%, #9B8C43 50%, #0F0F14  100%);
        }
        &::after {
            left: unset;
            right: 0 !important;
        }
        }
        
    }
    .key-mid {
        position: absolute;
        width: 120vh;
        height: 120vh;
        background-image: url(${bgMid});
        background-size: cover;
        background-position: center;
        transition: 4s ease-in-out;
        top: 57%;
        left: 57%;
        transform: scale(1.2) translate(-50%, -50%);
    }
    .key-mid-active {
        top: 50%;
        left: 50%;
        transform: scale(1) translate(-50%, -50%);
    }
    .key-main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .km-title {
            width: 298px;
            height: fit-content;
            display: flex;
            margin-bottom: 38px;
            > img {
                width: 100%;
                height: auto;
            }
        }
        .km-c-wrap {
            width: 100%;
            height: fit-content;
            position: relative;
            .bird {
                position: absolute;
                width: fit-content;
                height: 100%;
                top: 0;
                left: 0;
                opacity: 0;
                transform: translate(-100%, 0);
                transition: 4s ease-in-out;
                > img {
                    width: auto;
                    height: 100%;
                }
            }
            .appear-left-active {
                transform: translate(0, 0);
            }
        }
        .km-content {
            width: 100%;
            transition: 2s ease-in-out;
            transform: translateX(30%);
            opacity: 0;
            display: flex;
            align-items: center;
            padding: 38.5px 0;
            position: relative;
            .kmc-right {
                width: 60%;
                margin-left: auto;
                display: flex;
                flex-direction: column;
                gap: 48px;
                .kmcr-top {
                    display: flex;
                    align-items: flex-end;
                    gap: 80px;
                    .kmcrt-text {
                        flex: 1;
                    }
                    .kmcrt-list {
                        display: flex;
                        flex-direction: column;
                        flex: 1;
                        gap: 8px;
                        .kmcrtl-item {
                            border-radius: 16px;
                            height: 102px;
                            padding: 1px;
                            display: flex;
                            background-image: linear-gradient(to bottom, #544618 0%, #665216 100%);
                            .ki {
                                border-radius: 15px;
                                background-image: linear-gradient(to bottom, #2A261D 0%, #40361C 100%);
                                width: 100%;
                                height: 100%;
                                display: flex;
                                align-items: center;
                                padding: 15px 23px;
                                gap: 24px;
                                .ki-icon {
                                    width: 70px;
                                    height: 70px;
                                    border-radius: 8px;
                                    padding: 1px;
                                    background-image: linear-gradient(to bottom, #120F0D 0%, #5E460A 100%);
                                    > div {
                                        background-color: #15120D;
                                        border-radius: 7px;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        width: 100%;
                                        height: 100%;
                                        > img {
                                            width: 34px;
                                            height: auto;
                                        }
                                    }

                                }
                            }
                        }
                    }
                }
                .kmcr-bot {
                    transition: 3s ease-in-out;
                    width: 0%;
                    height: 36px;
                    background-image: url(${barBot});
                    background-size: 100% 100%;
                }
            }
            .star {
                position: absolute;
                width: 55%;
                height: fit-content;
                top: 50%;
                transform: translate(20%, -50%);
                transition: 3s ease-in-out;
                opacity: 0;
                > img {
                    width: 100%;
                    height: auto;
                }
            }
        }
        .km-content-active {
            transform: translateX(0%);
            opacity: 1;
            .kmc-right {
                .kmcr-bot {
                    width: 100%;
                }
            }
            .star {
                transform: translate(-20%, -50%);
                opacity: 1;
                animation: light 4s infinite ease-in-out;
                @keyframes light {
                    0% {
                        opacity: 1; 
                    }
                    50% {
                        opacity: 0.2; 
                    }
                    100% {
                        opacity: 1; 
                    }
                }
            }
        }
    }
    .key-shadow {
        position: absolute;
        width: 100%;
        height: 18.5%;
        bottom: 0;
        z-index: 0;
        background: linear-gradient(180deg, rgba(12, 14, 18, 0) 0%, #0C0E12 100%);
    }
    .ks-top {
        top: 0;
        background: linear-gradient(180deg, #0C0E12 0%, rgba(12, 14, 18, 0) 100%);
    }
    .key-left {
        position: absolute;
        width: 100%;
        height: 100%;
        bottom: 0;
        left: 0;
        z-index: 0;
        background-image: url(${bgLeft});
        background-size: cover;
        background-position: center;
        transition: 2s ease-in-out;
    }
    .key-right {
        position: absolute;
        width: 34.4%;
        height: 29.6%;
        bottom: 0;
        right: 0;
        z-index: 0;
        background-image: url(${bgRight});
        background-size: 100% 100%;
        transition: 2s ease-in-out;
    }
    ${breakpointsMedias.max1199} {
        height: fit-content;
        padding-top: 110px;
        padding-bottom: 100px;
        .lightflow {
            width: 197px;
            opacity: 0.8;
        }
        .key-mid {
            display: none;
        }
        .key-main {
            .km-title {
                width: 183px;
                margin-bottom: 24px;
                position: relative;
                &::after {
                    content: "";
                    width: 100%;
                    height: 100%;
                    background: #f1c20467;
                    filter: blur(55px);
                    border-radius: 50%;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                }
            }
            .km-c-wrap {
                flex-direction: column-reverse;
                display: flex;
                align-items: center;
                .bird {
                    position: unset;
                    width: 100%;
                    max-width: 335px;
                    height: fit-content;
                    margin-bottom: 24px;
                    > img {
                        width: 100%;
                        height: auto;
                    }
                }
            }
            .km-content {
                width: 100%;
                display: flex;
                padding: 0;
                flex-direction: column;
                align-items: center;
                .kmc-right {
                    width: 100%;
                    flex-direction: column;
                    max-width: 500px;
                    margin-left: unset;
                    display: flex;
                    flex-direction: column;
                    gap: 48px;
                    .kmcr-top {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 24px;
                        .kmcrt-text {
                            width: 100%;
                            text-align: center;
                            font-size: 16px;
                            line-height: 130%;
                        }
                        .kmcrt-list {
                            flex: unset;
                            .kmcrtl-item {
                                border-radius: unset;
                                height: 102px;
                                padding: 0;
                                display: flex;
                                background: unset;
                                .ki {
                                    border-radius: 16px;
                                    border: 1px solid #e1ba5f2f;
                                    background-image: linear-gradient(to bottom, #2a261d89 0%, #ce980e60 100%);
                                    padding: 15px 23px;
                                    gap: 24px;
                                    > span {
                                        flex: 1;
                                        font-size: 16px;
                                        line-height: 130%;
                                    }
                                }
                            }
                        }
                    }
                    .kmcr-bot {
                        display: none;
                    }
                }
                .star {
                    position: absolute;
                    width: 100%;
                    height: fit-content;
                    max-width: 335px;
                    top: 0;
                    left: 50%;
                    transform: translate(-70%, -98%);
                    > img {
                        width: 100%;
                        height: auto;
                    }
                }
            }
            .km-content-active {
                transform: translateX(0%);
                opacity: 1;
                .kmc-right {
                    .kmcr-bot {
                        width: 100%;
                    }
                }
            }
        }
        .key-shadow {
            position: absolute;
            width: 100%;
            height: 18.5%;
            bottom: 0;
            z-index: 0;
            background: linear-gradient(180deg, rgba(12, 14, 18, 0) 0%, #0C0E12 100%);
        }
        .ks-top {
            top: 0;
            background: linear-gradient(180deg, #0C0E12 0%, rgba(12, 14, 18, 0) 100%);
        }
        .key-left {
            position: absolute;
            width: 100%;
            height: 100%;
            bottom: 0;
            left: 0;
            z-index: 0;
            background-image: url(${bgLeft});
            background-size: cover;
            background-position: center;
        }
        .key-right {
            position: absolute;
            width: 34.4%;
            height: 29.6%;
            bottom: 0;
            right: 0;
            z-index: 0;
            background-image: url(${bgRight});
            background-size: 100% 100%;
        }
    }
    ${breakpointsMedias.max767} {
    }
`
