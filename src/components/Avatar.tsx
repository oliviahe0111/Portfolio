import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "size-10",
  md: "size-20",
  lg: "size-32",
};

export default function Avatar({ src, alt, size = "md" }: AvatarProps) {
  return (
    <div
      className={`bg-center bg-no-repeat aspect-square bg-cover rounded-full ${sizeClasses[size]}`}
      style={{ backgroundImage: `url("${src}")` }}
      role="img"
      aria-label={alt}
    />
  );
}
