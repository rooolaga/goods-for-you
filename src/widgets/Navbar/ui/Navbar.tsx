import { NavLink, To } from 'react-router-dom'
import cls from './Navbar.module.scss'
import { useId } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import clsx from 'clsx';

export interface LogoType {
  src: string;
  alt: string;
}

export interface NavbarItemType {
  title: string;
  to: To;
}

export interface NavbarProps {
  logo: LogoType;
  items: NavbarItemType[];
  variant: 'main' | 'bottom';
  aria: {
    logoLabel: string,
    navbarLabel: string;
  };
}

export const Navbar = ({
  logo,
  items,
  variant,
  aria
}: NavbarProps) => {

  const id = useId();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const handleBackClick = () => {
    navigate(location.key !== "default" ? -1 : '/');
  }

  return (
    <nav className={clsx(cls.navbar, cls[variant])}>
      <div className="navbar_brand">
        <NavLink to='/'>
          <img src={logo.src} alt={logo.alt} loading="lazy"/>
          <span className="visuallyhidden">{aria.logoLabel}</span>
        </NavLink>
      </div>

      {variant === 'main' && (
        <>
          <input id={`menu_toggle${id}`} type="checkbox" className={cls.menu_toggle}/>
          <label className={cls.menu_btn} htmlFor={`menu_toggle${id}`}>
            <span></span>
          </label>
        </>
      )}

      <ul className={cls.navbar_nav} role="menubar" aria-label={aria.navbarLabel}>
        {isHomePage && items.map((item, index) => (
          <li role='none' key={index}>
            <NavLink to={item.to} className={cls.navlink} role='menuitem'>
              {item.title}
            </NavLink>
          </li>
        ))}

        {!isHomePage && (
          <li role='none' key="backlink">
            <span
              className={cls.navlink}
              role='menuitem'
              tabIndex={0}
              onClick={handleBackClick}
            >
              Back to site
            </span>
          </li>
        )}
      </ul>
    </nav>
  )
}
