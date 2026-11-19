# Nalar design system

This pass follows the Impeccable 4.10.0 skill's polish, Operate/Read and responsive guidance. Its context launcher failed to download engine 0.1.27; the documented direct-context fallback was used. No automatic Impeccable engine audit is claimed.

## Existing visual authority

The user's desktop and phone dashboard images define the visual direction: warm cream canvas, dark forest sidebar, lime emphasis, white panels, a serif display voice and a restrained sans serif interface. Preserve this direction across routes; do not substitute a new brand. Dashboard reference labels and metric typography are explicit user choices.

## Product and surfaces

Nalar is a browser-local UKPPPG Calon Guru Informatika practice app. Its 170 original questions, 50 PCK + 30 PU full exam, 20-question sprint, 30-question PU exam, timers, exact-answer scoring, two feedback modes and saved snapshots remain product constraints.

Operate surfaces: dashboard, tryout selection, topic practice, exam, results/history, profile forms. Read surfaces: Pedagogi Umum material and source library. A new browser must enter its own name. No account or server-side history is introduced.

## Shared rules

- Use semantic tokens in `dist/ui.css` for canvas, panel, secondary surface, ink, muted text, accent, borders, success, error and warning in both themes.
- DM Serif Display is reserved for page titles, selected editorial headings and the dashboard's referenced number treatment. DM Sans carries body copy, controls and compact data; timer and code keep a true monospaced face.
- Body/answer text is 16 px or larger. Secondary labels are normally 14 px; small dashboard/reference metadata may be 12–13 px. Reading measure is at most 75ch.
- Shared controls have 44 px minimum touch height, visible keyboard focus, and distinct hover, selected, disabled and validation states.
- Use the same panel radius, spacing rhythm, field treatment and button vocabulary across all routes. Do not turn status indicators into purely decorative color.
- Wide layouts keep navigation visible. At 880 px or narrower use bottom navigation and an accessible More drawer. Exam controls adapt independently; the question remains the primary task.
- Matrices retain real table semantics and use a local keyboard-accessible overflow region on narrow displays. Do not hide necessary answers or controls to fit a screen.
- Respect reduced motion and native inputs. Print removes controls/navigation and uses a readable light presentation.

## Verification

Check onboarding; all six navigation pages; a PU reader; single, category and multiple-answer questions; finished results/review; profile/start/finish dialogs; and light/dark themes at desktop, intermediate and mobile widths. Record real browser evidence separately from automated logic tests. Device emulation does not establish physical-device touch or Safari compatibility.
