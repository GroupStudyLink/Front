import Text from "@/components/Text";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
      <h2 className="mb-5 text-2xl font-semibold overflow-hidden whitespace-nowrap border-r-2 border-black">
        <Text data={"StudyLink"} />
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
      </h2>
      <h3 className="mb-5 text-xl font-semibold text-black">
        스터디 그룹에 참여하거나, 만들어보세요
      </h3>
      <span className="flex items-center justify-center">
        <Link
          href="/studylist"
          className="rounded-md px-3 py-1 bg-white text-black hover:bg-gray-500 mr-1 border-black border-2"
        >
          참가하기
        </Link>
        <Link
          href="/"
          className="rounded-md px-3 py-1 border-2 border-white ml-1 text-black"
        >
          만들기
        </Link>
      </span>
    </main>
  );
}
