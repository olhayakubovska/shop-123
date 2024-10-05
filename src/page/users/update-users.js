import { useDispatch } from "react-redux";
import { setUpdateUserAction } from "../../api/action/set-update-users-actions";
import { updateUserRoleOperation } from "../../api/operations/update-user-role-operation";
import styles from "./users.module.css";
// import { SelectUserRole } from "./select-user-role";
// import { useSelector } from "react-redux";
import { useState } from "react";

export const UpdateUsers = ({
  id,
  roles,
  removeUser,
  login,
  roleId,
  saveNewRole,
}) => {
  const [newRole, setNewRole] = useState(roleId);

  const onRoleChange = ({ target }) => {
    setNewRole(Number(target.value));
  };

  const unsavedRole = newRole !== roleId;

  return (
    <div>
      <div key={id} className={styles.column}>
        <div className={styles.login}>{login}</div>

        {/* <SelectUserRole
          roles={roles}
          userRoleId={roleId}
          //   userId={user.id}
          saveNewRole={(newUserRole) => saveNewRole(roleId, newUserRole)}
        /> */}

        <select
          className={styles.selectRoles}
          value={newRole} // Если newRole нет, берем userRoleId
          onChange={onRoleChange}
        >
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>
        {unsavedRole ? (
          <button
            className={styles.btnUnsaved}
            onClick={() => saveNewRole(id, newRole)}
          >
            save
          </button>
        ) : (
          <button
            className={styles.btn}
            onClick={() => saveNewRole(id, newRole)}
          >
            save
          </button>
        )}

        <button onClick={() => removeUser(id)} className={styles.btn}>
          remove
        </button>
      </div>
    </div>
  );
};
