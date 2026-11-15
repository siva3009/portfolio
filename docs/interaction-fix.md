# Hero scroll and pointer update

The R3F canvas measured a transformed bounding box during GSAP scroll scaling. This could shrink the renderer inside the already scaled panel, exposing the CSS fallback as a hard rectangular seam. Canvas resize.offsetSize now measures unscaled offsetWidth/offsetHeight; CSS explicitly keeps the canvas covering its wrapper.

HeroDepth keeps pointer animation separate from the scroll transform. It normalizes pointer coordinates against the visible scaled panel, eases the portrait and text at different speeds, and resets on pointer leave, window blur, preference changes, and effect cleanup. Touch and reduced-motion users keep a static layout.

Verification: production build and TypeScript passed; browser confirmed pointer updates and smooth scroll scaling with CSS fallback, and contact button still opens its dialog. WebGL is unavailable in the QA browser, so hardware rendering requires a WebGL-capable browser check.
