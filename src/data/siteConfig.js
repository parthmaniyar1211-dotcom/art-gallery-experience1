/**
 * Site Configuration for The Sketchy Wall
 * Owner / Client: Kapil Yadav
 * 
 * Centralised configuration file for easy client updates, contact details,
 * social links, announcement text, and brand messaging.
 */

export const siteConfig = {
  brandName: "The Sketchy Wall",
  tagline: "Art that makes your space feel like you.",
  clientName: "Kapil Yadav",
  clientRole: "Brand Founder & Creative Director",
  demoNotice: "Website Concept & Interactive Preview — Built for Kapil Yadav",

  // Announcement Bar Text (rotates or single message)
  announcements: [
    "Art that makes your space feel like you.",
    "Complimentary Bespoke Framing Consultation with Every Order",
    "Museum-Grade 310 GSM Cotton Rag Archival Prints",
    "Pan-India White Glove Delivery & Worldwide Shipping"
  ],

  // Contact & Inquiries (Placeholders ready to replace with client's actual details)
  contact: {
    whatsappNumber: "+91 98765 43210", // Client placeholder
    whatsappClean: "919876543210",     // Digits only for wa.me API link
    email: "curation@thesketchywall.com",
    supportEmail: "hello@thesketchywall.com",
    studioAddress: "Design Atelier, DLF Cyber City / South Ext., New Delhi, India",
    workingHours: "Monday – Saturday: 10:00 AM – 7:30 PM IST",
    instagram: "https://instagram.com/thesketchywall",
    instagramHandle: "@thesketchywall",
    pinterest: "https://pinterest.com/thesketchywall",
    pinterestHandle: "@thesketchywall",
    facebook: "https://facebook.com/thesketchywall",
  },

  // Framing Options available for wall art
  frameOptions: [
    {
      id: "oak",
      name: "Natural Nordic Oak",
      description: "Solid natural white oak with warm grain and protective acrylic glass",
      colorCode: "#C8A676",
      borderClass: "border-[#C8A676]",
      priceMultiplier: 1.25,
      previewBorder: "16px solid #C8A676"
    },
    {
      id: "black",
      name: "Sleek Charcoal Metal",
      description: "Matte anodized aluminum profile for contemporary gallery contrast",
      colorCode: "#1E1C1A",
      borderClass: "border-[#1E1C1A]",
      priceMultiplier: 1.20,
      previewBorder: "16px solid #1E1C1A"
    },
    {
      id: "walnut",
      name: "Deep Walnut Wood",
      description: "Rich dark walnut with organic woodgrain for moody, timeless spaces",
      colorCode: "#5C3A21",
      borderClass: "border-[#5C3A21]",
      priceMultiplier: 1.30,
      previewBorder: "16px solid #5C3A21"
    },
    {
      id: "canvas_float",
      name: "Floating Canvas Wood Tray",
      description: "Museum-grade 100% cotton canvas stretched with a 0.5-inch shadow reveal",
      colorCode: "#8C7355",
      borderClass: "border-[#8C7355]",
      priceMultiplier: 1.40,
      previewBorder: "12px solid #8C7355"
    },
    {
      id: "rolled",
      name: "Print Only (Archival Tube)",
      description: "Shipped rolled in protective archival tube; ready for custom framers",
      colorCode: "#E2D9CB",
      borderClass: "border-transparent",
      priceMultiplier: 1.0,
      previewBorder: "0px solid transparent"
    }
  ],

  // Standard Dimensions
  sizeOptions: [
    { id: "sm", name: "A3 Gallery", dimensions: "30 x 42 cm / 12\" x 16.5\"", priceBase: 2499, popular: false },
    { id: "md", name: "A2 Living", dimensions: "42 x 60 cm / 16.5\" x 23.4\"", priceBase: 3999, popular: true },
    { id: "lg", name: "A1 Statement", dimensions: "60 x 84 cm / 23.4\" x 33.1\"", priceBase: 6499, popular: false },
    { id: "xl", name: "Grand Salon", dimensions: "84 x 118 cm / 33\" x 46.5\"", priceBase: 9999, popular: false }
  ],

  // Proposed Brand Pillars (Why Choose Us)
  pillars: [
    {
      id: 1,
      title: "Thoughtfully Curated Art",
      description: "Each artwork in our catalogue is hand-selected to bring architectural balance, emotional grounding, and distinct character to contemporary rooms.",
      iconName: "Palette"
    },
    {
      id: 2,
      title: "Styles for Every Space",
      description: "From serene Japandi line work and earth-toned abstract textures to monumental canvas statements tailored to varied interior themes.",
      iconName: "LayoutGrid"
    },
    {
      id: 3,
      title: "Easy Enquiries & Advisory",
      description: "Direct styling guidance via WhatsApp or consultation. Share your wall dimensions, paint swatch, or floor plan for bespoke suggestions.",
      iconName: "MessageCircle"
    },
    {
      id: 4,
      title: "Museum-Grade Quality",
      description: "Printed on heavy 310 GSM acid-free fine art papers with 12-colour archival pigment inks guaranteed to resist fading for over 80 years.",
      iconName: "Award"
    }
  ],

  // Testimonials (clearly marked as proposed demo content)
  testimonials: [
    {
      id: 1,
      name: "Radhika & Ananya Sen",
      location: "Gurugram, Penthouse",
      artwork: "Quiet Horizons & Earth in Motion",
      quote: "The Sketchy Wall helped us transform a cold double-height living wall into our favourite corner of the apartment. The framing is extraordinarily refined.",
      rating: 5,
      isDemo: true
    },
    {
      id: 2,
      name: "Karan Malhotra",
      location: "Mumbai, Bandra West",
      artwork: "The Golden Hour Diptych",
      quote: "Finding wall art that doesn't feel mass-produced was impossible until I discovered this curation. The matte paper texture and natural oak frames are sublime.",
      rating: 5,
      isDemo: true
    },
    {
      id: 3,
      name: "Sneha Kulkarni",
      location: "Bengaluru, Indiranagar",
      artwork: "Organic Forms No. 02",
      quote: "The interactive room preview helped me visualise the exact scale above my credenza before placing the inquiry. Seamless WhatsApp advisory from start to finish.",
      rating: 5,
      isDemo: true
    }
  ]
};
