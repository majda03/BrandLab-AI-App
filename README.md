# BrandLab AI — Interactive Brand Direction Generator

BrandLab AI is a frontend concept-generation tool built with **HTML, CSS, and JavaScript**. It turns a small set of brand inputs into a structured visual direction with naming, palette, typography, keywords, strategy notes, preview states, and reusable CSS variables.

**Live project:** https://majda03.github.io/BrandLab-AI-App/

> Despite the product name, this version is intentionally a client-side generative system and does not call an external AI API. The output is produced from structured decision logic in the frontend.

## What it demonstrates

- DOM-driven application state
- Structured input-to-output generation logic
- Dynamic visual rendering
- Data-driven industry and mood systems
- Color-palette generation and contrast handling
- Typography recommendations
- Brand strategy copy generation
- CSS-variable export
- Clipboard interactions
- Saved concept handling
- Immediate visual preview updates

## Product flow

Users choose a combination of:

- Industry
- Mood
- Desired feeling
- Optional brand name

The application then builds a complete concept containing:

- Generated or supplied brand name
- Industry label
- Brand tagline
- Visual score
- Five-color palette
- Typography pairing
- Descriptive keywords
- Strategic direction
- Live brand preview
- Reusable CSS custom properties

## Engineering details

The JavaScript source separates the generation system into structured data maps for industries, moods, and emotional goals. The final concept is assembled from those inputs and rendered into the UI through dedicated functions.

Notable implementation details include:

- `buildConcept()` for composing the generated result
- `renderPalette()` for dynamic color UI
- Contrast-aware text selection for color swatches
- `renderKeywords()` for generated brand language
- `createCss()` for exporting reusable CSS variables
- Clipboard support for palette and CSS output
- Local concept state and saved-result handling

## Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- Local client-side state
- Clipboard API
- GitHub Pages

## Why this project matters

This project is useful as a portfolio piece because it is not only a visual landing page. It demonstrates how interface inputs can drive a dynamic product system, how generated data can be transformed into multiple UI states, and how reusable output can be produced for the user.

## Role

**Product concept, UI design, frontend development, generation logic, interaction design, and responsive implementation by Majda Kapetanović.**

Portfolio: https://majdakapetanovic.com
