export default function Item({ item, onHandleDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      ></input>
      <span
        style={
          item.packed
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onHandleDeleteItem(item.id)}>❌</button>
    </li>
  );
}
