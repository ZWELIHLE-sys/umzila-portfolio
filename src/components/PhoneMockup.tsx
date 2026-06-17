import Image from "next/image";
import { Smartphone } from "lucide-react";

export default function PhoneMockup({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <div className="mx-auto w-full max-w-[200px]">
      {/* Phone frame */}
      <div className="relative aspect-[9/19] rounded-[2.2rem] border-[6px] border-dark bg-dark shadow-xl">
        {/* Notch / speaker */}
        <div className="absolute left-1/2 top-2 z-10 h-1.5 w-14 -translate-x-1/2 rounded-full bg-white/25" />
        {/* Screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[1.7rem] bg-white">
          {src ? (
            <Image
              src={src}
              alt={alt}
              fill
              sizes="200px"
              className="object-cover object-top"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center bg-mint/30 px-3 text-center">
              <Smartphone size={26} className="text-sage" />
              <div className="mt-2 text-[11px] font-medium text-gray-500">
                Coming soon
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-3 text-center text-sm font-semibold text-dark">
        {label}
      </div>
    </div>
  );
}
