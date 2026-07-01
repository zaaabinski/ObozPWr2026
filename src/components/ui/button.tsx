import * as React from "react";
import { Button as BaseButton } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff9048] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#ffd080] px-6 py-3 !font-extrabold white-text shadow-[0_14px_35px_rgba(255,144,72,0.30)] hover:bg-[#ff9048] hover:-translate-y-0.5",
        yellow:
          "bg-[#f9cc7f] px-10 py-5 text-base !font-extrabold text-[#371000] rounded-xl shadow-[0_12px_30px_rgba(249,204,127,0.25)] transition-all duration-300 hover:bg-[#ff9048] hover:text-white hover:-translate-y-0.5",  
        light:
          "bg-white px-6 py-3 text-[#381000] shadow-[0_12px_30px_rgba(56,16,0,0.14)] hover:bg-[#fff2d8] hover:-translate-y-0.5",
        outline:
          "border border-[#ead7b8] bg-white px-5 py-2.5 text-[#381000] hover:border-[#ff9048] hover:text-[#ff9048]"

      },
      size: {
        default: "",
        sm: "px-4 py-2 text-xs",
        lg: "px-8 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = React.ComponentProps<typeof BaseButton> &
  VariantProps<typeof buttonVariants>;

function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <BaseButton
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
