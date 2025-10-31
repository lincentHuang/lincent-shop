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
  isAccount?:boolean;
  do?: () => void;
}[];
export const NavData: NavType = [
  {
    icon: ShoppingCart,
    label: "Taiwan / NTD",
    link: "/",
    do: () => alert("Home"),
  },
  { icon: ShieldUser, label: "Buyer Protection", link: "/shop" },
  { icon: HeartHandshake, label: "Customer Service", link: "/about" },
  { icon: HeartHandshake, label: "Help", link: "/contact" },
  { icon: Heart, label: "Whish list", link: "/blog" },
  { icon: CircleUser, label: "Account", link: "/blog",isAccount:true},
];
