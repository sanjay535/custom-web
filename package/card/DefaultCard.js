import { LitElement, css, html } from 'lit-element';
import {themes } from './styles/style.js';
import { externalLinkTemplate } from './icons/icon.js';
import { styleMap } from 'lit-html/directives/style-map.js';
/**
 * # <default-card> webComponent
 * @customElement default-card
 */
export class DefaultCard extends LitElement {
  static get properties() {
    return {
        themeStyle:{type:String},
        selectedTheme:{type:Object}
    };
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
      
     .profileImage{
        width:100px;
        height:100px;
        overflow:hidden;
        border-radius:50%;
        float:left;
        padding-right:20px;
        padding-bottom:10px;
        shape-outside:circle();
     }
    `;
  }

  connectedCallback(){
    super.connectedCallback();
    this.selectedTheme=themes.filter(theme=>theme.id===this.themeStyle)[0];

    // this.themeStyle
  }

  // Render the UI as a function of component state
  render() {
    return html`
      <div class="card">
        <div style=${this.selectedTheme.header}>Sanjay Gautam</div>
        <div style=${this.selectedTheme.content}>
          <img class="profileImage" src="../../images/sanjay.png" alt="profile"/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          accusamus aspernatur non, possimus totam atque cupiditate, at tenetur
          quas maiores aliquam eveniet deserunt fugiat rem quos! Repudiandae
          quasi eum expedita.
            <br/> <br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          accusamus aspernatur non, possimus totam atque cupiditate, at tenetur
          quas maiores aliquam eveniet deserunt fugiat rem quos! Repudiandae
          quasi eum expedita.
        </div>
        <div style=${this.selectedTheme.footer}>
         <span>&#169; Copywrite <a style=${this.selectedTheme.linkStyle} href="https://sanjay0107.github.io">sanjay535 ${externalLinkTemplate({width:'16', height:'16', bgColor:this.selectedTheme.iconColor})}</a></span>
         
        </div>
      </div>
    `;
  }
}
