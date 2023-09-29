import{Link} from 'react-router-dom'
//SPA simple page a 
const NavBar = () => {
  return (
    <nav>
        <ul>
            <li><Link to={"/home"}>Home</Link></li>
            <li><Link to={"/about"}>AboutPage</Link></li>
            <li><Link to={"/content"}>ContentPage</Link></li>
            
        </ul>
    </nav>
  )
}

export default NavBar
