
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='flex justify-center gap-6 p-4 border-2'>
      <Link to="/" >Home</Link>
      <Link to="/services" >Services</Link>
      <Link to="/details" >Details</Link>
      <Link to="/features" >Features</Link>
      <Link to="/projects" >Projects</Link>
      <Link to="/team" >Team</Link>
      <Link to="/contact" >Contact</Link>
    </nav>
  )
}
