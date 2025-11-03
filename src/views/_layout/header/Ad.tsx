import Link from "next/link";
import React from "react";

export const Ad = () => {
  return (
    <div>
      <Link href="/ad" target="_blank" rel="noopener noreferrer">
        {/* <Image src={""}/> */}
        <div className="bg-[#cba0a0] h-9 items-center justify-center flex">
          this is ad
        </div>
      </Link>
    </div>
  );
};
