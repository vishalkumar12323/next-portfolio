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
      className="fixed overflow-y-auto top-0 left-0 z-[999] p-10 w-full h-full bg-gray-300/60 darK:bg-black/70 backdrop-blur-md"
      onClick={onClick}
    >
      <Card
        ref={wrapper}
        className="p-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-2/3 w-full"
      >
        {children}
      </Card>
    </div>
  );
}
