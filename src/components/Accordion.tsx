import {
  type ComponentPropsWithoutRef,
  type MouseEventHandler,
  useRef,
  useState,
} from "react";
import cn from "classnames";

enum AccordionAnimationStatus {
  DEFAULT = "default",
  EXPANDING = "expanding",
  CLOSING = "closing",
}

export type AccordionProps = ComponentPropsWithoutRef<"details"> & {
  summary?: string;
};

export const Accordion = ({
  children,
  summary,
  className,
  ...props
}: AccordionProps) => {
  const detailsElement = useRef<HTMLDetailsElement>(null);
  const summaryElement = useRef<HTMLElement>(null);
  const contentElement = useRef<HTMLDivElement>(null);
  const [animation, setAnimation] = useState<Animation>();
  const [animationStatus, setAnimationStatus] =
    useState<AccordionAnimationStatus>(AccordionAnimationStatus.DEFAULT);

  const onAnimationFinish = (open: boolean) => {
    if (!detailsElement.current) return;
    detailsElement.current.open = open;
    setAnimation(undefined);
    detailsElement.current.style.height = "";
    detailsElement.current.style.overflow = "";
  };

  const animateAccordion = (open: boolean) => {
    if (
      !detailsElement.current ||
      !summaryElement.current ||
      !contentElement.current
    )
      return;

    const startHeight = `${detailsElement.current.offsetHeight}px`;
    const endHeight = `${
      summaryElement.current.offsetHeight +
      (open ? contentElement.current.offsetHeight : 0)
    }px`;

    if (animation) {
      animation.cancel();
    }

    const newAnimation = detailsElement.current.animate(
      {
        height: [startHeight, endHeight],
      },
      {
        duration: 300,
        easing: "ease-out",
      },
    );

    newAnimation.onfinish = () => onAnimationFinish(open);
    setAnimation(newAnimation);
    setAnimationStatus(
      open
        ? AccordionAnimationStatus.EXPANDING
        : AccordionAnimationStatus.CLOSING,
    );
  };

  const openAccordion = () => {
    if (!detailsElement.current) return;
    detailsElement.current.style.height = `${detailsElement.current.offsetHeight}px`;
    detailsElement.current.open = true;
    animateAccordion(true);
  };

  const accordionClickHandler: MouseEventHandler = (event) => {
    event.preventDefault();
    if (!detailsElement.current) return;

    if (detailsElement.current.open) {
      animateAccordion(false);
    } else {
      openAccordion();
    }
  };

  return (
    <div
      className={cn(
        "relative my-6 w-full after:absolute after:-inset-x-8 after:-inset-y-6 after:z-[-1] after:rounded-xl after:bg-transparent after:transition-colors after:content-[''] after:hover:bg-gray-100",
        {
          "after:!bg-gray-50 after:hover:!bg-gray-100":
            animationStatus === AccordionAnimationStatus.EXPANDING,
        },
      )}
    >
      <details
        className={cn(
          "no-marker font-brand relative overflow-hidden text-lg xl:text-xl",
          className,
        )}
        ref={detailsElement}
        {...props}
      >
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        <summary
          className="flex cursor-pointer items-center"
          onClick={accordionClickHandler}
          ref={summaryElement}
        >
          <span
            aria-hidden
            className="relative flex size-5 items-center justify-center rounded-full border-2 border-gray-400"
          >
            <span className="h-0.5 w-2.5 rounded bg-gray-400" />
            <span
              className={cn(
                "absolute h-2.5 w-0.5 rounded bg-gray-400 transition-transform duration-300",
                {
                  "rotate-90":
                    animationStatus === AccordionAnimationStatus.EXPANDING,
                },
              )}
            />
          </span>
          <span className="ml-[24px]">{summary}</span>
        </summary>
        <div ref={contentElement} className="pl-[44px] pt-2 text-gray-500">
          {children}
        </div>
      </details>
    </div>
  );
};
