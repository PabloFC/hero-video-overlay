# VideoOverlayComponent

This project is a React component that displays a background video with an overlay and centered content on top. It is built with [Vite](https://vitejs.dev/) for fast and modern development.

## Main Structure

- **src/components/VideOverlay.jsx**  
  Main component that renders the video, overlay, and centered content.

- **src/assets/hero_video.mp4**  
  Video file used as the background (add your own video to this path if it doesn't exist).

- **src/App.css**  
  Styles for the responsive layout, video, overlay, and content.

## Features

- Responsive and centered background video.
- Semi-transparent dark overlay for better content readability.
- Vertically and horizontally centered content over the video.
- Mobile-friendly design.

## Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd VideoOverlayComponent
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customization

- Change the background video by replacing `src/assets/hero_video.mp4`.
- Modify the content in `VideOverlay.jsx`.
- Adjust styles in `App.css` to change colors, sizes, or responsiveness.

## File Structure

```
src/
  assets/
    hero_video.mp4
  components/
    VideOverlay.jsx
  App.css
  main.jsx
```
