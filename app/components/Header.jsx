import React from 'react'

function Header() {
  return (
    <div className="navbar bg-base-600">
        <div className="navbar-none">
            <div className="dropdown">
                < label tabIndex = {0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40'>
                    <li><Link className = 'my-0' to = "/"><FaHome className = "text-xl"/>Home</Link></li>
                    <li><Link to="/about"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> About</Link></li>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header