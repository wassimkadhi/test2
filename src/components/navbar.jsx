import React from 'react';



class NavBar extends React.Component {
    render() { 
        return (
        <nav className="navbar bg-light">
        <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Navbar <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span></span>
        </div>
        </nav>
        );
    }
}
 
export default NavBar ;


