# ShareHeart Portfolio Branding Guidelines

## Design Philosophy
**Scroll-Driven Storytelling**: Every section should feel like a narrative journey, where scrolling reveals context and meaning. The page should guide users through a story, not just display information.

---

## Visual Style

### Color Palette
- **Primary Background**: `bg-white dark:bg-black` (consistent, no harsh transitions)
- **Text Primary**: `text-zinc-900 dark:text-zinc-50`
- **Text Secondary**: `text-zinc-600 dark:text-zinc-400`
- **Text Tertiary**: `text-zinc-500 dark:text-zinc-500`
- **Accent**: `text-purple-600 dark:text-purple-400` (for highlights, numbers, CTAs)
- **Borders**: `border-zinc-200 dark:border-zinc-800`

### Typography
- **Font Family**: Geist Sans (primary), Geist Mono (code/technical)
- **Headings**: Bold, large (text-3xl to text-6xl), tight leading
- **Body**: text-lg to text-xl, relaxed leading (leading-relaxed)
- **Small Text**: text-sm, for metadata and captions

---

## Section Structure

### Standard Component Demo Section
**Layout Pattern**: Two-column grid with text on left, component on right (or reversed)

**Key Elements**:
1. **Sticky Text Column** (`sticky top-24`)
   - Title: `text-2xl md:text-3xl font-bold mb-3`
   - Description: `text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6`
   - Additional context: `text-sm text-zinc-700 dark:text-zinc-300` in `space-y-4`

2. **Parallax Component Column**
   - Scroll-driven Y transform: `±60px to ±120px` (opposite direction from text)
   - Opacity fade: `[0.3, 1, 1, 0.3]` based on scroll progress
   - Scale effects: subtle `[1.05, 1, 1.05]` for depth

3. **Section Height**: `min-h-[100vh]` minimum for proper scroll space

### Full-Width Screenshot Section
**Layout Pattern**: Full viewport width, alternating text/image positions

**Key Elements**:
1. **Section Height**: `min-h-[120vh]` for dramatic scroll space
2. **Screenshot Size**: `aspect-[21/9]` on desktop, `aspect-[16/10]` on mobile
3. **Parallax Intensity**: 
   - Image: `±150px` movement
   - Text: `±80px` opposite direction
   - Scale: `[1.1, 1, 1.1]` for zoom effect
4. **Numbered Indicator**: `01 / 04` format in purple accent
5. **Background**: Consistent white/dark, no harsh transitions

### Scroll-Controlled Interactive Section
**Layout Pattern**: Long scroll section (`min-h-[200vh]`) with sticky elements

**Key Elements**:
1. **Overlay**: Fixed overlay with `backdrop-blur-sm` that fades in/out
2. **Sticky Positioning**: Both text and component use `sticky top-24`
3. **Scroll-Driven Animation**: Component position/opacity tied to scroll progress
4. **Contextual Text**: Multiple paragraphs explaining the interaction
5. **Visual Feedback**: Clear indication of scroll-driven behavior

---

## Parallax Guidelines

### Movement Ranges
- **Subtle**: `±30px` to `±40px` (text, small elements)
- **Medium**: `±60px` to `±80px` (components, standard parallax)
- **Dramatic**: `±100px` to `±150px` (large screenshots, hero elements)

### Direction Rules
- **Text and Images**: Always move in opposite directions
- **Reversed Sections**: Flip the direction pattern
- **Scale Effects**: Use `[1.05, 1, 1.05]` or `[1.1, 1, 1.1]` for depth

### Opacity Transitions
- **Fade In**: `[0, 0.2, 0.8, 1]` for smooth entrance
- **Fade Out**: `[0.2, 0.8, 1, 0]` for smooth exit
- **Peak Visibility**: Maintain `1` between `0.2` and `0.8` scroll progress

---

## Component Presentation

### Live Component Demo
**Container**:
- Border: `border-2 border-zinc-200 dark:border-zinc-900`
- Background: `bg-white dark:bg-black`
- Shadow: `shadow-xl`
- Rounded: `rounded-xl`

**Header Bar**:
- Background: `bg-zinc-50 dark:bg-zinc-950`
- Border: `border-b border-zinc-200 dark:border-zinc-900`
- Window Dots: `w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700`
- Title: `text-xs text-zinc-500 dark:text-zinc-400 font-mono`

**Content Area**:
- Padding: `p-8` for spacious feel

### Screenshot Display
**Container**:
- Aspect Ratio: `aspect-[21/10]` or `aspect-[21/9]` for wide shots
- Border: `border-4 border-zinc-200 dark:border-zinc-800`
- Rounded: `rounded-2xl md:rounded-3xl`
- Shadow: `shadow-2xl`
- Overflow: `overflow-hidden`

