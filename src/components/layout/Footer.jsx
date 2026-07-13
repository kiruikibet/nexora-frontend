const footerSections = [
  { title: "Company", links: ["About", "Careers", "Contact"] },
  {
    title: "Marketplace",
    links: ["Categories", "Sell Product", "Buy Products"],
  },
  {
    title: "Support",
    links: ["Help Center", "Privacy Policy", "Terms of Service"],
  },
  { title: "Social", links: ["Facebook", "X", "LinkedIn", "Instagram"] },
];

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-5">
          <div className="xl:col-span-2">
            <div className="text-lg font-semibold tracking-tight text-white">
              Nexora Marketplace
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
              A modern marketplace experience designed for buyers, sellers, and
              growing teams.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
                {section.title}
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-400">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex sm:items-center sm:justify-between">
          <p>
            Copyright © {new Date().getFullYear()} Nexora Marketplace. All
            rights reserved.
          </p>
          <p className="mt-2 sm:mt-0">
            Built for a professional buying and selling experience.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
