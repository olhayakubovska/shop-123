import { getUsers } from "../fetch"

export const getUsersOperation = async () => {
const users = await getUsers()

  return users
}

