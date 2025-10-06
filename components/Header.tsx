"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GitHubStarButton } from "@/components/ui/github";

const Header = () => {
  return (
        <header className="relative z-10 container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between backdrop-blur-md bg-white/5 rounded-3xl shadow-xl border border-white/10 gap-4 sm:gap-0">
          {/* Left: Logo & Title */}
          <div className="flex items-center gap-3">
            <motion.div
              className="drop-shadow-md"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
            >
              <Image src="/logo.gif" width={40} height={40} alt="Syntheseek logo" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text">
              Synthe
              <span className="ml-1 text-transparent bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text">
                Seek
              </span>
            </motion.h1>
          </div>

          {/* Right: Buttons */}
          <div className="flex items-center gap-3">
            <GitHubStarButton />
            <Link href={"https://x.com/thekishandev"} target="_blank">
            <Image
              unoptimized
              src="/img/x.svg"
              alt="twitter"
              width={15}
              height={15}
            />
          </Link>
          </div>
        </header>
  );
};

export default Header;
