import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: overlay;
  overflow: hidden;
  background-color: ${(props) => props.theme.color.background.default};
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
// 모든 요소에 대한 기본 스타일 설정
* {
  box-sizing: border-box; // 박스 사이징 설정
  text-decoration-line: none; // 텍스트 장식 제거
  color: inherit; // 상속받은 색상 사용
  font-family: 'pretendard';
  font-size: 16px;
}

html {
  font-size: 16px;
}

/* 에러 오버레이 숨기기 */
iframe {
  display: none;
}

div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  padding-inline-start: 0;
  list-style-type: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
textarea {
  border: none; // 테두리 없음
  padding: 0.5rem; // 내부 여백 설정
  resize: none; // 크기 조절 기능 비활성화
  white-space: pre-wrap; // 공백 처리 방식
}
button {
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  padding: 0;
}

.cursor-pointer {
  cursor: pointer;
}
`;

export default GlobalStyle;
