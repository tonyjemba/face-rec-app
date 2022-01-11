import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
	
	isSignedIn?(
	<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>sign out</p>
	</nav>
	):(
	<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>sign in</p>
				<p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>create account</p>
	</nav>
	)
	

}

export default Navigation;
