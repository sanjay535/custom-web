import { LitElement, css, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

/**
 * # <custom-card> webComponent
 * @customElement control-buttons
 */
export class LeftButtons extends ScopedElementsMixin(LitElement) {
  static get styles() {
    return css`
      .container{
        position:relative;
      }
      .btn1{
        position:absolute;
        top:100px;
        width:4px;
        left:3px;
        height:35px;
        border-top-left-radius:10px;
        border-bottom-left-radius:10px;
        background-color:#f2f2f2;
      }
      .btn2{
        position:absolute;
        top:155px;
        width:4px;
        left:3px;
        height:50px;
        border-top-left-radius:10px;
        border-bottom-left-radius:10px;
        background-color:#f2f2f2;
      }
      .btn3{
        position:absolute;
        top:220px;
        width:4px;
        height:50px;
        left:3px;
        border-top-left-radius:10px;
        border-bottom-left-radius:10px;
        background-color:#f2f2f2;
      }
    `;
  }

  // Render the UI as a function of component state
  render() {
    return html`
       <div class="container">
       <div class="btn1"></div>
       <div class="btn2"></div>
       <div class="btn3"></div>
       </div>
      
    `;
  }
}
