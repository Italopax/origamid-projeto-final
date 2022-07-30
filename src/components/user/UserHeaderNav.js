import React from "react";
import {NavLink} from "react-router-dom";
import { UserContext } from "../../UserContext";
import {ReactComponent as MinhasFotos} from "../../assets/feed.svg";
import {ReactComponent as Estatisticas} from "../../assets/estatisticas.svg";
import {ReactComponent as Adicionar} from "../../assets/adicionar.svg";
import {ReactComponent as Sair} from "../../assets/sair.svg";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = ()=>{

  const {userLogout} = React.useContext(UserContext);
  const [mobile, setMobile] = React.useState(null);

  return(
    <nav className={styles.nav}>
      <NavLink to="/conta" end className={({isActive}) => isActive ? styles.active : undefined}>
        <MinhasFotos /> {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/conta/estatisticas" className={({isActive}) => isActive ? styles.active : undefined}>
        <Estatisticas /> {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink to="/conta/postar" className={({isActive}) => isActive ? styles.active : undefined}>
        <Adicionar /> {mobile && 'Adicionar Foto'}
      </NavLink>
      {/* <NavLink to="/conta" end>
        <MinhasFotos /> {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Estatisticas /> {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink to="/conta/postar">
        <Adicionar /> {mobile && 'Adicionar Foto'}
      </NavLink> */}
      <button onClick={userLogout}>
        <Sair /> {mobile && 'Sair'}
      </button>
    </nav>
  )
}

export default UserHeaderNav;