import { LitElement, html } from "lit";
import { textContent } from "../content/text-content.js";
import Marquee3k from "marquee3000"; // Import Marquee3k

class HeroSection extends LitElement {
  // Keep the shadow DOM if needed, or disable if you want to apply global styles.
  createRenderRoot() {
    return this; // Disable shadow DOM to allow global styles (Tailwind classes) to work
  }

  render() {
    return html`
      <div
        class="fixed left-0 top-0 z-50 flex w-[30px] items-center justify-center bg-gray-200 py-[2.5px] text-[12px] uppercase text-black sm:bg-red-200 md:bg-yellow-200 lg:bg-green-200 xl:bg-blue-200 2xl:bg-pink-200"
      >
        <span class="block sm:hidden">all</span>
        <span class="hidden sm:block md:hidden">sm</span>
        <span class="hidden md:block lg:hidden">md</span>
        <span class="hidden lg:block xl:hidden">lg</span>
        <span class="hidden xl:block 2xl:hidden">xl</span>
        <span class="hidden 2xl:block">2xl</span>
      </div>

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
                    ${textContent.heroSection.imageCTA}
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
                  ${textContent.heroSection.imageCTA2}
                </p>
              </div>
            </div>
          </div>

          <!-- Text Column -->
          <div
            class=" flex flex-col items-center justify-center md:items-start pt-24 pr-4 pl-4 md:pl-10 md:pt-40 md:pb-20 lg:pt-40 lg:pr-20 lg:pl-6 lg:pb-0 text-center md:text-left order-1 md:order-2"
          >
            <div>
              <div class="pl-4 pr-4 md:pl-0 md:pr-10 md:p-0 xl:pl-0 lg:pl-0">
                <h1
                  class="font-inter tracking-tighter text-3xl  font-bold text-[#433232] md:text-4xl xl:text-5xl"
                >
                  ${textContent.heroSection.title}
                </h1>
                <p
                  class="mt-4 md:mt-8 text-md md:text-lg font-inter font-medium tracking-tight text-[#464442]"
                >
                  ${textContent.heroSection.body}
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
                        ${textContent.heroSection.marqueeitem1}
                      </span>
                      <span
                        class="marquee3k__copy border-solid border-2 border-gray-300 bg-white mx-2 px-4 py-2 text-black whitespace-nowrap"
                      >
                        ${textContent.heroSection.marqueeitem2}
                      </span>
                      <span
                        class="marquee3k__copy border-solid border-2 border-gray-300 bg-white mx-2 px-4 py-2 text-black whitespace-nowrap"
                      >
                        ${textContent.heroSection.marqueeitem3}
                      </span>
                      <span
                        class="marquee3k__copy border-solid border-2 border-gray-300 bg-white mx-2 px-4 py-2 text-black whitespace-nowrap"
                      >
                        ${textContent.heroSection.marqueeitem4}
                      </span>
                      <span
                        class="marquee3k__copy border-solid border-2 border-gray-300 bg-white mx-2 px-4 py-2 text-black whitespace-nowrap"
                      >
                        ${textContent.heroSection.marqueeitem5}
                      </span>
                      <span
                        class="marquee3k__copy border-solid border-2 border-gray-300 bg-white mx-2 px-4 py-2 text-black whitespace-nowrap"
                      >
                        ${textContent.heroSection.marqueeitem6}
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
                <span class="text-[#724cc4]"
                  >${textContent.heroSection.subheading}
                </span>
                ${textContent.heroSection.subheadingSpan}
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
                ${textContent.heroSection.ctaButton1}
              </a>
              <a
                href="tel:+919550075162"
                class="bg-black text-white py-3 px-6 w-60 text-center hover:bg-gray-700 transition whitespace-normal transition:background-color 0.3s ease shadow-lg"
              >
                ${textContent.heroSection.ctaButton2}
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
