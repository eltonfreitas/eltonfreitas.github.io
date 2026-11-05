---
name: Elton Freitas
description: A scholar's home page set on his own night-blue lecture board, marked by hand in yellow.
colors:
  night-ground: "#0b0e18"
  board-card: "#1c2336"
  hairline: "#262e45"
  chalk: "#f6f6f2"
  chalk-muted: "#c4cad9"
  marker-yellow: "#ffce3a"
  figure-paper: "#ffffff"
  print-ink-muted: "#4a5168"
  print-rule: "#d9dce6"
  print-ochre: "#8a6a00"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 4.5rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  number:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "3rem"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontFeature: "tnum"
  headline:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "clamp(2rem, 4vw, 2.75rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.03em"
  statement:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 2.1vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.45
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 900
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    fontFeature: "\"cv11\", \"ss01\""
  meta:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
  hand-note:
    fontFamily: "Caveat, Bradley Hand, cursive"
    fontSize: "1.6rem"
    fontWeight: 700
    lineHeight: 1
rounded:
  focus: "2px"
  inset: "0.4rem"
  frame: "0.75rem"
  mark: "0.9rem"
  pill: "999px"
spacing:
  gutter: "1.5rem"
  gutter-narrow: "1rem"
  section: "4.5rem"
  measure: "44rem"
  list-measure: "52rem"
  wide: "72rem"
components:
  button-cv:
    backgroundColor: "transparent"
    textColor: "{colors.marker-yellow}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1.1rem"
  button-cv-hover:
    backgroundColor: "{colors.marker-yellow}"
    textColor: "{colors.night-ground}"
  project-card:
    backgroundColor: "{colors.board-card}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.frame}"
    padding: "1.25rem 1.4rem 1.35rem"
  figure-panel:
    backgroundColor: "{colors.figure-paper}"
    rounded: "{rounded.frame}"
    padding: "1rem"
  nav-link:
    textColor: "{colors.chalk-muted}"
    typography: "{typography.label}"
    padding: "0.4rem 0"
  nav-link-current:
    textColor: "{colors.chalk}"
  masthead:
    backgroundColor: "{colors.night-ground}"
    height: "3.75rem"
  skip-link:
    backgroundColor: "{colors.marker-yellow}"
    textColor: "{colors.night-ground}"
    padding: "0.45rem 0.8rem"
---

# Design System: Elton Freitas

## Overview

**Creative North Star: "The Night Board, Marked by Hand"**

The page is the board Elton lectures and posts from: a night-blue ground, near-white chalk text, and one yellow marker he picks up only to point at what matters. Everything typographic is Inter; the hierarchy is carried by weight (Black for titles and numbers, SemiBold for emphasis, Regular for reading) rather than by size jumps or colour. The content structure stays academic (research axes, a reversed bibliography, awards by year), and the look is his own working style, not a brand: there is no logo, monogram or seal.

The hand is the signature and it is rationed. On a screen there is at most one circle (around the citation count), one underline (under a key phrase) and one Caveat note (beside the figure), each drawn once as it comes into view. Photos and figures sit in frames with rounded corners and two yellow corner marks, in natural colour. Density is calm: generous section spacing, reading measure capped at 44rem, lists capped at 52rem.

**Key Characteristics:**
- Dark ground (night-ground) with near-white chalk text and one muted secondary tone.
- One accent, marker yellow, used as ink for marks and interaction, never as a fill for surfaces.
- Inter in three weights (400, 600, 900); Caveat 700 only for a two-to-five-word note.
- Hand-drawn yellow stroke, one of each kind per screen, drawn once, reduced-motion aware.
- Framed images: rounded corners, two yellow corner marks, natural colour.
- Flat: depth comes from tone (card on ground) and hairlines, not shadows.

## Colors

A near-monochrome night palette with a single warm marker.

### Primary
- **Marker Yellow** (marker-yellow): the only accent, about 13:1 on the ground. It appears as the hand-drawn circle and underline, the Caveat note, the outline of the CV pill (filled on hover), link underlines (at 55% opacity at rest, full on hover), link hover text, the 2px current-section bar in the header, the focus outline, text selection, the skip link, and the frame corner marks.

### Neutral
- **Night Ground** (night-ground): the page, the header (at 94% opacity) and the favicon tile. Also `theme-color`.
- **Board Card** (board-card): the only raised tone, used for project cards.
- **Hairline** (hairline): 1px rules between bibliography and award rows, under the header and opening, above the footer, and the language-switch divider.
- **Chalk** (chalk): headings, body text, link text, numbers, the author's own name in author lists.
- **Chalk Muted** (chalk-muted): about 11.6:1 on the ground. All metadata: positions, years, journal lines, citation counts, figure captions, metric labels, axis definition terms, addresses, footer, inactive nav links.
- **Figure Paper** (figure-paper): white panel behind light-ground research figures only, so the figure keeps its own ground.

