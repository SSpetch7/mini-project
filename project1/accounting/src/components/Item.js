import PropTypes from "prop-types";

const Item = (props) => {
  const { name, amount } = props;
  return (
    <li>
      {name} <span> {amount}</span>
    </li>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};
export default Item;
