import { getRoles } from "../fetch"

export const getRolesOperation = async () => {
const roles = await getRoles()
// console.log(roles,"roles op")
  return roles
}

