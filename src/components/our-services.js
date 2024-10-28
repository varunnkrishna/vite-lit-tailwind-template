import { LitElement, html } from "lit";

class OurServices extends LitElement {
  // Keep the shadow DOM if needed, or disable if you want to apply global styles.
  createRenderRoot() {
    return this; // Disable shadow DOM to allow global styles (Tailwind classes) to work
  }

  render() {
    return html`
      <section id="services" class="bg-gray-100 py-6 sm:py-8 lg:py-24">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <!-- Heading -->
          <div class="mb-10 md:mb-16">
            <h2
              class="text-4xl font-bold text-gray-900 mb-2 md:mb-6 text-center tracking-tighter  leading-snug"
            >
              Our Accounting Services
            </h2>
            <p
              class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg"
            >
              Explore our comprehensive range of services designed to meet your
              business needs.
            </p>
          </div>
          <!-- /Heading -->

          <div
            class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16"
          >
            <!-- Service 1: Audit and Assurance -->
            <article
              class="flex flex-col items-start gap-4 md:flex-row lg:gap-6  rounded-lg  p-2"
            >
            
                <a
                  href="#"
                  class="group relative block h-56 w-full  shrink-0 self-start overflow-hidden rounded-lg bg-gray-100  md:h-24 md:w-24 lg:h-40 lg:w-40"
                >
                  <img
                    src="/images/1.webp"
                    loading="lazy"
                    alt="Accounting and Auditing Services"
                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                </a>
             

              <div class="flex flex-col gap-2">
                <h2 class="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    class="transition duration-100 hover:text-rose-500 active:text-rose-600"
                    >Audit and Assurance</a
                  >
                </h2>

                <ul class="list-disc list-inside text-gray-500">
                  <li>Statutory Audit</li>
                  <li>Internal Audit</li>
                  <li>Bank Audit Services</li>
                  <li>Certification Services</li>
                  <li>Stock Audit</li>
                </ul>
              </div>
            </article>
          

            <!-- Service 2: Taxation -->
            <article
              class="flex flex-col items-start gap-4 md:flex-row lg:gap-6 rounded-lg  p-2  "
            >
            
                <a
                  href="#"
                  class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100  md:h-24 md:w-24 lg:h-40 lg:w-40"
                >
                  <img
                    src="/images/2.webp"
                    loading="lazy"
                    alt="Taxation Services"
                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                </a>
            

              <div class="flex flex-col gap-2">
                <h2 class="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    class="transition duration-100 hover:text-rose-500 active:text-rose-600"
                    >Taxation</a
                  >
                </h2>

                <ul class="list-disc list-inside text-gray-500">
                  <li>Tax Audit</li>
                  <li>GST Audit</li>
                  <li>Tax & Statutory Compliance</li>
                  <li>Direct and indirect taxation advisory</li>
                  <li>Income Tax Filing Services</li>
                  <li>Advice on Employee Payroll Taxes</li>
                  <li>Filing Returns of TDS and GST</li>
                  <li>Form 15CA and 15CB</li>
                </ul>
              </div>
            </article>
            <!-- /Service 2 -->

            <!-- Service 3: Accounting -->
            <article
              class="flex flex-col items-start gap-4 md:flex-row lg:gap-6"
            >
              <a
                href="#"
                class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="/images/3.webp"
                  loading="lazy"
                  alt="Accounting and Bookkeeping Services"
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div class="flex flex-col gap-2">
                <h2 class="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    class="transition duration-100 hover:text-rose-500 active:text-rose-600"
                    >Accounting</a
                  >
                </h2>

                <ul class="list-disc list-inside text-gray-500">
                  <li>Bookkeeping</li>
                  <li>Accounts Receivable & Payable</li>
                  <li>Finalisation of Accounts</li>
                </ul>
              </div>
            </article>
            <!-- /Service 3 -->

            <!-- Service 4: Certifications -->
            <article
              class="flex flex-col items-start gap-4 md:flex-row lg:gap-6"
            >
              <a
                href="#"
                class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="/images/4.webp"
                  loading="lazy"
                  alt="Certifications Services"
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div class="flex flex-col gap-2">
                <h2 class="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    class="transition duration-100 hover:text-rose-500 active:text-rose-600"
                    >Certifications</a
                  >
                </h2>

                <ul class="list-disc list-inside text-gray-500">
                  <li>Student Visa Certification</li>
                  <li>Net Worth Certification</li>
                  <li>Business Valuation</li>
                </ul>
              </div>
            </article>
            <!-- /Service 4 -->

            <!-- Service 5: Secretarial -->
            <article
              class="flex flex-col items-start gap-4 md:flex-row lg:gap-6"
            >
              <a
                href="#"
                class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="/images/5.webp"
                  loading="lazy"
                  alt="Secretarial Services"
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div class="flex flex-col gap-2">
                <h2 class="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    class="transition duration-100 hover:text-rose-500 active:text-rose-600"
                    >Secretarial Services</a
                  >
                </h2>

                <ul class="list-disc list-inside text-gray-500">
                  <li>Incorporations (Company/LLP)</li>
                  <li>Partnership Firm Registration</li>
                  <li>
                    Registration/Renewal of PT, PF, ESI, GST, MSME, Trade &
                    Labour Licenses
                  </li>
                  <li>ROC Filings</li>
                </ul>
              </div>
            </article>
            <!-- /Service 5 -->

            <!-- Service 6: Digital Signature Certificate (DSC) -->
            <article
              class="flex flex-col items-start gap-4 md:flex-row lg:gap-6"
            >
              <a
                href="#"
                class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="/images/6.webp"
                  loading="lazy"
                  alt="Digital Signature Certificate (DSC) Services"
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div class="flex flex-col gap-2">
                <h2 class="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    class="transition duration-100 hover:text-rose-500 active:text-rose-600"
                    >Digital Signature Certificate (DSC)</a
                  >
                </h2>

                <ul class="list-disc list-inside text-gray-500">
                  <li>Application for DSC</li>
                </ul>
              </div>
            </article>
            <!-- /Service 6 -->
          </div>
        </div>
         <div class="flex justify-center mt-24 mb-8">
          <a
            href="https://wa.me/919550075162" target = "_blank"
            class="bg-[#724cc4] text-white font-semibold py-3 px-6  shadow-lg hover:bg-green-600 transition duration-300"
          >
            Quick Whatsapp Enquiry
          </a>
          </div>
       
        </div>

      </section>
    `;
  }
}

customElements.define("our-services", OurServices);
