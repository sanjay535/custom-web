import { CSSResult, LitElement, css, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { font12Style } from './styles/fontStyle';
import { LeftButtons } from './iphone/LeftButtons';
import { RightButtons } from './iphone/RightButtons';
import { CellTowerBattery } from './iphone/CellTowerBattery';

/**
 * # <custom-card> webComponent
 * @customElement custom-card
 */
export class IphneMobile extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'left-buttons': LeftButtons,
      'right-buttons': RightButtons,
      'cell-tower-battery': CellTowerBattery,
    };
  }

  static get properties() {
    return {
      heading: { type: String },
      content: { type: String },
      classes: { type: Object },
      interval: { type: Object },
      currentTime: { type: String },
      phoneStyle: {type: CSSResult}
    };
  }

  _formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    this.currentTime = hours + ':' + minutes + ' ' + ampm;
    this.requestUpdate();
  }

  connectedCallback() {
    super.connectedCallback();
    this.currentTime = '9:25 AM';
    this.interval = setInterval(() => this._formatAMPM(new Date()), 60000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.interval);
  }

  _getPhoneTemplate() {
    return html`
      <div class="iphone-wrapper">
        <div class="left-buttons">
          <left-buttons></left-buttons>
        </div>
        <div class="right-buttons">
          <right-buttons></right-buttons>
        </div>
        <div class="smartphone">
          <div class="camera"></div>
          <div class="speaker"></div>
          <div class="mobile-header">
            <div class="left">
              <span>${this.currentTime}</span>
            </div>
            <div class="right">
              <cell-tower-battery></cell-tower-battery>
            </div>
          </div>
          <div class="content">
            <iframe
              scrolling="no"
              src="https://pamelakelly0023.github.io/interface-netflix/"
              style="width:100%;border:none;height:100%"
            />
          </div>
        </div>
      </div>
    `;
  }

  static phoneStyle = css`
  .iphone-wrapper{
    position: relative;
    border: 14px #f2f2f2 solid;
      border-radius: 56px;
  }
  .speaker {
    display: block;
    width: 50px;
    height: 5px;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #f2f2f2;
    border-radius: 10px;
}
.speaker::after {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  position: absolute;
  top: -2px;
  left: 110%;
  background: #f2f2f2;
  border-radius: 50%;
}
  .left-buttons{
    position: absolute;
    left:-20px;
  }
  .right-buttons{
    position: absolute;
    left:20px;
  }
    /* The device with borders */
    .smartphone {
      position: relative;
      width: 320px;
      height: 700px;
      margin: auto;
      border: 12px #cccccc solid;
      border-radius: 40px;
      overflow:hidden;
    }


   

    .smartphone:before {
      content: "";
      display: block;
      width: 180px;
      height: 40px;
      position: absolute;
      top: 5px;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #cccccc;
      border-radius: 20px;
}
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
      height: 680px;
      background: white;
    }
  `;
  // Define scoped styles right with your component, in plain CSS
  static get styles() {
    return [
      this.phoneStyle,
      css`
        .mobile-header {
          display: flex;
          justify-content: space-between;
          background-color: #141414;
          padding-top: 8px;
          padding-bottom: 3px;
          border-top-left-radius: 18px;
          border-top-right-radius: 18px;
        }
        .left {
          ${font12Style}
          color:#fff;
          margin-left: 18px;
        }
      `,
    ];
  }

  // Render the UI as a function of component state
  render() {
    return html` ${this._getPhoneTemplate()} `;
  }
}
