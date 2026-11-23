import Link from "next/link";

export const dynamic = "force-dynamic";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
        padding: "20px",
        background: "var(--bg)",
        color: "var(--ink)",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "56px",
            margin: "0 0 12px",
            fontFamily: "var(--font-serif), Georgia, serif",
            color: "var(--gold)",
          }}
        >
          404
        </h1>
        <p style={{ margin: "0 0 20px", color: "var(--muted)" }}>Page not found.</p>
        <Link
          href="/"
          style={{
            color: "var(--gold)",
            textDecoration: "none",
            borderBottom: "1px solid var(--gold)",
          }}
        >
          ← Return to portfolio
        </Link>
      </div>
    </div>
  );
}
