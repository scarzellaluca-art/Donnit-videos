import {
  DM_SANS_ITALIC_BASE64,
  DM_SANS_REGULAR_BASE64,
} from "./fonts-data";

// Self-hosted and base64-inlined instead of @remotion/google-fonts or a
// staticFile() URL: this sandbox's headless Chrome doesn't trust the
// outbound proxy's CA (fonts.gstatic.com fetch fails), and separately,
// @remotion/fonts' loadFont()+delayRender() reliably timed out once
// Remotion recycled the browser page partway through a multi-frame render
// (worked for a single still, never finished a full render). A plain
// @font-face with a data: URI has no network hop and no delayRender to get
// stuck, so it sidesteps both failure modes.
export const FONT_FAMILY = "DM Sans";

if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
    @font-face {
      font-family: "${FONT_FAMILY}";
      src: url(data:font/woff2;base64,${DM_SANS_REGULAR_BASE64}) format("woff2");
      font-weight: 100 1000;
      font-style: normal;
      font-display: block;
    }
    @font-face {
      font-family: "${FONT_FAMILY}";
      src: url(data:font/woff2;base64,${DM_SANS_ITALIC_BASE64}) format("woff2");
      font-weight: 100 1000;
      font-style: italic;
      font-display: block;
    }
  `;
  document.head.appendChild(style);
}

// Donnit brand tokens (per the editor brief). Green and turquoise encode a
// meaning, not just a palette choice — never mix them in the same clip.
export const COLORS = {
  donate: "#8FD678", // donación · gratis · impacto CO2
  rent: "#52B788", // alquiler · de pago ("Moments")
  background: "#FFFFFF", // luminoso — nunca oscuro ni frío
  textPrimary: "#1B4332", // texto oscuro sobre fondos claros, para legibilidad
};
