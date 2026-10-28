import { useState } from 'react'
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Layers3, Sparkles, ExternalLink, CheckCircle2, Send, Award,
} from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'Mac OS Portfolio',
    type: 'INTERACTIVE WEB EXPERIENCE',
    description: 'A macOS-inspired personal portfolio concept with a desktop interface, dock-style icons, and a mountain wallpaper.',
    stack: ['React', 'Tailwind CSS', 'JavaScript'],
    visual: 'mac',
    live: 'https://somilraj55.github.io/Portfolio/',
    github: 'https://github.com/somilraj55',
  },
  {
    number: '02',
    title: 'Cake Shop Website',
    type: 'RESPONSIVE WEBSITE',
    description: 'A bakery landing page featuring a chocolate-cake hero section, category navigation, and a warm visual theme.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    visual: 'cake',
    live: 'https://somilraj55.github.io/',
    github: 'https://github.com/somilraj55',
  },
  {
    number: '03',
    title: 'Productivity Dashboard',
    type: 'FRONTEND PROJECT',
    description: 'A productivity dashboard with a live clock, weather panel, theme control, and visual cards for daily tools.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    visual: 'dash',
    live: 'https://github.com/somilraj55',
    github: 'https://github.com/somilraj55',
  },
]

const skills = [
  { label: 'Frontend', items: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3'] },
  { label: 'Styling & Motion', items: ['Tailwind CSS', 'SCSS', 'GSAP', 'Responsive UI'] },
  { label: 'Tools & Workflow', items: ['Git', 'GitHub', 'VS Code', 'REST APIs'] },
]

function SectionLabel({ number, children }) {
  return (
    <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
      <span className="text-lime">{number}</span>
      <span className="h-px w-8 bg-zinc-700" />
      <span>{children}</span>
    </div>
  )
}


function ProjectPreview({ type }) {
  const base = import.meta.env.BASE_URL;

  const previews = {
    mac: {
      src: `${base}projects/mac-os.png`,
      alt: 'Somil OS Mac-style portfolio screenshot',
    },
    cake: {
      src: `${base}projects/paras-bakery.png`,
      alt: 'PARAS Bakery website screenshot',
    },
    dash: {
      src: `${base}projects/productivity-dashboard.png`,
      alt: 'Productivity Dashboard made with HTML, CSS and JavaScript',
    },
  };

  const preview = previews[type];

  if (!preview) return null;

  return (
    <div className="project-image-wrap relative h-full min-h-56 overflow-hidden bg-[#17171b]">
      <img
        src={preview.src}
        alt={preview.alt}
        className="h-full min-h-56 w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
        loading="lazy"
        onError={(e) => {
          console.error('Project image failed to load:', preview.src);
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
    </div>
  );
}


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const email = 'somilraj55@gmail.com'
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-zinc-100">
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid opacity-40" />
      <div className="pointer-events-none fixed -right-40 top-20 z-0 h-96 w-96 rounded-full bg-lime/5 blur-[120px]" />
      <header className="relative z-20 border-b border-white/[0.07]">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#home" className="group flex items-center gap-3" onClick={closeMenu}>
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-lime/30 bg-lime/10 font-mono text-sm font-bold text-lime transition group-hover:bg-lime group-hover:text-ink">SB.</span>
            <span className="text-sm font-bold tracking-wide">somil<span className="text-zinc-500">.dev</span></span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {[['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Certificates', '#certificates'], ['Contact', '#contact']].map(([label, href]) => <a key={label} href={href} className="text-sm text-zinc-400 transition hover:text-lime">{label}</a>)}
            <a href="#contact" className="rounded-full border border-zinc-700 px-4 py-2 text-xs font-semibold transition hover:border-lime hover:text-lime">Let's talk <ArrowUpRight size={13} className="ml-1 inline" /></a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg border border-white/10 p-2 md:hidden" aria-label="Toggle navigation">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </nav>
        {menuOpen && <div className="border-t border-white/10 px-5 py-4 md:hidden">{[['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Certificates', '#certificates'], ['Contact', '#contact']].map(([label, href]) => <a key={label} href={href} onClick={closeMenu} className="block py-3 text-sm text-zinc-300">{label}</a>)}</div>}
      </header>

      <main className="relative z-10">
        <section id="home" className="mx-auto grid max-w-6xl gap-12 px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-16">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-lime/20 bg-lime/[0.06] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-lime sm:text-xs"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-50" /><span className="relative inline-flex h-2 w-2 rounded-full bg-lime" /></span> Open to frontend internships</div>
            <p className="mb-4 font-mono text-sm text-zinc-500">Hey, I'm Somil Barnwal 👋</p>
            <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.04] tracking-[-0.06em] sm:text-7xl lg:text-[5.4rem]">I build things<br />for the <span className="text-lime">web<span className="text-zinc-600">.</span></span></h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">Frontend developer focused on building clean, responsive, and interactive experiences with <span className="text-zinc-100">React</span> and <span className="text-zinc-100">Tailwind CSS</span>.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-bold text-ink transition hover:bg-white">Explore my work <ArrowDownRight size={17} className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" /></a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:border-zinc-400">Get in touch <ArrowUpRight size={16} /></a>
            </div>
            <div className="mt-12 flex items-center gap-5 text-zinc-500">
              <a aria-label="GitHub profile" href="https://github.com/somilraj55" target="_blank" rel="noreferrer" className="transition hover:text-lime"><Github size={19} /></a>
              <a aria-label="LinkedIn profile" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="transition hover:text-lime"><Linkedin size={19} /></a>
              <button aria-label="Copy email" onClick={copyEmail} className="transition hover:text-lime"><Mail size={19} /></button>
              <span className="h-4 w-px bg-zinc-800" />
              <span className="font-mono text-[10px]">{copied ? 'EMAIL COPIED!' : 'BASED IN INDIA · BUILDING EVERY DAY'}</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] border border-white/[0.06]" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-panel p-5 shadow-glow sm:p-7">
              <div className="mb-8 flex items-center justify-between"><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">Current snapshot</span><span className="font-mono text-[10px] text-lime">● AVAILABLE</span></div>
              <div className="mb-7 flex items-center gap-4">
                <div className="grid h-16 w-16 place-items-center rounded-2xl border border-lime/20 bg-lime/10 text-2xl font-extrabold text-lime">S.</div>
                <div><h2 className="text-xl font-bold">Somil Barnwal</h2><p className="mt-1 text-sm text-zinc-500">Frontend Developer · Learner</p></div>
              </div>
              <div className="space-y-3">
                {[['01', 'Currently learning', 'Node.js + MongoDB'], ['02', 'Building with', 'JavaScript & Tailwind'], ['03', 'Looking for', 'Internship opportunities']].map(([num, label, value]) => <div key={num} className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5"><span className="font-mono text-xs text-lime">{num}</span><div><p className="text-[11px] text-zinc-500">{label}</p><p className="mt-1 text-sm font-semibold text-zinc-200">{value}</p></div><ArrowUpRight size={14} className="ml-auto text-zinc-600" /></div>)}
              </div>
              <div className="mt-7 flex items-center gap-2 border-t border-white/[0.07] pt-5 text-xs text-zinc-500"><Code2 size={14} className="text-lime" /> Turning ideas into interfaces, one commit at a time.</div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden items-center gap-2 rounded-xl border border-white/10 bg-[#17171b] px-4 py-3 shadow-xl sm:flex"><Sparkles size={16} className="text-lime" /><span className="text-xs font-semibold">Curious by default.</span></div>
          </div>
        </section>

        <section id="about" className="border-y border-white/[0.07] bg-white/[0.015]">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:gap-14 md:py-24">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-3 rounded-[2rem] bg-lime/10 blur-2xl" />
              <div className="absolute -inset-3 rounded-[2rem] border border-lime/20" />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-panel p-2 shadow-glow">
                <img
                  src={`${import.meta.env.BASE_URL}images/profile-photo.jpeg`}
                  alt="Somil Barnwal"
                  className="aspect-[4/5] w-full rounded-[1.1rem] object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-x-2 bottom-2 rounded-b-[1.1rem] bg-gradient-to-t from-black/90 via-black/55 to-transparent px-5 pb-5 pt-14">
                  <p className="text-xl font-bold text-white">Somil Barnwal</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-lime">Frontend Developer · Learner</p>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-3 rounded-xl border border-white/10 bg-[#17171b] px-4 py-3 shadow-xl sm:-right-5"><span className="flex items-center gap-2 text-xs font-semibold"><span className="h-2 w-2 rounded-full bg-lime" /> Currently learning Node.js</span></div>
            </div>
            <div>
              <SectionLabel number="01">A little about me</SectionLabel>
              <h2 className="max-w-sm text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Curiosity first.<br /><span className="text-zinc-500">Code follows.</span></h2>
              <div className="mt-6 max-w-2xl"><p className="text-base leading-8 text-zinc-400">I'm a BCA student and aspiring frontend developer who enjoys turning ideas into useful digital experiences. I like exploring how design and code come together to make the web feel intuitive.</p><p className="mt-5 text-base leading-8 text-zinc-400">Right now, I'm sharpening my React skills, building hands-on projects, and learning backend development with Node.js and MongoDB. I'm looking for an opportunity where I can contribute, learn from a team, and grow into a stronger developer.</p>
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3"><div className="rounded-xl border border-white/[0.08] p-4"><p className="text-2xl font-extrabold text-lime">01<span className="text-zinc-600">+</span></p><p className="mt-1 text-xs text-zinc-500">Always learning</p></div><div className="rounded-xl border border-white/[0.08] p-4"><p className="text-2xl font-extrabold text-lime">UI<span className="text-zinc-600">/</span>UX</p><p className="mt-1 text-xs text-zinc-500">Detail oriented</p></div><div className="col-span-2 rounded-xl border border-white/[0.08] p-4 sm:col-span-1"><p className="text-2xl font-extrabold text-lime">∞</p><p className="mt-1 text-xs text-zinc-500">Ideas to explore</p></div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
          <SectionLabel number="02">My toolkit</SectionLabel>
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Tools I work with<span className="text-lime">.</span></h2><p className="max-w-sm text-sm leading-6 text-zinc-500">The technologies I'm using to build, experiment, and keep improving.</p></div>
          <div className="grid gap-4 md:grid-cols-3">{skills.map((group, i) => <div key={group.label} className="rounded-2xl border border-white/[0.08] bg-panel/70 p-6 transition hover:border-lime/30"><div className="mb-6 flex items-center justify-between"><span className="grid h-10 w-10 place-items-center rounded-xl bg-lime/10 text-lime">{i === 0 ? <Code2 size={19} /> : i === 1 ? <Sparkles size={19} /> : <Layers3 size={19} />}</span><span className="font-mono text-xs text-zinc-600">0{i + 1}</span></div><h3 className="mb-4 font-bold">{group.label}</h3><div className="flex flex-wrap gap-2">{group.items.map(item => <span key={item} className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-xs text-zinc-400">{item}</span>)}</div></div>)}</div>
        </section>

        <section id="projects" className="border-y border-white/[0.07] bg-white/[0.015]">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
            <SectionLabel number="03">Selected projects</SectionLabel>
            <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Things I've been <span className="text-lime">building.</span></h2><a href="https://github.com/somilraj55" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-lime">More on GitHub <ArrowUpRight size={15} /></a></div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{projects.map(project => <article key={project.number} className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-panel transition duration-300 hover:-translate-y-1 hover:border-lime/30">
              <div className="relative"><ProjectPreview type={project.visual} /><span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/30 px-2.5 py-1 font-mono text-[9px] text-white/70">{project.number}</span></div>
              <div className="p-5 sm:p-6"><p className="font-mono text-[9px] tracking-[0.16em] text-lime">{project.type}</p><h3 className="mt-3 text-xl font-bold">{project.title}</h3><p className="mt-3 min-h-[72px] text-sm leading-6 text-zinc-500">{project.description}</p><div className="mt-4 flex flex-wrap gap-2">{project.stack.map(tag => <span key={tag} className="rounded-md bg-white/[0.05] px-2 py-1 font-mono text-[9px] text-zinc-400">{tag}</span>)}</div><div className="mt-6 flex gap-4 border-t border-white/[0.07] pt-4"><a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 transition hover:text-lime">Live demo <ExternalLink size={13} /></a><a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 transition hover:text-lime"><Github size={13} /> Source code <ArrowUpRight size={12} /></a></div></div>
            </article>)}</div>
            <p className="mt-5 text-xs leading-5 text-zinc-600">Note: Update each project URL and description to match the actual deployed project before publishing.</p>
          </div>
        </section>


        <section
          id="certificates"
          className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24"
        >
          <SectionLabel number="04">Certificates & Recognition</SectionLabel>

          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Learning, validated
                <span className="text-lime">.</span>
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-zinc-500">
                Certificates that showcase my learning journey and commitment to
                improving my frontend development skills.
              </p>
            </div>

            <span className="font-mono text-xs text-zinc-500">
              04 CERTIFICATES
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Introduction to HTML",
                issuer: "SoloLearn",
                image: "html-certificate.jpg",
                alt: "SoloLearn HTML certificate",
              },
              {
                title: "Introduction to CSS",
                issuer: "SoloLearn",
                image: "css-certificate.jpg",
                alt: "SoloLearn CSS certificate",
              },
              {
                title: "Introduction to JavaScript",
                issuer: "SoloLearn",
                image: "javascript-certificate.jpg",
                alt: "SoloLearn JavaScript certificate",
              },
              {
                title: "College Ambassador",
                issuer: "Techfest, IIT Bombay",
                image: "techfest-iit-bombay.jpg",
                alt: "Techfest IIT Bombay College Ambassador certificate",
              },
            ].map((certificate) => {
              const certificatePath = `${import.meta.env.BASE_URL
                }certificates/${certificate.image}`;

              return (
                <article
                  key={certificate.title}
                  className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-panel transition duration-300 hover:-translate-y-1 hover:border-lime/40"
                >
                  {/* Certificate image */}
                  <a
                    href={certificatePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${certificate.title} certificate`}
                    className="flex h-52 items-center justify-center overflow-hidden bg-white p-3"
                  >
                    <img
                      src={certificatePath}
                      alt={certificate.alt}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                        event.currentTarget.parentElement.innerHTML =
                          '<p style="color:#52525b;font-size:13px;text-align:center;padding:12px">Certificate image not found. Please check the image filename.</p>';
                      }}
                      className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.03]"
                    />
                  </a>

                  {/* Certificate details */}
                  <div className="p-5">
                    <div className="mb-3 flex items-center gap-2 text-lime">
                      <Award size={17} />

                      <span className="font-mono text-[10px] uppercase tracking-[0.15em]">
                        Certificate
                      </span>
                    </div>

                    <h3 className="min-h-12 font-bold leading-snug text-white">
                      {certificate.title}
                    </h3>

                    <p className="mt-2 text-sm text-zinc-500">
                      {certificate.issuer}
                    </p>

                    <a
                      href={certificatePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 transition hover:text-lime"
                    >
                      View certificate
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>


        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
          <div className="grid gap-10 rounded-3xl border border-lime/15 bg-gradient-to-br from-lime/[0.08] to-transparent p-6 sm:p-10 md:grid-cols-[1fr_auto] md:items-center md:p-12">
            <div><SectionLabel number="05">How I work</SectionLabel><h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Good work comes from staying curious<span className="text-lime">.</span></h2><p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400">I value clean interfaces, thoughtful details, feedback, and learning by building. Every project is a chance to get a little better.</p></div>
            <div className="space-y-3">{['Responsive-first thinking', 'Reusable components', 'Open to feedback'].map(item => <div key={item} className="flex items-center gap-3 text-sm text-zinc-300"><CheckCircle2 size={17} className="text-lime" />{item}</div>)}</div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/[0.07]">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
            <SectionLabel number="06">What's next?</SectionLabel>
            <div className="grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end">
              <div><p className="font-mono text-xs uppercase tracking-[0.18em] text-lime">Have an opportunity?</p><h2 className="mt-4 max-w-2xl text-5xl font-extrabold leading-[1.05] tracking-[-0.05em] sm:text-7xl">Let's build<br />something <span className="text-lime">good.</span></h2><p className="mt-6 max-w-lg text-base leading-7 text-zinc-400">I'm open to frontend internships, junior opportunities, and collaborating on interesting projects. My inbox is open.</p><a href={`mailto:${email}?subject=Frontend%20Opportunity`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-bold text-ink transition hover:bg-white">Say hello <Send size={15} /></a></div>
              <div className="rounded-2xl border border-white/[0.08] bg-panel p-6"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">Get in touch</p><button onClick={copyEmail} className="mt-4 flex w-full items-center justify-between gap-3 border-b border-white/[0.08] pb-4 text-left text-sm font-semibold transition hover:text-lime"><span className="break-all">{email}</span>{copied ? <CheckCircle2 size={17} className="shrink-0 text-lime" /> : <Mail size={17} className="shrink-0 text-zinc-500" />}</button><a href="https://github.com/somilraj55" target="_blank" rel="noreferrer" className="mt-4 flex items-center justify-between text-sm text-zinc-400 transition hover:text-lime">GitHub <ArrowUpRight size={16} /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="mt-4 flex items-center justify-between text-sm text-zinc-400 transition hover:text-lime">LinkedIn <ArrowUpRight size={16} /></a><p className="mt-6 text-xs leading-5 text-zinc-600">Replace the LinkedIn link with your actual profile before publishing.</p></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-8"><p>© {new Date().getFullYear()} Somil Barnwal. Built with React & Tailwind CSS.</p><a href="#home" className="transition hover:text-lime">Back to top ↑</a></div>
      </footer>
    </div>
  )
}

export default App