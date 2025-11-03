import { XStack } from "@/components/XStack";
import { FooterNavCategory } from "./FooterNav.Category";
import { footerNavData } from "@/datas/footerNav.data";

export const FooterNav = () => {
  return (
    <div className="items-center grid md:grid-cols-[repeat(4,1fr)] sm:grid-cols-[repeat(2,1fr)] grid-cols-1 gap-6 w-full">
      {footerNavData.map((category) => (
        <FooterNavCategory key={category.id} {...category} />
      ))}
    </div>
  );
};
