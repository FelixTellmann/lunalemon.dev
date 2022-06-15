import { useTooltipStore } from "_client/stores/tooltip-store";
import Image from "next/image";
import { AppToolTip } from "pages/_app";
import { FC } from "react";
import ReactTooltip from "react-tooltip";
import { LogoBannerSection } from "types/sections";

export const LogoBanner: FC<LogoBannerSection> = ({ id, settings, blocks, type }) => {
  const [tooltip, setTooltip] = useTooltipStore();
  return (
    <div className="mx-auto -mt-10 max-w-7xl px-4 sm:px-8">
      <section>
        <header>
          <h2 className="mb-6 text-[15px] font-medium text-slate-500">{settings.title}</h2>
        </header>
        <main
          className="relative sm:left-1/2 sm:-ml-[50vw] sm:w-screen sm:pl-[max(32px,calc((100vw-80rem)/2+32px))]"
          onMouseEnter={() => {
            setTooltip(true);
          }}
          onMouseLeave={(e) => {
            setTooltip(false);
            setTimeout(() => setTooltip(true), 50);
          }}
        >
          <div
            className="scrollbar-none flex gap-12 overflow-x-scroll hfa:animation-pause md:animate-slide md:overflow-x-auto"
            style={{ animationDuration: `${settings.animation_duration}s` }}
          >
            <div className="grid auto-cols-max grid-flow-col-dense gap-12">
              {settings.logo_items?.map((product) => {
                return (
                  <figure
                    key={product.id}
                    className="relative w-full cursor-pointer opacity-60 grayscale transition-all hfa:opacity-100  hfa:grayscale-0"
                    data-tip={product.title}
                    style={{
                      height: `${settings.height}px`,
                      width: `${product.featured_media.aspect_ratio * settings.height}px`,
                    }}
                  >
                    <Image
                      objectFit="contain"
                      layout="fill"
                      src={`${product.featured_media.src}`}
                      alt={product.title}
                    />
                  </figure>
                );
              })}
              {blocks.map((block) => {
                switch (block.type) {
                  case "manual-image":
                    return block.settings.image
                      ? <figure
                          key={block.id}
                          className="relative w-full"
                          style={{ height: `${settings.height}px` }}
                        >
                          <Image
                            objectFit="contain"
                            objectPosition="50% 60%"
                            layout="fill"
                            // width={settings.image.width}
                            // height={settings.image.height}
                            src={`https:${block?.settings?.image?.src}`}
                            alt={block?.settings?.image?.alt}
                          />
                        </figure>
                      : null;
                  case "manual-svg":
                    return (
                      <figure
                        key={block.id}
                        dangerouslySetInnerHTML={{ __html: block.settings.svg }}
                      />
                    );
                }
              })}
            </div>
            <div className="grid auto-cols-max grid-flow-col-dense gap-12 md:hidden">
              {settings.logo_items?.map((product) => {
                return (
                  <figure
                    key={product.id}
                    className="relative w-full cursor-pointer opacity-60 grayscale transition-all hfa:opacity-100  hfa:grayscale-0"
                    data-tip={product.title}
                    style={{
                      height: `${settings.height}px`,
                      width: `${product.featured_media.aspect_ratio * settings.height}px`,
                    }}
                  >
                    <Image
                      objectFit="contain"
                      layout="fill"
                      src={`${product.featured_media.src}`}
                      alt={product.title}
                    />
                  </figure>
                );
              })}
              {blocks.map((block) => {
                switch (block.type) {
                  case "manual-image":
                    return block.settings.image
                      ? <figure
                          key={block.id}
                          className="relative w-full"
                          style={{ height: `${settings.height}px` }}
                        >
                          <Image
                            objectFit="contain"
                            objectPosition="50% 60%"
                            layout="fill"
                            // width={settings.image.width}
                            // height={settings.image.height}
                            src={`https:${block?.settings?.image?.src}`}
                            alt={block?.settings?.image?.alt}
                          />
                        </figure>
                      : null;
                  case "manual-svg":
                    return (
                      <figure
                        key={block.id}
                        dangerouslySetInnerHTML={{ __html: block.settings.svg }}
                      />
                    );
                }
              })}
            </div>
          </div>
          <div className="absolute right-0 top-0 z-10 h-full w-[max(16px,calc((100vw-80rem)/2+16px))] bg-gradient-to-r from-transparent to-white sm:w-[max(32px,calc((100vw-80rem)/2+32px))] sm:from-transparent sm:via-white sm:to-white"></div>
          <div className="absolute left-0 top-0 z-10 h-full w-[max(16px,calc((100vw-80rem)/2+16px))] bg-gradient-to-l from-transparent to-white sm:w-[max(32px,calc((100vw-80rem)/2+32px))] sm:from-transparent sm:via-white sm:to-white"></div>
        </main>
      </section>
    </div>
  );
};
