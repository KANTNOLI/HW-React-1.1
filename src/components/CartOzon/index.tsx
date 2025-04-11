import style from "./CartOzon.module.css";

import { CartOzonIfc } from "../../Interfaces.interface";

function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const titles: string[] = ["asdsad", "123123", "qweqwe", "zxczxc", "jkljk"];

function CartOzon() {
  const cart: CartOzonIfc = {
    img: `${titles[rand(0, titles.length)]} link`,
    title: `${titles[rand(0, titles.length)]} name`,
    price: rand(100, 1000),
    disc: rand(10, 90),
    count: rand(10, 1000),
  };

  const disc =
    Math.floor((cart.price - (cart.price / 100) * cart.disc) * 100) / 100;

  return (
    <section className={style.cart}>
      <div className={style.img}>{cart.img}</div>
      <p>{cart.title}</p>
      <div className={style.prices}>
        <p className={style.actualPrice}>{disc}</p>
        <p className={style.mainPrice}>{cart.price}</p>
        <p className={style.discPrice}>{cart.disc}%</p>
      </div>
    </section>
  );
}

export default CartOzon;
