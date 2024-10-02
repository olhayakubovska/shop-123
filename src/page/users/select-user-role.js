import { useState } from "react";

import styles from "./users.module.css";

export const SelectUserRole = ({ roles, userRoleId, saveNewRole }) => {
  const [newRole, setNewRole] = useState(userRoleId);

  const onRoleChange = ({ target }) => {
    setNewRole(Number(target.value));
  };

  //   const saveNewRole = (userId, newUserRole) => {
  //     updateUserRoleOperation(userId, newUserRole);
  //     setFlag(!flag);
  //   };

  return (
    <div>
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

      <button className={styles.btn} onClick={() => saveNewRole(newRole)}>
        save
      </button>
    </div>
  );
};

//   const [roles, setRoles] = useState([]);

//   console.log(roles, "SelectUserRole");
//   const currentUserRole = useSelector(({ user }) => user.roleId);

//   const [newRole, setNewRole] = useState(currentUserRole);

//   useEffect(() => {
//     getRolesOperation().then((loadedRoles) => setRoles(loadedRoles));
//   }, []);
