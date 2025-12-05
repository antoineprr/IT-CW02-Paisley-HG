import {
  NavLink,
  Outlet,
  ScrollRestoration,
  Scripts,
  type MetaFunction,
} from "react-router";

interface NavItem {
  path: string;
  label: string;
  icon: string;
}

export const meta: MetaFunction = () => {
  return [
    {
      name: "description",
      content: "Paisley Highland Games - Traditional Scottish Competition",
    },
  ];
};

export default function MainLayout() {
  const navItems: NavItem[] = [
    { path: "/", label: "Home", icon: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" },
    { path: "/events", label: "Events", icon: "🥇" },
    { path: "/dashboard", label: "Dashboard", icon: "📊" },
    { path: "/tickets", label: "Tickets", icon: "🎫" },
    { path: "/results", label: "Results", icon: "🏆" },
  ];

  return (
    <div className="app-container">
      {/* Header Navigation */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>
            <h1 className="logo-text">Paisley Highland Games</h1>
          </div>
          <nav className="main-nav">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `nav-item ${isActive ? 'active' : ''}`
                }
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </NavLink>
            ))}
          </nav>
          <div className="header-actions">
            <NavLink to="/about" className="about-link">
              About
            </NavLink>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        <div className="content-wrapper">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Paisley Highland Games - Traditional Scottish Athletic Competition</p>
        </div>
      </footer>
      
      <ScrollRestoration />
      <Scripts />
    </div>
  );
}
