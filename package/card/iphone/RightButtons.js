import { LitElement, css, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

/**
 * # <custom-card> webComponent
 * @customElement control-buttons
 */
export class RightButtons extends ScopedElementsMixin(LitElement) {
  static get styles() {
    return css`
    .container{
        position:relative;
      }
    .btn{
        position:absolute;
        top:100px;
        width:4px;
        left:337px;
        height:75px;
        border-top-right-radius:10px;
        border-bottom-right-radius:10px;
        background-color:#f2f2f2;
      }
    `;
  }

  // Render the UI as a function of component state
  render() {
    return html`
      <div class="container">
      <div class="btn"></div>
      </div>
    `;
  }
}
