import { ArrowRight, Rocket, Linkedin, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { navLinks, brand, legalLinks, type SocialLink } from '@/data/content';

const socials: SocialLink[] = [
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'YouTube', href: '#', icon: Youtube },
  { label: 'WhatsApp', href: '#', icon: MessageCircle },
];

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-midnight-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-electric-500 to-accent-500">
                <Rocket className="h-5 w-5 text-white" />
              </span>
              <span className="font-heading text-lg font-bold text-white">
                {brand.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-200">
              {brand.tagline}
            </p>
            <p className="mt-2 text-xs text-navy-300">
              A division of {brand.parent}
            </p>
          </div>

          {/* Links */}
          <div className="lg:justify-self-center">
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-navy-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="lg:justify-self-end">
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Connect With Us
            </h4>
            <div className="mt-4 flex gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-navy-200 transition-all duration-200 hover:border-electric-500/40 hover:bg-electric-500/10 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <button
              type="button"
              onClick={() => navigate('/courses')}
              className="btn-primary mt-6"
            >
              Explore Courses
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-navy-300">
              © 2026 {brand.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-xs text-navy-300 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
