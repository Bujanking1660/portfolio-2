export default function Marquee({ items, sep = "•" }) {
  const row = [...items, ...items];
  return (
    <div className="marquee w-full" aria-hidden="true">
      <div className="marquee__track">
        {row.map((item, i) => (
          <span key={i} className="marquee__item">
            {item}
            <span className="marquee__sep">{sep}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
