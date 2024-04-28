import React from 'react'
import Image from 'next/image'
import logo from '../../assets/logo.png'

const menu = [
    {
        id: 1, name: "Home"
    },
    {
        id: 1, name: "How it works?"
    },{
        id: 2, name: "Feature"
    },{
        id: 3, name: "Pricing"
    },{
        id: 3, name: "FAQs"
    },
]

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2">
            <div>
                <Image src={logo} alt='Logo PNG' height={49} width={50} />
            </div>
            <div className="flex gap-6">
                {menu.map((item) => (
                    <div key={item.id} className={item.name === 'Home' ? 'text-green-400 font-bold cursor-pointer' : 'text-white cursor-pointer'}>
                        {item.name}
                    </div>
                ))}
            </div>
            <div>
                <button className="px-4 py-2 bg-yellow-400 text-black rounded-md font-bold">Sign Up</button>
            </div>
        </nav>
  )
}

export default Navbar