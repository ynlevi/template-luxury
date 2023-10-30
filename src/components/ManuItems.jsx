"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function MenuItems({ handleClick }) {
  const pathname = usePathname();

  return (
    <>
      {menuItems.map(({ name, path }, i) => (
        <li key={i} className="py-1 capitalize list-none tracking-widest">
          <Link
            href={path}
            className={`py-1 ${path === pathname && "text-theme-yellow"}`}
            onClick={handleClick}
          >
            {name}
          </Link>
        </li>
      ))}
    </>
  );
}

const menuItems = [
  { name: "home", path: "/" },
  { name: "what we do", path: "/what-we-do" },
  { name: "projects", path: "/projects" },
  { name: "blog", path: "/blog" },
  { name: "contact us", path: "/contact-us" },
];
