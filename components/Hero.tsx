import Image from "next/image";
import { FC } from "react";
import InputArea from "./InputArea";
import Eyes from "./Eyes";

type THeroProps = {
  promptValue: string;
  setPromptValue: React.Dispatch<React.SetStateAction<string>>;
  handleDisplayResult: () => void;
};

const Hero: FC<THeroProps> = ({
  promptValue,
  setPromptValue,
  handleDisplayResult,
}) => {
  const handleClickSuggestion = (value: string) => {
    setPromptValue(value);
  };

  return (
  <div className="flex flex-col items-center justify-center rounded-2xl p-2 space-y-8">
      <a
        className="inline-flex h-8 shrink-0 items-center gap-[9px] rounded-[50px] glass px-4 py-5"
        href="https://cerebras.ai/"
        target="_blank"
      >
        <span className="text-center text-base font-light items-end leading-[normal] text-white flex flex-row gap-1 drop-shadow-glow animate-float">
          <span>Powered by Cerebras AI & Llama</span>
        </span>
      </a>

      <div>
        <Eyes className="shadow-soft" size={50} />
      </div>

      <h1 className="bg-custom-gradient bg-clip-text text-center text-4xl font-semibold leading-[normal] lg:text-[64px] drop-shadow-glow animate-float">
        Search Faster & Better
      </h1>

      {/* input section */}
      <div className="w-full max-w-[708px] rounded-9xl">
        <InputArea
          promptValue={promptValue}
          setPromptValue={setPromptValue}
          handleDisplayResult={handleDisplayResult}
        />
      </div>

      {/* Suggestions section */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 lg:flex-nowrap lg:justify-normal">
        {suggestions.map((item) => (
          <div
            className="flex h-[35px] cursor-pointer items-center justify-center gap-[5px] rounded-lg glass ring-hover px-2.5 py-2"
            onClick={() => handleClickSuggestion(item?.name)}
            key={item.id}
          >
            <Image
              unoptimized
              src={item.icon}
              alt={item.name}
              width={18}
              height={16}
              className="w-[18px]"
            />
            <span className="text-sm font-light leading-[normal] text-white/90">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* Github link section */}
      <p className="text-center text-sm font-light leading-[normal] text-white/70">
        Fully open source!{" "}
        <span className="text-sm font-medium underline">
          <a
            href="https://github.com/thekishandev/Syntheseek"
            target="_blank"
            rel="noopener noreferrer"
          >
            Star it on github.
          </a>
        </span>
      </p>
    </div>
  );
};

type suggestionType = {
  id: number;
  name: string;
  icon: string;
};

const suggestions: suggestionType[] = [
  {
    id: 1,
    name: "Is Cerebras faster than nvidia?",
    icon: "/img/icon _leaf_.svg",
  },
  {
    id: 2,
    name: "What is Docker MCP Gateway?",
    icon: "/img/icon _dumbell_.svg",
  },
  {
    id: 3,
    name: "What are the applications enabled by Llama 4",
    icon: "/img/icon _atom_.svg",
  },
];

export default Hero;
