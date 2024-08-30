import ChatIcon from "@/app/images/ChatIcon";
import HeaderIcon from "@/app/images/HeaderIcon";
import SearchIcon from "@/app/images/SearchIcon";
import Link from "next/link";
import React from "react";

export default function MainHeader() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-10 py-3 bg-white">
      <div className="flex items-center gap-4 text-[#111418]">
        <div className="size-4">
          <SearchIcon />
        </div>
        <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">
          StudyLink
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link
            className="text-[#111418] text-sm font-medium leading-normal"
            href="#"
          >
            홈
          </Link>
          <Link
            className="text-[#111418] text-sm font-medium leading-normal"
            href="/studylist"
          >
            찾아보기
          </Link>
          <Link
            className="text-[#111418] text-sm font-medium leading-normal"
            href="#"
          >
            그룹
          </Link>
          <Link
            className="text-[#111418] text-sm font-medium leading-normal"
            href="#"
          >
            프로필
          </Link>
        </div>
        <div className="flex gap-2">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">만들기</span>
          </button>
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f0f2f4] text-[#111418] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
            <div
              className="text-[#111418]"
              data-icon="MagnifyingGlass"
              data-size="20px"
              data-weight="regular"
            >
              <ChatIcon />
            </div>
          </button>
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f0f2f4] text-[#111418] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
            <div
              className="text-[#111418]"
              data-icon="ChatCircle"
              data-size="20px"
              data-weight="regular"
            >
              <HeaderIcon />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
