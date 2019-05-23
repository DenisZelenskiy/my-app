import React from "react";
// import injectStyles from 'react-jss';
import "./Header.css";
import styles from "./Header.module.css";

const headerStyles = {
	backgroundColor: 'yellow',
	marginTop: 20,
}

const Header = ({data, title}) =>  (
  <header style={headerStyles} className={styles.header}>
    <span className={styles.logo}>{title}</span>
		{data.length > 0 ? (
			<ul className="items">
				{data.map(item => <li key={item.id}  className="item">{item.title} / {item.id}</li>)}
			</ul>
		): <div> no data</div>}
  </header>
);

export default Header;
