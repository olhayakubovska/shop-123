// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import styles from "./users.module.css";
// import { getRolesOperation, getUsersOperation } from "../../api/operations";
// import {
//   ACTION_TYPE,
//   onOpenModal,
//   removeUserAsync,
//   setUser,
//   setUsersAction,
//   updateRoleAsync,
// } from "../../api/action";
// import { ROLE } from "../../constants";
// import { Error } from "../../components";
// import { setUserRole } from "../../api/action/set-new-user-role";

// export const Users = () => {
//   const [roles, setRoles] = useState([]);
//   const [errorFromServer, setError] = useState("");
//   const [flag, setFlag] = useState(false);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     Promise.all([getUsersOperation(), getRolesOperation()]).then(
//       ([loadedUsers, loadedRoles]) => {
//         dispatch(setUsersAction(loadedUsers));
//         setRoles(loadedRoles);

//         // setFlag(!flag);
//       }
//     );
//   }, [dispatch, flag]);

//   const users = useSelector((state) => state.users.users);
//   const userSession = useSelector((state) => state.user.session);

//   // const saveNewRole = async (userId, newUserRole) => {
  //   //   dispatch(
//   //     onOpenModal({
//   //       text: "Сохранить?",
//   //       onConfirm: async () => {
//   //         dispatch(
//   //           updateRoleAsync(userId, newUserRole, userSession).then(
//   //             ({ err, res }) => setError(err)
//   //           )
//   //         );
//   //         dispatch({ type: ACTION_TYPE.CLOSE_MODAL });
//   //         const loadedUsers = await getUsersOperation();
//   //         dispatch(setUsersAction(loadedUsers));
//   //         setFlag(!flag);
//   //       },
//   //       onCancel: () => dispatch({ type: ACTION_TYPE.CLOSE_MODAL }),
//   //     })
//   //   );
//   // };

//   const saveNewRole = async (userId, newUserRole) => {
//     dispatch(
//       onOpenModal({
//         text: "Сохранить role?",
//         onConfirm: async () => {
//           try {
//             const { res, err } = await updateRoleAsync(
//               userId,
//               newUserRole,
//               userSession
//             );
//             dispatch(setUser(res)); // Здесь нужно заменить на подходящий action для изменения роли
//             setError(err);
//           } catch (error) {
//             console.log(error);
//           }

//           // const loadedUsers = await getUsersOperation();
//           // dispatch(setUsersAction(loadedUsers));
//           dispatch({ type: ACTION_TYPE.CLOSE_MODAL });

//           //         if (err) {
//           //           setError(err);
//           //         }
//           // console.log(res,"resRole")
//           //         dispatch(setUserRole(res)); // Здесь нужно заменить на подходящий action для изменения роли
//           //         const loadedUsers = await getUsersOperation(); // Загрузка пользователей после обновления роли
//           //         dispatch(setUsersAction(loadedUsers));
//           //         setFlag(!flag);
//         },
//         onCancel: () => dispatch({ type: ACTION_TYPE.CLOSE_MODAL }),
//       })
//     );
//   };

//   const removeUser = (userId) => {
//     dispatch(
//       onOpenModal({
//         text: "Удалить?",
//         onConfirm: async () => {
//           dispatch(removeUserAsync(userId));

//           dispatch({ type: ACTION_TYPE.CLOSE_MODAL });
//           const loadedUsers = await getUsersOperation();
//           dispatch(setUsersAction(loadedUsers));
//         },
//         onCancel: () => dispatch({ type: ACTION_TYPE.CLOSE_MODAL }),
//       })
//     );
//   };

//   return (
//     <>
//       <Error arrayAccess={[ROLE.ADMIN]} error={errorFromServer}>
//         <div className={styles.container}>
//           {/*
//             TODO(olhayakubovska): This section is needed for both editing roles
//             and deleting users. I would name it "Пользователи" instead of
//             "Поменять роль".
//           */}
//           <h2 className={styles.h2}>Поменять роль</h2>
//           <div className={styles.tableRow}>
//             {users.map((user) => (
//               <UpdateUsers
//                 roles={roles}
//                 removeUser={removeUser}
//                 saveNewRole={saveNewRole}
//                 login={user.login}
//                 roleId={user.roleId}
//                 key={user.id}
//                 id={user.id}
//               />
//             ))}
//           </div>
//         </div>
//       </Error>{" "}
//     </>
//   );
// };


import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./users.module.css";
import { getRolesOperation, getUsersOperation } from "../../api/operations";
import { setUsersAction } from "../../api/action";
import { ROLE } from "../../constants";
import { Error } from "../../components";
import { UpdateUsers } from "./update-users";


export const Users = () => {
  const [roles, setRoles] = useState([]);
  const [errorFromServer, setError] = useState("");

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    Promise.all([getUsersOperation(), getRolesOperation()]).then(
      ([loadedUsers, loadedRoles]) => {
        dispatch(setUsersAction(loadedUsers));
        setRoles(loadedRoles);
      }
    );
  }, [dispatch]);

  return (
    <Error arrayAccess={[ROLE.ADMIN]} error={errorFromServer}>
      <div className={styles.container}>
        <h2 className={styles.h2}>Пользователи</h2>
        <div className={styles.tableRow}>
          {users.map((user) => (
            <UpdateUsers
              key={user.id}
              id={user.id}
              login={user.login}
              roleId={user.roleId}
              roles={roles}
            />
          ))}
        </div>
      </div>
    </Error>
  );
};
