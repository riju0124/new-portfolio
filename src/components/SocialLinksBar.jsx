import React from "react";

import { socialLinks } from "../constants";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
    <path d="M18.6 5.4A16.2 16.2 0 0 0 14.6 4l-.2.4a11 11 0 0 1 3.8 1.8 13.6 13.6 0 0 0-4.2-1.3 13.7 13.7 0 0 0-4 0A13.4 13.4 0 0 0 5.8 6.2 10.9 10.9 0 0 1 9.6 4.4L9.4 4a16.2 16.2 0 0 0-4 1.4C2.9 9.2 2.2 12.9 2.5 16.5a16.5 16.5 0 0 0 4.9 2.5l1.2-2c-.7-.3-1.3-.6-1.8-1a9 9 0 0 0 1.6.8c2.6 1 5.4 1 8 0a9 9 0 0 0 1.6-.8c-.5.4-1.1.7-1.8 1l1.2 2a16.5 16.5 0 0 0 4.9-2.5c.4-4.1-.7-7.8-2.7-11.1ZM9.7 14.2c-.8 0-1.5-.8-1.5-1.8s.6-1.8 1.5-1.8c.8 0 1.5.8 1.5 1.8s-.7 1.8-1.5 1.8Zm4.7 0c-.8 0-1.5-.8-1.5-1.8s.7-1.8 1.5-1.8c.9 0 1.5.8 1.5 1.8s-.6 1.8-1.5 1.8Z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.8 8.3 6.8 9.7.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.7.1-.7.1-.7 1 .1 1.6 1.1 1.6 1.1.9 1.5 2.3 1.1 2.9.9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 .9-2.8-.1-.2-.4-1.3.1-2.7 0 0 .8-.3 2.8 1.1a9.4 9.4 0 0 1 5 0c1.9-1.4 2.7-1.1 2.7-1.1.6 1.4.3 2.5.2 2.7.6.8.9 1.7.9 2.8 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 4-1.4 6.8-5.2 6.8-9.7C22 6.6 17.5 2 12 2Z" />
  </svg>
);

const iconByName = {
  Instagram: InstagramIcon,
  Discord: DiscordIcon,
  GitHub: GitHubIcon,
};

const SocialLinksBar = ({ className = "" }) => {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {socialLinks.map((social) => {
        const Icon = iconByName[social.name];

        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            aria-label={social.name}
            className="social-link-button group relative inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white transition-all duration-200"
          >
            <Icon />
            <span className="social-link-tooltip pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[125%] whitespace-nowrap rounded-full px-3 py-1 text-[12px] font-medium opacity-0 transition-all duration-200 group-hover:-translate-y-[145%] group-hover:opacity-100">
              {social.shortLabel}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinksBar;
