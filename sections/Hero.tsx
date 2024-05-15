import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Props {
  /** 
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  description?: string;
  image?: ImageWidget;
  placement?: "left" | "right";
  cta?: CTA[];
}

const PLACEMENT = {
  left: "flex-col text-left lg:flex-row-reverse",
  right: "flex-col text-left lg:flex-row",
};

export default function HeroFlats({
  title = "Click here to tweak this text however you want.",
  description = "This text is entirely editable, tailor it freely.",
  image,
  placement = "left",
  cta,
}: Props) {
  return (
    <div>
      <div class="flex flex-col gap-8 items-center mx-auto">
        <div
          class={`flex w-full xl:container xl:mx-auto py-20 mx-5 md:mx-10 z-10 lg:pt-10 lg:pb-20 gap-12 md:gap-20 items-center container`}
        >
          {image && (
            <Image
              width={640}
              class="lg:w-full object-fit w-full"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={image}
              alt={image}
              decoding="async"
              loading="lazy"
            />
          )}
        </div>
      </div>
    </div>
  );
}
