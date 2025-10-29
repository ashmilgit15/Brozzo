# Accessibility Documentation

This document outlines the accessibility features implemented in the Brozzo showcase site and provides guidance for maintaining WCAG 2.1 AA compliance.

---

## 🎯 Accessibility Goals

- **WCAG 2.1 Level AA** compliance
- **Keyboard navigation** for all interactive elements
- **Screen reader** compatibility
- **Reduced motion** support
- **High color contrast** for readability
- **Semantic HTML** structure

---

## ✅ Implemented Features

### 1. Semantic HTML Structure

All pages use proper semantic HTML5 elements:

```html
<header>   <!-- Site header -->
<nav>      <!-- Navigation menus -->
<main>     <!-- Main content area -->
<section>  <!-- Content sections -->
<article>  <!-- Self-contained content -->
<footer>   <!-- Site footer -->
```

**Benefits**:
- Screen readers can understand page structure
- Improves SEO
- Easier to navigate with assistive technology

---

### 2. Skip Navigation Link

A "Skip to main content" link appears when users press Tab:

```jsx
<a href="#main-content" className="sr-only focus:not-sr-only ...">
  Skip to main content
</a>
```

**How it works**:
- Hidden by default (screen reader only)
- Becomes visible when focused (keyboard navigation)
- Jumps user past header directly to main content
- Improves efficiency for keyboard and screen reader users

---

### 3. Keyboard Navigation

All interactive elements are keyboard accessible:

| Element Type | Keyboard Controls |
|--------------|-------------------|
| Links        | Tab to focus, Enter to activate |
| Buttons      | Tab to focus, Enter or Space to activate |
| Image toggles | Tab to focus, Enter or Space to cycle images |
| Carousel     | Tab to focus buttons, Enter to scroll |

**Implementation example** (Gallery product cards):

```jsx
<div
  onClick={handleToggleImage}
  onKeyPress={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleToggleImage()
    }
  }}
  role="button"
  tabIndex={0}
  aria-label={`${product.name}. Click or press Enter to view alternate image.`}
>
```

---

### 4. ARIA Attributes

Appropriate ARIA labels and roles are used throughout:

#### Hero Section
```jsx
<button
  aria-label="Scroll to collection gallery"
  className="..."
>
  Explore the Collection
</button>
```

#### Gallery Cards
```jsx
<div
  role="button"
  tabIndex={0}
  aria-label={`${product.name}. Click or press Enter to view alternate image.`}
>
```

#### Carousel Navigation
```jsx
<button
  aria-label="Scroll left"
  onClick={() => scroll('left')}
>
```

#### Decorative Icons
```jsx
<svg aria-hidden="true">
  <!-- Icon markup -->
</svg>
```

---

### 5. Image Accessibility

All images have descriptive `alt` text:

```jsx
<Image
  src="/assets/hero-image.jpg"
  alt="Brozzo — Classic, Reimagined"
  fill
  priority
/>
```

**Alt text guidelines**:
- **Product images**: Describe the product (e.g., "Classic Oxford leather shoe - front view")
- **Decorative images**: Use empty alt (`alt=""`) or `aria-hidden="true"`
- **Functional images**: Describe the function (e.g., "Scroll down to collection")

---

### 6. Focus Indicators

Clear, visible focus states for all interactive elements:

```css
.focus-visible-ring {
  @apply focus-visible:outline-none 
         focus-visible:ring-2 
         focus-visible:ring-brozzo-navy 
         focus-visible:ring-offset-2;
}
```

**Visual appearance**:
- 2px navy blue ring around focused element
- 2px offset from element edge
- Only shows on keyboard focus (not mouse clicks)

---

### 7. Color Contrast

All text meets WCAG AA contrast requirements:

| Text Type | Foreground | Background | Contrast Ratio | Requirement |
|-----------|------------|------------|----------------|-------------|
| Body text | `#222222` (charcoal) | `#FAF9F7` (off-white) | **14.8:1** | ≥ 4.5:1 ✅ |
| Links | `#0F1724` (navy) | `#FAF9F7` (off-white) | **16.2:1** | ≥ 4.5:1 ✅ |
| Headings | `#222222` (charcoal) | `#FAF9F7` (off-white) | **14.8:1** | ≥ 3:1 ✅ |
| White text | `#FFFFFF` (white) | `#0F1724` (navy) | **16.2:1** | ≥ 4.5:1 ✅ |

**Tool to check contrast**: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

### 8. Reduced Motion Support

Respects user's motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Affected animations**:
- Hero parallax (disabled)
- Fade-up on scroll (instant)
- Hover transitions (instant)
- Smooth scrolling (becomes instant)

**How to test**:
- **macOS**: System Preferences → Accessibility → Display → Reduce motion
- **Windows**: Settings → Ease of Access → Display → Show animations
- **Chrome DevTools**: Rendering tab → Emulate CSS media feature `prefers-reduced-motion`

---

### 9. Responsive Text Sizing

All text is:
- Minimum **16px** for body text (readable on all devices)
- Scalable with browser zoom (no fixed `px` heights that break layout)
- Uses `rem` units where appropriate for relative sizing

**Text sizes**:
```css
Body: 16px (1rem)
Small: 14px (0.875rem)
Large: 18px (1.125rem)
H1: 36-56px (2.25-3.5rem) — responsive
H2: 30-48px (1.875-3rem) — responsive
```

---

### 10. Form Accessibility (if added in future)

Placeholder for form inputs (currently not in use, but documented for future):

```jsx
<label htmlFor="email" className="block mb-2">
  Email Address
  <span className="sr-only">(required)</span>
</label>
<input
  id="email"
  type="email"
  required
  aria-required="true"
  aria-describedby="email-error"
  className="..."
/>
<span id="email-error" role="alert" className="text-red-600">
  {errorMessage}
</span>
```

