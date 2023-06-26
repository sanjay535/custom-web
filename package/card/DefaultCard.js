import { LitElement, css, html } from 'lit-element';
import { themes } from './styles/style.js';
import { externalLinkTemplate } from './icons/icon.js';
import { styleMap } from 'lit-html/directives/style-map.js';
/**
 * # <default-card> webComponent
 * @customElement default-card
 */
export class DefaultCard extends LitElement {
  static get properties() {
    return {
      themeStyle: { type: String },
      selectedTheme: { type: Object },
      socialHandle:{type:Boolean}
    };
  }
  // Define scoped styles right with your component, in plain CSS
  static get styles() {
    return css`
      .card {
        margin: 0;
        padding: 0;
        max-width: 400px;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }

      .profileImage {
        width: 150px;
        height: 150px;
        overflow: hidden;
        border-radius: 50%;
        float: left;
        padding-right: 20px;
        padding-bottom: 10px;
        shape-outside: circle();
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.selectedTheme = themes.filter(
      (theme) => theme.id === this.themeStyle
    )[0];
    // this.themeStyle
  }

  // Render the UI as a function of component state
  render() {
    return html`
      <div class="card">
        <div style=${this.selectedTheme.header}>Sanjay Gautam</div>
        <div style=${this.selectedTheme.content}>
          <img
            class="profileImage"
            src="../../images/sanjay.png"
            alt="profile"
          />
          <span>
            Sanjay Gautam is a dedicated and skilled Frontend Developer
            currently employed at ING Bank. With a solid three years of
            experience in the field of Frontend technology, Sanjay has
            established himself as a proficient professional in his domain.
            He possesses a strong command over HTML, CSS, and JavaScript,
            utilizing them to create responsive and interactive websites that
            enhance user experience.
            <br /><br />
            With a passion for continuous learning and professional growth,
            Sanjay Gautam consistently seeks opportunities to enhance his skill
            set and expand his knowledge in the ever-evolving world of frontend
            development. His commitment to excellence and his ability to adapt
            to new technologies make him a valuable asset to any organization.
          </span>
        </div>
        <div style=${this.selectedTheme.footer}>
          <span
            >&#169; Copywrite
            <a
              style=${this.selectedTheme.linkStyle}
              href="https://sanjay0107.github.io"
              >sanjay535
              ${externalLinkTemplate({
                width: '16',
                height: '16',
                bgColor: this.selectedTheme.iconColor,
              })}</a
            ></span
          >

        </div>
      </div>
    `;
  }
}
