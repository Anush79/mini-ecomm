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

/**
 *   "id": 1,
  "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-polo-men.png",
  "name": "Black Polo",
  "type": "Polo",
  "price": 250,
  "currency": "INR",
  "color": "Black",
  "gender": "Men",
  "quantity": 3

*/