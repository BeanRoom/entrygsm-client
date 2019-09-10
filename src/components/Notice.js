import React, { createRef, useState, useEffect } from "react";
import styled from "styled-components";
import oc from "open-color";
import GetAppIcon from '@material-ui/icons/GetApp';

import { ReactComponent as Img1 } from "asset/notice_image_2.svg";
import downloadfile from "asset/2020학년도입학전형요강(최종).pdf";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 50px;
  box-sizing: border-box;
  display: flex;
  color: ${oc.gray[9]};

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;

const ContentDiv = styled.div`
  margin: auto 0;
  box-sizing: border-box;
  display: block;
  min-width: 550px;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
`;

const Text1 = styled.span`
  font-size: 3.5rem;
  margin: 0;
  opacity: 0;

  ${props =>
    props.scroll
      ? `
  opacity: 1;
  animation-name: FadeIn;
  animation-timing-function: ease-in;
  animation-duration: 0.5s;`
      : ``}

  @keyframes FadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const SubHeading = styled.h2`
  opacity: 0;
  margin: 0.5rem;
  ${props =>
    props.scroll
      ? `
      opacity: 1;
      animation-name: FadeIn;
    animation-timing-function: ease-in;
    animation-duration: 0.7s;`
      : ``};
`;

const DownLoadLink = styled.a`
  &:link {
    text-decoration: none;
  }
  &:visited {
    text-decoration: none;
  }
`;

const EntryButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${oc.gray[9]};
  font-size: 2rem;
  font-weight: 600;
  width: 20rem;
  height: 3.5rem;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 5px;
  color: ${oc.gray[9]};
  letter-spacing: 2px;
  opacity: 0;

  &:hover {
    background-color: ${oc.gray[9]};
    color: ${oc.gray[0]};
  }

  ${props =>
    props.scroll
      ? `
    opacity: 1;
    animation-name: FadeIn;
    animation-timing-function: ease-in;
    animation-duration: 1s;`
      : ``}
`;

const ImageDiv = styled.div`
  height: 100%;
  display: flex;
  box-sizing: border-box;
  opacity: 0;

  ${props =>
    props.scroll
      ? `
    opacity: 1;
    animation-name: MoveUpImage;
    animation-timing-function: ease-in;
    animation-duration: 0.5s;`
      : ``}

  @keyframes MoveUpImage {
    0% {
      opacity: 0;
      padding-top: 30px;
    }
    100% {
      opacity: 1;
      padding-top: 0px;
    }
  }
`;

const SvgImage = styled(Img1)`
  width: 50vw;
  height: auto;
  margin: auto 0;
  padding: 20px;

  ${props =>
    props.scroll
      ? `
      .check1 {
        animation-name: FadeInItems;
        animation-timing-function: ease-in;
        animation-duration: 0.6s;

        @keyframes FadeInItems {
          0% {
            opacity: 0;
          }
          60% {
            opacity: 0;
          }
          100% {
          }
        }
      }
      .check2 {
        animation-name: FadeInItems;
        animation-timing-function: ease-in;
        animation-duration: 0.9s;
      }

      .check3 {
        animation-name: FadeInItems;
        animation-timing-function: ease-in;
        animation-duration: 1.2s;
      }

      .check4 {
        animation-name: FadeInItems;
        animation-timing-function: ease-in;
        animation-duration: 1.5s;
      }`
      : ``}

  @media (max-width: 1200px) {
    width: 100vw;
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

const Info = () => {
  const [scroll, setScroll] = useState(false);
  const [Reference, setReference] = useState(() => createRef());

  const posTop = () => {
    if (typeof window.pageYOffset !== "undefined") {
      return window.pageYOffset;
    } else if (document.documentElement.scrollTop) {
      return document.documentElement.scrollTop;
    } else if (document.body.scrollTop) {
      return document.body.scrollTop;
    }
    return 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    handleScroll();
    return window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const element = Reference.current;
    const top = posTop();
    const elementPositionY = element.getBoundingClientRect().top + top;
    const scrollPositionY = window.scrollY
      ? window.scrollY
      : window.pageYOffset;
    const windowHeight = window.innerHeight;
    if (scrollPositionY + windowHeight >= elementPositionY + 700) {
      setScroll(true);
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <Wrapper ref={Reference}>
        <Spacer />
        <ImageDiv scroll={scroll}>
          <SvgImage scroll={scroll} />
        </ImageDiv>
        <Spacer />
        <ContentDiv>
          <Text1 scroll={scroll}>
            수험자 안내사항을
            <br />
            확인하세요
          </Text1>
          <SubHeading scroll={scroll}>
            입학전형요강 PDF파일을 다운받을 수 있습니다.
          </SubHeading>
          <DownLoadLink href={downloadfile} download>
            <EntryButton scroll={scroll}>
              <GetAppIcon/>
              다운로드
            </EntryButton>
          </DownLoadLink>
        </ContentDiv>
        <Spacer />
      </Wrapper>
    </>
  );
};

export default Info;
