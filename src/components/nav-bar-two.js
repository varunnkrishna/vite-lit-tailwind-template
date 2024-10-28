import { LitElement, html, css } from "lit";

export class NavbarTwo extends LitElement {
  static properties = {
    links: { type: Array },
    menuOpen: { type: Boolean },
    navBg: { type: String },
    navTextColor: { type: String },
    navTextHover: { type: String },
    buttonHoverColor: { type: String },
    logoUrl: { type: String }, // New property for logo URL
    logoText: { type: String }, // New property for logo text
  };

  createRenderRoot() {
    return this; // Ensure styles are not encapsulated
  }

  constructor() {
    super();
    this.menuOpen = false;
    // Default nav color
    this.navBg = "bg-black";
    // Default colors for nav links
    this.navTextColor = "text-white";
    this.navTextHover = "text-gray-100";
    this.buttonHoverColor = "hover:bg-gray-900";

    // Default logo values
    this.logoUrl = "/images/caIndia.png"; // Default logo image
    this.logoText = "Add Logo"; // Default logo text

    this.links = [
      { name: "About", href: "#AboutSection" },
      { name: "Services", href: "#services" },
      { name: "Contact", href: "#contact-us-one" },
    ];
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  // Smooth scrolling logic
  firstUpdated() {
    // Smooth scrolling on internal links
    this.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        const headerOffset = 60; // Adjust based on your header height
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      });
    });
  }

  render() {
    const commonNavLinkClasses = "pl-4 pr-4 pt-2 pb-2";

    return html`
      <nav class="fixed w-full top-0 left-0 ${this.navBg} shadow-lg z-50">
        <div class="container mx-auto">
          <div class=" px-4 py-4 flex justify-between items-center">
            <!-- Use a default slot for the logo -->
            <div class="text-lg text-white font-bold">
              <!-- Default logo content in case no custom logo is provided -->
              <a
                href="/"
                class="flex items-center space-x-2 rtl:space-x-reverse"
              >
                <img
                  src="${this.logoUrl}"
                  class="h-8 bg-white p-[2px] rounded-lg"
                  alt="Logo"
                />
                <span
                  class="self-center text-xl md:text-2xl lg:text-3xl font-semibold whitespace-nowrap dark:text-[white]"
                >
                  ${this.logoText}
                </span>
              </a>
            </div>
            <button
              class="lg:hidden block text-white"
              @click="${this.toggleMenu}"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <!-- Dynamic Links Array -->
            <ul class="hidden lg:flex space-x-4 text-gray-700">
              ${this.links.map(
                (link) => html`
                  <li>
                    <a
                      href="${link.href}"
                      class="${commonNavLinkClasses} ${this.navTextColor} ${this
                        .buttonHoverColor} rounded ${this.navTextHover}"
                      >${link.name}</a
                    >
                  </li>
                `
              )}

              <!-- WhatsApp CTA Button, separate styling -->
              <li>
                <a
                  href="https://wa.me/919550075162"
                  target="_blank"
                  class="bg-[#724cc4] text-white py-2 px-4  hover:bg-green-600 transition-colors"
                >
                  WhatsApp Now
                </a>
              </li>
            </ul>
          </div>

          <!-- Mobile Menu -->
          <div
            class="${this.menuOpen ? "block" : "hidden"} lg:hidden ${this
              .navBg}"
          >
            <ul class="flex flex-col space-y-4 p-4 ${this.navTextColor}">
              ${this.links.map(
                (link) => html`
                  <li>
                    <a
                      href="${link.href}"
                      class="hover:text-blue-500"
                      @click="${this.closeMenu}"
                      >${link.name}</a
                    >
                  </li>
                `
              )}

              <!-- WhatsApp CTA Button for Mobile Menu -->
              <li>
                <a
                  href="https://wa.me/919550075162"
                  class="bg-[#724cc4] text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
                  @click="${this.closeMenu}"
                >
                  WhatsApp Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define("nav-bar-two", NavbarTwo);
