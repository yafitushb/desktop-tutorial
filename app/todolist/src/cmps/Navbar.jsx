import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

export const Navbar = () => {
	let location = useLocation();
	const [ isTask, setIsTask ] = useState(true);

	return <div className="Navbar">{isTask ? <Link onClick={()=>{setIsTask(false)}} to="/contact">Contact</Link> : <Link onClick={()=>{setIsTask(true)}} to="/">Task</Link>}</div>;
};