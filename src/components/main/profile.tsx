import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex-1 relative w-full max-w-md mx-auto">
      <div
        className={
          "absolute top-5 left-1/2 -translate-x-1/2 w-[90%] h-80 rounded-lg blur-3xl opacity-40 z-0 dark:bg-gradient-to-r dark:from-white/20 dark:to-white/10 bg-gradient-to-r from-black/10 to-black/5"
        }
      />
      <Image
        src="/profile.png"
        alt="Vishal Kumar"
        width={400}
        height={500}
        className="mx-auto relative z-10 rounded-full object-cover shadow-lg"
      />
    </div>
  );
}
