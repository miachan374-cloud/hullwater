# Design rules

These rules apply to any visual work you build for me: websites, interfaces, slides, and graphics. They filter out the defaults that make work look machine-made. They don't supply a direction. The direction comes from my brand guidelines, design tokens, Figma frames, and references, which are the source of truth. Where this file and those materials disagree, the materials win.

Brand guidelines: [file or link]
Design tokens: [file]
Figma file or reference frames: [link or folder]
References, and what to take from each: [site or screenshot: what to take, such as type energy, spacing, or motion]

## Principles

- Every visual decision needs a reason I could state in one line. If the only reason is that it looks finished or modern, remove it or ask me.
- Cohesion matters more than polish in any one part. Hold one palette, one type voice, and one signature element that the rest of the page supports.
- Take direction from references and never copy their content. A reference supplies mood, type energy, spacing, and motion. It doesn't supply headlines, layouts, or components to reproduce.
- Spend boldness in one place: [name the one distinctive element]. Keep everything around it quiet. Before calling a page done, remove one thing.
- The swap test: if the logo and name were replaced with a competitor's, the design should no longer fit. If it would still fit, it isn't specific enough.

## Before building

- If there's no brand direction for something you're about to decide (a color, a font, a section, an image, a number), ask me. Don't fill it with a default.
- Don't create logos, icons, avatars, photographs of people, testimonials, or statistics without my material. Use a clearly marked placeholder such as [LOGO] or [REAL DATA] until I provide it.
- Build and show me the first screen alone before building the rest.

## Tokens

- Every color, font, radius, and spacing value comes from the tokens in [file]. Never hardcode a hex value or a font name anywhere else.
- Palette: [background, text, accent, and any secondary colors, with hex values]
- Type: [display face, body face, sizes, and the reason for each]
- Radius: [values, and where each is used]

## Color and accent

- Use the accent at most twice per screen, for example on one group of links and one primary action. Links, focus rings, and hover states count toward the limit. Photographs don't.
- Limit the palette to two or three core colors plus one accent. Neutrals don't count.

## Contrast

- Body text: at least 4.5:1 against its background.
- Large text and interface components: at least 3:1.
- Text over an image needs a gradient, a solid backing, or a dark region of the image, and it must pass against the worst image the page can show.

## Defaults to avoid

These are tells only when they appear by default. If one of them is a deliberate brand decision, list it under "Approved for this project" with the reason. A ban by itself moves the model to the next default, so take the replacement for each one from my materials, and ask me if they don't supply it.

Color and light
- Purple, indigo, or violet as a primary or accent color; two-color gradients as decoration (especially blue to purple); gradient text.
- Glows, halos, blurred blobs, and aurora backgrounds; glowing buttons and borders.
- Dark mode chosen because it looks technical.

Type
- Inter or Geist for everything; Space Grotesk as the default for personality.
- A display serif (Instrument Serif, Fraunces, Playfair) chosen to look tasteful, with no reason in the brand.
- One word of the headline in italic serif or in the accent color.
- Small uppercase, letter-spaced labels above every heading; monospace labels as decoration.
- Two display faces competing; cramped display type with no space around it.

Shape and surface
- Pill-shaped buttons, tags, and inputs; the same large radius on every element.
- The same soft shadow under every element; cards that lift and glow on hover.
- Glassmorphism on more than one element.
- Icons inside filled rounded tiles; emoji, sparkles, lightning, or robots as icons; a uniform thin-stroke icon pack.
- Thick colored borders on the left edge of cards.
- Decorative grid, dot, or graph-paper backgrounds.
- Component-library defaults (shadcn/ui, Radix) used as the finished look without restyling.

Layout
- A centered hero with a headline, a subheading, two buttons, and a pill badge above the headline.
- Three or six identical feature cards.
- Numbered 1-2-3 steps, stat banners, a "Trusted by" logo row, a generic FAQ, and a four-column footer, unless the content calls for them.
- The template order: hero, features, steps, testimonials, pricing, FAQ, call to action.
- Every section built the same way; the only variation an alternating background.
- Broadsheet hairlines and 01 / 02 / 03 section numbers on a product that isn't a publication.
- Text touching the edge of its container; elements nearly but not exactly aligned or centered.

Second-wave defaults
- A cream or off-white background with a serif headline and a terracotta, sage, or forest-green accent.
- A near-black page with one acid-green, gold, or vermilion accent.
- Ticker bars or news-crawl strips of text on a site with nothing live to report.
- Dashboard panels built from several nested rounded outlines, with or without a glow underneath.
- Desaturated, slightly off primary colors borrowed from mid-century modernism.

Motion
- Content hidden behind an entrance animation. Animate position, never opacity from zero, on anything the reader needs.
- Floating or bobbing decorations; buttons that jump on hover.
- Every element fading up as it scrolls into view.

Content
- Placeholder text, "Feature one / two / three," or lorem ipsum.
- Invented statistics, testimonials, logos, ratings, or security and compliance claims.
- Fake dashboards or terminal windows filled with invented numbers.
- Generic calls to action: Get started, Learn more, Explore, Discover. Name the action.
- Navigation links to pages or sections that don't exist; buttons that do nothing.
- An arrow on every button.

## The opposite failure

Removing defaults without adding direction produces a sterile page: flat white, thin grey borders, a generic font, and no identity. If you can't find a direction in my materials, stop and ask me. Don't fall back to a neutral default.

## Approved for this project

- Shippori Mincho and EB Garamond, both serifs, for the type. The owner chose them: Shippori Mincho is a Japanese typeface, which ties to the hojicha from Uji.
- Space Mono, a monospace font, for the scrolling banner. The owner chose it.
- The ingredients grow slightly on hover. The owner chose it. They aren't buttons, and the growth is small.
- A scrolling banner across the top, even though nothing on the site is live. The owner chose it after seeing one on jonpilkington.co.uk. It pauses on hover, stays still for reduced motion, and its "here" link goes to the waitlist form, not nowhere.

## Before calling a screen done

1. Count the accent uses. If there are more than two, remove one.
2. Check text-over-image contrast against the worst image, not the best.
3. Look for anything nearly but not exactly aligned or centered.
4. Confirm nothing is invisible when animation is turned off.
5. Confirm every number, name, quote, and logo is real or marked as a placeholder.
6. Run the swap test.
7. Remove one thing.
