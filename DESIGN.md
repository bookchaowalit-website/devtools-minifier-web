---
name: Compression Chamber
description: An industrial browser-only bench for compacting small JSON, CSS, HTML, and JavaScript snippets.
---

# Design System: Compression Chamber

## Overview

**Creative North Star: “Material goes in; a smaller artifact comes out.”**

Compression Chamber is a tiny client-side utility for snippets and demos. The interface makes the transformation legible: choose a source shape, edit the material, run one chamber action, read the byte difference, and copy the result. It explicitly does not claim to be a production compiler or pipeline.

## Colors

- Graphite `#202522` and deep graphite `#171b19` form the industrial chamber.
- Acid `#d3ed4f` marks source/output signal and the primary run action.
- Orange `#f26d3d` is a safety annotation for labels and errors.
- Paper `#e7e6d8` and paper-dim `#b9b9a7` carry reading hierarchy.
- Rules use `#4e554d`; gradients and glossy surfaces are prohibited.

## Typography

- A restrained sans stack handles the large thesis and explanatory copy.
- Monospace is used for code, bytes, modes, labels, and status readouts.
- The display is tight and industrial without using a novelty or default system display face.

## Layout

- The first viewport establishes the compression thesis, no-upload boundary, mode rail, and source/output bench.
- The two material panels share one horizontal chamber on wide screens and stack on mobile.
- The status strip is the only summary row: source bytes, output bytes, space returned, and copy.

## Elevation & Depth

A deep inset bench, 1px rules, and acid focus lines supply depth. Panels remain flat and functional; no floating card stack or shadow is needed.

## Shapes

Use rectangular industrial controls with small corners. Text areas are broad material sheets; mode tabs share one ruled strip rather than separate pills.

## Components

- **Material rail:** JSON/CSS/HTML/JS modes with sample reset behavior.
- **Source panel:** editable snippet with character count.
- **Compacted panel:** read-only result or an honest waiting state.
- **Status strip:** byte counts, approximate space returned, and copy output.
- **Boundary footer:** states the client-only and non-production limits.

## Do's and Don'ts

- Do show the before/after relationship and keep the transform explicit.
- Do surface invalid JSON or transformation errors near the chamber.
- Do keep all source in the browser and say so.
- Don't imply semantic compilation, security hardening, or production-grade parsing.
- Don't bury the primary action in a generic toolbar or use a dashboard KPI wall.

