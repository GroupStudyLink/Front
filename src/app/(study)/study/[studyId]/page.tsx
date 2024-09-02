import FeedbackBlackIcon from "@/app/images/FeedbackBlackIcon";
import FeedbackWhiteIcon from "@/app/images/FeedbackWhiteIcon";
import HomeIcon from "@/app/images/HomeIcon";
import NoteIcon from "@/app/images/NoteIcon";
import PhotoIcon from "@/app/images/PhotoIcon";
import Plus from "@/app/images/Plus";
import LeftBar from "@/components/layouts/LeftBar";
import React from "react";

export default function page() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-between py-5">
          <LeftBar />
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          </div>
        </div>
      </div>
    </div>
  );
}
