import { Cart } from "../../Interfaces.interface";
import style from "./CardComponent.module.css";

interface props {
  cart: Cart;
}

function CardComponent({ cart }: props) {
  console.log(cart);

  return (
    <section className={style.cart}>
      <div className={style.cartImg}>{cart.imageUrl}</div>
      <p className={style.cartTitle}>{cart.title}</p>
      <p className={style.cartDesc}>{cart.description}</p>
    </section>
  );
}

export default CardComponent;
