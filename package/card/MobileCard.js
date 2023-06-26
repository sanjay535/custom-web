import { LitElement, css, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { CellTower } from './mobile/CellTower';
import { font14Style } from './styles/fontStyle';
import { Battery } from './mobile/Battery';

/**
 * # <custom-card> webComponent
 * @customElement custom-card
 */
export class MobileCard extends ScopedElementsMixin(LitElement) {
    static get scopedElements() {
        return {
          'cell-tower':CellTower,
          'mobile-battery':Battery
        };
      }

  static get properties() {
    return {
      heading: { type: String },
      content: { type: String },
      classes: { type: Object },
    };
  }

  _getPhoneTemplate() {
    return html`
      <div class="smartphone">
       <div class="mobile-header">
       <div class="left">
        <span>11:25 AM</span>
       </div>
        <div class="right">
         <div class="cellTower"><cell-tower></cell-tower></div>
         <div class="batteryStyler"> <mobile-battery></mobile-battery></div>
       </div>
        
       </div>
        <div class="content">
          <iframe
            scrolling="no"
            src="https://sanjay0107.github.io/"
            style="width:100%;border:none;height:100%"
          />
        </div>
      </div>
    `;
  }
 

  static phoneStyle = css`
    /* The device with borders */
    .smartphone {
      position: relative;
      width: 360px;
      height: 640px;
      margin: auto;
      border: 16px black solid;
      border-top-width: 60px;
      border-bottom-width: 70px;
      border-radius: 36px;
    }

    /* The horizontal line on the top of the device */
    .smartphone:before {
      content: '';
      display: block;
      width: 60px;
      height: 5px;
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #333;
      border-radius: 10px;
    }

    /* The circle on the bottom of the device */
    .smartphone:after {
      content: '';
      display: block;
      width: 35px;
      height: 35px;
      position: absolute;
      left: 50%;
      bottom: -75px;
      transform: translate(-50%, -50%);
      background: #333;
      border-radius: 50%;
    }

    /* The screen (or content) of the device */
    .smartphone .content {
      width: 360px;
      height: 640px;
      background: white;
    }
  `;
  // Define scoped styles right with your component, in plain CSS
  static get styles() {
    return [this.phoneStyle, 
        css`
        .mobile-header{
            display:flex;
            justify-content:space-between;
            background-color:#000;
        }
        .left{
            ${font14Style}
            color:#fff;
        }
        .right{
            display:flex;
            align-items:center;
        }
        .cellTower{
            margin-right:4px;
        }
        .batteryStyler{
            margin-right:4px;
        }
    `];
  }


  // Render the UI as a function of component state
  render() {
    return html` ${this._getPhoneTemplate()} `;
  }
}
