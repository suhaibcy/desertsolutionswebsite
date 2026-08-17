# Desert Solutions — Design System

**Desert Solutions Landscaping & Yard Services** is an owner-operated desert landscaping and
yard-maintenance business run by **Robert Tollardo** out of the Albuquerque, New Mexico area.
Services: yard cleanup, mowing, weed removal, mulch & rock, bush trimming, leaf/debris cleanup,
property maintenance, light pressure washing, haul-away and branch cleanup.

There is **one product surface**: a single-page lead-generation marketing website. No app, no
customer portal, no booking system, no pricing on-site — Robert quotes each yard directly.

The brand deliberately rejects the soft lush-lawn look of most landscaping companies. Its own logo
sets the direction: saguaro cactus, mountain silhouette against a burnt-orange sunset, agave and
yucca, rocks, and a chrome brush-script wordmark. Read it as *trail outfitter crossed with a
reliable local contractor* — tough, plainspoken, a little cinematic. Never corporate, never soft.

## Sources this system was built from

Three client-supplied JPGs, all in `uploads/` (no codebase, Figma file, or font files were provided):

| File | What it is | What was taken from it |
|---|---|---|
| `uploads/20260813_214904000_iOS.jpg` | Standalone logo mark on black | `assets/logo-mark.png`, `assets/logo-wordmark.png`, green + sunset colour sampling |
| `uploads/20260811_202930000_iOS.jpg` | Wide business-card / flyer lockup | `assets/hero-desert-scene.png`, `assets/brand-card.png`, `assets/mountain-divider.png`, service list |
| `uploads/20260812_033714000_iOS.jpg` | Service price list flyer | All 16 icons in `assets/icons/` (cropped programmatically), service list. **Dollar amounts deliberately ignored.** |

All colours in `tokens/colors.css` are **sampled from the artwork** (pixel histogram over the logo
and the flyer's icon strip), not estimated.

## Index

- `styles.css` — the single entry point consumers link. `@import` lines only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `shape.css`, `motion.css`.
- `assets/` — `logo-mark.png`, `logo-wordmark.png`, `hero-desert-scene.png`, `brand-card.png`, `mountain-divider.png`, `icons/*.png` (16).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/` — reusable primitives (below).
- `ui_kits/website/` — the marketing-site recreation. See its `README.md`.
- `SKILL.md` — Agent-Skills entry point if this folder is downloaded into Claude Code.
- `thumbnail.html` — homepage tile.

### Components

`components/core/` — **Button**, **IconButton**, **ServiceIcon**, **Badge**, **Card**, **SectionHeading**, **Logo**
`components/forms/` — **Field**, **QuoteForm**
`components/marketing/` — **HeroBand**, **ServiceCard**, **StatBand**, **StatRow**, **ProcessSteps**, **ImageFrame**, **TickerBand**, **ConsultationBand**, **CtaBand**
`components/navigation/` — **UtilityBar**, **TopNav**, **Footer**

Each has a sibling `.d.ts` (props contract) and `.prompt.md` (what & when + usage).

**Intentional additions.** The client brief specified composites only (top-nav, hero band, service
card, stat row, CTA band, quote form, footer). `Button`, `IconButton`, `Badge`, `Card`, `Field`,
`SectionHeading`, `Logo` and `ServiceIcon` were added because the composites need them and
consumers will otherwise re-invent them inconsistently. `ServiceIcon` in particular exists to make
the flyer's own glyphs the path of least resistance over a generic icon library.

---

## Content fundamentals

**Point of view: first person singular.** One man does the work, so the copy says so. "I mow, trim
and blow." "I'll call you back with a price." Never "our team of landscaping professionals," never
the royal we.

**Plain, concrete, short.** Name the service, not the category. Sentences run under fifteen words.
Concrete nouns (weeds, gate code, clippings, dump fees) beat abstractions (solutions, experience).

| Say | Not |
|---|---|
| Clean yards. Better views. | Elevating your outdoor living experience. |
| Mowing, cleanup, mulch, trimming — one call. | Full-service landscape solutions tailored to you. |
| Serving Albuquerque and the surrounding area. | Proudly serving the greater metropolitan region. |
| Free estimate — call or text. | Contact us to discuss your landscaping needs. |
| Debris, weeds and general cleanup — hauled off when I leave. | Comprehensive debris management. |

**Casing.** Sentence case for body copy, buttons, nav links and form labels. Uppercase is allowed
in exactly two places: display headlines (hero and section headers, matching the logo's all-caps
wordmark) and 13px eyebrow labels ("OWNER-OPERATED," "FREE ESTIMATE"). Card titles stay sentence case.

**Punctuation.** Em dash for the aside, period for the beat. Short fragments are fine and on-brand
("Free estimate. Call or text."). No exclamation marks. No ALL-CAPS shouting in body copy.

**Emoji: never.** Not in UI, not in copy. The brand's own hand-drawn icons carry that job.

**Trust signals come from facts, not adjectives:** the owner's name, the phone number, the service
area, the full service list. **Never fabricate** review counts, star ratings, "years in business,"
job counts, or licence numbers — none were provided.

**Pricing is off-limits on every surface.** The price-list flyer exists, but the dollar amounts stay
out of the design system, the UI kit, and any site built from it. Pricing is Robert's conversation.

**Voice checklist for new copy:** Does it say "I"? Could a neighbour say it out loud? Is every number
in it real? Is it under fifteen words? Is pricing absent?

---

## Visual foundations

**Colour.** Near-black warm canvas `#0b0c0a` — a desert-night black with a green/brown undertone,
never blue-black, never pure `#000`. Type sits on it as warm off-white `#f5f3ee`, never pure white.
There is exactly **one chromatic UI colour**: desert green `--ds-green-400` `#7bb92e`, sampled from
the logo's outline strokes (the flyer's icons sample slightly deeper at `#5c9612`, kept as
`--ds-green-500` for presses and small-on-dark contrast). Every button, icon, active link, focus
ring and hover state uses it. Nothing else competes chromatically — if a section needs emphasis,
it borrows the sunset gradient, it does not introduce a hue.

