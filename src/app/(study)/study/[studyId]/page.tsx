import Arrow from "@/app/images/Arrow";
import IntroduceStudyGroup from "@/components/IntroduceStudyGroup";
import LeftBar from "@/components/layouts/LeftBar";
import Post from "@/components/Post";
import Write from "@/components/Write";
import Link from "next/link";
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
                  Link group of 400 members | Public
                </p>
              </div>
            </div>
            <Write />
            <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Latest
            </h3>
            <Post />
          </div>
        </div>
        <IntroduceStudyGroup />
      </div>
    </div>
  );
}
