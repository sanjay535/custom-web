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
const linkStyleTheme1 = css`
  text-decoration: none;
  color: inherit;
`;
export const theme1 = {
  id: 'theme1',
  header: headerTheme1,
  content: contentTheme1,
  footer: footerTheme1,
  iconColor: 'hsl(196, 73%, 54%)',
  linkStyle: linkStyleTheme1,
};

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

const linkStyleTheme2 = css`
  text-decoration: none;
  color: inherit;
`;
export const theme2 = {
  id: 'theme2',
  header: headerTheme2,
  content: contentTheme2,
  footer: footerTheme2,
  iconColor: 'hsl(220, 73%, 54%)',
  linkStyle: linkStyleTheme2,
};


const headerTheme3 = css`
  padding: 4px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  color: #fff;
  background-color: hsl(166, 73%, 54%);
  ${font24Style}
`;
const contentTheme3 = css`
  background-color: hsl(166, 73%, 94%);
  color: hsl(166, 73%, 54%);
  min-height: 150px;
  padding: 16px;
  ${fontStyle}
`;
const footerTheme3 = css`
  padding: 4px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  background-color: hsl(166, 73%, 90%);
  color: hsl(166, 73%, 54%);
  ${font14Style}
`;

const linkStyleTheme3 = css`
  text-decoration: none;
  color: inherit;
`;
export const theme3 = {
  id: 'theme3',
  header: headerTheme3,
  content: contentTheme3,
  footer: footerTheme3,
  iconColor: 'hsl(166, 73%, 54%)',
  linkStyle: linkStyleTheme3,
};


const headerTheme4 = css`
  padding: 4px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  color: #fff;
  background-color: hsl(270, 73%, 54%);
  ${font24Style}
`;
const contentTheme4 = css`
  background-color: hsl(270, 73%, 94%);
  color: hsl(270, 73%, 54%);
  min-height: 150px;
  padding: 16px;
  ${fontStyle}
`;
const footerTheme4 = css`
  padding: 4px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  background-color: hsl(270, 73%, 90%);
  color: hsl(270, 73%, 54%);
  ${font14Style}
`;

const linkStyleTheme4 = css`
  text-decoration: none;
  color: inherit;
`;
export const theme4 = {
  id: 'theme4',
  header: headerTheme4,
  content: contentTheme4,
  footer: footerTheme4,
  iconColor: 'hsl(270, 73%, 54%)',
  linkStyle: linkStyleTheme4,
};

const headerTheme5 = css`
  padding: 4px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  color: #fff;
  background-color: hsl(270, 73%, 54%);
  ${font24Style}
`;
const contentTheme5 = css`
  background-color: hsl(270, 73%, 94%);
  color: hsl(270, 73%, 54%);
  min-height: 150px;
  padding: 16px;
  ${fontStyle}
`;
const footerTheme5 = css`
  padding: 4px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  background-color: hsl(270, 73%, 90%);
  color: hsl(270, 73%, 54%);
  ${font14Style}
`;

const linkStyleTheme5 = css`
  text-decoration: none;
  color: inherit;
`;
export const theme5 = {
  id: 'theme5',
  header: headerTheme5,
  content: contentTheme5,
  footer: footerTheme5,
  iconColor: 'hsl(270, 73%, 54%)',
  linkStyle: linkStyleTheme5,
};

export const themes = [theme1, theme2, theme3, theme4, theme5];
