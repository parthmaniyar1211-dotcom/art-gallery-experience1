/**
 * Room Inspiration & Interactive 2D Visualizer Presets
 * Using Client Supplied Photography from "website photos"
 */

export const roomInspirationSpaces = [
  {
    id: "living-room",
    name: "Living Rooms",
    tagline: "The Gathering Sanctuary",
    title: "Monumental presence above linen seating and timber beams",
    description: "Anchor double-height ceilings and rustic reclaimed wood beams with grand format canvas statements that balance warm organic textures.",
    image: "/images/artwork/art-10-azure-steed.jpeg",
    artworkFeatured: {
      name: "The Azure Steed",
      frame: "Natural Floating Oak Tray",
      dimensions: "Grand Salon Scale (84 x 118 cm)"
    },
    palette: ["#2A4263", "#74704B", "#38332D", "#FAF8F5"],
    stylingTip: "Hang 8–10 inches above the sofa back to create a continuous visual bridge between furniture and architecture."
  },
  {
    id: "reading-nook",
    name: "Reading Nooks & Alcoves",
    tagline: "Intimate Architectural Retreats",
    title: "Rich walnut wood paneling and brass sconce warmth",
    description: "Transform built-in banquettes and quiet reading alcoves into personal sanctuaries with contemplative figurative art framed in deep timber.",
    image: "/images/artwork/art-06-olive-alcove.jpeg",
    artworkFeatured: {
      name: "Olive Alcove",
      frame: "Deep Walnut Wood",
      dimensions: "Vertical Alcove (42 x 60 cm)"
    },
    palette: ["#5F664C", "#5C3A21", "#FAF8F5", "#171411"],
    stylingTip: "Pair with directional warm-white (2700K) wall sconces to highlight the textural surface."
  },
  {
    id: "dining-space",
    name: "Dining Spaces",
    tagline: "Convivial Hospitality & Focus",
    title: "Sedimentary balance above fluted dining tables",
    description: "Rich terracotta and stone strata art creating a quiet, grounding presence during communal meals and evening conversations.",
    image: "/images/artwork/art-09-balanced-strata.jpeg",
    artworkFeatured: {
      name: "Balanced Strata",
      frame: "Sleek Charcoal Metal",
      dimensions: "Dining Scale (60 x 84 cm)"
    },
    palette: ["#B8583B", "#C8A676", "#171411", "#FAF8F5"],
    stylingTip: "Position center-aligned to the dining table at seated eye level (approx. 56–58 inches from floor to center)."
  },
  {
    id: "grand-salon",
    name: "Grand Salons",
    tagline: "Parquet Elegance & Conversation",
    title: "Golden contours commanding high-ceiling lounges",
    description: "Shimmering metallic ochres and bold continuous contours harmonize effortlessly with herringbone parquet and velvet seating.",
    image: "/images/artwork/art-08-golden-embrace.jpeg",
    artworkFeatured: {
      name: "The Golden Embrace",
      frame: "Hand-Waxed Natural Oak",
      dimensions: "Grand Square (100 x 100 cm)"
    },
    palette: ["#C59A4E", "#1E1C1A", "#DFD7CA", "#FAF8F5"],
    stylingTip: "Anchor between swivel armchairs to establish an inviting conversational focal point."
  },
  {
    id: "entryway",
    name: "Japandi Entryways",
    tagline: "First Impressions of Calm",
    title: "Geometric stillness welcoming every homecoming",
    description: "A dual-hemisphere mandala of concentric stippling bringing monastic serenity above a rustic entry bench with potted olive greenery.",
    image: "/images/artwork/art-05-concentric-orbit.jpeg",
    artworkFeatured: {
      name: "Concentric Orbit",
      frame: "Natural Nordic Oak Floating Frame",
      dimensions: "Square Salon (90 x 90 cm)"
    },
    palette: ["#1B2232", "#EFE8DC", "#8C7355", "#FAF8F5"],
    stylingTip: "Keep surrounding surfaces minimal to let the geometric radial rhythm take full focus."
  },
  {
    id: "corridor",
    name: "Gallery Corridors",
    tagline: "The Promenade Experience",
    title: "Illuminated triptychs along architectural hallways",
    description: "Convert transitional hallway corridors into private museum promenades with synchronized cubist suites and ceiling spotlights.",
    image: "/images/artwork/art-01-gallery-hallway.jpeg",
    artworkFeatured: {
      name: "The Triad Gallery Suite (3 Artworks)",
      frame: "Matte Anodized Aluminum Profile",
      dimensions: "Set of Three (42 x 60 cm each)"
    },
    palette: ["#B8583B", "#171411", "#3E4530", "#FAF8F5"],
    stylingTip: "Maintain a strict 4-inch gap between frames and install 30-degree overhead spotlights for gallery authenticity."
  }
];

// Interactive 2D Room Visualizer Environments using Client Photos
export const visualizerRooms = [
  {
    id: "room-living-sofa",
    name: "Nordic Living Room",
    type: "Living Room",
    wallColor: "#EAE6DF",
    bgImage: "/images/artwork/art-03-solarium-reverie.jpeg",
    wallZone: {
      top: "14%",
      left: "48%",
      maxHeight: "36%"
    },
    description: "Linen sofa with oak coffee table and dried pampas grass"
  },
  {
    id: "room-wood-alcove",
    name: "Walnut Reading Alcove",
    type: "Reading Nook",
    wallColor: "#5C3A21",
    bgImage: "/images/artwork/art-06-olive-alcove.jpeg",
    wallZone: {
      top: "16%",
      left: "50%",
      maxHeight: "38%"
    },
    description: "Walnut wood-paneled alcove with brass wall sconces"
  },
  {
    id: "room-dining-pedestal",
    name: "Contemporary Dining",
    type: "Dining Space",
    wallColor: "#F2EFE9",
    bgImage: "/images/artwork/art-09-balanced-strata.jpeg",
    wallZone: {
      top: "12%",
      left: "46%",
      maxHeight: "36%"
    },
    description: "Black fluted dining table with minimalist tea ceramics"
  },
  {
    id: "room-grand-salon",
    name: "Herringbone Grand Salon",
    type: "Grand Salon",
    wallColor: "#E2DBD1",
    bgImage: "/images/artwork/art-08-golden-embrace.jpeg",
    wallZone: {
      top: "12%",
      left: "50%",
      maxHeight: "38%"
    },
    description: "Classical salon with herringbone parquet and ochre armchairs"
  }
];
