export default function Card({ title, description, image }) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}