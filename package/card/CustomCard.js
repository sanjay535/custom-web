import { LitElement, css, html } from 'lit-element';

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
  static styles = css`
    :host {
      color: ${this.color};
      min-width: 567px;
      min-height: auto;
      background-color: #f2f2f2;
    }
    .card {
      min-width: 567px;
      min-height: auto;
      background-color: #f2f2f2;
    }
    h1 {
      text-align: center;
    }
    p {
      color: ${this.color};
    }
  `;

  constructor() {
    super();
    // Declare reactive properties
    this.heading = this.heading || 'Sanjay Gautam';
    this.content = this.content || 'He is Frontend Devloper @ING';
  }

  // Render the UI as a function of component state
  render() {
    return html`
      <div>
        <h1>${this.heading}</h1>
        <p>${this.content}</p>
      </div>
    `;
  }
}
