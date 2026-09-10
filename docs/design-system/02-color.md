# Color

Dummy values — swap for brand colors when available.

| Token           | Light                | Dark                     | Usage                            |
| --------------- | -------------------- | ------------------------ | -------------------------------- |
| `background`    | `#ffffff`            | `#0a0a0a`                | Page background                  |
| `foreground`    | `#171717`            | `#ededed`                | Primary text                     |
| `foreground/70` | `rgba(23,23,23,0.7)` | `rgba(237,237,237,0.7)`  | Secondary/body text              |
| `foreground/50` | `rgba(23,23,23,0.5)` | `rgba(237,237,237,0.5)`  | Muted text, labels               |
| `accent`        | `#4f46e5`            | `#818cf8`                | Links, highlights, active states |
| `border`        | `rgba(0,0,0,0.10)`   | `rgba(255,255,255,0.10)` | Dividers, card borders           |
| `border-hover`  | `rgba(0,0,0,0.25)`   | `rgba(255,255,255,0.25)` | Card border on hover             |
| `surface-muted` | `rgba(0,0,0,0.05)`   | `rgba(255,255,255,0.10)` | Tag/pill backgrounds             |

**Semantic (not yet used, reserve for forms/alerts):**

| Token     | Value     |
| --------- | --------- |
| `success` | `#16a34a` |
| `warning` | `#d97706` |
| `error`   | `#dc2626` |

## Hero background

The Hero section uses a fixed dark gradient (`.hero-gradient` in
`globals.css`) instead of the standard light/dark tokens above — it does not
follow the OS theme, so text inside it uses hardcoded white/indigo values
rather than `foreground`/`accent`.

| Layer               | Value                    | Notes                              |
| ------------------- | ------------------------ | ---------------------------------- |
| Base                | `#060405`                | Near-black base fill               |
| Glow (bottom-right) | `rgba(255,140,66,0.9)`   | Warm orange radial glow            |
| Glow (top-right)    | `rgba(255,140,66,0.75)`  | Warm orange radial glow            |
| Glow (center)       | `rgba(139,26,26,0.9)`    | Deep red radial glow               |
| Grid lines          | `rgba(255,255,255,0.07)` | 1px vertical lines every 25% width |
