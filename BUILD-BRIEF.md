# Portfolio Build Brief — angelobaleno.com

You are building **Angelo Baleno's personal portfolio** on a fully locked brand. The brand is
DONE — do not reinvent it. Your job is a beautiful, motion-first single-scroll site that proves
the thesis: *an eye this controlled, delivered this cleanly.*

The site itself is the argument. He judges design by **motion and craft**, not static mockups.
Impress in three seconds through restraint.

---

## THESIS / POSITIONING (do not restate literally on the page — embody it)

- **Who:** the *designer who builds* — design and development as one craft.
- **For:** athletes/recruits + design & sports peers.
- **Tagline (primary, use as the hero anchor):** **"A standard, not a service."** (updated 2026-07-07; hero drops the comma)
- **Positioning line (support):** composed, sports-native presence that ships — so the
  presentation finally matches the work.
- Villain to imply (never name): generic, templated web presence.

---

## BRAND SYSTEM — LOCKED. Use these exact values.

### Color (the ONLY palette)
| Token | Hex | Use |
|---|---|---|
| Ink | `#141414` | base of everything (near-black, faintly warm) |
| Bone | `#F4F1EA` | light background + reversed type. NEVER pure #FFFFFF |
| Brass | `#B08A4F` | the ONE accent. trailing period, the mark, one hairline, one word of emphasis. ≤5% of any surface |
| Steel | `#6B7079` | UI only — secondary text, borders, disabled |

Rules: default is ink-on-bone or bone-on-ink. Gold is a **seasoning, never a fill** — no gold
backgrounds, no gold-on-gold, no ink→gold gradient. Discipline is the brand.

### Type — three faces, exact roles
1. **General Sans** (core + wordmark + body/UI). Fontshare CDN:
   `<link href="https://api.fontshare.com/v2/css?f[]=general-sans@400,600,700&display=swap" rel="stylesheet">`
   - Wordmark: **Bold 700**, sentence case (the ONLY place Bold is used).
   - Headlines / nameplates / UI emphasis: **Semibold 600**.
   - Body: **Regular 400**, generous line-height.
2. **Tusker Grotesk** (display — hero, tagline, big section numbers ONLY; ration it, it punches).
   Local file, self-host via @font-face:
   `brand-assets/fonts/TuskerGrotesk-6700Bold.woff2` → put in `public/fonts/`.
   ```css
   @font-face { font-family:'Tusker Grotesk';
     src:url('/fonts/TuskerGrotesk-6700Bold.woff2') format('woff2');
     font-weight:100 900; font-display:swap; }
   ```
   Use ALL-CAPS, tight leading for hero/statement type. It's a wide/condensed athletic poster face.
3. **Martian Mono** (data / labels / tags / meta / timestamps). Google CDN:
   `<link href="https://fonts.googleapis.com/css2?family=Martian+Mono:wght@400;600&display=swap" rel="stylesheet">`
   - small, UPPERCASE, letter-spaced. It's wide — keep data strings short.

Avoid: Bebas/Oswald, soft serifs, script faces, any "tech HUD" novelty face.

### The mark (his own finished artwork — in `brand-assets/`)
- `mark.svg` (primary: brass ring `#B08A4F` + ink bolt `#141414`)
- `mark-reversed.svg` (brass ring + bone bolt — for dark/ink grounds)
- `mark-ink.svg`, `mark-bone.svg` (one-color)
- `favicon.svg` (ink tile, reads to 16px) → use as the site favicon.
- Content proportion 262.28 × 270.74 (near-square). **Scale whole — never redraw, tilt, recolor
  the ring, stretch, glow, or outline it.** Clear space ≥20% of mark width. Min 24px.
- **Wordmark lockup:** the mark + `Angelo Baleno.` in General Sans Bold 700, sentence case, with
  a **brass `#B08A4F` trailing period.** That period is the one flex — a full stop that says *settled.*

---

## STRUCTURE — single-scroll Astro site

Sections, in order:
1. **Header** — mark + wordmark left; minimal nav (Work / About / Contact) right. Slim, quiet,
   sticky-but-unobtrusive.
2. **Hero** — the argument. Tusker Grotesk statement built off the tagline *"Make it match the
   work."* on ink or bone. The mark present. **This must MOVE cleanly on load** — a fast, settled
   reveal (a flash, then still — the name literally means "in a flash"). No bounce/wiggle.
3. **Work** — the proof. 3 featured project cards + a design strip. Real projects below. Use
   tasteful branded placeholders for screenshots (ink cards, mono labels, brass hairline) — real
   images are TBD. Card hover = composed, fast, intentional.
4. **About** — first person ("I", never "we"), plain, composed. Designer who builds; sports/esports
   graphics origin (since ~2020); a standard, not a service.
5. **Contact** — simple, direct. Email `angelojbaleno@gmail.com`. Mono labels.
6. **Footer** — mark, `A standard, not a service.` or the short signature `in a flash`, minimal.

### Featured work (real projects — use these)
- **Athlete Sites** — a multi-tenant platform of recruiting/scouting sites for athletes (first
  live: a DB recruit, Class of 2027). Dark "scouting-card" design, per-athlete theming. Live (Vercel/SSR).
- **Brian Baleno — author site** — warm literary single-scroll author site w/ per-book pages. Live.
- **Webb's World of Fitness** — premium charcoal/gold single-scroll site for a Pittsburgh gym. Live.
- (design strip / secondary) sports & esports graphics — jersey swaps, edits, competition work
  since 2020; and **Mock Draft Machine** (an NFL mock-draft prototype). Frame as craft, not clients.

Keep copy honest and short. Don't invent metrics or client quotes.

---

## VOICE (for all copy)
First person, plain, composed, restrained. Short sentences. **Hard blocklist** — never use:
genuinely, truly, seamlessly, elevate, unleash, transform, journey, empower. Nothing corny,
cheesy, or template-sounding. If a line reads like AI or a theme demo, rewrite it.

## MOTION PRINCIPLES
Fast, clean, intentional — *a flash, then settled.* Subtle scroll reveals. Nothing decorative
bounces. The hero is the headline motion moment; everything else is quieter. No layout shift on
any hover/interaction — reserve the space.

---

## TECH / DELIVERY
- **Astro**, single page, static output. TypeScript ok. One CSS token layer (`:root` vars with the
  hexes above). Component per section. Theme: primarily ink-grounded; a bone section is welcome
  for contrast.
- Self-host Tusker; CDN-link General Sans + Martian Mono (they render in real browsers).
- Set `favicon.svg` as the favicon.
- Must pass `npm run build`. Run `npm run dev` and confirm it renders.
- **Do NOT** wire a git remote, deploy, buy a domain, or touch anything outside this folder.
  Do NOT add effects Angelo didn't ask for (glows, gradients, extra animations).
- Responsive: must hold on mobile. Uniform panel sizing; one display font + one body font discipline.

When done: report what you built (sections, files), how to run it, and any decisions you made that
Angelo should eyeball. He will review by eye and iterate — so make the hero and the Work cards the
strongest moments.
