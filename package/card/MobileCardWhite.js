import { LitElement, css, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { font14Style } from './styles/fontStyle';
import { CellTowerWhite } from './mobile/CellTowerWhite';
import { BatteryWhite } from './mobile/BatteryWhite';
import { ControlButtons } from './mobile/ControlButtons';

/**
 * # <custom-card> webComponent
 * @customElement custom-card
 */
export class MobileCardWhite extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'cell-tower-white': CellTowerWhite,
      'mobile-battery-white': BatteryWhite,
      'control-buttons': ControlButtons,
    };
  }

  static get properties() {
    return {
      heading: { type: String },
      content: { type: String },
      classes: { type: Object },
      interval: { type: Object },
      currentTime: { type: String },
    };
  }

  _formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
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
      <div class="smartphone">
        <div class="curve"></div>
        <div class="camera"></div>
        <div class="mobile-header">
          <div class="left">
            <span>${this.currentTime}</span>
          </div>
          <div class="right">
            <div class="cellTower"><cell-tower-white></cell-tower-white></div>
            <div class="batteryStyler">
              <mobile-battery-white></mobile-battery-white>
            </div>
          </div>
        </div>
        <div class="controls"><control-buttons></control-buttons></div>
        <div class="content">
          <iframe
            scrolling="no"
            src="https://www.podium.com/"
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
      height: 700px;
      margin: auto;
      border: 16px black solid;
      border-top-width: 18px;
      border-bottom-width: 70px;
      border-radius: 36px;
    }

    .camera{
      width: 15px;
      height: 15px;
      background-color: rgb(51, 51, 51);
      border-radius: 50%;
      position: absolute;
      top: -3px;
      left: 173px;

    }

    .curve::before {
      content: "";
      position: absolute;
      top: -16px;
      height: 10px;
      border-top: 16px solid rgb(0, 0, 0);
      border-top-right-radius: 30px;
      background-color: rgb(255, 255, 255);
      left: 57px;
      width: 30%;
    }
    
    .curve::after {
      content: "";
      position: absolute;
      top: -16px;
      height: 10px;
      border-top: 16px solid rgb(0, 0, 0);
      border-top-left-radius: 30px;
      background-color: rgb(255, 255, 255);
      right: 57px;
      width: 30%;
    }

    .smartphone:before {
      content: "";
    display: block;
    width: 35px;
    height: 35px;
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgb(0, 0, 0);
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
          background-color: #fff;
          padding-top: 8px;
          padding-bottom: 3px;
          border-top-left-radius: 18px;
          border-top-right-radius: 18px;
        }

        .left {
          ${font14Style}
          margin-left:8px;
        }
        .right {
          display: flex;
          align-items: center;
        }
        .cellTower {
          margin-right: 4px;
        }
        .batteryStyler {
          margin-right: 4px;
        }
        .controls {
          position: absolute;
          top: 680px;
        }
      `,
    ];
  }

  // Render the UI as a function of component state
  render() {
    return html` ${this._getPhoneTemplate()} `;
  }
}
