# Advertisement System

This document covers the data shape the frontend expects, the API contract the backend must implement, and how the frontend fetches and renders ads.

---

## How It Works

```
AdvertisementSection          ← drop this on any page, it handles everything
  └── useAdvertisements()     ← fetches from the API, falls back to static data
        └── advertisementService.getHomepageAds()
              └── GET /marketing/advertisements/homepage/
  └── AdvertisementLayout     ← arranges the 4 slots into the grid
        ├── AdvertisementSlider  (hero slot — left large, auto-scrolling)
        ├── AdvertisementSlider  (freeWeek slot — top-right, auto-scrolling)
        ├── AdvertisementCard    (dailyDeals — bottom-right small)
        └── AdvertisementCard    (tradeZone — bottom-right small)
```

---

## The Data Shape

The frontend expects a single object with exactly these four keys. Two of them (`hero`, `freeWeek`) are arrays of slides for the auto-scrolling slots. Two (`dailyDeals`, `tradeZone`) are single objects for the static small tiles.

```json
{
  "hero": [
    {
      "id": "string — unique identifier",
      "title": "string — headline text on the card",
      "description": "string | null — small ALL-CAPS label above the title",
      "image": "string — absolute URL to the image (min 800×500px recommended)",
      "ctaLabel": "string | null — button text, omit to hide the button",
      "ctaHref": "string | null — internal path or external URL for the button"
    }
  ],
  "freeWeek": [
    {
      "id": "string",
      "title": "string",
      "description": "string | null",
      "image": "string",
      "ctaLabel": "string | null",
      "ctaHref": "string | null"
    }
  ],
  "dailyDeals": {
    "id": "string",
    "title": "string",
    "description": "string | null",
    "image": "string",
    "ctaLabel": "string | null",
    "ctaHref": "string | null"
  },
  "tradeZone": {
    "id": "string",
    "title": "string",
    "description": "string | null",
    "image": "string",
    "ctaLabel": "string | null",
    "ctaHref": "string | null"
  }
}
```

### Field rules

| Field | Required | Notes |
|---|---|---|
| `id` | yes | Used as React key. Must be unique within its array/slot. |
| `title` | yes | Shown as the main headline on the card. |
| `description` | no | Shown as a small uppercase label above the title. Omit or set `null` to hide. |
| `image` | yes | Full absolute URL. Displayed as `object-cover` — landscape images work best (16:9 or wider). |
| `ctaLabel` | no | Text for the CTA button. Omit or set `null` to hide the button entirely. |
| `ctaHref` | no | Path or URL for the CTA button. If `ctaLabel` is set but `ctaHref` is omitted, a `<button>` renders instead of a `<Link>`. |

### Slider slots (`hero`, `freeWeek`)

- Must be an **array** of 1 or more slide objects.
- If only 1 slide is provided, the dot indicators are hidden and auto-scroll stops — it just shows the single image.
- Recommended: 2–4 slides. More than 5 is not advised (dots get too small).

### Static slots (`dailyDeals`, `tradeZone`)

- Must be a **single object**, not an array.
- Only rendered on desktop (≥1024px). On mobile only the hero slider is shown.

---

## API Contract

### Endpoint

```
GET /marketing/advertisements/homepage/
```

### Authentication

Not required — this is a public endpoint. No `Authorization` header is sent.

### Response

**200 OK**

```json
{
  "hero": [ { "id": "...", "title": "...", "image": "...", ... } ],
  "freeWeek": [ { "id": "...", "title": "...", "image": "...", ... } ],
  "dailyDeals": { "id": "...", "title": "...", "image": "...", ... },
  "tradeZone": { "id": "...", "title": "...", "image": "...", ... }
}
```

**Error responses** — the frontend handles these gracefully by falling back to the static data in `advertisementData.js`. The user always sees something, even if the API is down.

### Suggested Django model fields

```python
class Advertisement(models.Model):
    SLOT_CHOICES = [
        ("hero", "Hero"),
        ("free_week", "Free Week"),
        ("daily_deals", "Daily Deals"),
        ("trade_zone", "Trade Zone"),
    ]

    slot       = models.CharField(max_length=20, choices=SLOT_CHOICES)
    title      = models.CharField(max_length=120)
    description = models.CharField(max_length=80, blank=True, null=True)
    image      = models.URLField()           # or ImageField if self-hosted
    cta_label  = models.CharField(max_length=40, blank=True, null=True)
    cta_href   = models.CharField(max_length=255, blank=True, null=True)
    order      = models.PositiveSmallIntegerField(default=0)  # slide order within a slot
    is_active  = models.BooleanField(default=True)

    class Meta:
        ordering = ["slot", "order"]
```

The serializer for the view groups active ads by slot and returns them in the exact shape above.

---

## Slot Layout Reference

```
Desktop (≥ 1024px)
┌─────────────────────┬──────────────────────┐
│                     │  freeWeek (slider)   │
│   hero (slider)     ├──────────┬───────────┤
│                     │dailyDeals│ tradeZone │
└─────────────────────┴──────────┴───────────┘

Mobile (< 1024px)
┌──────────────────────────────────────────┐
│              hero (slider)               │
└──────────────────────────────────────────┘
(freeWeek, dailyDeals, tradeZone hidden on mobile)
```

---

## Adding the Section to a Page

```jsx
import { AdvertisementSection } from "../marketing/advertisements";

function SomePage() {
  return (
    <main>
      <AdvertisementSection />
      {/* rest of page */}
    </main>
  );
}
```

That's all. `AdvertisementSection` owns fetching, loading state, error handling, and fallback.