### Print
- **Print Ink Muted** (print-ink-muted), **Print Rule** (print-rule), **Print Ochre** (print-ochre): the paper variant. In `@media print` the site remaps its own tokens (ground and card to white, text to night-ground ink, chalk-muted to print-ink-muted, hairline to print-rule, marker-yellow to print-ochre so strokes and marks stay legible on white). The printed CV uses the same ink pair and keeps true marker-yellow only as the 2.2pt rule under each section heading.

### Named Rules
**The One Marker Rule.** Yellow is ink, not paint. It marks (strokes, note, corner marks, link underlines, the current-section bar), signals interaction (hover, focus, selection, the CV pill) and nothing else. It never fills a surface at rest and never colours metadata: years, journals, citation counts, labels and captions stay chalk-muted.

**The Tone Not Hue Rule.** Hierarchy between primary and secondary text is chalk versus chalk-muted plus weight. No second hue is introduced for categories or states.

## Typography

**Display Font:** Inter (with -apple-system, Segoe UI, Roboto, Arial)
**Body Font:** Inter, with `cv11` and `ss01` features on
**Hand Font:** Caveat 700 (with Bradley Hand, cursive)

**Character:** One sans family doing everything by weight, like a slide deck set in a single face; Black is the voice, Regular the explanation. Caveat is the presenter's handwriting in the margin, never a typeface for content.

### Hierarchy
- **Display** (900, clamp 2.75 to 4.5rem, 0.95, -0.035em): the name in the opening, once.
- **Number** (900, 3rem, 1, -0.03em, tabular): the citation count; h-index and i10 inline at 900, 1.125rem.
- **Headline** (900, clamp 2 to 2.75rem, 1, -0.03em): section titles.
- **Statement** (600, clamp 1.25 to 1.5rem, 1.45, max 38rem): the research statement under the name.
- **Title** (900, 1.375rem, 1.2): axis titles; place names in contact at 1.0625rem. Project names and bibliography years also use 900 at 1.0625 to 1.125rem.
- **Body** (400, 1.0625rem, 1.65; 1rem under 30rem): reading text, measure 44rem; lead paragraph 1.1875rem. Paper titles 600.
- **Meta** (400, 0.9375rem, 1.55): author lists, details, captions, positions; in chalk-muted.
- **Label** (600, 0.8125 to 0.875rem): nav links, metric labels, citation counts, definition terms. Sentence case, no tracking, no uppercase.
- **Hand note** (Caveat 700, 1.6rem, rotated -2deg): two to five words, yellow.

### Named Rules
**The Weight Ladder Rule.** Three Inter weights only: 400, 600, 900. Emphasis inside metadata (his own name, a role) climbs one rung to chalk 600, it does not change colour to yellow.

**The Margin Hand Rule.** Caveat is reserved for one short note per screen, positioned like an annotation beside a figure, decorative and `aria-hidden`. Never a heading, label or link.

## Layout

A single centred column, max 72rem with 1.5rem gutters (1rem under 30rem). The opening is a two-column grid: text left, a 19rem framed portrait right, gap clamp(2rem, 6vw, 5rem). Sections are separated by space (4.5rem top) rather than boxes; reading text caps at 44rem, bibliography, awards and the figure at 52rem. Research axes and project cards sit in two equal columns. Bibliography and awards rows are a 4.5rem year column plus content, divided by hairlines. Contact mirrors the opening: email and two addresses left, a 20rem framed portrait right; the section is at least a viewport tall so the header link lands on it.

Breakpoints, desktop first:
- **60rem:** axes and project cards collapse to one column.
- **48rem:** opening and contact collapse to one column; the portrait moves above the name at 10rem wide (contact photo 14rem); the header wraps so section links run on their own full-width row at 0.75rem, spaced between; the language divider drops; scroll padding grows to 7rem.
- **30rem:** body text drops to 1rem; year columns stack above their entries; the figure panel padding and note shrink.

The header is sticky, 3.75rem tall, and anchors use smooth scrolling (auto under reduced motion) with scroll padding that clears it.

## Elevation & Depth

Flat. There are no drop shadows anywhere. Depth is tonal: the board-card tone lifts project cards off the ground, the white figure panel sits as a sheet pinned to the board, and hairlines divide lists. The sticky header separates by a hairline and a 94% ground fill, without blur. The portrait's lower quarter fades into the ground through a mask instead of ending at an edge.

### Named Rules
**The Chalkboard Is Flat Rule.** Nothing casts a shadow. The one `box-shadow` in the system is the inset 2px yellow bar under the current nav link, which is a mark, not elevation.

## Shapes

