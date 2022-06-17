import "./card.scss";

function Card({ children, style }) {
  return (
    <div style={style} className="card">
      {children}
    </div>
  );
}

export default Card;
