import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto h-full w-full max-w-screen-xl max-md:px-5",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
