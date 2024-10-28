import { LitElement, html } from "lit";
import Marquee3k from "marquee3000"; // Import Marquee3k

class HeroSection extends LitElement {
  // Keep the shadow DOM if needed, or disable if you want to apply global styles.
  createRenderRoot() {
    return this; // Disable shadow DOM to allow global styles (Tailwind classes) to work
  }

  render() {
    return html`
      <section class="bg-white">
        <div class="grid grid-cols-1  md:grid-cols-2 mx-auto">
          <!-- Image Column -->
          <div
            class="relative w-auto lg:w-11/12 lg:h-screen order-2 md:order-1 sm:pt-4"
          >
            <img
              src="/images/herobg.webp"
              alt="Beautiful Mehendi Design"
              loading="lazy"
              class="h-[400px] w-full object-cover md:h-full"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
            ></div>

            <div class="absolute bottom-0 left-0 sm:hidden lg:block">
              <div class="p-4 sm:p-6 lg:p-8">
                <div class="flex items-center">
                  <h2 class="font-bold text-white text-7xl ml-2.5">
                    Over 500+
                  </h2>
                  <svg
                    class="w-10 h-10 text-[#724cc4]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <p class="max-w-xs mt-1.5 text-xl pl-4 text-white">
                  Businesses Trust Us for Expert Accounting, Tax Solutions, and
                  Timely Compliance
                </p>
              </div>
            </div>
          </div>

          <!-- Text Column -->
          <div
            class=" flex flex-col items-center justify-center md:items-start pt-24 pr-4 pl-4 md:pl-10 md:pt-40 md:pb-20 lg:pt-40 lg:pr-20 lg:pl-6 lg:pb-0 text-center md:text-left order-1 md:order-2"
          >
            <div>
              <div class="pl-4 pr-4 md:pl-10 md:pr-10 md:p-0">
                <h1
                  class="font-inter tracking-tighter text-3xl  font-bold text-[#433232] md:text-4xl xl:text-5xl"
                >
                  Expert Chartered Accountant Services for Your Business Growth
                </h1>
                <p
                  class="mt-8 text-lg font-inter font-medium tracking-tight text-[#464442]"
                >
                  Whether you are a startup, small business, or a large
                  enterprise, we provide expert financial and tax services
                  tailored to your needs. From bookkeeping to tax filings and
                  financial consulting, our team ensures your business stays
                  compliant and financially healthy
                </p>
              </div>

              <!-- Marquee Container with adjusted overflow settings -->
              <div class="relative mt-4 mb-4">
                <div class="absolute left-0 right-0  overflow-hidden">
                  <div
                    class="p-4 marquee3k"
                    data-speed="0.5"
                    data-pausable="true"
                  >
                    <div class="flex gap-2 justify-center md:justify-start">
                      <span
                        class="marquee3k__copy border-solid border-2 border-gray-300 bg-white mx-2 px-4 py-2 text-black whitespace-nowrap"
                      >
                        Tax Planning & Advisory
                      </span>
                      <span
                        class="marquee3k__copy border-solid border-2 border-gray-300 bg-white mx-2 px-4 py-2 text-black whitespace-nowrap"
                      >
                        GST Filing & Compliance
                      </span>
                      <span
                        class="marquee3k__copy border-solid border-2 border-gray-300 bg-white mx-2 px-4 py-2 text-black whitespace-nowrap"
                      >
                        Bookkeeping & Accounting
                      </span>
                      <span
                        class="marquee3k__copy border-solid border-2 border-gray-300 bg-white mx-2 px-4 py-2 text-black whitespace-nowrap"
                      >
                        Company Incorporation & Registration
                      </span>
                      <span
                        class="marquee3k__copy border-solid border-2 border-gray-300 bg-white mx-2 px-4 py-2 text-black whitespace-nowrap"
                      >
                        Income Tax Filing
                      </span>
                      <span
                        class="marquee3k__copy border-solid border-2 border-gray-300 bg-white mx-2 px-4 py-2 text-black whitespace-nowrap"
                      >
                        Financial Statement Preparation
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="pt-20">
              <div
                class="bg-purple-100 text-black py-2 px-4 rounded-md mt-4 text-center font-semibold shadow-lg"
              >
                <span class="text-[#724cc4]">Most trusted CA firms, </span>
                known for its expert financial solutions and personalized
                services
              </div>
            </div>

            <div
              class="flex flex-col gap-2 lg:flex-row pt-10 lg:pb-40 justify-center items-center md:justify-start"
            >
              <a
                href="https://wa.me/919550075162"
                target="_blank"
                aria-label="Whatsapp"
                class="bg-[#724cc4] text-white py-3 px-6 w-48 text-center hover:bg-green-600 transition whitespace-normal transition:background-color 0.3s ease shadow-lg"
              >
                Whatsapp Enquiry
              </a>
              <a
                href="tel:+919550075162"
                class="bg-black text-white py-3 px-6 w-60 text-center hover:bg-gray-700 transition whitespace-normal transition:background-color 0.3s ease shadow-lg"
              >
                Call: +91 9550075162
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  firstUpdated() {
    // Initialize Marquee
    Marquee3k.init();
  }
}

customElements.define("hero-section", HeroSection);
