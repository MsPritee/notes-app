import React from 'react'
import './Header.css';



export default function Header() {
    

  return (
    <>
        < nav className="navbar fixed-top navbar-expand-lg">   
            <div className='Header' >
                <div className='HeaderRightSide'>
                    <h1 className='Main-Header'>    WEL-COME</h1>
                </div>
                {/* <div className='HeaderRightSide'>
                    <button className='btn btn-info HomeBtn'>
                        Home
                    </button>
                </div> */}
            </div>
        </nav>
    </>
  )
}
