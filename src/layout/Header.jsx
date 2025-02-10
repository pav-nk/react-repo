function Header() {
    return (
        <nav className='nav grey darken-4'>
            <div className="container">
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo title">
                        <i className="material-icons">local_movies</i>
                        React Movies</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/">Repo</a></li>
                    </ul>
                </div>
            </div>
        </nav>)
}

export default Header;