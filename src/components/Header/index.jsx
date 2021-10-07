import React from 'react'

import './style.scss'

const Header = () => {
	return (
		<ul className="header">
			<li>Home</li>
			<li className="active hide-xs">Work</li>
			<li className="hide-xs">Contact</li>
			<li>Menu</li>	
		</ul>
	)
}

export default Header