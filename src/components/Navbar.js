import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Login from '../screens/Login';
import { Badge } from 'react-bootstrap';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';
function Navbar() {

  const[cartview,setCartView]=useState(false)
  const navigate = useNavigate();
let data=useCart();
  const handleLogout = () => {
    localStorage.removeItem("authToken")
    navigate("/login")
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-info text-dark">
        <div className="container-fluid pl-50">
          <Link className="navbar-brand fs-1 fst-italic" to="/">Food Application</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active fs-5 " aria-current="page" to="/">Home</Link>
              </li>
              {localStorage.getItem("authToken") ?

                <li className="nav-item">
                  <Link className="nav-link active fs-5 " aria-current="page" to="/myorder">My Orders</Link>
                </li>
                : ""
              }
            </ul>
            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                <Link className="btn bg-white text-success mx-1" to="/createuser">SignUp</Link>
              </div>
            )

              :
              <div className='d-flex'>
                <div>


                  <button className="btn bg-white text-success mx-1" onClick={()=>setCartView(true)}>
                    My Cart {""}
                    <Badge pill bg="danger">{data.length}</Badge>
                  </button>
                </div>
                {cartview ? <Modal onClose={()=>setCartView(false)}><Cart/></Modal> : null}





                <button className="btn bg-white text-danger mx-1 bg-success-red" onClick={handleLogout}>
                  Logout
                </button>

              </div>

            }

          </div>



        </div>

      </nav>
    </>
  )
}

export default Navbar