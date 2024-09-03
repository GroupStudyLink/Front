import React from "react";

export default function IntroduceStudyGroup() {
  return (
    <div className="layout-content-container flex flex-col w-[360px]">
      <div className="@container">
        <div className="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row">
          <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full bg-[url('https://cdn.usegalileo.ai/stability/66ee6652-2a48-45b5-aa0c-d111f46aa172.png')]"></div>
          <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
            <div className="flex flex-col gap-2 text-left">
              <h1 className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                Data Science &amp; Machine Learning
              </h1>
              <h2 className="text-[#111418] text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                This study group is a place for anyone interested in data
                science and machine learning to learn and grow together.
              </h2>
            </div>
            <div className="flex-wrap gap-3 flex">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                <span className="truncate">가입하기</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                <span className="truncate">가입요청하기</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
