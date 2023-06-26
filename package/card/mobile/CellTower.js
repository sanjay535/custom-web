import { LitElement, css, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

/**
 * # <custom-card> webComponent
 * @customElement custom-card
 */
export class CellTower extends ScopedElementsMixin(LitElement) {
 
  // Define scoped styles right with your component, in plain CSS
  static get styles() {
    return css`
      .network {
        display: flex;
        width: 16px;
        justify-content: space-around;
        flex-wrap: wrap-reverse;
      }
      .n1 {
        display: block;
        width: 2px;
        height: 3px;
        border-top-right-radius:1px;
        background: #fff;
        margin-right: 1px;
        position: relative;
      }
      .n1::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-top: 3px solid #000;
        border-right: 2px solid #fff;
        width: 0;
      }
      .n2 {
        display: block;
        width: 2px;
        height: 5px;
        margin-right: 1px;
        background: #fff;
        position: relative;
      }
      .n2::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-top: 3px solid #000;
        border-right: 2px solid #fff;
        width: 0;
      }
      .n3 {
        display: block;
        width: 2px;
        height: 7px;
        margin-right: 1px;
        background: #fff;
        position: relative;
      }
      .n3::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-top: 3px solid #000;
        border-right: 2px solid #fff;
        width: 0;
      }
      .n4 {
        display: block;
        width: 2px;
        height: 9px;
        margin-right: 1px;
        background: #fff;
        position: relative;
      }
      .n4::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-top: 3px solid #000;
        border-right: 2px solid #fff;
        width: 0;
      }
      .n5 {
        display: block;
        width: 2px;
        height: 11px;
        margin-right: 1px;
        background: #fff;
        position: relative;
      }
      .n5::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-top: 3px solid #000;
        border-right: 2px solid #fff;
        width: 0;
      }
    `;
  }


  // Render the UI as a function of component state
  render() {
    return html`
      <div class="networkWrapper">
        <div class="network">
          <span class="n1"></span>
          <span class="n2"></span>
          <span class="n3"></span>
          <span class="n4"></span>
          <span class="n5"></span>
        </div>
      </div>
    `;
  }
}
