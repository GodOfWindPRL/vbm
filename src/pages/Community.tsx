import styled from 'styled-components';
import star from 'assets/images/star.png';
import textcm from 'assets/images/text-cm.png';
import { useEffect } from 'react';
import mountLeft from 'assets/images/mout-left.png';
import mountRight from 'assets/images/mout-right.png';
import mountBot from 'assets/images/mout-bot.png';
import mountBot2 from 'assets/images/mout-bot-2.png';
import bgTemple from 'assets/images/temple.png';
import team1 from 'assets/images/team-1.png'
import team2 from 'assets/images/team-2.png'
import member1 from 'assets/images/member-1.png'
import member2 from 'assets/images/member-2.png'
import member3 from 'assets/images/member-3.png'
import member4 from 'assets/images/member-4.png'
import lightFlow from 'assets/images/light.mp4';
import btcGif from 'assets/images/btc.gif';
import bgDrum from 'assets/images/bg-footer.png';
import { breakpointsMedias } from 'constants/breakpoints';
import configColor from 'constants/configColor';

const Community = () => {

    const dataTeams = [{
        img: team1,
        name: "@GauuuNFT",
        pos: "FOUNDER"
    }, {
        img: team2,
        name: "@GauuuNFT",
        pos: "CO-FOUNDER, ARTIST"
    }]
    const dataMembers = [{
        img: member1,
        name: "Nodemonkes",
    }, {
        img: member2,
        name: "Quantumcat",
    }, {
        img: member3,
        name: "Nodemonkes",
    }, {
        img: member4,
        name: "Quantumcat",
    },
     {
        img: member4,
        name: "Quantumcat",
    }
]

    useEffect(() => {
        const appearBot = document.querySelectorAll('.cm-bot') as any;
        const appearDown = document.querySelectorAll('.cm-down') as any;
        const appear = document.querySelectorAll('.appear-left') as any;
        const appearDrum = document.querySelector('.cm-drum') as any;
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
                    entry.target.classList.add('cm-bot-active');
                }
            });
        }
        const cb3 = function (entries: any) {
            entries.forEach((entry: any) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('cm-drum-active');
                }
            });
        }
        const io = new IntersectionObserver(cb);
        const io2 = new IntersectionObserver(cb2);
        const io3 = new IntersectionObserver(cb3);
        appearDrum && io3.observe(appearDrum);
        for (let item of [...appear, ...appear2]) {
            io.observe(item);
        }
        for (let item of appearBot) {
            io2.observe(item);
        }
        for (let item of appearDown) {
            io2.observe(item);
        }
    }, [])

    return (
        <Wrap id='community'>
            <div className="lightflow">
                <div>
                    <video src={lightFlow} autoPlay muted={true} playsInline loop ></video>
                    <div></div>
                </div>
            </div>
            <div className="lightshadow"></div>
            <div className="cm-drum"></div>
            <div className="cm-shadow ks-top"></div>
            <div className="cm-shadow ks-bot"></div>
            <div className="cm-balllight"></div>
            <div className="cm-bot cm-temple"></div>
            <div className="cm-bot cm-bot2"></div>
            <div className="cm-bot cm-bot1"></div>
            <div className="cm-left appear-left"></div>
            <div className="cm-right appear-right"></div>
            <div className="cm-btc">
                <img src={btcGif} alt="" />
            </div>
            <div className="cm-main container" id='cm-main'>
                <div className='cm-down cm-title' >
                    <img src={textcm} alt="" />
                </div>
                <div className="cm-down cm-content">
                    <div className="cmc-left">
                        <span className="cmcl-title text-3 color-primary">CORE TEAM</span>
                        <div className="cmcl-list">
                            {dataTeams.map((item, index) => <div key={index} className='cmi'>
                                <div className="cmi-img">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="cmi-text">
                                    <span className="text-2 color-white">{item.name}</span>
                                    <span className="text-0-2 color-primary">{item.pos}</span>
                                </div>
                            </div>)}
                        </div>
                    </div>
                    <div className="cmc-mid"></div>
                    <div className="cmc-left">
                        <span className="cmcl-title text-3 color-primary">COMMUNITY MEMBERS</span>
                        <div className="cmcl-list">
                            {dataMembers.map((item, index) => <div key={index} className='cmi'>
                                <div className="cmi-img">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="cmi-text">
                                    <span className="text-2 color-white">{item.name}</span>
                                </div>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </Wrap>
    );
}

export default Community;

const Wrap = styled.div`
    /* z-index: 1; */
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: relative;
    background-image: linear-gradient(to bottom, #eaac0011 0%, #000000  100%);
    .lightshadow {
        position: absolute;
        width: 550px;
        height: 100%;
        left: 50%;
        top: 0;
        background-image: linear-gradient(to bottom,#00000062  0%, #eaac0022 50%, #00000062  100%);
        transform: translateX(-50%);
        filter: blur(10px);
    }
    .lightflow {
        position: absolute;
        width: 553px;
        height: 100%;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        display: flex;
        mix-blend-mode: lighten;
        z-index: 1;
        /* opacity: 0.3; */
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
    .cm-drum {
        position: absolute;
        width: 69.7vw;
        left: 15.15vw;
        bottom: -27%;
        transform: rotate(-180deg);
        background-image: url(${bgDrum});
        height: 69.7vw;
        background-size: cover;
        transition: 2.5s ease-in-out;
    }
    .cm-drum-active {
        transform: rotate(0deg);;
    }
    .cm-main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 1;
        position: relative;
        .cm-title {
            width: 376px;
            height: fit-content;
            display: flex;
            margin-bottom: 92px;
            > img {
                width: 100%;
                height: auto;
            }
            position: relative;
        }
        .cm-content {
            width: 100%;
            transition: 2s ease-in-out;
            display: flex;
            position: relative;
            gap: 24px;
            justify-content: space-between;
            .cmc-left {
                width: 30%;
                max-width: 408px;
                display: flex;
                flex-direction: column;
                .cmcl-title {
                    text-align: center;
                    margin-bottom: 24px;
                }
                .cmcl-list {
                    padding: 15px;
                    border-radius: 16px;
                    border: 1px solid #e1ba5f37;
                    display: flex;
                    width: 100%;
                    flex-direction: column;
                    gap: 8px;
                    background-image: linear-gradient(to bottom,#e1ba5f13  0%, #e1ba5f43 100%);
                    overflow: auto;
                    max-height: 464px;
                    scrollbar-width: thin;
                    scrollbar-color: ${configColor.yellow} transparent;
                    .cmi {
                        padding: 15px;
                        border-radius: 16px;
                        border: 1px solid #e1ba5f37;
                        display: flex;
                        align-items: center;
                        width: 100%;
                        gap: 24px;
                        background-image: linear-gradient(to bottom,#e1ba5f13  0%, #e1ba5f43 100%);
                        .cmi-img {
                            border-radius: 8px;
                            width: 70px;
                            height: 70px;
                            overflow: hidden;
                            > img {
                                width: 100%;
                            }
                        }
                        .cmi-text {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            gap: 4px;
                        }
                    }
                }
            }
        }
        .cm-content-active {
            transform: translateX(0%);
            opacity: 1;
            .kmc-right {
                .kmcr-bot {
                    width: 100%;
                }
            }
        }
    }
    .cm-shadow {
        position: absolute;
        width: 100%;
        height: 18.5%;
        bottom: 0;
        background: linear-gradient(180deg, rgba(12, 14, 18, 0) 0%, #0C0E12 100%);
        z-index: 1;
    }
    .ks-top {
        top: 0;
        background: linear-gradient(180deg, #0C0E12 0%, rgba(12, 14, 18, 0) 100%);
    }
    .cm-left {
        position: absolute;
        width: 100%;
        height: 100%;
        bottom: 0;
        left: 0;
        z-index: 0;
        background-image: url(${mountLeft});
        background-size: contain;
        background-position: left;
        background-repeat: no-repeat;

    }
    .cm-right {
        position: absolute;
        width: 100%;
        height: 100%;
        bottom: 0;
        right: 0;
        z-index: 0;
        background-image: url(${mountRight});
        background-size: contain;
        background-position: right;
        background-repeat: no-repeat;
    }
    .cm-bot,
    .cm-temple {
        position: absolute;
        width: 100%;
        height: 100%;
        bottom: 0;
        right: 0;
        z-index: 1;
        background-image: url(${mountBot});
        background-size:  100% auto;
        background-position: bottom center;
        background-repeat: no-repeat;
        transition: 2s ease-in-out;
        transform: translateY(50%);
    }
    .cm-temple {
        background-image: url(${bgTemple});
        transition: 2.5s ease-in-out;
    }
    .cm-bot2 {
        background-image: url(${mountBot2});
        mix-blend-mode: multiply;
    }
    .cm-down {
        transform: translateY(-100%);
        opacity: 0;
        transition: 2s ease-in-out;
    }
    .cm-bot-active {
        transform: translateY(0%);
        opacity: 1;
    }

    .cm-btc {
        position: absolute;
        width: 28.75%;
        height: fit-content;
        top: 50%;
        /* right: 50%; */
        z-index: 1;
        /* transform: translate(-50%, -50%); */
        mix-blend-mode: lighten;
        transform: translateY(-30%);
        > img {
            width: 100%;
            height: auto;
        }
    }
    .cm-balllight {
        width: 150vw;
        height: 150vw;
        background: #e3a20c;
        background: linear-gradient(180deg, #f1c204c2 0%,rgba(12, 14, 18, 0) 13%, rgba(12, 14, 18, 0) 100%);
        filter: blur(205px);
        border-radius: 50%;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 90%);
        z-index: 1;
    }
    ${breakpointsMedias.max1199} {
        height: fit-content;
        padding-top: 110px;
        padding-bottom: 344px;
        .lightshadow {
            width: 197px;
        }
        .lightflow {
            width: 197px;
            > div {
                &::before,
                &::after {
                    background-image: linear-gradient(to bottom,#0F0F14  0%, #9B8C43 100%);
                }
                > video {
                    height: 100%;
                }
            }
            
        }
        .cm-drum {
            position: absolute;
            width: 750px;
            left: 50%;
            bottom: 0;
            transform: translate(-50%, 24%) !important;
            background-image: url(${bgDrum});
            height: 750px;
            background-size: cover;
            transition: 2.5s ease-in-out;
        }
        .cm-main {
            .cm-title {
                width: 228px;
                margin-bottom: 24px;
            }
            .cm-content {
                gap: 40px;
                flex-direction: column;
                align-items: center;
                .cmc-left {
                    width: 100%;
                    max-width: 408px;
                    .cmcl-title {
                        text-align: center;
                        margin-bottom: 24px;
                    }
                    .cmcl-list {
                        .cmi {
                            border: 1px solid #e1ba5f2f;
                            background-image: linear-gradient(to bottom, #2a261d89 0%, #ce980e60 100%);
                            .cmi-text {
                                flex: 1;
                            }
                        }
                    }
                }
            }
        }
        .cm-left {
            display: none;
        }
        .cm-right {
            display: none;
        }
        .cm-bot,
        .cm-temple {

        }
        .cm-temple {
            background-image: url(${bgTemple});
            background-size:  100% auto;
            background-position: bottom center;
            transition: 2.5s ease-in-out;
            min-width: 880px;
            left: 50%;
            transform: translateX(-50%) !important;
        }
        .cm-bot2 {

        }
        .cm-btc {
            width: 255px;
            top: unset;
            bottom: 32px;
        }
        .cm-balllight {
            width: 335px;
            height: 335px;
            background: #e7b132cc;
            filter: blur(155px);
            left: 50%;
            bottom: 20px;
            opacity: 0.7;
            transform: translate(-50%, 0%);
        }
    }
    ${breakpointsMedias.max767} {
        .cm-bot2,
        .cm-bot1 {
            display: none;
        }
    }
`
