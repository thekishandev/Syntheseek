import Image from "next/image";
import { Toaster, toast } from "react-hot-toast";

export default function Answer({ answer }: { answer: string }) {
  // Function to strip HTML tags from the answer
  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  return (
    <div className="container flex h-auto w-full shrink-0 gap-4 glass-card p-4 lg:p-8">
      <div className="hidden lg:block">
        <Image
          unoptimized
          src="/img/Info.svg"
          alt="footer"
          width={24}
          height={24}
        />
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between pb-3">
          <div className="flex gap-4">
            <Image
              unoptimized
              src="/img/Info.svg"
              alt="footer"
              width={24}
              height={24}
              className="block lg:hidden"
            />
            <h3 className="text-base font-bold uppercase text-white">
              Answer:{" "}
            </h3>
          </div>
          {answer && (
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  const textOnly = stripHtml(answer);
                  navigator.clipboard.writeText(textOnly.trim());
                  toast("Answer copied to clipboard", {
                    icon: "✂️",
                  });
                }}
              >
                <Image
                  unoptimized
                  src="/img/copy.svg"
                  alt="footer"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-wrap content-center items-center gap-[15px]">
          {answer ? (
            <div
              className="prose prose-invert w-full text-base font-light leading-[152.5%] text-white/90"
              dangerouslySetInnerHTML={{ __html: answer ? answer.trim() : '' }}
            />
          ) : (
            <>
              <div className="flex w-full flex-col gap-2">
                <div className="h-6 w-full animate-pulse rounded-md bg-white/10" />
                <div className="h-6 w-full animate-pulse rounded-md bg-white/10" />
                <div className="h-6 w-full animate-pulse rounded-md bg-white/10" />
                <div className="h-6 w-full animate-pulse rounded-md bg-white/10" />
              </div>
            </>
          )}
        </div>
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 2000 }}
      />
    </div>
  );
}
