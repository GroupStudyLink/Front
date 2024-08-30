import Arrow from "@/app/images/Arrow";
import FeedbackBlackIcon from "@/app/images/FeedbackBlackIcon";
import FeedbackWhiteIcon from "@/app/images/FeedbackWhiteIcon";
import HomeIcon from "@/app/images/HomeIcon";
import NoteIcon from "@/app/images/NoteIcon";
import PhotoIcon from "@/app/images/PhotoIcon";
import React from "react";

export default function page() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-60">
            <div className="flex h-full min-h-[700px] flex-col justify-between bg-white p-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div
                      className="text-[#111418]"
                      data-icon="House"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <HomeIcon />
                    </div>
                    <p className="text-[#111418] text-sm font-medium leading-normal">
                      Home
                    </p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div
                      className="text-[#111418]"
                      data-icon="Image"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <PhotoIcon />
                    </div>
                    <p className="text-[#111418] text-sm font-medium leading-normal">
                      Photos
                    </p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div
                      className="text-[#111418]"
                      data-icon="Note"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <NoteIcon />
                    </div>
                    <p className="text-[#111418] text-sm font-medium leading-normal">
                      Notes
                    </p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#f0f2f4]">
                    <div
                      className="text-[#111418]"
                      data-icon="ChatCircleDots"
                      data-size="24px"
                      data-weight="fill"
                    >
                      <FeedbackBlackIcon />
                    </div>
                    <p className="text-[#111418] text-sm font-medium leading-normal">
                      Feedback
                    </p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div
                      className="text-[#111418]"
                      data-icon="ChatCircleDots"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <FeedbackWhiteIcon />
                    </div>
                    <p className="text-[#111418] text-sm font-medium leading-normal">
                      Feedback
                    </p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div
                      className="text-[#111418]"
                      data-icon="ChatCircleDots"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <FeedbackWhiteIcon />
                    </div>
                    <p className="text-[#111418] text-sm font-medium leading-normal">
                      Feedback
                    </p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div
                      className="text-[#111418]"
                      data-icon="ChatCircleDots"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <FeedbackWhiteIcon />
                    </div>
                    <p className="text-[#111418] text-sm font-medium leading-normal">
                      Feedback
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">
                Feedback
              </p>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-12"
                  data-icon="ChatCircleDots"
                  data-size="24px"
                  data-weight="regular"
                >
                  <FeedbackWhiteIcon />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">
                    1,234
                  </p>
                  <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">
                    My Feedback
                  </p>
                </div>
              </div>
              <div className="shrink-0">
                <div
                  className="text-[#111418] flex size-7 items-center justify-center"
                  data-icon="CaretRight"
                  data-size="24px"
                  data-weight="regular"
                >
                  <Arrow />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-12"
                  data-icon="ChatCircleDots"
                  data-size="24px"
                  data-weight="regular"
                >
                  <FeedbackWhiteIcon />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">
                    1,234
                  </p>
                  <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">
                    My Feedback
                  </p>
                </div>
              </div>
              <div className="shrink-0">
                <div
                  className="text-[#111418] flex size-7 items-center justify-center"
                  data-icon="CaretRight"
                  data-size="24px"
                  data-weight="regular"
                >
                  <Arrow />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-12"
                  data-icon="ChatCircleDots"
                  data-size="24px"
                  data-weight="regular"
                >
                  <FeedbackWhiteIcon />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">
                    1,234
                  </p>
                  <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">
                    My Feedback
                  </p>
                </div>
              </div>
              <div className="shrink-0">
                <div
                  className="text-[#111418] flex size-7 items-center justify-center"
                  data-icon="CaretRight"
                  data-size="24px"
                  data-weight="regular"
                >
                 <Arrow />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
