export default function Navbar() {
    return (
      <nav className="nav">
        <a href="/" className="site-title">Habby Tracker</a>
        <ul>
          <li>
            <a href="/login" className="btn btn-light">Login</a>
          </li>
          <li>
            <a href="/register" className="btn btn-primary">Start My Day</a>
          </li>
        </ul>
      </nav>
    );
  }
  