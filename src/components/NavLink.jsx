import Link from "next/link";

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-block uppercase rounded-lg px-2 py-1 text-gray-400  hover:text-gray-300"
    >
      {children}
    </Link>
  );
}
