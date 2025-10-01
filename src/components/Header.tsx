"use client";

import Avatar from "./Avatar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background-light dark:bg-background-dark flex items-center justify-between whitespace-nowrap border-b border-primary/20 dark:border-primary/30 px-10 py-4">
      <div className="flex items-center gap-3 text-black dark:text-white">
        <div className="size-6 text-primary">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_6_319)">
              <path
                d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_6_319">
                <rect fill="white" height="48" width="48" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h2 className="text-xl font-bold">Portfolio</h2>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a
          className="text-sm font-medium text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
          href="#about"
        >
          About
        </a>
        <a
          className="text-sm font-medium text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
          href="#experience"
        >
          Experience
        </a>
        <a
          className="text-sm font-medium text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
          href="#education"
        >
          Education
        </a>
        <a
          className="text-sm font-medium text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
          href="#skills"
        >
          Skills
        </a>
        <a
          className="text-sm font-medium text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
          href="#projects"
        >
          Projects
        </a>
      </nav>

      <div className="flex items-center gap-4">
        <button className="md:hidden flex items-center justify-center rounded-lg h-10 w-10 bg-primary/10 hover:bg-primary/20 text-black dark:text-white transition-colors">
          <svg
            fill="currentColor"
            height="20px"
            viewBox="0 0 256 256"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
          </svg>
        </button>
        <Avatar
          src="/avatar.jpg"
          alt="Profile"
          size="sm"
        />
      </div>
    </header>
  );
}
