import { getUsers } from "../fetch/get-users"

export const getUsersOperation = async () => {
const users = await getUsers()

  return users
}

