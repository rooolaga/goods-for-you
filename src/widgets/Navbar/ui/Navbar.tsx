import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Catalog</NavLink>
        </li>
        <li>
          <NavLink to="/">About us</NavLink>
        </li>
        <li>
          <NavLink to="/">Product selection</NavLink>
        </li>
        <li>
          <NavLink to="/">Our team</NavLink>
        </li>
        <li>
          <NavLink to="/">FAQ</NavLink>
        </li>
        <li>
          <NavLink to="/">For staff</NavLink>
        </li>
      </ul>
    </nav>
  )
}