**The sunset gradient** (`--grad-sunset`, `#c4381a` → `#e8641c` → `#f7c24a`, lifted from the logo's
sky) is rationed to **two appearances per page**: a low-opacity radial glow behind the hero, and
the single pre-footer CTA band — always under `--grad-dark-overlay` so text stays legible. It is
never a solid fill, never a button colour, never a full-page wash, never behind body copy bare.

**Type.** Two families, three weights total. Display is **Anton** — heavy, condensed, uppercase,
0.95 line-height, 0.5px tracking — for the hero (44–92px, fluid) and section headers (34–48px).
Body is **DM Sans** 400/500/700 at 1.6 line-height: 20px/700 card titles, 16–18px/400 body, 14px
fine print, 13px/700 uppercase eyebrows at 1px tracking, 15px/700 button labels at 0.5px tracking.
The logo's brush-script wordmark and the script tagline are **artwork**; never imitate them in HTML.

**Spacing & layout.** 4px base: 4 · 8 · 12 · 16 · 24 · 40 · 64 · 96. Sections breathe at 96px
top/bottom (48px under 768px). Content caps at 1200px centred with a 24px gutter. Card padding 24px,
internal stack gap 16px. Controls are 48px minimum height (40px small) — this is a phone-in-hand
lead-gen site, so touch targets never go below 44px.

**Depth.** No shadows in the glossy SaaS sense. Depth is **surface layering**: canvas `#0b0c0a` →
card `#171812` → elevated `#222318`, each separated by a 1px `#33352a` hairline. Two exceptions
exist and both are glows, not shadows: the green radial behind the hero headline
(`--shadow-hero-glow` / `--glow-green`) and the warm lift under the CTA band.

**Cards.** Flat card-tone fill, 1px hairline border, 12px radius, 24px padding, no shadow. On hover,
an interactive card swaps its hairline to green and lifts 2px over 200ms. Nested panels step up to
the elevated tone; the quote panel goes 20px radius.

**Corners.** 6px inputs and small tags · 12px cards and buttons · 20px large panels. Nothing is
fully pill-shaped and nothing is square — this mirrors the logo's rounded-edge badge frame.

**Borders.** Hairlines do the structural work: 1px `--ds-hairline` for dividers and card edges,
`--ds-hairline-strong` when a divider needs to read at distance, 1px `--accent` for outline buttons
and hover states. 2px only on the focus ring's outer glow.

**Motion.** Restrained and fast: 120ms on control colour changes, 200ms on card hover, 360ms
reserved for anything entering the viewport. Easing is `cubic-bezier(.2,.7,.3,1)` — quick out, soft
landing. No bounces, no springs, no parallax, no scroll-jacking. Press states nudge 1px down rather
than scaling.

**Hover & press.** Primary buttons lighten (green-400 → green-300); secondary buttons fill with a
12%-green tint and brighten their border; ghost links shift to green; cards shift hairline to green
and lift. Nothing darkens on hover — on a near-black canvas, brighter reads as responsive. Press is
always a 1px downward nudge, never a scale.

