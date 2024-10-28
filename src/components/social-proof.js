import { LitElement, html } from "lit";

class SocialProof extends LitElement {
  // Keep the shadow DOM if needed, or disable if you want to apply global styles.
  createRenderRoot() {
    return this; // Disable shadow DOM to allow global styles (Tailwind classes) to work
  }

  render() {
    return html`
      <section
        class="bg-black h-auto flex flex-col justify-center items-center  pt-24 pl-12 pr-12 pb-24"
      >
        <!-- Title -->
        <h2
          class="text-transparent bg-clip-text bg-gradient-to-b from-gray-50 to-gray-100  font-semibold text-2xl leading-[25.2px] tracking-tight text-center"
        >
          Trusted by Businesses for Professional Accounting and Financial
          Solutions
        </h2>

        <!-- Logo Container -->
        <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <!-- Testimonial Card 1 -->
          <blockquote
            class="flex h-full flex-col justify-between bg-white p-6 shadow-md sm:p-8 rounded-md"
          >
            <div>
              <!-- Star Ratings -->
              <div class="flex gap-0.5 text-[#F2C51F]">
                ⭐ ⭐ ⭐ ⭐ ⭐
                <!-- Repeat SVG for a total of 5 stars -->
              </div>

              <div class="mt-4">
                <p class="text-xl font-semibold text-[#2e2d2c]">
                  Exceptional Accounting Services!
                </p>
                <p class="mt-2 text-gray-700 leading-relaxed">
                  We have been relying on Naresh Mankena & Co. for our tax
                  filing and compliance needs. They always ensure everything is
                  accurate and delivered on time. A reliable partner for
                  businesses!
                </p>
              </div>
            </div>
            <footer class="mt-4 text-sm font-medium text-gray-700">
              &mdash; Rakesh Kumar
            </footer>
          </blockquote>

          <!-- Testimonial Card 2 -->
          <blockquote
            class="flex h-full flex-col justify-between bg-white p-6 shadow-md sm:p-8 rounded-md"
          >
            <div>
              <!-- Star Ratings -->
              <div class="flex gap-0.5 text-[#F2C51F]">⭐ ⭐ ⭐ ⭐ ⭐</div>

              <div class="mt-4">
                <p class="text-xl font-semibold text-[[#2e2d2c]]">
                  Expert Financial Guidance!
                </p>
                <p class="mt-2 text-gray-700 leading-relaxed">
                  The team at Naresh Mankena & Co. helped us navigate complex
                  financial regulations with ease. Their professional approach
                  and industry knowledge are unmatched. We couldn’t have done it
                  without them!
                </p>
              </div>
            </div>
            <footer class="mt-4 text-sm font-medium text-gray-700">
              &mdash; Priya Sharma
            </footer>
          </blockquote>

          <!-- Testimonial Card 2 -->
          <blockquote
            class="flex h-full flex-col justify-between bg-white p-6 shadow-md sm:p-8 rounded-md"
          >
            <div>
              <!-- Star Ratings -->
              <div class="flex gap-0.5 text-[#F2C51F]">⭐ ⭐ ⭐ ⭐ ⭐</div>

              <div class="mt-4">
                <p class="text-xl font-semibold text-[#2e2d2c]">
                  Exceeded Expectations!
                </p>
                <p class="mt-2 text-gray-700 leading-relaxed">
                  Plick Designs delivered exactly what we envisioned. The site
                  is fast, user-friendly, and visually appealing. They truly
                  understand what a business needs.
                </p>
              </div>
            </div>
            <footer class="mt-4 text-sm font-medium text-gray-700">
              &mdash; Prathima Shamili.
            </footer>
          </blockquote>

          <!-- Add more testimonial cards as needed -->
        </div>
      </section>
    `;
  }
}

customElements.define("social-proof", SocialProof);
