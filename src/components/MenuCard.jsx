import Reveal from "./Reveal.jsx";

export default function MenuCard({ item, index }) {
  return (
    <Reveal className="menu-card" delay={Math.min(index * 0.05, 0.25)}>
      <img src={item.image} alt={item.title} />
      <div className="menu-card-body">
        <div className="menu-top"><h3>{item.title}</h3><span>{item.sizes[0].price}</span></div>
        <p className="menu-meta">{item.preorder}</p>
        <p>{item.description}</p>
        {item.discount && <div className="discount-pill">{item.discount}</div>}
        <div className="size-list">
          {item.sizes.map((size) => (
            <div className="size-row" key={size.label}>
              <span>{size.label}</span>
              <strong>{size.oldPrice && <em>{size.oldPrice}</em>}{size.price}</strong>
            </div>
          ))}
        </div>
        <div className="ingredients"><h4>Ingredients</h4><ul>{item.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}</ul></div>
      </div>
    </Reveal>
  );
}
