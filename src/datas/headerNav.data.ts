import { Heart, HeartHandshake, ShieldUser, ShoppingCart } from "lucide-react";

export type NavType = {
  icon?: React.ComponentType<{ className?: string }>;
  id?: string;
  label: string;
  link: string;
  desktopOnly?: boolean;
  do?: () => void;
};

export const NavData: NavType[] = [
  {
    id: "locale",
    icon: ShoppingCart,
    label: "Taiwan / NTD",
    link: "/",
    do: () => alert("Home"),
  },
  {
    id: "protection",
    icon: ShieldUser,
    label: "Buyer Protection",
    link: "/shop",
    desktopOnly: true,
  },
  {
    id: "customer-service",
    icon: HeartHandshake,
    label: "Customer Service",
    link: "/about",
    desktopOnly: true,
  },
  {
    id: "help",
    icon: HeartHandshake,
    label: "Help",
    link: "/contact",
    desktopOnly: true,
  },
  { id: "whish", icon: Heart, label: "Whish list", link: "/whish" },
];
