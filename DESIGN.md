---
name: Raíces Personalizaciones
description: Catálogo digital de productos personalizados — sublimación, impresión 3D, DTF y bordado
colors:
  brand-dark: "#080C10"
  brand-surface: "#111722"
  brand-card: "#161F2E"
  brand-yellow: "#FACC15"
  brand-yellow-hover: "#EAB308"
  brand-cyan: "#0EA5E9"
  brand-pink: "#EC4899"
  brand-whatsapp: "#25D366"
  surface-light: "#F5F6F7"
  surface-elevated: "#F6F5F2"
  border-dark: "#1E293B"
  border-light: "#E2E8F0"
  text-primary-dark: "#F1F5F9"
  text-muted-dark: "#94A3B8"
  text-primary-light: "#0F172A"
  text-muted-light: "#64748B"
typography:
  display:
    fontFamily: "'Permanent Marker', cursive, sans-serif"
    fontSize: "clamp(1.5rem, 4vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1
  script:
    fontFamily: "'Caveat', cursive, sans-serif"
    fontSize: "clamp(1.25rem, 3vw, 2rem)"
    fontWeight: 400
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.5rem, 5vw, 3.5rem)"
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  body:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.16em"
    textTransform: "uppercase"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  2xl: "32px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  section: "56px"
components:
  button-primary:
    backgroundColor: "{colors.brand-yellow}"
    textColor: "black"
    rounded: "{rounded.md}"
    padding: "14px 32px"
    size: "text-sm font-black uppercase tracking-wide"
  button-primary-hover:
    backgroundColor: "{colors.brand-yellow-hover}"
  chip-badge:
    backgroundColor: "rgba(250, 204, 21, 0.1)"
    textColor: "{colors.brand-yellow}"
    rounded: "9999px"
    padding: "6px 12px"
  card-surface:
    backgroundColor: "{colors.brand-card}"
    textColor: "{colors.text-primary-dark}"
    rounded: "{rounded.lg}"
    padding: "24px"
  announcement-bar:
    backgroundColor: "linear-gradient(to right, #0EA5E9, #EC4899, #FACC15)"
    textColor: "black"
    padding: "6px 0"
---

# Design System: Raíces Personalizaciones

## Overview

**Creative North Star: "The Maker's Workshop"**

Raíces Personalizaciones speaks the language of craft and purpose. Every surface feels like stepping into a well-organized atelier — where materials are chosen intentionally, tools are at hand, and each piece carries meaning. The visual identity balances raw energy (bold gradients, punchy typography) with considered sophistication (clean grids, precise spacing, restrained color application).

The system is dark-first. Deep charcoal grounds give the vibrant accent colors room to breathe and communicate energy. Light mode offers a clean, professional alternative for formal contexts without losing the brand's warmth.

**Key Characteristics:**
- Bold, uppercase display typography for impact
- Vibrant gradient accents (cyan → pink → yellow) for key moments
- Dark surfaces with layered elevation (tonal, not shadow-heavy)
- Script fonts as personality markers, not primary type
- Generous spacing that lets content breathe
- Purposeful asymmetry in hero layouts

## Colors

The palette centers on deep, neutral grounds that make the three accent colors sing. No color competes for dominance — each has a clear role.

### Primary

