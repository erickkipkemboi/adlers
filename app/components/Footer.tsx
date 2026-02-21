import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0B3C5D] text-gray-200 border-t border-[#C9A227]/30">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12">

          {/* Logo & Social Section */}
          <div className="flex flex-col items-center md:items-start space-y-5">
            <Link href="/" aria-label="Home">
              <div className="w-20 h-20">
                <Image
                  src="/icons/logo.png"
                  alt="LÖWE & ADLER Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              <p className="text-2xl font-bold text-[#C9A227] tracking-wide mt-2">
                LÖWE & ADLER
              </p>
            </Link>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-2">
              {[
                { href: "https://facebook.com", icon: "/icons/facebook.svg", label: "Facebook" },
                { href: "https://tiktok.com", icon: "/icons/tiktok.svg", label: "Tiktok" },
                { href: "https://instagram.com", icon: "/icons/instagram.svg", label: "Instagram" },
                { href: "https://x.com", icon: "/icons/X.svg", label: "X" },
              ].map(({ href, icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 hover:bg-[#C9A227]/20 transition-all duration-300"
                >
                  <Image
                    src={icon}
                    alt={`${label} Icon`}
                    width={24}
                    height={24}
                    className="hover:scale-110 transition-transform duration-300"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">

            {[
              {
                title: "OUR PROGRAMS",
                links: ["Learning French", "Learn German", "IELTS Preparation"],
              },
              {
                title: "QUICK LINKS",
                links: ["Home", "About Us", "Courses", "Contact Us"],
              },
              {
                title: "LEARNING RESOURCES",
                links: ["Moodle", "Team Chat", "Video Conferencing", "Shared Calendars"],
              },
              {
                title: "REPORTING",
                links: ["Project Analytics", "Custom Dashboards", "Performance Metrics", "Export Reports"],
              },
            ].map(({ title, links }) => (
              <div key={title}>
                <h3 className="font-semibold text-[#C9A227] tracking-wide text-base">
                  {title}
                </h3>

                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="hover:text-[#D4AF37] transition-colors duration-300"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-14 pt-6 border-t border-[#C9A227]/30 text-center text-sm text-gray-400">
          © 2025 LÖWE & ADLER. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;