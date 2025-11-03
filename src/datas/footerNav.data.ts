export type NavType = {
    icon?: React.ComponentType<{ className?: string }>;
    id: string;
    label: string;
    link: string;
    desktopOnly?: boolean;
    do?: () => void;
  };
  
  export type FooterCategoryType = {
    id: string;
    label: string;
    items: NavType[];
  };
  
  export const footerNavData: FooterCategoryType[] = [
    {
      id: "Company",
      label: "Company",
      items: [
        { id: "1", label: "About Us", link: "/about" },
        { id: "2", label: "Careers", link: "/careers" },
        { id: "3", label: "Press", link: "/press" },
        { id: "4", label: "Blog", link: "/blog" },
      ],
    },
    {
      id: "Support",
      label: "Support",
      items: [
        { id: "5", label: "Help Center", link: "/help" },
        { id: "6", label: "Safety Information", link: "/safety" },
        { id: "7", label: "Cancellation Options", link: "/cancellation" },
        { id: "8", label: "COVID-19 Response", link: "/covid-19" },
      ],
    },
    {
      id: "Legal",
      label: "Legal",
      items: [
        { id: "9", label: "Terms of Service", link: "/terms" },
        { id: "10", label: "Privacy Policy", link: "/privacy" },
        { id: "11", label: "Cookie Policy", link: "/cookies" },
        { id: "12", label: "Intellectual Property", link: "/ip" },
      ],
    },
    {
      id: "Social",
      label: "Social",
      items: [
        { id: "13", label: "Facebook", link: "https://facebook.com" },
        { id: "14", label: "Twitter", link: "https://twitter.com" },
        { id: "15", label: "Instagram", link: "https://instagram.com" },
        { id: "16", label: "LinkedIn", link: "https://linkedin.com" },
      ],
    },
  ];
  