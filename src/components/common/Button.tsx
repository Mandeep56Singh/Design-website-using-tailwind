import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "../../utils/utils";

const buttonVariants = cva(
  " flex items-center justify-center rounded-2xl font-Inter text-lg font-semibold  text-white transition-colors",
  {
    variants: {
      variant: {
        default: "hover:bg-orange-light/90 bg-orange-light ",
        black: "hover:bg-black-dark/90 bg-black-dark",
        outline: "border border-orange-light ",
        textual: " font-Jost   text-black-light ",
      },
      size: {
        default: "px-8 py-4 xl:px-10 xl:py-6",
        size0:"",
        icon: "size-14 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
type buttonProps = ComponentProps<"button"> &
  // eslint-disable-next-line @typescript-eslint/ban-types
  VariantProps<typeof buttonVariants> & {};
const Button = forwardRef<HTMLButtonElement, buttonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      ></button>
    );
  },
);

export default Button;
