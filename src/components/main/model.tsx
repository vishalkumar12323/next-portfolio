"use client";
import React, {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { Card } from "../ui/card";
import { useRouter } from "next/navigation";

export default function Model({ children }: { children: React.ReactNode }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);
  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target == overlay.current || e.target == wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);
  return (
    <div
      ref={overlay}
      className="fixed top-0 left-0 z-[999] py-20 px-0 w-full h-full bg-gray-300/60  dark:bg-black/70 backdrop-blur-md overflow-auto"
      onClick={onClick}
    >
      <Card
        ref={wrapper}
        className="overflow-hidden relative m-auto p-0 border rounded-md max-w-11/12 md:max-w-2/3 animatepop"
      >
        {children}
      </Card>
    </div>
  );
}
