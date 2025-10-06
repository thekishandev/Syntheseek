import Image from "next/image";

const SimilarTopics = ({
  similarQuestions,
  handleDisplayResult,
  reset,
}: {
  similarQuestions: string[];
  handleDisplayResult: (item: string) => void;
  reset: () => void;
}) => {
  return (
    <div className="container flex h-auto w-full shrink-0 gap-4 glass-card p-4 lg:p-8">
      <div className="hidden lg:block">
        <Image
          unoptimized
          src="/img/similarTopics.svg"
          alt="footer"
          width={24}
          height={24}
        />
      </div>
      <div className="flex-1 divide-y divide-white/10">
        <div className="flex gap-4 pb-3">
          <Image
            unoptimized
            src="/img/similarTopics.svg"
            alt="footer"
            width={24}
            height={24}
            className="block lg:hidden"
          />
          <h3 className="text-base font-bold uppercase text-white">
            Similar topics:{" "}
          </h3>
        </div>

        <div className="w-full">
          {similarQuestions.length > 0 ? (
            similarQuestions.map((item, index) => (
              <button
                className={`flex w-full cursor-pointer items-center gap-4 py-4 text-left ${
                  index > 0 ? "border-t border-white/10" : ""
                } hover:bg-white/5 transition-colors`}
                key={item}
                onClick={() => {
                  reset();
                  handleDisplayResult(item);
                }}
              >
                <div className="flex items-center">
                  <Image
                    unoptimized
                    src="/img/arrow-circle-up-right.svg"
                    alt="footer"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="text-sm font-light leading-[normal] text-white/85 [leading-trim:both] [text-edge:cap]">
                  {item}
                </p>
              </button>
            ))
          ) : (
            <>
              <div className="mb-4 h-10 w-full animate-pulse rounded-md bg-white/10" />
              <div className="mb-4 h-10 w-full animate-pulse rounded-md bg-white/10" />
              <div className="h-10 w-full animate-pulse rounded-md bg-white/10" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimilarTopics;
