import { useEffect, useState } from "react";
import { getUsersOperation } from "../../api/operations/get-users-operation";
import styles from "./users.module.css";
import { getRolesOperation } from "../../api/operations/get-roles-operation";
import { updateUserRoleOperation } from "../../api/operations/update-user-role-operation";
import { removeUserOeration } from "../../api/operations/remove-user-operation";
import { useDispatch } from "react-redux";
import { setUsersAction } from "../../api/action/set-users-action";
import { setUpdateUserAction } from "../../api/action/set-update-users-actions";
import { UpdateUsers } from "./update-users";

export const Users = () => {
  const [roles, setRoles] = useState([]);
  const [flag, setFlag] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([getUsersOperation(), getRolesOperation()]).then(
      ([loadedUsers, loadedRoles]) => {
        dispatch(setUsersAction(loadedUsers));
        setRoles(loadedRoles);
      }
    );
  }, [flag, dispatch]);

  const saveNewRole = async (userId, newUserRole) => {
    updateUserRoleOperation(userId, newUserRole).then((updateUser) => {
      dispatch(setUpdateUserAction(updateUser));
      setFlag(!flag);
    });
  };

  const removeUser = async (userId) => {
    removeUserOeration(userId).then(() => {
      setFlag(!flag);
    });
    const loadedUsers = await getUsersOperation();
    dispatch(setUsersAction(loadedUsers));
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Поменять роль</h2>
      <div className={styles.tableRow}>
        <UpdateUsers
          roles={roles}
          removeUser={removeUser}
          saveNewRole={saveNewRole}
        />
        {/* {users.map((user) => (
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
        ))} */}
      </div>
    </div>
  );
};
