import List from '@/src/components/List/List'
import { getAllAdminroducts } from '@/src/services/product'
import React from 'react'

const AdminViewAllProducts = async() => {
  const allAdminProducts=await getAllAdminroducts()
  console.log(getAllAdminroducts)
  return (
    <div>
      <List data={allAdminProducts && allAdminProducts.data} />
    </div>
  )
}

export default AdminViewAllProducts