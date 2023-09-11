function SeaFood({ name, photoName, ingredients, price, soldOut }) {
  return (
    <li className={`sea-food ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : `${price}€`}</span>
      </div>
    </li>
  );
}
export default SeaFood;
