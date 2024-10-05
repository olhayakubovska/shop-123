import { useEffect, useState } from "react";
import { getUsersOperation } from "../../api/operations/get-users-operation";
import styles from "./users.module.css";
import { getRolesOperation } from "../../api/operations/get-roles-operation";

import { useDispatch, useSelector } from "react-redux";
import { setUsersAction } from "../../api/action/set-users-action";
import { UpdateUsers } from "./update-users";
import { onOpenModal } from "../../api/action/on-open-modal";
import { ACTION_TYPE } from "../../api/action";
import { removeUserAsync } from "../../api/action/remove-user-ascync";
import { updateRoleAsync } from "../../api/action/update-role-operation-ascync";
import { Error } from "../../components/Error/Error";
import { ROLE } from "../../constants/role";

export const Users = () => {
  const [roles, setRoles] = useState([]);
  const [errorFromServer, setError] = useState("");
  const [flag, setFlag] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([getUsersOperation(), getRolesOperation()]).then(
      ([loadedUsers, loadedRoles]) => {
        dispatch(setUsersAction(loadedUsers));
        setRoles(loadedRoles);

        // setFlag(!flag);
      }
    );
  }, [dispatch, flag]);

  const users = useSelector((state) => state.users.users);
  const userSession = useSelector((state) => state.user.session);

  // const isAdmin = userSession ?

  //   console.log(userSession, "userSession");
  const saveNewRole = async (userId, newUserRole) => {
    dispatch(
      onOpenModal({
        text: "Сохранить?",
        onConfirm: async () => {
          dispatch(
            updateRoleAsync(userId, newUserRole, userSession).then(
              ({ err, res }) => setError(err)
            )
          );
          const loadedUsers = await getUsersOperation();
          dispatch(setUsersAction(loadedUsers));
          dispatch({ type: ACTION_TYPE.CLOSE_MODAL });
          setFlag(!flag);
        },
        onCancel: () => dispatch({ type: ACTION_TYPE.CLOSE_MODAL }),
      })
    );
  };

  const removeUser = (userId) => {
    dispatch(
      onOpenModal({
        text: "Удалить?",
        onConfirm: async () => {
          dispatch(removeUserAsync(userId));

          const loadedUsers = await getUsersOperation();
          dispatch(setUsersAction(loadedUsers));
          dispatch({ type: ACTION_TYPE.CLOSE_MODAL });
        },
        onCancel: () => dispatch({ type: ACTION_TYPE.CLOSE_MODAL }),
      })
    );
  };

  return (
    <>
      <Error arrayAccess={[ROLE.ADMIN]} error={errorFromServer}>
      <div className={styles.container}>
          <h2 className={styles.h2}>Поменять роль</h2>
          <div className={styles.tableRow}>
            {users.map((user) => (
              <UpdateUsers
                roles={roles}
                removeUser={removeUser}
                saveNewRole={saveNewRole}
                login={user.login}
                roleId={user.roleId}
                key={user.id}
                id={user.id}
              />
            ))}
          </div>
        </div>
      </Error>{" "}
    </>
  );
};
