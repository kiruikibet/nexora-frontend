// Advertisement data for the homepage marketing grid.
// Images use Unsplash for reliable placeholder visuals during development.
// Replace with real CDN URLs in production.

export const advertisements = {
  // hero — left large slot (auto-scrolling slides)
  hero: [
    {
      id: "hero-1",
      title: "Find Everything You Need in One Place",
      description: "Nexora Marketplace",
      image:
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop&q=70",
      ctaLabel: "Shop Now",
      ctaHref: "/products",
    },
    {
      id: "hero-2",
      title: "Top Brands at Unbeatable Prices",
      description: "Featured Sellers",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=70",
      ctaLabel: "Browse Now",
      ctaHref: "/products",
    },
    {
      id: "hero-3",
      title: "Weekend Garage Sale — Hidden Gems Near You",
      description: "Local Listings",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=70",
      ctaLabel: "Explore",
      ctaHref: "/products?tag=garage",
    },
  ],

  // freeWeek — top-right large slot (auto-scrolling slides)
  freeWeek: [
    {
      id: "free-week-1",
      title: "Free Listings This Week Only",
      description: "Limited Offer",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=70",
      ctaLabel: "List for Free",
      ctaHref: "/sell",
    },
    {
      id: "free-week-2",
      title: "Name Your Price — Make an Offer",
      description: "Negotiate Directly",
      image:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=70",
      ctaLabel: "Make an Offer",
      ctaHref: "/products",
    },
    {
      id: "free-week-3",
      title: "Sell Faster with Promoted Listings",
      description: "Boost Your Ad",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=70",
      ctaLabel: "Get Started",
      ctaHref: "/sell",
    },
  ],

  // small tiles — static
  dailyDeals: {
    id: "daily-deals",
    title: "Daily Deals",
    description: "Fresh drops every morning",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&auto=format&fit=crop&q=70",
    ctaLabel: "View Deals",
    ctaHref: "/products?tag=deals",
  },

  tradeZone: {
    id: "trade-zone",
    title: "TradeZone",
    description: "Swap & Exchange",
    image:
      "https://images.unsplash.com/photo-1530099486328-e021101a494a?w=600&auto=format&fit=crop&q=70",
    ctaLabel: "Start Trading",
    ctaHref: "/products?tag=trade",
  },
};
