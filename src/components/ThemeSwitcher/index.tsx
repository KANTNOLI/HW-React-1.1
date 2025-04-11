import style from "./ThemeSwitcherComponent.module.css";

interface props {
  callback: (setValue: boolean) => void;
  value: boolean;
}

function ThemeSwitcherComponent({ callback, value }: props) {
  console.log(value, callback);

  return (
    <button onClick={() => callback(!value)} className={style.button}>
      choose theme
    </button>
  );
}

export default ThemeSwitcherComponent;