Soft rectangles. Images, the figure panel and project cards share a 0.75rem radius; images inside the figure panel use 0.4rem. The frame's corner marks are 2.25rem L-shapes of 3px yellow, offset 0.6rem outside the top-left and bottom-right corners, each rounded at 0.9rem so the mark follows the photo's curve. The CV link is the only pill (999px). Hand strokes are open, round-capped, round-joined paths at 3px with non-scaling stroke, so they stay the same weight at any size.

## Components

### Buttons
- **CV pill:** the single button-like element. 2px marker-yellow outline, yellow text, pill radius, 0.5rem by 1.1rem, Inter 600. Hover fills yellow with night-ground text.
- **Skip link:** yellow block with ground text, hidden above the viewport until focused.

### Links
- Chalk text with a 2px underline in marker yellow at 55% opacity, offset 0.22em. Hover turns text and underline full yellow (0.15s). Links inside muted metadata (metrics, footer) keep chalk-muted text with the same underline.
- **Focus:** every focusable element gets a 2px solid yellow outline, 3px offset, 2px radius. Selection is yellow with ground text.

### Cards / Containers
- **Project card:** board-card fill, 0.75rem radius, no border, no shadow, padding 1.25rem by 1.4rem. Name in 900 chalk, role line in 600 chalk at 0.875rem, detail in chalk-muted meta. In print the fill goes white and a hairline border appears.
- **Figure panel:** white paper panel, 0.75rem radius, 1rem padding, carries the frame corner marks and the Caveat note pinned above its top-right edge; caption below in chalk-muted with a chalk 900 "Figure N." lead.

### Lists
- **Bibliography:** reversed ordered list, no markers. Year column in 900 chalk-muted tabular; paper title 600 linked to the DOI; author line in chalk-muted with his own name in chalk 600; "Cited by N" label in 600 chalk-muted, filled from live data and hidden at zero.
- **Awards:** same year-column grid with tighter rows; award name 600, placing in 900 chalk, detail in chalk-muted below. Every award listed, newest first.
- **Research axes:** two-column articles: 900 title, a plain-language question, then a definition list whose terms are 600 chalk-muted labels.

### Navigation
- Sticky masthead: name in 900 at 1.125rem left, section links in 600 0.875rem chalk-muted, language switch after a hairline divider. Hover turns yellow. The section in view gets `aria-current` (set by IntersectionObserver), shown as chalk text with an inset 2px yellow bar beneath; the opening clears it. The language switch carries the current anchor across.

### Hand-drawn stroke (signature)
- **Circle:** an inline SVG ellipse drawn around one number (the citation count), overflowing it by 0.85em sideways and 0.5em vertically, 3px yellow.
- **Underline:** a yellow SVG stroke set as a background image with `box-decoration-break: clone`, so it repeats under every line a wrapped phrase occupies.
- **Note:** Caveat 700 yellow, 1.6rem, rotated -2deg, `aria-hidden`.
- **Motion:** circle and underline start undrawn and draw left to right once when 60% in view (0.9s, cubic-bezier(0.22, 1, 0.36, 1), 0.3s delay). Only with JS and `prefers-reduced-motion: no-preference`; otherwise they render complete.

### Framed image (signature)
- Rounded 0.75rem image with two yellow corner marks (top-left, bottom-right). On the opening portrait the bottom 26% fades into the ground, so the lower mark is raised to sit on the photo (18% from the bottom). Portraits crop to 4:5. Natural colour, no filters or tints.

### Contact
- The email address set at 900, clamp 1.35 to 2.25rem, carrying the hand underline; two addresses beneath in chalk-muted with chalk place names.

## Do's and Don'ts

### Do:
- **Do** keep the ground night-ground and the text chalk; use chalk-muted for every piece of metadata.
- **Do** use marker yellow only for strokes, the hand note, the CV pill, link underlines and hovers, the current-section bar, focus, selection, and frame corner marks.
- **Do** carry hierarchy with Inter weight (400, 600, 900) before size or colour.
- **Do** limit the hand to one circle, one underline and one Caveat note per screen, drawn once on view and shown complete under reduced motion.
- **Do** frame photos and figures with the 0.75rem radius and the two yellow corner marks, in natural colour; put light figures on the white panel.
- **Do** remap tokens for print (yellow to print-ochre, ground to white) rather than writing separate print colours.

### Don't:
- **Don't** colour years, journal names, citation counts, labels or captions yellow.
- **Don't** fill surfaces with yellow at rest or introduce a second accent hue.
- **Don't** use Caveat for headings, labels, links or anything longer than five words.
- **Don't** add drop shadows; depth is the card tone and hairlines.
- **Don't** add a logo, monogram or seal; this is a working style, not a brand.
- **Don't** tint, duotone or desaturate photos.
- **Don't** set labels in uppercase or tracked small caps above headings.
