import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import { UserContext } from "../../UserContext";
import {ReactComponent as MinhasFotos} from "../../assets/feed.svg";
import {ReactComponent as Estatisticas} from "../../assets/estatisticas.svg";
import {ReactComponent as Adicionar} from "../../assets/adicionar.svg";
import {ReactComponent as Sair} from "../../assets/sair.svg";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../hooks/useMedia";

const UserHeaderNav = ()=>{

  const {userLogout} = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 640px)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const {pathname} = useLocation();
  React.useEffect(()=>{
    setMobileMenu(false);
  }, [pathname]);

  return(
    <>
      {mobile && <button aria-label="Menu" className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} onClick={()=> setMobileMenu(!mobileMenu)}></button>}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to="/conta" end className={({isActive}) => isActive ? styles.active : undefined}>
          <MinhasFotos /> {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas" className={({isActive}) => isActive ? styles.active : undefined}>
          <Estatisticas /> {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/conta/postar" className={({isActive}) => isActive ? styles.active : undefined}>
          <Adicionar /> {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={userLogout}>
          <Sair /> {mobile && 'Sair'}
        </button>
      </nav>
    </>
    )
}

export default UserHeaderNav;