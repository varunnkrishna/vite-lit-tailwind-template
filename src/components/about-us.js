import { LitElement, html } from "lit";

class AboutSection extends LitElement {
  // Keep the shadow DOM if needed, or disable if you want to apply global styles.
  createRenderRoot() {
    return this; // Disable shadow DOM to allow global styles (Tailwind classes) to work
  }

  render() {
    return html`
      <section id="AboutSection" class="body-font p-5 bg-white">
        <div
          class="mx-auto flex px-5 md:flex-row flex-col items-center max-w-[1200px] py-8"
        >
          <!-- Left Column: Text Content -->
          <div
            class="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-12 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center"
          >
            <div class="w-full">
              <!-- Badge / Tagline -->
              <span
                class="inline-block py-1 px-3 rounded bg-[#4b2f86] text-white text-sm font-semibold mb-4"
              >
                About Us
              </span>

              <!-- Section Title -->
              <h2 class="text-4xl font-bold text-gray-900 mb-6  tracking-tighter  leading-snug">
                Your <span class="text-[#724cc4]">Trusted Partner</span>  for Expert Accounting & Financial Solutions
              </h2>

              
              <h2 class = "block text-sm  p-2 text-left rounded-sm font-semibold"><h2> 

              <!-- Engaging Text -->
              <p class="text-lg text-gray-600 mb-6">
Naresh Mankena & Co. was founded in 2020 by Mr. Naresh Mankena, with a mission to provide expert Chartered Accountant services while maintaining the highest standards of professionalism, ethics, and integrity. Our firm is dedicated to offering personalized and comprehensive financial solutions, tailored to meet the specific needs of businesses and individuals.

              </p>

              <!-- Highlighted Services List -->
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  
                  <p class="text-lg text-gray-800">
                   ✓ Tailored strategies to optimize your tax savings
                  </p>
                </li>
                <li class="flex items-start">
                  
                  
                  <p class="text-lg text-gray-800">
                   ✓ Timely and accurate filings to ensure full compliance
                  </p>
                </li>
                <li class="flex items-start">
                  
                  <p class="text-lg text-gray-800">
                   ✓ Comprehensive audits to maintain financial accuracy.
                  </p>
                </li>
                <li class="flex items-start">
                  
                  <p class="text-lg text-gray-800">
                   ✓ Expert guidance for sustainable business growth.
                  </p>
                </li>
              </ul>

              <!-- CTA Button -->
              <div class="flex justify-start mb-8">
                <a
                  href="https://wa.me/919550075162" target="_blank"
                  class="bg-[#724cc4] text-white font-semibold py-3 px-6  shadow-lg hover:bg-[#087961] transition duration-300"
                >
                  Contact Us Today
                </a>
              </div>

              <!-- Testimonial Section -->
              <div class="flex items-center">
               
                <div>
                  
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Image -->
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded-lg shadow-xl"
              alt="FastDesign services"
              src="/images/aboutus.webp"
            />
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("about-us", AboutSection);
