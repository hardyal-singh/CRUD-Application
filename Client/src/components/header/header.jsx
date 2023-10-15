import React from 'react';
import { LogoutBtn} from '../index';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Header() {

  const navigate=useNavigate();
  const authStatus = useSelector(state => state.user.status);

  const navItems = [
    { name: "Home",
     active: true, 
     slug: "/"},

    { name: "Login", 
    active: !authStatus,
     slug: "/login" },

    { name: "Singup", 
    active: !authStatus,
     slug: "/signup" },

 
   
   
  ]
  return (
    <header className='py-3 shadow bg-violet-500'>
     
        <nav className='flex'>
          <div className='mr-4'>
            <Link to ="/">
            Logo
            </Link>
          </div>
         <ul className='flex ml-auto'>
          {navItems.map((item)=>
          item.active?(<li key={item.name}>
            <button type='button' className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={()=>{navigate(item.slug)}}>{item.name}</button>
          </li>):null)
          }
          {authStatus && (<li>
            <LogoutBtn/>
          </li>)
           }
         </ul>
        </nav>
    </header>
   
  )
}
