# The Sketchy Wall — Premium Wall Art & 3D Virtual Gallery

An artistic, modern, editorial website and interactive **3D Virtual Art Gallery** built for **The Sketchy Wall**, an art and contemporary home décor brand owned by **Kapil Yadav**.

Inspired by museum-grade contemporary art galleries (such as [Dessine Art](https://dessineart.com/)), this website features warm ivory and sand palettes, serif typography, authentic client interior installation photography, and an interactive **Three.js / React Three Fiber 3D Virtual Atelier**.

---

## Live Local Preview

The development server is actively running:
- **Local URL:** [http://localhost:5173/](http://localhost:5173/)
- **Network URL:** `http://192.168.29.96:5173/`

To start manually at any time:
```bash
npm install
npm run dev
```

To build for production:
```bash
npm run build
```

---

## 3D Virtual Gallery Features

The 3D Gallery is built using **Three.js**, **@react-three/fiber**, and **@react-three/drei**, integrated as an interactive modal experience while keeping the main 2D website blazing fast through code-splitting (`React.lazy`).

### 1. Architectural Virtual Interior
- **Warm Ivory Walls:** Subtle plaster lime-wash finish reflecting directional light.
- **Wooden Flooring:** Procedural plank wood flooring with natural grain variation.
- **Soft Natural Lighting:** Directional sunlight streaming from a large minimalist architectural window, soft ambient fill, and a dedicated overhead picture spotlight focused on the artwork.
- **Scandinavian Furniture:** Curved bouclé seating, accent throw cushions, tapered wooden legs, designer pedestal side table with ceramic urn and dried stems, and an architectural floor lamp with a warm glowing shade.

### 2. 3D Framed Artwork & Materials
- Realistic 3D frame geometry with depth, bevels, and inner off-white mat board (passé-partout).
- **4 Hardwood & Metallic Finishes:**
  1. *Natural Nordic Oak* (`#C29F6F`)
  2. *Sleek Matte Charcoal Metal* (`#1B1917`)
  3. *Deep Walnut Wood* (`#3E2413`)
  4. *Brushed Brass* (`#C9A55C`)
- **Real-Time Texture Swapping:** Seamlessly switch between all 11 client artworks from Kapil Yadav's collection.
- Protective optical acrylic reflection highlight with subtle clearcoat.
- Built-in fallback rendering if texture loading encounters an error.

### 3. Interactive Camera Rig & Navigation Controls
- **Orbiting & Zooming:** Smooth camera rotation and zoom with damping factor (`0.06`).
- **Safety Boundaries:**
  - `minDistance={1.4}` & `maxDistance={4.5}`: Prevents camera from passing through walls or clipping into furniture.
  - `maxPolarAngle={Math.PI / 2 - 0.04}`: Strictly prevents camera from dipping below the wooden floor.
  - `minAzimuthAngle={-Math.PI / 3.2}` & `maxAzimuthAngle={Math.PI / 3.2}`: Constrains viewing to the interior room.
- **Focus Artwork Mode:** Smooth camera tween directly in front of the artwork for close-up texture inspection.
- **Reset View Button:** Instantly restores the camera to its prime viewing position.
- **Clear Return Button:** Prominent **“Return to Website”** button to seamlessly return to the 2D page.

### 4. Customization Tray
- **3 Room Styles:** *Scandinavian Ivory*, *Loft Concrete*, and *Terracotta Atelier*.
- **3 Lighting Moods:** *Natural Daylight*, *Golden Hour Sunset*, and *Evening Ambient Lamps*.
- **Direct WhatsApp Consultation:** Formats the selected artwork, room style, and chosen frame finish into an instant WhatsApp enquiry for Kapil Yadav.

### 5. Performance & Mobile Architecture
- **Code-Splitting:** The 3D scene bundle is isolated via `React.lazy()` into its own chunk (`Gallery3DModal.js`), keeping the initial homepage bundle to just ~83 kB gzipped.
- **Hardware Detection:** Built-in `isWebGLAvailable()` check with an elegant static 2D fallback for devices with WebGL disabled.
- **Zero Heavy Asset Downloads:** Furniture and room architecture are procedurally rendered with low-polygon geometry, eliminating multi-megabyte GLTF loading delays.
- Full touch gesture support for mobile devices.

---

## Client Photography Mapping (`website photos`)

All 11 authentic photographs from `c:\Users\parth\Downloads\website photos` are preserved untouched and served via `public/images/artwork/`:

| Artwork Title | Original File | Asset Path | 3D & 2D Features |
| :--- | :--- | :--- | :--- |
| **The Azure Steed** | `WhatsApp Image 2026-10-24 at 18.37.19.jpeg` | `/images/artwork/art-10-azure-steed.jpeg` | **Hero Flagship**, 3D Room Default, Statement Pieces |
| **Concentric Orbit** | `WhatsApp Image 2026-10-24 at 18.37.17 (1).jpeg` | `/images/artwork/art-05-concentric-orbit.jpeg` | Hero Switcher, 3D Wall Art, Japandi Entryway |
| **The Golden Embrace** | `WhatsApp Image 2026-10-24 at 18.37.19 (1).jpeg` | `/images/artwork/art-08-golden-embrace.jpeg` | Hero Switcher, 3D Wall Art, Grand Salon |
| **Solarium Reverie** | `WhatsApp Image 2026-10-24 at 18.37.16 (1).jpeg` | `/images/artwork/art-03-solarium-reverie.jpeg` | Hero Switcher, 3D Wall Art, Modern Prints |
| **Olive Alcove** | `WhatsApp Image 2026-10-24 at 18.37.17.jpeg` | `/images/artwork/art-06-olive-alcove.jpeg` | 3D Wall Art, Walnut Reading Alcove Setting |
| **Modernist Visage** | `WhatsApp Image 2026-10-24 at 18.37.20.jpeg` | `/images/artwork/art-11-modernist-visage.jpeg` | 3D Wall Art, Bauhaus Suite, Studio Setting |
| **Calligraphic Motion** | `WhatsApp Image 2026-10-24 at 18.37.18.jpeg` | `/images/artwork/art-07-calligraphic-motion.jpeg` | 3D Wall Art, Brand Story, Urban Loft Setting |
| **Botanical Muse** | `WhatsApp Image 2026-10-24 at 18.36.05.jpeg` | `/images/artwork/art-02-botanical-muse.jpeg` | 3D Wall Art, Botanical Suite, Terracotta Corner |
| **Balanced Strata** | `WhatsApp Image 2026-10-24 at 18.37.19 (2).jpeg` | `/images/artwork/art-09-balanced-strata.jpeg` | 3D Wall Art, Dining Room Table Setting |
| **The Monolith Silhouette** | `WhatsApp Image 2026-10-24 at 18.37.16.jpeg` | `/images/artwork/art-04-monolith-silhouette.jpeg` | 3D Wall Art, Statement Suite, Corridor Setting |
| **The Triad Gallery Suite** | `WhatsApp Image 2026-10-24 at 18.35.20.jpeg` | `/images/artwork/art-01-gallery-hallway.jpeg` | 3D Wall Art, Gallery Sets, Corridor Promenade |

---

## 3D Gallery File Structure

```
src/
├── components/
│   ├── gallery3d/
│   │   ├── Gallery3DModal.jsx      # Top-level 3D container, controls & tray
│   │   ├── Gallery3DSection.jsx    # Homepage featured 3D invitation section
│   │   ├── GalleryCanvas.jsx       # R3F Canvas with shadows & tone mapping
│   │   ├── RoomEnvironment.jsx     # Virtual architectural room, furniture & lighting
│   │   ├── FramedArtwork3D.jsx     # 3D framed artwork with depth & materials
│   │   └── CameraRig.jsx           # OrbitControls with collision & focus tween
│   ├── Header.jsx                  # Header with "Explore 3D Gallery" CTA
│   ├── Hero.jsx                    # Hero with "Explore 3D Gallery" button
│   ├── ProductCard.jsx             # Product card with "3D Room" shortcut
│   ├── ProductModal.jsx            # Detail modal with "View in 3D" button
│   ├── ShopSection.jsx             # Catalog with 3D integration
│   ├── GallerySection.jsx          # Complete 11-artwork installation gallery
│   └── ...                         # Existing 2D components preserved
└── utils/
    └── webgl.js                    # WebGL support detection utility
```

---

## Deployment to Vercel

The project is pre-configured for one-click Vercel deployment:

1. Push this directory to your GitHub or GitLab repository.
2. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import the repository.
4. Vercel automatically detects:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **"Deploy"**.
