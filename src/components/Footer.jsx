import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React.
        </p>
      </div>
    </footer>
  );
}
