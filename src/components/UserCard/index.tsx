import style from "./UserCardComponent.module.css";
import { User } from "../../Interfaces.interface";
import UserListComponent from "../UserList";

interface props {
  Users: User[];
}

function UserCardComponent({ Users }: props) {
  return (
    <section className={style.list}>
      {Users.map((user, id) => (
        <UserListComponent key={id} user={user}></UserListComponent>
      ))}
    </section>
  );
}

export default UserCardComponent;
