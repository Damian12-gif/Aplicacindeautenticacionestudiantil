import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  to: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

export function NavLink({ to, icon: Icon, children }: NavLinkProps) {
  const isActive = window.location.hash === `#${to}`;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = to;
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  };

  return (
    <a
      href={`#${to}`}
      onClick={handleClick}
      className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
        isActive
          ? 'border-emerald-600 text-emerald-600'
          : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
      }`}
    >
      <Icon className="w-4 h-4" />
      {children}
    </a>
  );
}