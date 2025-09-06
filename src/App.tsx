
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Menu,
  X,
  Globe2,
  Package,
  Pill,
  FlaskConical,
  Droplet,
  ShieldCheck,
  Check,
  MapPin,
} from "lucide-react";

const indianHubs = [
  "Delhi",
  "Calcutta",
  "Mumbai",
  "Baddi",
  "Ahmedabad",
  "Roorkee",
];

const finishedForms = [
  { key: "tablet", title: "Tablet", icon: Pill },
  { key: "capsule", title: "Capsule", icon: Pill },
  { key: "liquid", title: "Liquid", icon: Droplet },
  { key: "iv-fluid", title: "IV Fluid", icon: Droplet },
  { key: "wfi", title: "Sterile Water for Injection", icon: FlaskConical },
  { key: "nutraceuticals", title: "Nutraceuticals", icon: Package },
];

function Header({ dark, setDark }: { dark: boolean; setDark: (v: boolean) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400 shadow-sm" />
            <span className="font-semibold tracking-tight text-lg">Azentyx</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:underline underline-offset-4">About</a>
            <a href="#api" className="hover:underline underline-offset-4">API</a>
            <a href="#excipient" className="hover:underline underline-offset-4">Excipient</a>
            <a href="#packaging" className="hover:underline underline-offset-4">Packaging</a>
            <a href="#finished-formulation" className="hover:underline underline-offset-4">Finished Formulation</a>
            <a href="#ingredients" className="hover:underline underline-offset-4">Ingredients &amp; Finished Products</a>
            <a href="#contact" className="hover:underline underline-offset-4">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-xs select-none">
              <span>Dark</span>
              <button
                aria-label="Toggle dark mode"
                onClick={() => setDark(!dark)}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-neutral-200 dark:bg-neutral-700 transition-colors"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white dark:bg-neutral-200 shadow translate-x-1 transition-transform ${dark ? "translate-x-6" : ""}`}
                />
              </button>
            </label>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow hover:opacity-90"
            >
              Enquire now <ArrowRight className="h-4 w-4" />
            </a>
            <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Open menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden py-4 border-t border-neutral-200 dark:border-neutral-800 grid gap-2 text-sm">
            <a href="#about" className="py-2">About</a>
            <a href="#api" className="py-2">API</a>
            <a href="#excipient" className="py-2">Excipient</a>
            <a href="#packaging" className="py-2">Packaging</a>
            <a href="#finished-formulation" className="py-2">Finished Formulation</a>
            <a href="#ingredients" className="py-2">Ingredients &amp; Finished Products</a>
            <a href="#contact" className="py-2">Contact</a>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20" aria-hidden>
        <div className="absolute -top-24 -left-32 h-80 w-80 rounded-full bg-indigo-400 blur-3xl" />
        <div className="absolute -bottom-24 -right-32 h-80 w-80 rounded-full bg-emerald-400 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 px-3 py-1 text-xs mb-6">
            <Globe2 className="h-3.5 w-3.5" /> Global Merchant Exporters from India
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            APIs, Excipients, Packaging &amp; Finished Formulations
          </h1>
          <p className="mt-6 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Representing multiple companies and products with a group team strength of 100+ professionals. Based out of Delhi, Calcutta, Mumbai, Baddi, Ahmedabad, and Roorkee—serving customers worldwide.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow hover:opacity-90"
            >
              Contact sales <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800"
            >
              Learn more
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">About</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            Merchant Exporters from India representing multiple companies and multiple products with a group team strength of more than 100 people.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/60 dark:bg-neutral-900/60 shadow-sm">
            <h3 className="font-semibold text-lg">Company Footprint</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {indianHubs.map((city) => (
                <li key={city} className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5" />
                  <span>{city}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/60 dark:bg-neutral-900/60 shadow-sm">
            <h3 className="font-semibold text-lg">Quality Policy</h3>
            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300">
              We prioritize product integrity, transparent documentation, and on-time delivery. Our partners operate to stringent quality standards and regulatory expectations. Batch-wise traceability and COA/COC support are available where applicable.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-start gap-2"><ShieldCheck className="h-4 w-4 mt-0.5" /> Supplier qualification and audits</li>
              <li className="flex items-start gap-2"><ShieldCheck className="h-4 w-4 mt-0.5" /> Change control &amp; deviation handling</li>
              <li className="flex items-start gap-2"><ShieldCheck className="h-4 w-4 mt-0.5" /> Documentation &amp; regulatory dossier support</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/60 dark:bg-neutral-900/60 shadow-sm">
            <h3 className="font-semibold text-lg">Locations: Global Presence</h3>
            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300">
              We serve customers worldwide with rapid coordination from our India hubs. Please reach out for territory-specific capabilities and registrations.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {["Asia", "Middle East", "Africa", "Europe", "Americas"].map((r) => (
                <span key={r} className="px-3 py-1 rounded-full border border-neutral-300 dark:border-neutral-700">{r}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionShell({ id, title, icon: Icon, children }: { id: string; title: string; icon: React.ComponentType<any>; children: React.ReactNode }) {
  return (
    <section id={id} className="py-16 sm:py-24 bg-neutral-50 dark:bg-neutral-950/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl grid place-items-center bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
            <Icon className="h-5 w-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function APISection() {
  return (
    <SectionShell id="api" title="API" icon={FlaskConical}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Sourcing & qualification", "End-to-end documentation", "Flexible MOQs"].map((p) => (
          <div key={p} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900 shadow-sm">
            <h3 className="font-semibold">{p}</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Discuss your molecule list; we coordinate specs, lead times, and regulatory support.</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function ExcipientSection() {
  return (
    <SectionShell id="excipient" title="Excipient" icon={Package}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Pharma-grade options", "Consistent supply", "Technical support"].map((p) => (
          <div key={p} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900 shadow-sm">
            <h3 className="font-semibold">{p}</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Binders, fillers, disintegrants, lubricants, and more—matched to your formulation needs.</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function PackagingSection() {
  return (
    <SectionShell id="packaging" title="Packaging" icon={Package}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Primary & secondary", "Regulatory documentation", "Custom packaging"].map((p) => (
          <div key={p} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900 shadow-sm">
            <h3 className="font-semibold">{p}</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">From containers and closures to labels and cartons. Options tailored to product and market.</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function FinishedFormulation() {
  return (
    <SectionShell id="finished-formulation" title="Finished Formulation" icon={Pill}>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {finishedForms.map(({ key, title, icon: Icon }) => (
        <div key={key} id={`ff-${key}`} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl grid place-items-center bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-lg">{title}</h3>
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {["Market-ready options", "Dossier support on request", "Packaging & shipping coordination"].map((p) => (
              <li key={p} className="flex items-start gap-2">
                <Check className="h-4 w-4 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="mt-6 text-sm text-neutral-600 dark:text-neutral-300">
      Looking for a specific product or strength? <a href="#contact" className="underline underline-offset-4">Tell us your requirements</a> and we’ll share availability and lead times.
    </div>
  </SectionShell>
  );
}

function Ingredients() {
  return (
    <SectionShell id="ingredients" title="Ingredients & Finished Products" icon={Package}>
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900 shadow-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          Share your bill of materials or product list, and we’ll propose qualified sources with documentation and logistics options. Catalogs are available upon request.
        </p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-medium">Ingredients</h4>
            <ul className="mt-2 space-y-1">
              {[
                "Active Pharmaceutical Ingredients (APIs)",
                "Excipients",
                "Solvents & processing aids",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> {t}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Finished Products</h4>
            <ul className="mt-2 space-y-1">
              {[
                "Tablets & Capsules",
                "Liquids & Suspensions",
                "IV Fluids & Sterile WFI",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> {t}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Services</h4>
            <ul className="mt-2 space-y-1">
              {[
                "Documentation collation",
                "Regulatory & registration support",
                "Packing & logistics coordination",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5" /> {t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Contact</h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">Share your requirement and location. We will respond with product availability and next steps.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks! We'll be in touch.");
          }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left"
        >
          <input type="text" required placeholder="Full name" className="rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-3 text-sm" />
          <input type="email" required placeholder="Work email" className="rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-3 text-sm" />
          <input type="text" placeholder="Company" className="rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-3 text-sm sm:col-span-1" />
          <input type="text" placeholder="Country / Region" className="rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-3 text-sm sm:col-span-1" />
          <textarea required placeholder="Products, quantities, and any dossier needs" className="rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-3 text-sm sm:col-span-2 min-h-[120px]" />
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow hover:opacity-90 sm:col-span-2">
            Submit enquiry <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400" />
          <span className="font-semibold">Azentyx</span>
        </div>
        <p className="text-xs text-neutral-500">© {new Date().getFullYear()} Azentyx. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function AzentyxLanding() {
  const [dark, setDark] = useState(true);
  return (
    <div className={`${dark ? "dark" : ""} scroll-smooth`}>
      <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white selection:bg-indigo-200/60 dark:selection:bg-indigo-400/30">
        <Header dark={dark} setDark={setDark} />
        <main>
          <Hero />
          <About />
          <APISection />
          <ExcipientSection />
          <PackagingSection />
          <FinishedFormulation />
          <Ingredients />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
