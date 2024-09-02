import ImageIcon from "@/app/images/ImageIcon";
import React from "react";

export default function Write() {
  return (
    <>
      <div className="p-4 @container">
        <div className="flex items-center justify-between gap-4 rounded-xl border border-[#dce0e5] bg-white p-5 @[480px]:flex-row @[480px]:items-center">
          <p className="text-[#111418] text-base font-bold leading-tight">
            게시물 작성하기
          </p>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#1980e6] text-white text-sm font-medium leading-normal">
            <span className="truncate">Post</span>
          </button>
        </div>
      </div>
      <div className="flex items-center px-4 py-3 gap-3 @container">
        <label className="flex flex-col min-w-40 h-full flex-1">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
            <div className="flex border border-[#dce0e5] bg-white justify-end pl-[15px] pr-[15px] pt-[15px] rounded-l-xl border-r-0">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shrink-0 bg-black"></div>
            </div>
            <div className="flex flex-1 flex-col">
              <textarea
                placeholder="What would you like to discuss?"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-auto placeholder:text-[#bbc4ce] rounded-l-none border-l-0 pl-2 rounded-b-none border-b-0 text-base font-normal leading-normal pt-[22px]"
              ></textarea>
              <div className="flex border border-[#dce0e5] bg-white justify-end pr-[15px] rounded-br-xl border-l-0 border-t-0 px-[15px] pb-[15px]">
                <div className="flex items-center gap-4 justify-end">
                  <div className="flex items-center gap-1">
                    <button className="flex items-center justify-center p-1.5">
                      <div
                        className="text-[#637588]"
                        data-icon="Image"
                        data-size="20px"
                        data-weight="regular"
                      >
                        <ImageIcon />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </label>
      </div>
    </>
  );
}
