import style from "./UserListComponent.module.css";

import { User } from "../../Interfaces.interface";

interface props {
  user: User;
}

// по логике UserList должен отобр юзеров, но по тз наоборот, так что как есть, прост поменять неймы

function UserListComponent({ user }: props) {
  return (
    <section className={style.user}>
      <div className={style.userImg}>{user.avatarUrl}</div>
      <p className={style.userTitle}>{user.name}</p>
      <p className={style.userDesc}>{user.email}</p>
    </section>
  );
}

export default UserListComponent;
