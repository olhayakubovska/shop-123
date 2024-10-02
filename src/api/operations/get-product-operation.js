import { getProduct } from '../fetch'

export const getProductOperation = async (id) => {
    
const product = await getProduct(id)

  return product

}