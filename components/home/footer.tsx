import Image from "next/image";
import { Button, Icon, Logo } from "./ui";

const columns = [
  {
    title: "Product",
    links: [
      ["Features", "#features"],
      ["Pricing", "https://Visuti.io/pricing"],
      ["AI at Visuti", "#ai"],
      ["Integrations", "https://Visuti.io/features/integrations"],
      ["Visuti API", "https://developers.Visuti.io/"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Blog", "https://Visuti.io/blog"],
      ["Help center", "https://support.Visuti.io/"],
      ["Webinars", "https://Visuti.io/webinars"],
      ["Customer stories", "#stories"],
      ["Compare CRMs", "#comparison"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About us", "https://Visuti.io/about-us"],
      ["Why Visuti", "#why-Visuti"],
      ["Careers", "https://Visuti.io/careers"],
      ["Refer & earn", "https://Visuti.io/refer-and-earn"],
      ["Contact us", "https://Visuti.io/contact-us"],
    ],
  },
  {
    title: "Let’s connect",
    links: [
      ["Talk to sales", "https://Visuti.io/contact-us"],
      ["Get support", "https://support.Visuti.io/"],
      ["LinkedIn", "https://www.linkedin.com/company/Visuti/"],
      ["YouTube", "https://www.youtube.com/@VisutiCRM"],
    ],
  },
];

export function Footer() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand py-12 md:py-14">
        <div className="site-container relative flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-100">
              Your next peak is waiting
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-[36px]">
              Ready to close more deals?
            </h2>
            <p className="mt-3 text-sm text-blue-100">
              Bring your people, process, and possibilities together with Visuti.
            </p>
          </div>
          <Button variant="white" arrow className="relative z-10 shrink-0">
            Schedule a Free Demo
          </Button>
        </div>
      </section>
      <footer className="bg-[#edf4ff]">
        <div className="site-container pb-6 pt-14 md:pt-16">
          <div className="grid grid-cols-2 gap-x-7 gap-y-10 md:grid-cols-4 lg:grid-cols-[1.8fr_1fr_1fr_1fr_1fr]">
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <Logo />
              <p className="mt-5 text-xs font-semibold text-ink">
                Visuti Technologies Pvt. Ltd.
              </p>
              <address className="mt-2 max-w-[275px] text-xs not-italic leading-5 text-muted">
                3rd Floor, Sr. No. 9 H.No:1/2, Near Ramada Plaza,
                <br />
                Above Maruti Suzuki Suman Kirti Cars Pvt. Ltd.,
                <br />
                Mahalunge, Pune, Maharashtra 411045.
              </address>
              <p className="mb-3 mt-6 text-[11px] font-semibold text-slate-700">
                Take your sales anywhere.
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  aria-label="Download Visuti for Android"
                  href="https://play.google.com/store/search?q=Visuti&c=apps"
                >
                  <Image
                    src="/images/Visuti/gplay.svg"
                    alt="Get it on Google Play"
                    width={112}
                    height={36}
                    className="h-8 w-auto"
                  />
                </a>
                <a
                  aria-label="Download Visuti for iOS"
                  href="https://apps.apple.com/in/search?term=Visuti"
                >
                  <Image
                    src="/images/Visuti/apple.svg"
                    alt="Download on the App Store"
                    width={106}
                    height={36}
                    className="h-8 w-auto"
                  />
                </a>
              </div>
              <Image
                src="/images/Visuti/iso.svg"
                alt="ISO 27001 certified"
                width={48}
                height={48}
                className="mt-5 h-12 w-12"
              />
            </div>
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="mb-5 text-sm font-semibold text-ink">
                  {col.title}
                </h3>
                <ul className="space-y-3.5">
                  {col.links.map(([label, href]) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-xs text-muted transition-colors hover:text-brand"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-blue-100 pt-6 text-[10px] text-slate-500 sm:flex-row">
            <p>© 2026 Visuti. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a href="https://Visuti.io/privacy" className="hover:text-brand">
                Privacy policy
              </a>
              <a
                href="https://Visuti.io/terms-of-service"
                className="hover:text-brand"
              >
                Terms of service
              </a>
              <a
                href="https://Visuti.io/contact-us"
                className="hover:text-brand"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
      <a
        href="https://Visuti.io/contact-us"
        aria-label="Contact the Visuti team"
        className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full border-4 border-white/75 bg-brand text-white shadow-lg shadow-blue-700/20 transition-transform hover:scale-110 md:bottom-7 md:right-7"
      >
        <Icon name="phone" className="h-5 w-5" />
      </a>
    </>
  );
}
