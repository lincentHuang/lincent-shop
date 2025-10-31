import { cn } from "@/utils/style";
import Avator1 from "./assets/avator-1.svg";
import Avator2 from "./assets/avator-2.svg";
import Avator3 from "./assets/avator-3.svg";
import Avator4 from "./assets/avator-4.svg";
import Avator5 from "./assets/avator-5.svg";
import Avator6 from "./assets/avator-6.svg";
import Avator7 from "./assets/avator-7.svg";
import Avator8 from "./assets/avator-8.svg";
import Avator9 from "./assets/avator-9.svg";

type AvatorsProps = {
  name?: string;
  className?: string;
};

export const Avators = (props: AvatorsProps) => {
  const Avators = [
    {
      name: "avator1",
      component: Avator1,
    },
    {
      name: "avator2",
      component: Avator2,
    },
    {
      name: "avator3",
      component: Avator3,
    },
    {
      name: "avator4",
      component: Avator4,
    },
    {
      name: "avator5",
      component: Avator5,
    },
    {
      name: "avator6",
      component: Avator6,
    },
    {
      name: "avator7",
      component: Avator7,
    },
    {
      name: "avator8",
      component: Avator8,
    },
    {
      name: "avator9",
      component: Avator9,
    },
  ];
  const Avator =
    Avators.find((avator) => avator.name === props.name)?.component || Avator1;
  return (
    <>
      <Avator className={cn("size-6", props.className)} />
    </>
  );
};
