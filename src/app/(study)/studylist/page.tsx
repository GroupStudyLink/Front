import Search2 from "@/app/images/Search2";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
    <div className="layout-container flex h-full grow flex-col">
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="@container">
            <div className="@[480px]:p-4">
              <div className="relative flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10 bg-[url('https://cdn.usegalileo.ai/sdxl10/57ea3a22-0c37-483d-b629-0af7dc99457c.png')]">
                <div className="absolute inset-0 bg-black opacity-20 rounded-xl"></div>
                <div className="relative z-10">
                <div className="flex flex-col gap-2 text-left">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    스터디 그룹을 찾아보세요
                  </h1>
                  <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                  그룹에 가입하거나 직접 만드세요. 스터디 그룹은 동기를 유지하고 함께 배우는 좋은
                  방법입니다.
                  </h2>
                </div>
                <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
                  <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                    <div
                      className="text-[#637588] flex border border-[#dce0e5] bg-white items-center justify-center pl-[15px] rounded-l-xl border-r-0"
                      data-icon="MagnifyingGlass"
                      data-size="20px"
                      data-weight="regular"
                    >
                      <Search2 />
                    </div>
                    <input
                      placeholder="주제 또는 그룹 검색"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-full placeholder:text-[#637588] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                      value=""
                    />
                    <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-[#dce0e5] bg-white pr-[7px]">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                        <span className="truncate">Search</span>
                      </button>
                    </div>
                  </div>
                </label>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            당신을 위한 추천 그룹
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <div className="flex flex-col gap-3 pb-3">
              <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"></div>
              <div>
                <p className="text-[#111418] text-base font-medium leading-normal">
                  Japanese 101
                </p>
                <p className="text-[#637588] text-sm font-normal leading-normal">
                  4 members
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"></div>
              <div>
                <p className="text-[#111418] text-base font-medium leading-normal">
                  Art History
                </p>
                <p className="text-[#637588] text-sm font-normal leading-normal">
                  3 members
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"></div>
              <div>
                <p className="text-[#111418] text-base font-medium leading-normal">
                  Python Coding
                </p>
                <p className="text-[#637588] text-sm font-normal leading-normal">
                  5 members
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"></div>
              <div>
                <p className="text-[#111418] text-base font-medium leading-normal">
                  Economics
                </p>
                <p className="text-[#637588] text-sm font-normal leading-normal">
                  6 members
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"></div>
              <div>
                <p className="text-[#111418] text-base font-medium leading-normal">
                  Creative Writing
                </p>
                <p className="text-[#637588] text-sm font-normal leading-normal">
                  4 members
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"></div>
              <div>
                <p className="text-[#111418] text-base font-medium leading-normal">
                  Graphic Design
                </p>
                <p className="text-[#637588] text-sm font-normal leading-normal">
                  7 members
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            참가하고 있는 그룹
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <div className="flex flex-col gap-3 pb-3">
              <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"></div>
              <div>
                <p className="text-[#111418] text-base font-medium leading-normal">
                  Data Science
                </p>
                <p className="text-[#637588] text-sm font-normal leading-normal">
                  7 members
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"></div>
              <div>
                <p className="text-[#111418] text-base font-medium leading-normal">
                  Spanish 101
                </p>
                <p className="text-[#637588] text-sm font-normal leading-normal">
                  5 members
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"></div>
              <div>
                <p className="text-[#111418] text-base font-medium leading-normal">
                  Public Speaking
                </p>
                <p className="text-[#637588] text-sm font-normal leading-normal">
                  4 members
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"></div>
              <div>
                <p className="text-[#111418] text-base font-medium leading-normal">
                  Music Theory
                </p>
                <p className="text-[#637588] text-sm font-normal leading-normal">
                  6 members
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"></div>
              <div>
                <p className="text-[#111418] text-base font-medium leading-normal">
                  UX Design
                </p>
                <p className="text-[#637588] text-sm font-normal leading-normal">
                  8 members
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"></div>
              <div>
                <p className="text-[#111418] text-base font-medium leading-normal">
                  Film Production
                </p>
                <p className="text-[#637588] text-sm font-normal leading-normal">
                  3 members
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
