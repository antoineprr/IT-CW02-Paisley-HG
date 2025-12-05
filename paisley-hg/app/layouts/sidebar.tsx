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
    { path: "/", label: "Home" },
    { path: "/events", label: "Events" },
    { path: "/dashboard", label: "Dashboard" },
    { path: "/tickets", label: "Tickets" },
    { path: "/results", label: "Results" },
  ];

  return (
    <div className="app-container">
      {/* Header Navigation */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
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
                {item.label}
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
