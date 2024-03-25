import styled from 'styled-components';
import bgBird from 'assets/images/banner-bird.png';
import textViet from 'assets/images/text-viet.png';
import { useEffect } from 'react';
import bgLeft from 'assets/images/bg-left.png';
import bgRight from 'assets/images/bg-right.png';
import lightFlow from 'assets/images/light.mp4';
import { breakpointsMedias } from 'constants/breakpoints';
import bgBird2 from 'assets/images/bird-2.png';

const Banner = () => {

  useEffect(() => {
    const appear = document.querySelectorAll('.appear-left') as any;
    const appear2 = document.querySelectorAll('.appear-right') as any;
    const bnMain = document.querySelector('.banner-main') as any;
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
          entry.target.classList.add('banner-main-active');
        }
      });
    }
    const io = new IntersectionObserver(cb);
    const io2 = new IntersectionObserver(cb2);
    bnMain && io2.observe(bnMain);
    for (let item of appear) {
      io.observe(item);
    }
    for (let item of appear2) {
      io.observe(item);
    }
  }, [])

  return (
    <Wrap id='banner'>
      <div className="lightflow">
        <div>
          <video src={lightFlow} autoPlay muted={true} playsInline loop ></video>
          <div></div>
        </div>
      </div>
      <div className="lightshadow"></div>
      <div className="banner-bird appear-left"></div>
      <div className="banner-shadow"></div>
      <div className="banner-left appear-left"></div>
      <div className="banner-right appear-right"></div>
      <div className="banner-main" id='banner-main'>
        <div className='bm-text-1' />
        <span className="bm-text-2 text-3 color-primary">BITCOIN MAXI</span>
        <span className="bm-text-3 text-2 text-center">The community of those who believe in core values and the future development of the Bitcoin ecosystem.</span>
        <div className="bm-bt">
          <span className="text-2 color-primary">Join with Us</span>
        </div>
        <div className="bm-text-4">
          <span className="text-0 color-white">Powered by</span>
          <span className="text-0-2 color-primary text-uppercase">Bitcoin OG members</span>
        </div>
      </div>
    </Wrap>
  );
}

export default Banner;

const Wrap = styled.div`
  z-index: 1;
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
    width: 600px;
    height: 100%;
    left: 50%;
    top: 0;
    background-image: linear-gradient(to bottom, #eaac0022 0%,#00000062  60%, #00000062  100%);
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
        background-image: linear-gradient(to bottom, #9e9b5627 0%, #16161638  100%);
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
        background-image: linear-gradient(to bottom, #9B8C43 0%, #0F0F14  100%);
      }
      &::after {
        left: unset;
        right: 0 !important;
      }
    }
    
  }
  .banner-bird {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${bgBird});
    background-size: cover;
    background-position: center;
    transition: 3s ease-in-out !important;
   
  }

  .appear-left {
    transition: 2s ease-in-out;
    opacity: 0;
    transform: translate(-50%, 10%);
  }
  .appear-right {
    transition: 2s ease-in-out;
    opacity: 0;
    transform: translate(50%, 10%);
  }
  .appear-left-active {
    opacity: 1;
    transform: translate(0%, 0);
  }
  .banner-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateY(20%);
    transition: 2s ease-in-out;
    .bm-text-1 {
      width: 264px;
      height: 181px;
      background-image: url(${textViet});
      background-size: cover;
      margin-bottom: 8px;
    }
    .bm-text-2 {
      margin-bottom: 32px;
    }
    .bm-text-3 {
      margin-bottom: 32px;
      max-width: 440px;
      width: 100%;
      opacity: 0;
      transition: 2s ease-in-out;
    }
    .bm-bt {
      cursor: pointer;
      transition: 2s ease-in-out;
      opacity: 0;
      width: 184px;
      height: 74px;
      padding: 2px;
      border-radius: 4px;
      border: 2px solid #FFD600;
      background: #eaac0048;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      transition: 0.5s ease-in-out;
      margin-bottom: 32px;
      &::before {
        z-index: 0;
        position: absolute;
        content: "";
        width: calc(100% + 4px);
        height: 70%;
        top: -2px;
        background-image: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0)  100%);
      }
      > span {
        position: relative;
        z-index: 1;
        color: rgba(251, 211, 1, 1);
        transition: 0.5s ease-in-out;
      }
      &:hover {
        background: #ffd500b1;
        > span {
          color: white;
        }
      }
    }
    .bm-text-4 {
      transition: 2s ease-in-out;
      opacity: 0;
      display: flex;
      align-items: center;
      text-align: center;
      gap: 8px;
    }
  }
  .banner-main-active {
    transform: translateY(0);
    .bm-text-3,
    .bm-text-4,
    .bm-bt {
      opacity: 1;
    }
  }
  .banner-shadow {
    position: absolute;
    width: 100%;
    height: 18.5%;
    bottom: 0;
    z-index: 0;
    background: linear-gradient(180deg, rgba(12, 14, 18, 0) 0%, #0C0E12 100%);
  }
  .banner-left {
    position: absolute;
    width: 34.4%;
    height: 61.6%;
    bottom: 0;
    left: 0;
    z-index: 0;
    background-image: url(${bgLeft});
    background-size: 100% 100%;
  }
  .banner-right {
    position: absolute;
    width: 34.4%;
    height: 72.5%;
    bottom: 0;
    right: 0;
    z-index: 0;
    background-image: url(${bgRight});
    background-size: 100% 100%;
  }
  ${breakpointsMedias.max1199} {
    height: fit-content;
    padding-top: 158px;
    padding-bottom: 40px;
    .lightshadow {
      width: 197px;
    }
    .lightflow {
      width: 197px;
    }
    .banner-bird {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url(${bgBird});
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
    .banner-main {
      .bm-text-1 {
        width: 189px;
        height: 132px;
      }
      .bm-text-3 {
        max-width: 296px;
        font-size: 16px;
        line-height: 130%;
      }
      .bm-bt {
        width: 163px;
        height: 53px;
        margin-bottom: 246px;
        > span {
          font-size: 16px;
          line-height: 130%;
        }
      }
      .bm-text-4 {
          font-size: 12px !important;
          line-height: 16px !important;
      }
    }
    .banner-left {
      position: absolute;
      width: 34.4%;
      height: 61.6%;
      bottom: 0;
      left: 0;
      z-index: 0;
      background-image: url(${bgLeft});
      background-size: 100% 100%;
    }
    .banner-right {
      position: absolute;
      width: 34.4%;
      height: 72.5%;
      bottom: 0;
      right: 0;
      z-index: 0;
      background-image: url(${bgRight});
      background-size: 100% 100%;
    }
  }
  ${breakpointsMedias.max767} {
    .banner-bird {
      width: 375px;
      height: 100%;
      background-image: url(${bgBird2});
      top: 20px;
    }
    .banner-left {
      width: 45.4%;
      height: 100%;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: bottom;
    }
    .banner-right {
      width: 34.4%;
      height: 100%;
      bottom: 10%;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: bottom
    }
  }
`
