import Link from "next/link";

type SiteHeaderProps = {
  currentPath?: string;
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/faq", label: "FAQ" },
  { href: "/setup/api", label: "API Setup" },
  { href: "/setup/channels", label: "Channel Setup" },
  { href: "/setup/playlists", label: "Playlist Setup" },
  { href: "/watch", label: "Watch" },
];

export default function SiteHeader({
  currentPath = "",
}: SiteHeaderProps) {
  return (
    <header className="siteHeader">
      <div className="container siteHeaderInner">
        <Link href="/" className="siteLogo">
          YouTube TV Web
        </Link>

        <nav className="siteNav" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = currentPath === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "navLink activeNavLink" : "navLink"}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}