import List from '../../../../src/components/List/List'
import { getAllAdminroducts } from '../../../../src/services/product'

const AdminViewAllProducts = async() => {
  const allAdminProducts=await getAllAdminroducts()
  return (
    <div>
      <List data={allAdminProducts.data} />
    </div>
  )
}

export default AdminViewAllProducts