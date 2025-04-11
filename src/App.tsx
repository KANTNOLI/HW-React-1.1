import CardComponent from "./components/Card";

import style from "./App.module.css";
import { Cart, User } from "./Interfaces.interface";
import UserCardComponent from "./components/UserCard";
import ThemeSwitcherComponent from "./components/ThemeSwitcher";
import { useEffect, useRef, useState } from "react";
import CartOzon from "./components/CartOzon";

function App() {
  const bodyRef = useRef(document.body);
  const [isDarkMode, setisDarkMode] = useState<boolean>(true);

  useEffect(() => {
    bodyRef.current.style.background = isDarkMode
      ? "rgb(34, 34, 34)"
      : "rgb(184, 184, 184)";
  }, [isDarkMode]);

  const Cart: Cart = {
    imageUrl: "img link",
    title: "Title title",
    description: "description description description description description",
  };

  const Users: User[] = [
    { avatarUrl: "img link1", email: "email@mail1", name: "name 1" },
    { avatarUrl: "img link2", email: "email@mail2", name: "name 2" },
    { avatarUrl: "img link3", email: "email@mail3", name: "name 3" },
  ];

  return (
    <>
      <p className={style.condition}>
        1. Компонент карточки: Создайте компонент CardComponent, который
        принимает следующие “пропсы”: title (строка), description (строка) и
        imageUrl (строка). Отобразите эти данные в виде карточки с изображением,
        заголовком и описанием.
      </p>
      <p className={style.condition}>
        2. Список пользователей: Создайте компонент UserListComponent, который
        принимает массив из 3-ёх объектов пользователей через “пропс”. Каждый
        объект должен содержать свойства: name, email и avatarUrl. Отобразите
        список пользователей, используя ещё один созданный вами компонент
        UserCardComponent, который принимает данные о пользователе в виде
        объекта через "пропс”. Задание не подразумевает оптимизацию. Передавать
        каждый объект можно через доступ к нему по индексам arr[0], arr[1],
        arr[2] при условии, что их 3 в массиве.
      </p>
      <p className={style.condition}>
        3. Настройки темы: Создайте компонент ThemeSwitcherComponent, который
        принимает “пропс” isDarkMode (булевое значение). В зависимости от
        значения этого свойства, измените несколько стилистических свойств
        компонента (например, цвет фона и текст).
      </p>
      <p className={style.condition}>
        4. Компонент карточка товара OZON): Реализуйте для значений, выделенных
        синей рамкой зависимость от друг друга. Серым зачёркнута стартовая цена.
        Цена слева должна формироваться от стартовой - указанный процент скидки.
        Остальные значения (осталось шт, название товара, рейтинг, кол-во
        отзывов и дата доставки), которые выделены красной рамкой генерировать
        случайным образом из заготовленного массива объектов. Стартовую
        стоимость товара рандомить случайным образом.
      </p>
      <p className={style.condition}>
        Усложнение: реализовать возможносьт принимать стартовые данные
        посредством “пропса”
      </p>
      <CardComponent cart={Cart}></CardComponent>

      <UserCardComponent Users={Users}></UserCardComponent>

      <ThemeSwitcherComponent
        callback={(setValue: boolean) => setisDarkMode(setValue)}
        value={isDarkMode}
      ></ThemeSwitcherComponent>

      <CartOzon></CartOzon>
    </>
  );
}

export default App;