**Focus.** 2px `rgba(155,212,86,.25)` outer glow plus a green border on the focused control. Focus
is always visible; never `outline: none` without a replacement.

**Transparency & blur.** Two uses only: the sticky nav at `rgba(11,12,10,.92)` with an 8px backdrop
blur, and the sticky mobile call bar at `.94`. Everything else is opaque. Green tints for icon tiles
and secondary-button fills use flat alpha, not blur.

**Imagery.** Warm, high-contrast, hand-illustrated desert artwork — sunset oranges over deep shadow,
saguaro/agave/yucca green, brown rock. Until real jobsite photography exists, the logo's own desert
scene and the mountain-silhouette strip carry every image slot. **No stock lush-lawn photography, no
generic suburban yards, no AI-looking gradients.** Any photo placed over text gets `--scrim-image`,
a bottom-to-canvas protection gradient, rather than a capsule behind the type.

**Fixed elements.** Sticky top nav with the call button always visible; sticky bottom call bar on
mobile. Nothing else pins.

**Layout rhythm (borrowed structure).** The page architecture follows the conventional
landscaping-site sequence — utility bar, sticky nav, split hero, big-number band, service marquee,
three-step process, service grid, photo collage, service area, consultation band, sunset CTA,
four-column footer — but every surface stays dark, every accent stays the one green, and each photo
slot is a labelled `ImageFrame` placeholder rather than stock photography. Structural signatures:
eyebrow **pill** tags with a leading dot open each section, marketing CTAs carry a circular ↗ glyph,
photo frames use the arch (`999px 999px 20px 20px`) and oval shapes, collage frames tilt ±2–4°, and
alternating `--surface-page` / `--surface-card` sections carry rhythm instead of colour blocks.

**Numbers.** The big-number band exists, but it only ever holds verifiable facts: one owner, nine
services, a 30-mile radius, $0 estimates. Project counts, review counts, "happy clients" and years
in business are forbidden — none were provided.

---

## Iconography

The brand has its **own hand-drawn icon set**, drawn in the same illustrative style as the logo:
solid brand-green glyphs with rounded organic outlines and occasional interior line detail — closer
to a screen-print stencil than to a stroke-based UI icon library. All 16 were **cropped
programmatically from the client's price-list flyer** (black background keyed out to transparency,
colour preserved) and live in `assets/icons/` as PNG:

`mower` · `grass-tuft` · `grass-blades` · `mulch-rock` · `bush` · `leaf` · `house` · `sparkles` ·
`trash` · `truck` · `haul-truck` · `branch` · `pin` · `person` · `phone` · `mail`

Rules:
- Reach for `<ServiceIcon name="…" />`. **Do not substitute Lucide, Heroicons, Feather, or any other
  library** — a generic stroke icon next to these reads instantly as wrong.
- The service icons map 1:1 to the service list; the circled `person` / `phone` / `mail` trio is the
  contact set, taken from the flyer's contact bar.
- No icon font, no SVG sprite, no emoji, no Unicode glyphs used as icons.
- Icons ship pre-coloured green. `tone="dark"` for placement on a green fill; `chrome`/`muted` are
  available but rarely correct.
- If a genuinely new concept needs an icon, ask the client for artwork in this style rather than
  drawing one — and note the gap instead of shipping a mismatched substitute.

The **Zia sun symbol** appears in both flyers but sits on a painted sky gradient, so it could not be
cleanly isolated as a standalone transparent asset. It is present inside `brand-card.png` and
`hero-desert-scene.png`. Request a transparent PNG/SVG of the Zia mark from the client if it is
wanted as a standalone motif.

---

## Caveats & open items

1. **Fonts are substitutions.** No font files were supplied. Anton is the closest Google Fonts match
   to the flyer's heavy condensed all-caps setting; DM Sans covers body. If Robert's designer has the
   original files, send them and the tokens will be repointed.
2. **Icons are raster, not vector.** They were cropped from a JPG, so they carry slight edge
   softness at large sizes. Ask the client's logo designer for the original vector artwork.
3. **No photography.** Every image slot currently uses logo-derived desert artwork.
4. **Service-area town list** in the UI kit is illustrative of "Albuquerque and the surrounding
   area" — confirm before publishing.
5. **No semantic colour set** (success/warning/error) is defined; the site has no account states or
   validation UI beyond required fields. Add one only if a portal or booking flow appears.
