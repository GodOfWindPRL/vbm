import styled from 'styled-components';
import bgBird from 'assets/images/banner-bird.png';
import textViet from 'assets/images/text-viet.png';
import { useEffect } from 'react';
import bgLeft from 'assets/images/bg-left.png';
import bgRight from 'assets/images/bg-right.png';

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
  .banner-bird {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${bgBird});
    background-size: cover;
    background-position: center;
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
`
