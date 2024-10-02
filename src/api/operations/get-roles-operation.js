import { getRoles } from "../fetch/get-roles"

export const getRolesOperation = async () => {
const roles = await getRoles()
console.log(roles,'rolesoperation')
  return roles
}

