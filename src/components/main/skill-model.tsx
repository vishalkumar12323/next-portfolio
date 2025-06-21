"use client";
import React, { useState, useEffect, useRef } from "react";
import { Card } from "../ui/card";

const Model = ({ children }: { children: React.ReactNode }) => {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        ref={overlay}
        className="fixed top-0 left-0 z-[999] py-20 px-0 w-full h-full bg-gray-300/60  dark:bg-black/70 backdrop-blur-md overflow-auto"
      >
        <Card
          ref={wrapper}
          className="overflow-hidden relative m-auto p-0 border rounded-md max-w-11/12 md:max-w-2/3 animatepop"
        >
          {children}
        </Card>
      </div>
    </>
  );
};
