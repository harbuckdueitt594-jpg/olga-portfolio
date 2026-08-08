## 2024-08-08 - Accordion Component Accessibility Enhancements
**Learning:** Found that the custom Accordion component lacked critical `role`, `aria-expanded`, and `aria-controls` attributes, which are vital for screen reader support in expandable sections. Additionally, keyboard navigation lacked focus visibility.
**Action:** Always ensure custom expandable elements use standard WAI-ARIA accordion patterns, including tying buttons to their respective panels and ensuring `focus-visible` styles are appropriately styled for keyboard users.
