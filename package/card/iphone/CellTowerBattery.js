import { LitElement, css, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

/**
 * # <cell-tower-battery> webComponent
 * @customElement cell-tower-battery
 */
export class CellTowerBattery extends ScopedElementsMixin(LitElement) {
 
  // Define scoped styles right with your component, in plain CSS
  static get styles() {
    return css`
      .container{
        position:relative;
        right:10px;
      }
      .cell-tower{
        margin:0 1px;
      }
      .wifi{
        margin:0 1px;
      }
      .battery{
        transform:rotate(180deg);
        margin:0 1px;
      }
    `;
  }


  // Render the UI as a function of component state
  render() {
    return html`
      <div class="container">
       <img class="cell-tower" src="../../../images/signal_cellular_iphone.svg" alt="celltower">
       <img class="wifi" src="../../../images/wifi_iphone.svg" alt="wifi">
       <img class="battery" src="../../../images/battery_iphone.svg" alt="battery">
      </div>
    `;
  }
}
