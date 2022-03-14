import { FC } from "react";
import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";

interface MenuItemsParams {
  text: string;
  href: string;
}

const menuItems: MenuItemsParams[] = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar: FC = () => {
  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map(({ href, text }: MenuItemsParams) => (
        <ActiveLink key={href} path={href} text={text} />
      ))}
    </nav>
  );
};
