const Item = (props) => {
  const { name, amount } = props;
  return (
    <li>
      {name} <span> {amount}</span>
    </li>
  );
};

export default Item;
