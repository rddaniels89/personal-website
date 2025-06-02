# Standardized Color System Documentation

## Overview

This document outlines the standardized color palette system implemented across the Roderick Daniels personal website. The system provides consistent visual identity while supporting both dystopian cyberpunk and modern professional themes.

## Color Philosophy

### Core Principles
1. **Semantic Naming**: Colors are named by purpose (primary, accent, highlight) rather than appearance
2. **Theme Flexibility**: Same semantic names work across different visual themes
3. **Accessibility**: Sufficient contrast ratios for readability
4. **Consistency**: Unified color usage across all components

### Theme-Specific Adaptations
- **Dystopian Theme**: High contrast, neon colors, cyberpunk aesthetic
- **Modern Theme**: Professional, clean colors, corporate-friendly palette

## Color Palette Structure

### Primary Colors (Brand Identity)
```css
primary.500: #3B82F6  /* Main brand blue */
primary.600: #2563EB  /* Darker brand blue (hover states) */
```
- **Usage**: Main CTAs, primary headings, key UI elements
- **Dystopian Override**: Hot pink (#EC4899) for cyberpunk aesthetic
- **Modern Theme**: Professional blue for corporate appeal

### Accent Colors (Secondary Actions)
```css
accent.500: #EC4899   /* Hot pink accent */
accent.600: #DB2777   /* Darker pink (hover states) */
```
- **Usage**: Secondary buttons, highlights, special elements
- **Dystopian Override**: Cyan (#06B6D4) for electric blue effect
- **Modern Theme**: Pink accent for visual interest

### Highlight Colors (Special Elements)
```css
highlight.500: #06B6D4  /* Cyan highlight */
highlight.600: #0891B2  /* Darker cyan (hover states) */
```
- **Usage**: Special callouts, notifications, badges
- **Dystopian Override**: Purple (#8B5CF6) for variety
- **Modern Theme**: Cyan for modern tech feel

### Semantic Colors (Status & Feedback)
```css
success.500: #10B981   /* Green for success states */
warning.500: #F59E0B   /* Amber for warnings */
error.500: #EF4444     /* Red for errors */
```

### Surface Colors (Backgrounds & Cards)
```css
/* Light Theme */
surface.light.primary: #FFFFFF     /* Main background */
surface.light.secondary: #FAFAFA   /* Card backgrounds */
surface.light.tertiary: #F5F5F5    /* Input fields, secondary surfaces */

/* Dark Theme */
surface.dark.primary: #0D0D0D      /* Main background */
surface.dark.secondary: #1A1A1A    /* Card backgrounds */
surface.dark.tertiary: #262626     /* Input fields, secondary surfaces */
```

### Text Colors (Typography)
```css
/* Light Theme */
text.light.primary: #1F2937       /* Primary text */
text.light.secondary: #374151     /* Secondary text */
text.light.tertiary: #6B7280      /* Muted text */

/* Dark Theme */
text.dark.primary: #F9FAFB        /* Primary text */
text.dark.secondary: #E5E7EB      /* Secondary text */
text.dark.tertiary: #9CA3AF       /* Muted text */
```

## CSS Implementation

### CSS Custom Properties
The color system uses CSS custom properties that automatically switch based on the active theme:

```css
:root {
  --color-primary: #3B82F6;
  --color-accent: #EC4899;
  --color-highlight: #06B6D4;
  /* ... other variables */
}

.theme-dystopian {
  --color-primary: #EC4899;      /* Hot pink */
  --color-accent: #06B6D4;       /* Cyan */
  --color-highlight: #8B5CF6;    /* Purple */
  /* ... theme overrides */
}

.theme-modern {
  --color-primary: #2563EB;      /* Professional blue */
  --color-accent: #EC4899;       /* Pink accent */
  --color-highlight: #06B6D4;    /* Cyan */
  /* ... theme overrides */
}
```

### Utility Classes
Pre-built utility classes for common color applications:

```css
/* Text Colors */
.text-primary { color: var(--color-primary); }
.text-accent { color: var(--color-accent); }
.text-highlight { color: var(--color-highlight); }

/* Background Colors */
.bg-primary { background-color: var(--color-primary); }
.bg-accent { background-color: var(--color-accent); }
.bg-surface { background-color: var(--color-surface); }

/* Border Colors */
.border-primary { border-color: var(--color-primary); }
.border-accent { border-color: var(--color-accent); }
```

## Component Classes

### Buttons
```css
.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
  /* Hover state automatically uses --color-primary-hover */
}

.btn-secondary {
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  background-color: transparent;
}
```

### Cards
```css
.card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
}

.card:hover {
  border-color: var(--color-border-accent);
}
```

### Typography
```css
.heading-1 { color: var(--color-text); }
.heading-2 { color: var(--color-primary); }
.heading-3 { color: var(--color-accent); }
.body-normal { color: var(--color-text); }
.text-lead { color: var(--color-text-secondary); }
```

## Usage Guidelines

### Do's ✅
- Use semantic color names (primary, accent, highlight) instead of specific colors
- Apply theme-specific effects only when necessary
- Maintain consistent color roles across components
- Use CSS variables for all color references
- Test both themes when implementing new features

### Don'ts ❌
- Hardcode hex color values in components
- Mix legacy color names with new semantic system
- Override theme colors without considering both themes
- Use theme-specific colors outside their intended context

## Migration from Legacy System

### Legacy Color Mapping
The old color system has been mapped to the new semantic system:

```css
/* Old → New */
neon-pink → accent.500 (dystopian primary)
neon-blue → highlight.500 (dystopian accent)
modern-accent → primary.600 (modern primary)
cyber-black → surface.dark.primary
modern-black → surface.light.secondary
```

### Backward Compatibility
Legacy color names are still available but deprecated. Update components to use the new semantic system:

```css
/* OLD (deprecated) */
className="text-neon-pink hover:text-neon-blue"

/* NEW (recommended) */
className="text-primary hover:text-accent"
```

## Theme-Specific Enhancements

### Dystopian Theme Effects
```css
.theme-dystopian .neon-text {
  color: var(--color-primary);
  text-shadow: 0 0 10px var(--color-primary);
}

.theme-dystopian .neon-border {
  border-color: var(--color-accent);
  box-shadow: 0 0 10px var(--color-accent);
}
```

### Modern Theme Effects
```css
.theme-modern .gradient-text {
  background: linear-gradient(45deg, var(--color-primary), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.theme-modern .hover-lift:hover {
  transform: translateY(-2px);
}
```

## Accessibility Considerations

### Contrast Ratios
All color combinations meet WCAG 2.1 AA standards:
- Normal text: 4.5:1 minimum contrast
- Large text: 3:1 minimum contrast
- UI components: 3:1 minimum contrast

### Color Blindness Support
- Semantic naming reduces dependence on color alone
- Sufficient contrast ensures readability across vision types
- Multiple visual cues (icons, typography) supplement color coding

## Testing & Quality Assurance

### Checklist for New Components
- [ ] Uses semantic color variables instead of hardcoded values
- [ ] Tested in both dystopian and modern themes
- [ ] Maintains consistent hover/focus states
- [ ] Meets accessibility contrast requirements
- [ ] Follows established component patterns

### Color Validation Tools
- Browser DevTools for CSS variable inspection
- WAVE accessibility checker for contrast validation
- Color Oracle for color blindness simulation

## Future Considerations

### Extensibility
The system is designed to easily add:
- New theme variants
- Additional semantic color roles
- Extended color palettes for specific components

### Performance
- CSS custom properties provide efficient theme switching
- Minimal CSS output with utility classes
- No JavaScript required for color theming

---

*Last updated: December 2024*
*For questions or updates, contact the development team.* 