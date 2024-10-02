import styles from "./users.module.css";
import { SelectUserRole } from "./select-user-role";
import {  useSelector } from "react-redux";


export const UpdateUsers = ({ roles, removeUser, saveNewRole }) => {
  const updateUsers = useSelector((state) => state.users.users); // Убедитесь, что здесь правильный путь

  return (
    <div>
      {updateUsers.map((user) => (
        <div key={user.id} className={styles.column}>
          <div className={styles.login}>{user.login}</div>

          <SelectUserRole
            roles={roles}
            userRoleId={user.roleId}
            //   userId={user.id}
            saveNewRole={(newUserRole) => saveNewRole(user.id, newUserRole)}
          />
          <button onClick={() => removeUser(user.id)} className={styles.btn}>
            remove
          </button>
        </div>
      ))}
    </div>
  );
};
