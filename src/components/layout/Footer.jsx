import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { profile } from "../../data/config";
import { Mail } from "lucide-react";
import Logo from "../../asset/Logo.png";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const socialLinks = [
  { icon: FaGithub, href: profile.github, label: "GitHub" },
  { icon: FaLinkedin, href: profile.linkedin, label: "LinkedIn" },
  { icon: FaTwitter, href: profile.twitter, label: "Twitter" },
  { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer
      className="border-t py-5"
      style={{
        background: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="section-container py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Brand */}
          <div className="space-y-3 max-w-xs">
            <Link
              to="/"
              className="font-display font-bold text-xl tracking-tight block"
              style={{ color: "var(--color-text)" }}
            >
              <img src={Logo} alt="Logo" className="h-20 w-20 text-white" />
              {/* <span style={{ color: "var(--color-primary)" }}>.</span> */}
            </Link>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {profile.title}
            </p>
            <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
              {profile.location}
            </p>
          </div>

          {/* Nav Links */}
          <nav
            className="flex flex-wrap gap-x-6 gap-y-2"
            aria-label="Footer navigation"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm transition-colors duration-200 hover:text-white"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200"
                style={{
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-secondary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.background = "rgba(99,102,241,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.color = "var(--color-text-secondary)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t"
          style={{ borderColor: "var(--color-border)" }}
        >
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            © 2026 {profile.name}. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            Designed & Built by{" "}
            <span style={{ color: "var(--color-primary)" }}>
             <a href={profile.linkedin}>{profile.name}</a> 
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
