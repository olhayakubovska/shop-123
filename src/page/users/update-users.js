// import { useState } from "react";
import styles from "./users.module.css";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ACTION_TYPE,
  onOpenModal,
  removeUserAsync,
  setUser,
  setUsersAction,
  updateRoleAsync,
} from "../../api/action";
import { getUsersOperation } from "../../api/operations";

// export const UpdateUsers = ({
//   id,
//   roles,
//   removeUser,
//   login,
//   roleId,
//   saveNewRole,
// }) => {
//   const [newRole, setNewRole] = useState(roleId);

//   const onRoleChange = ({ target }) => {
//     setNewRole(Number(target.value));
//   };

//   const unsavedRole = newRole !== roleId;

//   return (
//     <div>
//       <div key={id} className={styles.column}>
//         <div className={styles.login}>{login}</div>

//         {/* <SelectUserRole
//           roles={roles}
//           userRoleId={roleId}
//           //   userId={user.id}
//           saveNewRole={(newUserRole) => saveNewRole(roleId, newUserRole)}
//         /> */}

//         <select
//           className={styles.selectRoles}
//           value={newRole} // Если newRole нет, берем userRoleId
//           onChange={onRoleChange}
//         >
//           {roles.map((role) => (
//             <option key={role.id} value={role.id}>
//               {role.name}
//             </option>
//           ))}
//         </select>
//         {unsavedRole ? (
//           <button
//             className={styles.btnUnsaved}
//             onClick={() => saveNewRole(id, newRole)}
//           >
//             save
//           </button>
//         ) : (
//           <button
//             className={styles.btn}
//             onClick={() => saveNewRole(id, newRole)}
//           >
//             save
//           </button>
//         )}

//         <button onClick={() => removeUser(id)} className={styles.btn}>
//           remove
//         </button>
//       </div>
//     </div>
//   );
// };

export const UpdateUsers = ({ id, roles, login, roleId }) => {
  const [newRole, setNewRole] = useState(roleId);
  const [errorFromServer, setError] = useState("");
  const [flag, setFlag] = useState(false);

  const dispatch = useDispatch();
  const userSession = useSelector((state) => state.user.session);

  const onRoleChange = ({ target }) => {
    setNewRole(Number(target.value));
  };

  const unsavedRole = newRole !== roleId;

  // const saveNewRole = async (userId, newUserRole) => {
  //   console.log(userId, newUserRole, "45678");
  //   dispatch(
  //     onOpenModal({
  //       text: "Сохранить роль?",
  //       onConfirm: async () => {
  //         try {
  //           const { err, res } = await updateRoleAsync(
  //             userId,
  //             newUserRole,
  //             userSession
  //           );
  //           dispatch(setUser(res));
  //           setError(err);
  //         } catch (error) {
  //           console.error(error);
  //         }
  //         // dispatch({ type: ACTION_TYPE.CLOSE_MODAL });
  //         // const loadedUsers = await getUsersOperation();
  //         // dispatch(setUsersAction(loadedUsers));
  //       },
  //       onCancel: () => dispatch({ type: ACTION_TYPE.CLOSE_MODAL }),
  //     })
  //   );
  // };

  const saveNewRole = (userId, newUserRole) => {
    dispatch(
      onOpenModal({
        text: "Сохранить изменения в роли?",
        onConfirm: async () => {
          try {
            const { err, res } = await dispatch(
              updateRoleAsync(userId, newUserRole, userSession)
            );
            // dispatch(setUser(res));
            setError(err);
          } catch (error) {
            console.error("Ошибка при обновлении роли пользователя:", error);
            setError("Ошибка при обновлении роли пользователя");
          }

          const loadedUsers = await getUsersOperation();
          dispatch(setUsersAction(loadedUsers));
          dispatch({ type: ACTION_TYPE.CLOSE_MODAL });
          setFlag(!flag); // Триггер обновления интерфейса при изменении флага
        },
        onCancel: () => dispatch({ type: ACTION_TYPE.CLOSE_MODAL }),
      })
    );
  };

  const removeUser = (userId) => {
    dispatch(
      onOpenModal({
        text: "Удалить пользователя?",
        onConfirm: async () => {
          dispatch(removeUserAsync(userId));
          dispatch({ type: ACTION_TYPE.CLOSE_MODAL });
          const loadedUsers = await getUsersOperation();
          dispatch(setUsersAction(loadedUsers));
        },
        onCancel: () => dispatch({ type: ACTION_TYPE.CLOSE_MODAL }),
      })
    );
  };

  return (
    <div>
      <div key={id} className={styles.column}>
        <div className={styles.login}>{login}</div>

        <select
          className={styles.selectRoles}
          value={newRole}
          onChange={onRoleChange}
        >
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>

        <button
          className={unsavedRole ? styles.btnUnsaved : styles.btn}
          onClick={() => saveNewRole(id, newRole)}
        >
          Save
        </button>

        <button onClick={() => removeUser(id)} className={styles.btn}>
          Remove
        </button>
      </div>
    </div>
  );
};
