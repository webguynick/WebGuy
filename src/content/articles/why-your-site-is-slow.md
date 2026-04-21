---
title: "Why Your Small Business Site Is Slow (and What It's Costing You)"
description: "A 3-second load time isn't good enough anymore. Here's what slows down a small business site, and the fixes that actually move the needle."
pubDate: 2026-04-21
tags: ["performance", "seo", "core-web-vitals"]
---

Google has said it directly: slow sites rank lower and convert worse. For a small business, that math is brutal — you're paying for ads that send people to a page that loses them before it loads.

## The usual suspects

1. **Huge, uncompressed images.** A 4 MB hero photo is the #1 thing I find.
2. **Bloated page builders.** Most drag-and-drop tools ship 500 KB of JavaScript before your first word renders.
3. **Slow hosting.** Shared $3/mo plans can take 1.5 seconds just to respond — before the browser has downloaded a single byte.
4. **No caching or CDN.** Every visitor hits the origin server fresh, worldwide.

## The fixes that move the needle

- **Modern image formats** (AVIF / WebP) with width-appropriate variants.
- **Static-first rendering** — serve HTML that's already built, not generated on every request.
- **A real CDN.** Cloudflare free tier covers most small businesses.
- **Measured budget.** Keep the homepage under 300 KB total. Most of mine ship under 80 KB.

## The target

- Largest Contentful Paint under **1.5s**
- Interaction to Next Paint under **200ms**
- Cumulative Layout Shift under **0.05**

If your site doesn't hit those, [get in touch](/contact) — a tune-up is usually a one-week engagement.
