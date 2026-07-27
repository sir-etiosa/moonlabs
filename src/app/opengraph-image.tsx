import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/config";

export const alt = `${site.brand} — ${site.tagline}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "src/app/assets/moonlabs.png")
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#040d20",
          backgroundImage:
            "linear-gradient(rgba(130,170,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(130,170,255,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 56, padding: "0 80px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            width={220}
            height={220}
            style={{ borderRadius: "50%" }}
          />
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 760 }}>
            <div style={{ fontSize: 84, fontWeight: 700, color: "#eaf1fc" }}>
              {site.brand}
            </div>
            <div style={{ fontSize: 34, color: "#f7c948", marginTop: 20 }}>
              {site.tagline}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
