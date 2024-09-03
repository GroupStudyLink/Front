import Arrow from "@/app/images/Arrow";
import Link from "next/link";
import React from "react";

export default function Post() {
  return (
    <>
      <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
        <div className="flex flex-col items-center gap-1 pt-5">
          <div className="size-2 rounded-full bg-[#111418]"></div>
          <div className="w-[1.5px] bg-[#dce0e5] h-4 grow"></div>
        </div>
        <div className="flex flex-1 flex-col py-3">
          <p className="text-[#111418] text-base font-medium leading-normal">
            What is the time complexity of this algorithm?
          </p>
          <p className="text-[#637588] text-base font-normal leading-normal">
            2 days ago
          </p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-[1.5px] bg-[#dce0e5] h-4"></div>
          <div className="size-2 rounded-full bg-[#111418]"></div>
          <div className="w-[1.5px] bg-[#dce0e5] h-4 grow"></div>
        </div>
        <div className="flex flex-1 flex-col py-3">
          <p className="text-[#111418] text-base font-medium leading-normal">
            How to implement Link priority queue in C++?
          </p>
          <p className="text-[#637588] text-base font-normal leading-normal">
            5 days ago
          </p>
        </div>
        <div className="flex flex-col items-center gap-1 pb-3">
          <div className="w-[1.5px] bg-[#dce0e5] h-4"></div>
          <div className="size-2 rounded-full bg-[#111418]"></div>
        </div>
        <div className="flex flex-1 flex-col py-3">
          <p className="text-[#111418] text-base font-medium leading-normal">
            What is the difference between Link stack and Link queue?
          </p>
          <p className="text-[#637588] text-base font-normal leading-normal">
            10 days ago
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center p-4">
        <Link href="#" className="flex size-10 items-center justify-center">
          <div
            className="text-[#111418]"
            data-icon="CaretLeft"
            data-size="18px"
            data-weight="regular"
          >
            <div className="rotate-180">
              <Arrow />
            </div>
          </div>
        </Link>
        <Link
          className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-[#111418] rounded-full bg-[#f0f2f4]"
          href="#"
        >
          1
        </Link>
        <Link
          className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full"
          href="#"
        >
          2
        </Link>
        <Link
          className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full"
          href="#"
        >
          3
        </Link>
        <Link
          className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full"
          href="#"
        >
          4
        </Link>
        <Link
          className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full"
          href="#"
        >
          5
        </Link>
        <Link href="#" className="flex size-10 items-center justify-center">
          <div
            className="text-[#111418]"
            data-icon="CaretRight"
            data-size="18px"
            data-weight="regular"
          >
            <Arrow />
          </div>
        </Link>
      </div>
    </>
  );
}
