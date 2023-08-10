interface FooterProps {
  isWheel: boolean;
}

export default function Footer({ isWheel }: FooterProps) {
  let style: object = {};

  if (isWheel) {
    style = {
      position: "fixed",
      bottom: 10,
      fontWeight: 600,
    };
  }

  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
        color: "var(--light-blue)",
      }}
    >
      <div style={isWheel ? { ...style, left: 25 } : style}>Alpha 1.1.1</div>
      <div style={isWheel ? { ...style, right: 25 } : style}>
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
