import { html } from 'lit-element';

export const externalLinkTemplate = ({width, height, bgColor})=>html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill=${bgColor}
    height=${height}
    viewBox="0 -960 960 960"
    width=${width}
  >
    <path
      d="m348-306-42-42 182-182H330v-60h260v260h-60v-158L348-306Zm432-174v-300H480v-60h360v360h-60ZM180-120q-24 0-42-18t-18-42v-660h60v660h660v60H180Z"
    />
  </svg>
`;

