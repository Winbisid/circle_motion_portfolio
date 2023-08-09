interface FooterProps {
  isWheel: boolean;
}

export default function Footer({ isWheel }) {
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
        // alignItems: "flex-end",
      }}
    >
      <div
        // style={{
        //   position: "fixed",
        //   bottom: 10,
        //   left: 25,
        //   fontWeight: 600,
        //   color: "var(--light-blue)",
        // }}
        style={isWheel ? { ...style, left: 25 } : style}
      >
        Alpha 1.1.0
      </div>
      <div
        // style={{
        //   position: "fixed",
        //   bottom: 10,
        //   right: 25,
        //   fontWeight: 600,
        // }}
        style={isWheel ? { ...style, right: 25 } : style}
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
