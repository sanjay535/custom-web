import { LitElement, css, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { DefaultCard } from './DefaultCard.js';
import { MobileCard } from './MobileCard.js';
import { MobileCardWhite } from './MobileCardWhite.js';
import { IphneMobile } from './IphoneMobile.js';

/**
 * # <custom-card> webComponent
 * @customElement custom-card
 */
export class CustomCard extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'default-card':DefaultCard,
      'mobile-card':MobileCard,
      'mobile-card-white':MobileCardWhite,
      'iphone-mobile':IphneMobile
    };
  }

  static get properties() {
    return {
      heading: { type: String },
      content: { type: String },
      classes:{type:Object}
    };
  }
  // Define scoped styles right with your component, in plain CSS
  static get styles() {
    return css`
    .cardContainer{
      display:grid;
      justify-items:center;
      grid-template-columns:repeat(3, minmax(0, 1fr));
      gap:24px;
    }
       
    `;
  }

  constructor() {
    super();
    this.heading = this.heading || html`<p>Sanjay Gautam</p>`;
    this.content = this.content || html`<p>Hi, I'm Frontend Devloper @ING</p>`;
    this.footer = this.footer || html`<span>&#169; Copywrite <a href="https://sanjay0107.github.io">sanjay535</a></span>`;
    this.classes={
      header:true,
      content:true,
      footer:true
    }
  }

  // Render the UI as a function of component state
  render() {
    return html`
      <div class="card">
        <slot>
        <div class="cardContainer">
        <default-card themeStyle="theme1"></default-card>
        <default-card themeStyle="theme2"></default-card>
        <default-card themeStyle="theme3"></default-card>
        <default-card themeStyle="theme4" socialHandle></default-card>
        <mobile-card></mobile-card>
        <mobile-card-white></mobile-card-white>
        <iphone-mobile></iphone-mobile>
        </div>
        </slot>
        <slot name="header"></slot>
        <slot name="content"></slot>
        <slot name="footer"></slot>
      </div>
    `;
  }
}
