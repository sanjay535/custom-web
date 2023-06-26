import { LitElement, css, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

/**
 * # <custom-card> webComponent
 * @customElement control-buttons
 */
export class ControlButtons extends ScopedElementsMixin(LitElement) {
  static get styles() {
    return css`
      .control-wrapper{
        position:relative;
        height:20px;
        width:360px;
        background-color:#fff;
        padding:10px 0;
        border-top:1px solid #f2f2f2;
        box-shadow: rgba(204,204,204,0.7) 0 -0.1px 10px;
      }
      .left{
        position:absolute;
        left:25px;
        width:13px;
        height:13px;
        border-radius:3px;
        background-color:#ccc;
      }
      .middile{
        position:absolute;
        left:50%;
        width:15px;
        height:15px;
        border-radius:50%;
        border:1px solid #ccc;
      }
      .middile span{
        display: block;
        position: absolute;
        left: 2.3px;
        top: 2px;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background-color: rgb(204, 204, 204);
    
      }
      .right{
        position:absolute;
        right: 25px;
        top: 0px;
      }
    `;
  }

  // Render the UI as a function of component state
  render() {
    return html`
      <div class="control-wrapper">
        <div class="left"></div>
        <div class="middile">
        <span></span>
        </div>
        <div class="right">
        <img src="../../../images/mobileArrow.svg" alt="arrow"></img>
        </div>
      </div>
    `;
  }
}
