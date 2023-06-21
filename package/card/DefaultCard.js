import { LitElement, css, html } from 'lit-element';
import {theme2 } from './styles/style.js';
import { externalLinkTemplate } from './icons/icon.js';
/**
 * # <default-card> webComponent
 * @customElement default-card
 */
export class DefaultCard extends LitElement {
  static get properties() {
    return {};
  }
  // Define scoped styles right with your component, in plain CSS
  static get styles() {
    return css`
      .card {
        margin: 0;
        padding: 0;
        max-width:400px;
        border-radius: 8px;
        overflow:hidden;
      }
      .heading {
        ${theme2.header}
      }
      .content {
        ${theme2.content}
      }
      .footer{
        
        ${theme2.footer}
      }
      .footer a{
        text-decoration:none;
        color:inherit;
      }
    `;
  }

  constructor() {
    super();
  }

  // Render the UI as a function of component state
  render() {
    return html`
      <div class="card">
        <div class="heading">Sanjay Gautam</div>
        <div class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          accusamus aspernatur non, possimus totam atque cupiditate, at tenetur
          quas maiores aliquam eveniet deserunt fugiat rem quos! Repudiandae
          quasi eum expedita.
            <br/> <br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          accusamus aspernatur non, possimus totam atque cupiditate, at tenetur
          quas maiores aliquam eveniet deserunt fugiat rem quos! Repudiandae
          quasi eum expedita.
        </div>
        <div class="footer">
         <span>&#169; Copywrite <a href="https://sanjay0107.github.io">sanjay535 ${externalLinkTemplate({width:'16', height:'16', bgColor:theme2.iconColor})}</a></span>
         
        </div>
      </div>
    `;
  }
}
