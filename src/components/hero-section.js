import { LitElement, html } from "lit";

class HeroSection extends LitElement {
  createRenderRoot() {
    return this; // Ensure styles are not encapsulated
  }

  render() {
    return html`
      <section
        class="bg-blue-600 text-white p-12 flex items-center justify-center h-screen"
      >
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Plick Designs
          </h1>
          <p class="text-lg md:text-2xl mb-6">
            Your one-stop solution for digital needs
          </p>
          <button
            class="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-gray-200"
          >
            Get Started
          </button>
        </div>
      </section>
    `;
  }
}

customElements.define("hero-section", HeroSection);
