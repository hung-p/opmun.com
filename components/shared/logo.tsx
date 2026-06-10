import React from 'react';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
      role="img"
      aria-label="Opmun Logo"
    >
      {/* Vòng tròn khuyết phía trên */}
      <path d="M 21.625 68.75 A 84.375 84.375 0 0 1 178.375 68.75 L 142.962 68.75 A 53.125 53.125 0 0 0 57.038 68.75 Z" />

      {/* Vòng tròn khuyết phía dưới */}
      <path d="M 178.375 131.25 A 84.375 84.375 0 0 1 21.625 131.25 L 57.038 131.25 A 53.125 53.125 0 0 0 142.962 131.25 Z" />

      {/* Thanh chắn ngang ở giữa (đã tự bo cong 2 đầu theo rìa logo) */}
      <path d="M 17.084 84.375 A 84.375 84.375 0 0 0 17.084 115.625 L 182.916 115.625 A 84.375 84.375 0 0 0 182.916 84.375 Z" />
    </svg>
  );
}
