// import ThemeColorUpdater from "@/components/CommonLayout/ThemeColorUpdater";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      {/* <ThemeColorUpdater color="#f0f4f8" /> */}
      <div className="mx-auto mt-3 w-[90%]">
        <div className="bg-ui-button text-ui-buttonText w-fit rounded-full px-4 py-1 text-xl font-bold shadow-lg">
          <Link href="/home">2048</Link>
        </div>
      </div>
    </>
  );
}
