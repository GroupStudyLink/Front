import Arrow from "@/app/images/Arrow";
import LeftBar from "@/components/layouts/LeftBar";
import Write from "@/components/Write";
import React from "react";

export default function page() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container h-full grow flex">
      <div className="flex-shrink-0">
            <LeftBar />
          </div>
        <div className="gap-1 px-6 flex flex-1 justify-center items-start py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 bg-white ml-6">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">
                  Algorithms and Data Structures
                </p>
                <p className="text-[#637588] text-sm font-normal leading-normal">
                  A group of 400 members | Public
                </p>
              </div>
            </div>
            <Write />
            <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Latest
            </h3>
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
                  How to implement a priority queue in C++?
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
                  What is the difference between a stack and a queue?
                </p>
                <p className="text-[#637588] text-base font-normal leading-normal">
                  10 days ago
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center p-4">
              <a href="#" className="flex size-10 items-center justify-center">
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
              </a>
              <a
                className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-[#111418] rounded-full bg-[#f0f2f4]"
                href="#"
              >
                1
              </a>
              <a
                className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full"
                href="#"
              >
                2
              </a>
              <a
                className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full"
                href="#"
              >
                3
              </a>
              <a
                className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full"
                href="#"
              >
                4
              </a>
              <a
                className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full"
                href="#"
              >
                5
              </a>
              <a href="#" className="flex size-10 items-center justify-center">
                <div
                  className="text-[#111418]"
                  data-icon="CaretRight"
                  data-size="18px"
                  data-weight="regular"
                >
                  <Arrow />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
