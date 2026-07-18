import { useState } from "react";
import { NavLink } from "react-router-dom";
import { profile } from "../data/profile.js";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="brand gradient-text" onClick={() => setOpen(false)}>
          {profile.name.split(" ")[0]}<span style={{ color: "var(--text)" }}>.</span>
        </NavLink>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "\u2715" : "\u2630"}
        </button>

        <nav>
          <ul className={`nav-links ${open ? "open" : ""}`}>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
