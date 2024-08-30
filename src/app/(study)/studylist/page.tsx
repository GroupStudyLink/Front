import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              스터디 목록
            </h2>
            <div className="flex items-center gap-4 bg-white px-4 py-3">
              <div className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg h-14 w-fit bg-black"></div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">
                  Organic Chemistry
                </p>
                <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">
                  Uploaded 2 days ago
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 py-3">
              <div className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg h-14 w-fit bg-black"></div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">
                  Biology
                </p>
                <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">
                  Uploaded 5 days ago
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 py-3">
              <div className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg h-14 w-fit bg-black"></div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">
                  Physics
                </p>
                <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">
                  Uploaded 1 week ago
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 py-3">
              <div className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg h-14 w-fit bg-black"></div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">
                  Math
                </p>
                <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">
                  Uploaded 2 weeks ago
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 py-3">
              <div className="bg-center bg-no-repeat aspect-video bg-cover rounded-lg h-14 w-fit bg-black"></div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">
                  Computer Science
                </p>
                <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">
                  Uploaded 3 weeks ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
