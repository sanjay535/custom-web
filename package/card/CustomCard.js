import { LitElement, css, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { DefaultCard } from './DefaultCard.js';

/**
 * # <custom-card> webComponent
 * @customElement custom-card
 */
export class CustomCard extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'default-card':DefaultCard,
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
        <default-card themeStyle="theme1"></default-card>
        <default-card themeStyle="theme2"></default-card>
        <default-card themeStyle="theme3"></default-card>
        <default-card themeStyle="theme4"></default-card>
        </slot>
        <slot name="header"></slot>
        <slot name="content"></slot>
        <slot name="footer"></slot>
      </div>
    `;
  }
}
