import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 96,
        background: "#0a0a0a",
        color: "#ededed",
      }}
    >
      <div style={{ fontSize: 28, color: "#818cf8", marginBottom: 24 }}>
        {profile.role}
      </div>
      <div style={{ fontSize: 72, fontWeight: 600, lineHeight: 1.15 }}>
        {profile.name}
      </div>
      <div
        style={{ fontSize: 32, color: "#a1a1a1", marginTop: 24, maxWidth: 900 }}
      >
        {profile.tagline}
      </div>
    </div>,
    { ...size },
  );
}