- **Brand Yellow** (#FACC15): The hero accent. Used for primary CTAs, key highlights, price emphasis, and the "imprime" in the tagline. Always paired with black text for maximum contrast and punch. Represents energy, creativity, and the finish line of a project.

- **Brand Cyan** (#0EA5E9): Secondary accent. Used for trust signals, technical information, and secondary CTAs. Appears in gradient starts and hover states. Represents precision and modern craft.

- **Brand Pink** (#EC4899): Tertiary accent. Used for personality touches, hover states, and emotional emphasis. Appears in gradient transitions and decorative elements. Represents personal expression and craft.

### Neutral

- **Brand Dark** (#080C10): The deepest ground. Used for the main page background in dark mode. Nearly black with a slight blue warmth.
- **Brand Surface** (#111722): Card and panel background. Creates clear separation from the page ground.
- **Brand Card** (#161F2E): Elevated surface for interactive elements and forms.
- **Slate Cool Gray** (#94A3B8): Muted text in dark mode — secondary information, captions, labels.
- **Warm White** (#F5F6F7): Light mode page background. Clean but not sterile.
- **Border Dark** (#1E293B): Divider lines and borders in dark mode. Subtle, never harsh.
- **Border Light** (#E2E8F0): Divider lines and borders in light mode.

### Named Rules

**The Yellow Rule.** Brand Yellow appears on ≤15% of any given screen. Its rarity creates impact — every yellow element earns attention. When multiple CTAs exist, only the primary action gets yellow; secondary actions use outlined or tonal treatment.

**The Gradient Gradient Rule.** The cyan → pink → yellow gradient appears only in announcement bars and hero decorative elements. It signals "energy in motion" and should never be used as a background for readable text or as a button fill.

## Typography

**Display Font:** Permanent Marker (with cursive fallback)
**Script Accent:** Caveat (with cursive fallback)
**Body Font:** System UI stack

**Character:** Heavy, architectural display type dominates headlines and CTAs — this is a brand that speaks loudly and clearly. Personality enters through script accents used sparingly: a single word in a section header, the brand name's modifier, decorative labels. The contrast between blocky authority and handwritten warmth mirrors the brand philosophy: professional craft with personal meaning.

### Hierarchy

- **Display** (900, clamp(2rem, 6vw, 4rem), 0.98): Hero headlines on product detail pages. All caps. Tight tracking. Maximum visual weight.
- **Heading** (900, clamp(1.5rem, 4vw, 2.5rem), 1.1): Section titles, product category headers.
- **Title** (800, 1.25rem–1.5rem, 1.2): Card titles, form labels, price elements.
- **Body** (400, 1rem, 1.6): Primary text. Max 65ch for readability.
- **Label** (700, 0.75rem, 1.4, 0.16em tracking, uppercase): Navigation, chips, badges, technical specs.

### Named Rules

**The Script Rule.** Permanent Marker and Caveat appear on ≤3 elements per screen. They are signature moments, not working type. The brand name "Raíces Personalizaciones" is the only place both script fonts coexist.

## Layout

The layout uses an 8px baseline grid throughout. Container max-width is 7xl (80rem / 1280px) centered with responsive padding (px-4 to lg:px-8).

**Grid System:** Responsive two-column layouts dominate product pages (left: copy + details, right: visual). Single-column stacks for mobile. Section padding follows a rhythm of py-12 → py-14 → py-20 → py-24 for vertical breathing room.

**Spacing Philosophy:** Generous vertical rhythm. Components breathe. Whitespace is used strategically to create focus — dense information areas are balanced by generous empty space around CTAs and key visuals.

## Elevation & Depth

**Flat with glow.** The system avoids heavy shadows in favor of tonal layering (surface colors 3-5% lighter than their container) and colored glow effects for interactive states.

### Glow Vocabulary
- **Glow Yellow** (`0 0 25px -4px rgba(250, 204, 21, 0.45)`): Used on primary button hover and active states.
- **Glow Cyan** (`0 0 25px -4px rgba(14, 165, 233, 0.4)`): Hover states for cyan-accented elements.
- **Glow Pink** (`0 0 25px -4px rgba(236, 72, 153, 0.45)`): Hover states for pink-accented elements.

### Named Rules

**The Glow Rule.** Colored glows appear only on hover/focus states, never at rest. They signal interactivity and delight, not decoration. A static glow reads as visual noise.

## Shapes

**Rounded authority.** Primary corner radius is md (12px) for cards and buttons. Stronger elements use xl (24px) for image containers and panel frames. Maximum rounding (2xl = 32px) reserved for pills, badges, and avatar elements.

**Asymmetric hero framing.** Product hero sections often use rotated or offset decorative frames (rotated containers with subtle borders) to create dynamic, editorial-style layouts without relying on photography alone.

## Components

### Buttons
- **Shape:** md radius (12px) for primary actions; rounded-full for chip/pill buttons
- **Primary:** Yellow fill (#FACC15), black text, uppercase tracking-wide, font-black
- **Secondary:** Outlined with colored border (cyan/pink/emerald), transparent fill
- **Hover:** Slight upward translation (-translate-y-0.5) + glow + background darkening
- **Active:** Maintain upward translation, increase glow intensity

### Cards
- **Shape:** lg radius (16px) for product cards; xl (24px) for feature panels
- **Dark mode:** brand-card (#161F2E) background with subtle border (border-gray-800)
- **Light mode:** White background with border (border-gray-200)
- **Hover:** translateY(-1) + border color shift to brand accent

### Badges & Chips
- **Shape:** Full rounding (pill) or badge-brush (clip-path polygon for hand-drawn feel)
- **Background:** Low-opacity accent color (bg-yellow-400/10, bg-cyan-400/10, bg-pink-500/10)
- **Border:** Semi-transparent colored border
- **Text:** Corresponding accent color at high opacity

### Announcement Bar
- **Gradient:** cyan → pink → yellow (linear, horizontal)
- **Height:** 36px (py-1.5)
- **Text:** Uppercase, tracking-wider, black
- **Role:** Top-of-page context (shipping info, promos)

### Navigation
- **Sticky position** with backdrop-blur
- **Dark mode:** Semi-transparent dark surface with subtle border
- **Light mode:** White surface with shadow-sm
- **Active state:** Yellow underline or highlight on current section

### Cart Drawer
- **Slide-over** from right edge
- **Surface:** Matches page mode (dark/light)
- **Empty state:** Centered icon + message with rounded-3xl container
- **Item cards:** Rounded-2xl with subtle border, image thumbnail on left

## Do's and Don'ts

### Do:
- **Do** let yellow carry the primary action. It's the brand's most energetic color and should guide the eye to conversion points.
- **Do** use tonal layering (surface colors) for depth rather than heavy drop shadows.
- **Do** keep script fonts to 2-3 elements per screen maximum — they're personality markers.
- **Do** maintain the dark-first default; light mode is a toggle, not the primary experience.
- **Do** pair bold, uppercase headings with generous breathing room around them.

### Don't:
- **Don't** use the cyan→pink→yellow gradient as a text background or button fill. It's a decorative energy band, not a reading surface.
- **Don't** apply colored glows to elements at rest. Glows signal interaction.
- **Don't** mix Permanent Marker and Caveat in the same visual area. Let one script own a moment.
- **Don't** use more than one accent color per component group. A card might highlight cyan OR pink, not both.
- **Don't** set body text smaller than 0.875rem. Readability on mobile is non-negotiable.
