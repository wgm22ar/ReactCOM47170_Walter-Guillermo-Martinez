const ItemListContainer = ({ mensaje }) => {
  return (
    <div class="alert alert-primary" role="alert">
      <h2 class="alert-heading">{mensaje}</h2>
      You successfully read this important alert message.
      <a href="#!" class="alert-link">
        It contains a link and heading.
      </a>
    </div>
  );
};
export default ItemListContainer;
