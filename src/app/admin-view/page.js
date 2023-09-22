'use client'
import './Admin-view.css'
import { useRouter } from "next/navigation";
const AdminView = () => {
  const router=useRouter();
  return (
    <div>
      <div className="navbar_admin">
        <h3 onClick={()=>router.push('/admin-view/allproducts')}>Manage All Products</h3>
        <h3  onClick={()=>router.push('/admin-view/addproduct')}>Add Products</h3>
      </div>
    </div>
  );
};

export default AdminView;
