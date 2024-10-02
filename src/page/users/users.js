import { useEffect, useState } from "react";
import { getUsersOperation } from "../../api/operations/get-users-operation";
import styles from "./users.module.css";
import { getRolesOperation } from "../../api/operations/get-roles-operation";
import { SelectUserRole } from "./select-user-role";
import { updateUserRoleOperation } from "../../api/operations/update-user-role-operation";
import { useSelector } from "react-redux";
import { removeUserOeration } from "../../api/operations/remove-user-operation";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [flag, setFlag] = useState(false);

  //   const [roles, setRoles] = useState([]);
  //   const userRole = useSelector();

  useEffect(() => {
    Promise.all([getUsersOperation(), getRolesOperation()]).then(
      ([loadedUsers, loadedRoles]) => {
        setUsers(loadedUsers);
        setRoles(loadedRoles);
      }
    );
  }, [flag]);

  //   const saveNewRole = () => setFlag(!flag);

  //   console.log(flag);

  //   const saveNewRole = (userId, newUserRole) => {
  //     updateUserRoleOperation(userId, newUserRole).then(() => {
  //       setFlag(!flag);

  //     });
  //   };

  const saveNewRole = async (userId, newUserRole) => {
    updateUserRoleOperation(userId, newUserRole).then(() => {
      setFlag(!flag);
      // Можно вызвать обновление пользователей после изменения роли
      //   return getUsersOperation().then((loadedUsers) => {
      //     setUsers(loadedUsers);
      //   });
    });
  };

  const removeUser = async (userId) => {
    removeUserOeration(userId).then(() => {
      setFlag(!flag);
    });
    const loadedUsers = await getUsersOperation(); // Загружаем обновленный список пользователей
    setUsers(loadedUsers); // Устанавливаем обновленный список
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Поменять роль</h2>
      <div className={styles.tableRow}>
        {users.map((user) => (
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
    </div>
  );
};