---

## 🧪 Testing Checklist

Use this checklist to verify accessibility:

### Keyboard Navigation

- [ ] Press **Tab** — focus moves to skip link, then through all interactive elements
- [ ] Press **Enter** on links and buttons — they activate correctly
- [ ] Press **Space** on buttons — they activate correctly
- [ ] **No keyboard traps** — can tab through entire page and back to browser UI
- [ ] **Focus visible** — blue ring appears around focused elements

### Screen Reader Testing

**Recommended screen readers**:
- **NVDA** (Windows, free)
- **JAWS** (Windows, paid)
- **VoiceOver** (macOS/iOS, built-in)
- **TalkBack** (Android, built-in)

**Test scenarios**:
- [ ] Navigate with screen reader — all content is announced
- [ ] All images have descriptive alt text
- [ ] Buttons and links have clear labels
- [ ] Heading structure is logical (H1 → H2 → H3, no skips)
- [ ] Skip link works (jumps to main content)

### Visual Testing

- [ ] Zoom to **200%** — layout doesn't break, text remains readable
- [ ] Use browser's **high contrast mode** — content is still visible
- [ ] Disable CSS — content is still readable and in logical order
- [ ] Disable JavaScript — images and text still load (next/image provides fallback)

### Motion Testing

- [ ] Enable "Reduce motion" in OS settings
- [ ] Reload page — no parallax, instant transitions
- [ ] All animations are disabled or reduced to instant

### Color Blindness Testing

**Tools**:
- **Chrome**: [Colorblinding](https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa) extension
- **Simulator**: [Coblis Color Blindness Simulator](https://www.color-blindness.com/coblis-color-blindness-simulator/)

**Test scenarios**:
- [ ] Protanopia (red-blind)
- [ ] Deuteranopia (green-blind)
- [ ] Tritanopia (blue-blind)
- [ ] All interactive elements are still identifiable (not relying on color alone)

---

## 🛠️ Accessibility Audit Tools

### Automated Testing

1. **Lighthouse** (built into Chrome DevTools)
   ```bash
   # CLI version
   lighthouse http://localhost:3000 --only-categories=accessibility --view
   ```

2. **axe DevTools** (browser extension)
   - [Chrome](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
   - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)

3. **WAVE** (Web Accessibility Evaluation Tool)
   - [https://wave.webaim.org/](https://wave.webaim.org/)

### Manual Testing

**Keyboard-only navigation**: Disconnect mouse, navigate entire site with keyboard only

**Screen reader testing**: Use VoiceOver (Mac) or NVDA (Windows) to navigate site

**Color contrast**: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## 📋 WCAG 2.1 Compliance Checklist

### Level A (Minimum)

- [x] 1.1.1 Non-text Content — All images have alt text
- [x] 1.3.1 Info and Relationships — Semantic HTML used
- [x] 1.3.2 Meaningful Sequence — Logical reading order
- [x] 1.4.1 Use of Color — Not relying on color alone
- [x] 2.1.1 Keyboard — All functions available via keyboard
- [x] 2.1.2 No Keyboard Trap — Can navigate away from all elements
- [x] 2.4.1 Bypass Blocks — Skip link provided
- [x] 2.4.2 Page Titled — Meaningful page title set
- [x] 3.1.1 Language of Page — `lang="en"` set on `<html>`
- [x] 4.1.2 Name, Role, Value — ARIA labels used

### Level AA (Target)

- [x] 1.4.3 Contrast (Minimum) — 4.5:1 for text, 3:1 for large text
- [x] 1.4.5 Images of Text — Using real text, not text in images
- [x] 2.4.6 Headings and Labels — Descriptive headings
- [x] 2.4.7 Focus Visible — Clear focus indicators
- [x] 3.2.3 Consistent Navigation — Navigation is consistent
- [x] 3.2.4 Consistent Identification — Icons and buttons consistent

---

## 🚀 Maintaining Accessibility

### When Adding New Features

1. **Always use semantic HTML** — prefer `<button>` over `<div onClick>`
2. **Add ARIA labels** to interactive elements that don't have visible text
3. **Test keyboard navigation** — ensure Tab/Enter/Space work correctly
4. **Check color contrast** for any new colors
5. **Add alt text** to any new images

### Code Review Checklist

Before merging new components:

- [ ] All interactive elements are keyboard accessible
- [ ] ARIA labels added where needed
- [ ] Images have alt text
- [ ] Focus states are visible
- [ ] No color-only indicators (use text or icons too)
- [ ] Tested with screen reader (at least VoiceOver/NVDA)
- [ ] Lighthouse accessibility score ≥ 95

---

## 📚 Resources

### Guidelines

- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Articles](https://webaim.org/articles/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)

### Testing Tools

- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [Pa11y](https://pa11y.org/) — Automated accessibility testing
- [axe-core](https://github.com/dequelabs/axe-core) — JavaScript accessibility engine

### Learning

- [Introduction to Web Accessibility (W3C)](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
- [Web Accessibility by Google (Udacity)](https://www.udacity.com/course/web-accessibility--ud891) — Free course
- [Inclusive Components](https://inclusive-components.design/) — Pattern library

---

## 🆘 Reporting Accessibility Issues

If you find an accessibility issue:

1. **Document the issue**:
   - What's the problem?
   - Which page/component?
   - How to reproduce?
   - What should happen instead?

2. **Include context**:
   - Browser and version
   - Screen reader (if applicable)
   - Operating system

3. **Provide screenshots** or screen recordings if helpful

4. **Suggest a fix** if you have ideas

---

**Accessibility is an ongoing commitment.** Regular testing and user feedback help ensure the Brozzo site remains usable for everyone.

