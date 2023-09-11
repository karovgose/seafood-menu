import SeaFood from "./SeaFood";

const seafoodData = [
  {
    name: "Seafood Pasta",
    ingredients: "Pasta with a mix of seafood, garlic, and white wine sauce",
    price: 20,
    photoName: "seafood/pasta.jpg",
    soldOut: false,
  },
  {
    name: "Grilled Shrimp",
    ingredients: "Grilled shrimp with lemon butter sauce",
    price: 22,
    photoName: "seafood/shrimp.jpg",
    soldOut: false,
  },
  {
    name: "Lobster Bisque",
    ingredients: "Creamy lobster soup with sherry",
    price: 14,
    photoName: "seafood/lobster-bisque.jpg",
    soldOut: false,
  },
  {
    name: "Baked Salmon",
    ingredients: "Salmon fillet baked with dill and lemon",
    price: 18,
    photoName: "seafood/salmon.jpg",
    soldOut: true,
  },
  {
    name: "Clam Chowder",
    ingredients: "Creamy clam soup with bacon and potatoes",
    price: 12,
    photoName: "seafood/clam-chowder.jpg",
    soldOut: false,
  },
  {
    name: "Grilled Tuna Steak",
    ingredients: "Tuna steak grilled to perfection with a citrus glaze",
    price: 24,
    photoName: "seafood/tuna-steak.jpg",
    soldOut: false,
  },
];

function Menu() {
  return (
    <div className="menu">
      <h2>Our menu</h2>
      <ul className="sea-foods">
        {seafoodData.map(({ name, photoName, ingredients, price, soldOut }) => (
          <SeaFood
            name={name}
            photoName={photoName}
            ingredients={ingredients}
            price={price}
            soldOut={soldOut}
            key={name}
          />
        ))}
      </ul>
    </div>
  );
}
export default Menu;