**Image**:
- Object Fit: `object-cover`
- Object Position: Custom per screenshot (e.g., `center 35%`)
- Hover: `group-hover:scale-110` with `transition-transform duration-1000`

**Overlay**:
- Gradient: `bg-gradient-to-t from-black/20 via-transparent to-transparent`
- Glow: Optional purple glow on hover

---

## Spacing & Layout

### Section Spacing
- **Between Sections**: `py-32` (vertical padding)
- **Internal Spacing**: `gap-12` to `gap-20` for grid layouts
- **Text Spacing**: `mb-6` for paragraphs, `mb-4` for headings

### Container Widths
- **Standard**: `max-w-6xl` or `max-w-7xl`
- **Full Width Screenshots**: `max-w-[95vw]`
- **Padding**: `px-6` standard, `px-4 md:px-8` for full-width

### Grid Layouts
- **Two Column**: `grid md:grid-cols-2`
- **Four Column**: `grid md:grid-cols-4` (for metrics)
- **Gap**: `gap-12` to `gap-20` for component demos

---

## Animation Principles

### Scroll-Driven Animations
1. **Always use `useScroll` with `target` ref**
2. **Offset**: `["start end", "end start"]` for full section coverage
3. **Transform ranges**: Use `useTransform` for smooth interpolation
4. **Stagger**: Use `delay: idx * 0.1` for sequential reveals

### Entrance Animations
- **Initial**: `opacity: 0, x: ±40 to ±60`
- **Animate**: `opacity: 1, x: 0`
- **Duration**: `0.8s` to `1.2s`
- **Easing**: `[0.4, 0, 0.2, 1]` (ease-in-out cubic)

### Viewport Triggers
- **Once**: `viewport={{ once: true }}` for performance
- **Margin**: `margin: "-100px"` to `margin: "-200px"` for early triggers

---

## Content Guidelines

### Section Titles
- **Format**: Clear, descriptive component/feature name
- **Size**: `text-2xl md:text-3xl` for component demos
- **Size**: `text-4xl md:text-5xl` for major sections
- **Weight**: `font-bold`

### Descriptions
- **Primary**: `text-lg` to `text-xl`, 1-2 sentences
- **Secondary**: `text-sm`, additional context in `space-y-4`
- **Tone**: Technical but accessible, explain the "why" not just "what"

### Contextual Text
- **Purpose**: Explain scroll-driven interactions
- **Format**: Multiple short paragraphs (`text-sm`)
- **Content**: Describe the experience, not just the feature

---

## Interactive Elements

### Scroll-Controlled Components
- **Trigger Range**: `[0.2, 0.8]` for smooth transitions
- **State Management**: Use `useMotionValueEvent` for scroll-based state
- **Visual Feedback**: Show scroll position or state changes

### Hover Effects
- **Scale**: `hover:scale-105` to `hover:scale-110`
- **Transition**: `transition-transform duration-500` to `duration-1000`
- **Subtle**: Don't overdo hover effects

---

## Best Practices

### Do's ✅
- Use consistent white/dark backgrounds (no harsh transitions)
- Implement scroll-driven parallax for depth
- Provide rich contextual text explaining interactions
- Use sticky positioning for key elements
- Maintain proper spacing and breathing room
- Apply smooth, eased animations
- Use numbered indicators for sequence (01/04)

### Don'ts ❌
- Avoid harsh black-to-white background transitions
- Don't use parallax without purpose
- Don't skip contextual explanations
- Avoid cramped layouts
- Don't use jarring animations
- Avoid inconsistent spacing
- Don't forget dark mode support

---

## Implementation Checklist

When creating a new section:
- [ ] Consistent background color (white/dark)
- [ ] Proper section height (`min-h-[100vh]` or more)
- [ ] Sticky positioning for text/component
- [ ] Scroll-driven parallax (opposite directions)
- [ ] Opacity transitions based on scroll
- [ ] Rich contextual text
- [ ] Proper spacing and padding
- [ ] Dark mode support
- [ ] Smooth animations with easing
- [ ] Viewport triggers for performance

---

## Reference Sections

### Best Examples
1. **BottomSheet Section**: Perfect scroll-driven interaction with overlay
2. **Full-Width Screenshots**: Dramatic parallax with numbered sequence
3. **Component Demos**: Clean presentation with contextual text

### Pattern Library
- `ScrollControlledBottomSheet`: Scroll-driven component reveal
- `ParallaxComponentDemo`: Standard component showcase
- `FullWidthScreenshot`: Large screenshot with parallax
- `ScrollDrivenMetrics`: Animated metrics display






