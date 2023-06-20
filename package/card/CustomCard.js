import { LitElement, css, html, unsafeCSS, } from 'lit-element';
import { styleMap } from '../../directives';

/**
 * # <custom-card> webComponent
 * @customElement custom-card
 */
export class CustomCard extends LitElement {
  static get properties() {
    return {
      heading: { type: String },
      content: { type: String },
      color: { type: String },
    };
  }
  // Define scoped styles right with your component, in plain CSS
  static get styles() {
    return css`
      :host {
        color: ${unsafeCSS(this.color)};
        min-width: 567px;
        min-height: auto;
      }
      .card {
        min-width: 567px;
        min-height: 100px;
        max-height:auto;
        background-color: #f2f2f2;
      }
      h1 {
        text-align: center;
      }
      p {
        color: ${unsafeCSS(this.color)};
      }
    `;
  }

  constructor() {
    super();
    // Declare reactive properties
    
    this.heading = this.heading || 'Sanjay Gautam';
    this.content = this.content || 'He is Frontend Devloper @ING';
  }

  // Render the UI as a function of component state
  render() {
    const styles = {
        color: this.color,
      };
    return html`
      <div style=${styleMap(styles)} class="card">
        <h1>${this.heading}</h1>
        <p>${this.content}</p>
      </div>
    `;
  }
}
