export default function Details({ product }) {
  const { imageURL, name, type, price, currency, color, gender } = product;

  return <div>

    <img src={imageURL} alt="" />
    <div>
      <p>{name}</p>
      <p>{type}</p>
      <p>{price} {currency}</p>
      <p>Color: {color}</p>
      <p>Gender: {gender}</p>

    </div>
  </div>

}
