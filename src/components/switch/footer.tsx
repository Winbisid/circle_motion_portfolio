export default function Footer() {
  return (
    <footer>
      <div
        style={{
          position: "fixed",
          bottom: 10,
          left: 25,
          fontWeight: 600,
          color: "var(--light-blue)",
        }}
      >
        Alpha 1.1.0
      </div>
      <div
        style={{
          position: "fixed",
          bottom: 10,
          right: 25,
          fontWeight: 600,
        }}
      >
        <a
          href="https://winbisid.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          title="production deploy"
        >
          1.0.2
        </a>
      </div>
    </footer>
  );
}
