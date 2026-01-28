import { ReactNode } from "react";

interface FrameProps {
  children: ReactNode;
}

export default function Frame({ children }: FrameProps) {
  return (
    <div className="relative min-h-screen">
      {/* Outer frame */}
      <div className="fixed inset-6 border border-wood/20 rounded-[24px] pointer-events-none z-40" />
      <div className="fixed inset-10 border border-copper/10 rounded-[20px] pointer-events-none z-40" />
      
      {/* Vertical line illumination */}
      <div className="fixed left-[15%] top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-amber/30 to-transparent pointer-events-none z-40" />
      <div className="fixed right-[15%] top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-amber/30 to-transparent pointer-events-none z-40" />
      
      {children}
    </div>
  );
}
