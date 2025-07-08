"use client";

import FloatingParticles from "./floating-particles";

interface AnimatedBackgroundProps {
  isMounted: boolean;
}

export default function AnimatedBackground({ isMounted }: AnimatedBackgroundProps) {
  return (
    <>
      {/* Enhanced Premium Background with Green Blur Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50/30 to-white" />

      {/* Enhanced Green Blur Gradient Circles with More Intensity */}
      <div className="absolute top-10 left-5 w-[500px] h-[500px] bg-gradient-to-r from-[#56D08D]/25 to-green-500/18 rounded-full blur-3xl animate-float" />
      <div 
        className="absolute top-32 right-10 w-[450px] h-[450px] bg-gradient-to-l from-[#56D08D]/22 to-green-600/15 rounded-full blur-3xl animate-float" 
        style={{ animationDelay: "2s" }}
      />
      <div 
        className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-gradient-to-br from-[#56D08D]/20 to-green-700/12 rounded-full blur-3xl animate-float" 
        style={{ animationDelay: "4s" }}
      />
      <div 
        className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-gradient-to-tl from-green-500/15 to-[#56D08D]/10 rounded-full blur-3xl animate-float" 
        style={{ animationDelay: "6s" }}
      />

      {/* Floating Particles */}
      <FloatingParticles isMounted={isMounted} />

      {/* Grid pattern overlay with premium feel */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2356D08D%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2240%22%20cy%3D%2240%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60" />
    </>
  );
} 