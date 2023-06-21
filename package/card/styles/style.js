import { css } from 'lit-element';
import { font14Style, font20Style, font24Style, fontStyle } from './fontStyle';

 const headerTheme1 = css`
  padding: 4px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  color: #fff;
  background-color: hsl(196, 73%, 54%);
  ${font24Style}
`;
 const contentTheme1 = css`
  background-color: hsl(196, 73%, 94%);
  color: hsl(196, 73%, 54%);
  min-height: 150px;
  padding: 16px;
  ${fontStyle}
`;
 const footerTheme1 = css`
  padding: 4px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  background-color: hsl(196, 73%, 90%);
  color: hsl(196, 73%, 54%);
  ${font14Style}
`;

export const theme1={
  header:headerTheme1,
  content:contentTheme1,
  footer:footerTheme1,
  iconColor:'hsl(196, 73%, 54%);'
}

const headerTheme2 = css`
padding: 4px 0;
display: flex;
justify-content: center;
align-items: center;
min-height: 40px;
color: #fff;
background-color: hsl(220, 73%, 54%);
${font24Style}
`;
const contentTheme2 = css`
background-color: hsl(220, 73%, 94%);
color: hsl(220, 73%, 54%);
min-height: 150px;
padding: 16px;
${fontStyle}
`;
const footerTheme2 = css`
padding: 4px 0;
display: flex;
justify-content: center;
align-items: center;
min-height: 40px;
background-color: hsl(220, 73%, 90%);
color: hsl(220, 73%, 54%);
${font14Style}
`;

export const theme2={
header:headerTheme2,
content:contentTheme2,
footer:footerTheme2,
iconColor:'hsl(220, 73%, 54%)'
}

