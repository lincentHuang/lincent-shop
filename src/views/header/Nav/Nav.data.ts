import {
  CircleUser,
  Heart,
  HeartHandshake,
  ShieldUser,
  ShoppingCart,
} from "lucide-react";

export type NavType = {
  icon?: React.ComponentType<{ className?: string }>;
  label: string;
  link: string;
  desktopOnly?: boolean;
  isAccount?: boolean;
  do?: () => void;
};

export const NavData: NavType[] = [
  {
    icon: ShoppingCart,
    label: "Taiwan / NTD",
    link: "/",
    do: () => alert("Home"),
  },
  {
    icon: ShieldUser,
    label: "Buyer Protection",
    link: "/shop",
    desktopOnly: true,
  },
  {
    icon: HeartHandshake,
    label: "Customer Service",
    link: "/about",
    desktopOnly: true,
  },
  { icon: HeartHandshake, label: "Help", link: "/contact", desktopOnly: true },
  { icon: Heart, label: "Whish list", link: "/blog" },
  { icon: CircleUser, label: "Account", link: "/blog", isAccount: true },
];
