import { createGlobalStyle } from 'styled-components';
import PretendardThin from './Pretendard-Thin.woff';
import PretendardSemiBold from './Pretendard-SemiBold.woff';
import PretendardRegular from './Pretendard-Regular.woff';
import SCDream1 from './SCDream1.otf';
import SCDream2 from './SCDream2.otf';
import SCDream3 from './SCDream3.otf';
import SCDream5 from './SCDream5.otf';

export default createGlobalStyle`
  @font-face {
    font-family: "PretendardThin";
    src : local('Pretendard-Thin'), local("Pretendard-Thin");
    font-style: normal;
    src: url(${PretendardThin}) format("woff");
  }
  @font-face {
    font-family: "PretendardSemiBold";
    src : local('Pretendard-SemiBold.'), local("Pretendard-SemiBold.");
    font-style: normal;
    src: url(${PretendardSemiBold}) format("woff");
  }
  @font-face {
    font-family: "PretendardRegular";
    src : local('Pretendard-Regular'), local("Pretendard-Regular");
    font-style: normal;
    src: url(${PretendardRegular}) format("woff");
  }
  @font-face {
    font-family: "SCDream1";
    src : local('SCDream1'), local("SCDream1");
    font-style: normal;
    src: url(${SCDream1}) format("opentype");
  }
  @font-face {
    font-family: "SCDream2";
    src : local('SCDream2'), local("SCDream2");
    font-style: normal;
    src: url(${SCDream2}) format("opentype");
  }  
  @font-face {
    font-family: "SCDream3";
    src : local('SCDream3'), local("SCDream3");
    font-style: normal;
    src: url(${SCDream3}) format("opentype");
  }
  @font-face {
    font-family: "SCDream5";
    src : local('SCDream5'), local("SCDream5");
    font-style: normal;
    src: url(${SCDream5}) format("opentype");
  }
`;
