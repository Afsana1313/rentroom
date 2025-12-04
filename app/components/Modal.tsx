"use client";

import React, { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Hooks must always run
  useEffect(() => {
    if (!isOpen) return; // safe → hook still runs but exits early

    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  // Conditional rendering happens AFTER hooks
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-[1000] flex items-center justify-center">
      <div
        ref={ref}
        className="bg-white rounded-2xl p-6 shadow-xl animate-fadeIn"
      >
        {children}
      </div>
    </div>
  );
}
