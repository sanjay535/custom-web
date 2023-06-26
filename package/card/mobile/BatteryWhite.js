import { LitElement, css, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

/**
 * # <custom-card> webComponent
 * @customElement custom-card
 */
export class BatteryWhite extends ScopedElementsMixin(LitElement) {
  // Define scoped styles right with your component, in plain CSS
  static get styles() {
    return css`
      .battery-container {
        display: flex;
        width: 27px;
        align-items: center;
        margin-right: 4px;
      }
      .battery {
        position: relative;
        height: 8px;
        width: 18px;
        border: 2px solid #000;
        border-radius: 3px;
        overflow: hidden;
        display: flex;
        align-items: center;
      }
      .battery-content {
        width: 7px;
        height: 6px;
        border-radius: 1px;
        margin-left: 1.2px;
        background: #33ff33;
        font-family: sans-serif, Arial, Helvetica;
      }
      .battery-content::after {
        content: '17';
        position: absolute;
        color: #000;
        font-size: 8px;
        left: 4px;
        top: -0.4px;
      }
      .battery-peak {
        box-sizing: border-box;
        width: 1.3px;
        border-radius: 4px;
        background-color: #000;
        height: 6px;
        margin-left: 1px;
      }
    `;
  }

  // Render the UI as a function of component state
  render() {
    return html`
      <div class="battery-container">
        <div class="battery">
          <div class="battery-content"></div>
        </div>
        <span class="battery-peak"></span>
      </div>
    `;
  }
}
