---
name: Sahelian Elegance
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#44474d'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#75777e'
  outline-variant: '#c5c6ce'
  surface-tint: '#4e5f7e'
  primary: '#031632'
  on-primary: '#ffffff'
  primary-container: '#1a2b48'
  on-primary-container: '#8293b5'
  inverse-primary: '#b6c7eb'
  secondary: '#705b3e'
  on-secondary: '#ffffff'
  secondary-container: '#fbdeb9'
  on-secondary-container: '#766143'
  tertiary: '#171714'
  on-tertiary: '#ffffff'
  tertiary-container: '#2b2b28'
  on-tertiary-container: '#93928e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#b6c7eb'
  on-primary-fixed: '#081b38'
  on-primary-fixed-variant: '#374765'
  secondary-fixed: '#fbdeb9'
  secondary-fixed-dim: '#dec29f'
  on-secondary-fixed: '#271903'
  on-secondary-fixed-variant: '#564428'
  tertiary-fixed: '#e5e2dd'
  tertiary-fixed-dim: '#c9c6c2'
  on-tertiary-fixed: '#1c1c19'
  on-tertiary-fixed-variant: '#474743'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style
The design system embodies a "Contemporary Heritage" aesthetic, blending the refined luxury of high-end hospitality with the warmth and earthiness of West African landscapes. The brand personality is poised, welcoming, and culturally resonant, prioritizing a sense of "Teranga" (hospitality) through digital interfaces.

The visual style is a hybrid of **Minimalism** and **Tactile Modernism**. It leverages expansive whitespace to denote luxury, paired with subtle textures and organic curves that reference traditional craftsmanship. The UI must evoke an emotional response of tranquility and exclusivity, ensuring that every interaction feels intentional and premium.

## Colors
The palette is rooted in the "Golden Hour" of the Sahel. 
- **Midnight Blue (#1A2B48):** Represents the deep Atlantic and the evening sky, used for primary actions, deep backgrounds in the admin dashboard, and high-contrast typography.
- **Warm Sand (#D4B996):** An accent inspired by light wood and savannah landscapes, used for subtle highlights, active states, and borders.
- **Off-White/Beige (#F5F2ED):** The foundational surface color for client interfaces, providing a warmer, more sophisticated alternative to pure white.
- **Deep Slate (#4A4A4A):** Used for body text to maintain readability while avoiding the harshness of pure black.

For the **Admin Dashboard**, the palette inverts to a dark-mode theme using `#0F172A` as the base surface, maintaining the Midnight Blue and Warm Sand accents for continuity.

## Typography
The typographic scale creates a clear hierarchy between editorial expression and functional utility. 
- **Headlines:** Use *Playfair Display* to convey authority and elegance. Large display titles should use tighter letter spacing for a modern, high-fashion look.
- **Body & UI:** *Inter* provides exceptional legibility across client web, mobile, and data-dense admin screens. 
- **Language Support:** Ensure all fonts support French diacritics (é, à, ç, etc.) common in Senegalese and Ivorian contexts.
- **Labels:** Use uppercase *Inter* with increased letter spacing for small metadata, buttons, and navigation items to maintain a sophisticated feel.

## Layout & Spacing
The layout philosophy follows a **Fixed Grid** for desktop and a **Fluid Grid** for mobile.
- **Desktop:** A 12-column grid with a 1280px max-width. Use generous 64px margins to frame the content like a luxury magazine.
- **Mobile:** A 4-column fluid grid. Gutters are reduced to 16px to maximize screen real estate while maintaining a 20px outer margin "safe zone."
- **Spacing Rhythm:** Based on an 8px base unit. Section vertical spacing should be aggressive (e.g., 80px, 120px, or 160px) to reinforce the premium sense of space.
- **Admin Dashboard:** Uses a flexible sidebar layout with a collapsed state to prioritize data visualization and management tools.

## Elevation & Depth
This design system uses **Tonal Layers** supplemented by **Ambient Shadows**. 
- **Surfaces:** Use subtle shifts in background color (e.g., from Off-White to a slightly darker Beige) to define areas without relying on heavy lines.
- **Shadows:** Shadows must be extremely soft and diffused. Use a large blur radius (24px-48px) with very low opacity (5-10%) and a slight Midnight Blue tint to prevent them from looking "dirty."
- **Admin Specifics:** In the dark-mode dashboard, use inner borders (1px) with 10% opacity white to create "rim lighting" on cards, giving them a physical presence against the dark background.

## Shapes
The shape language is **Rounded**, avoiding both the severity of sharp corners and the playfulness of full pills. 
- **Standard UI (Buttons, Inputs):** Use 0.5rem (8px) for a balanced, modern feel.
- **Cards & Containers:** Use `rounded-lg` (16px) or `rounded-xl` (24px) for large content blocks like room previews or image galleries to soften the visual weight.
- **Interactive Elements:** Buttons should maintain a consistent 8px radius to feel architectural yet approachable.

## Components
- **Buttons:** Primary buttons use a Midnight Blue fill with white text. Secondary buttons use a Warm Sand border with Midnight Blue text. High-end "Ghost" buttons for navigation should use only text with a subtle underline on hover.
- **Inputs:** Fields should have a 1px border in a muted Sand color. Focus states use a 2px Midnight Blue border. Labels are always positioned above the field in `label-sm` style.
- **Cards:** For hotel rooms, cards should feature a full-width image with a generous 24px padding for text content below. Use a "Soft Shadow" on hover to indicate interactivity.
- **Chips/Badges:** Used for "Available," "Suite," or "Special Offer." These should be low-contrast (e.g., Warm Sand background with 20% opacity) to remain secondary to the main imagery.
- **Booking Bar:** A persistent, floating component at the bottom of mobile or top of desktop, using a slight backdrop blur (Glassmorphism) to feel integrated with the photography.
- **Admin Tables:** High-density but clean. Use 1px horizontal dividers only, avoiding vertical grid lines to maintain a modern, airy feel.