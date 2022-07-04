import ReactIcon, { ReactIconProps } from "_client/dynamic-react-icon";
import { Image } from "_client/image";
import { Wrapper } from "_client/layout/wrapper";
import { Link } from "_client/link";
import { Button } from "_client/typography/button";
import { Heading } from "_client/typography/heading";
import { Paragraph } from "_client/typography/paragraph";
import { renderIcon } from "_sections/utils";
import { FC } from "react";
import { HeroWithFeaturesSection } from "types/sections";

export const HeroWithFeatures: FC<HeroWithFeaturesSection> = ({ id, settings, blocks, type }) => {
  return (
    <>
      <div className="absolute inset-0 h-full w-full border-b border-slate-200 bg-slate-50" />
      <div className="absolute inset-y-0 hidden w-full min-w-[1360px] bg-[url('/images/bg-gradient-templates.png')] bg-[length:2000px_100%] bg-[position:calc(50%_+_220px)_-50px] bg-no-repeat lg:block" />
      <Wrapper maxWidth="xl" paddingY="base">
        <div className="lg:flex">
          <section className="relative z-20 mx-auto max-w-[40rem] pb-16 pt-0 lg:mx-0 lg:w-[40rem] lg:max-w-none lg:flex-none lg:pb-24 lg:pr-4 lg:pt-20">
            <header>
              <Heading size="pre" as="h2">
                {settings.pre_title}
              </Heading>
              <Heading size="2xl" as="h1">
                {settings.title}
              </Heading>
              <div className="mt-4 flex flex-wrap gap-6">
                {settings.tech.map((product) => {
                  const icon = product.metafields.find(({ key }) => key === "react_icon")?.value;
                  if (icon) {
                    return (
                      <figure
                        key={`icon-${id}-${product.id}`}
                        className="flex items-center text-sm font-medium text-slate-500"
                      >
                        <ReactIcon name={icon as ReactIconProps["name"]} className="h-6 w-6" />
                        <span className="ml-2.5">{product.title}</span>
                      </figure>
                    );
                  }
                  return null;
                })}
              </div>
            </header>
            <main className="mt-4">
              <Paragraph className="paragraph-base text-slate-600">{settings.paragraph}</Paragraph>
            </main>
            <footer className="mt-8 flex gap-4">
              {settings.cta1 && settings.cta1_link
                ? <Button href={settings.cta1_link}>
                    {settings.cta1}
                    <span aria-hidden="true" className="ml-2 inline-flex">
                      →
                    </span>
                  </Button>
                : null}
              {settings.cta2 && settings.cta2_link
                ? <Button href={settings.cta2_link} secondary>
                    {settings.cta2}
                    <span aria-hidden="true" className="ml-2 inline-flex">
                      →
                    </span>
                  </Button>
                : null}
            </footer>
          </section>
          <section className="relative z-10 hidden lg:block">
            <div className="mt-6 flex">
              <div className="relative flex-shrink-0 p-4">
                <div className="relative z-10 overflow-hidden rounded bg-white shadow-xl ring-1 ring-slate-900/5">
                  {settings.image_1
                    ? <Image
                        className="h-[404px] w-[336px] object-cover"
                        priority
                        maxWidth={350}
                        alt={settings.image_1.alt}
                        src={settings.image_1.src}
                        width={settings.image_1.width}
                        height={settings.image_1.height}
                      />
                    : <Image
                        className="h-[404px] w-[336px] object-cover"
                        priority
                        src="https:///cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-collection-4.png?format=webp"
                        alt="space filler"
                        width={336}
                        height={404}
                      />}
                </div>
                <div className="z-0">
                  <div className="absolute left-0 -right-12 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute -top-8 bottom-0 left-12 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute left-0 -right-12 bottom-14 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute right-0 -top-2 -bottom-8 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden">
                    <div className="-mb-px flex h-[2px] w-80 -scale-x-100">
                      <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                      <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mt-14 flex-shrink-0 p-4">
                <div className="overflow-hidden rounded bg-white shadow-xl ring-1 ring-slate-900/5">
                  {settings.image_2
                    ? <Image
                        className="h-[404px] w-[336px] object-cover"
                        priority
                        maxWidth={350}
                        alt={settings.image_2.alt}
                        src={settings.image_2.src}
                        width={settings.image_2.width}
                        height={settings.image_2.height}
                      />
                    : <Image
                        className="h-[404px] w-[336px] object-cover"
                        priority
                        src="https:///cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-collection-2.png?format=webp"
                        alt="space filler"
                        width={336}
                        height={404}
                      />}
                </div>
                <div>
                  <div className="absolute -left-4 -right-8 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute right-0 -top-20 -bottom-12 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute -left-4 -right-8 bottom-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute top-[calc(100%-1px)] right-10 -mb-px flex h-8 items-start overflow-hidden">
                    <div className="-mt-px flex h-[2px] w-80 -scale-x-100">
                      <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                      <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex-shrink-0 p-4">
                <div className="overflow-hidden rounded bg-white shadow-xl ring-1 ring-slate-900/5">
                  {settings.image_3
                    ? <Image
                        className="h-[404px] w-[336px] object-cover"
                        priority
                        maxWidth={350}
                        alt={settings.image_3.alt}
                        src={settings.image_3.src}
                        width={settings.image_3.width}
                        height={settings.image_3.height}
                      />
                    : <Image
                        className="h-[404px] w-[336px] object-cover"
                        priority
                        src="https:///cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-collection-1.png?format=webp"
                        alt="space filler"
                        width={336}
                        height={404}
                      />}
                </div>
                <div>
                  <div className="absolute -left-12 -right-8 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="relative mx-auto grid max-w-[40rem] grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {blocks.map((block) => {
            return (
              <section key={`block-${block.id}`} className="group flex">
                <div className="p-0.5">
                  {block.settings.icon
                    ? renderIcon(
                        block.settings.icon,
                        "h-10 w-10 shrink-0 rounded-lg shadow-md text-sky-500 shadow-sky-500/[.12] transform-cpu group-hfa:[--svg-active-opacity:1]"
                      )
                    : null}
                </div>
                <div className="ml-6">
                  <header>
                    <h2 className="text-sm font-semibold leading-6 text-slate-900">
                      {block.settings.title}
                    </h2>
                  </header>
                  <main className="mt-2">
                    <Paragraph className="paragraph-sm leading-6 tracking-normal text-slate-700">
                      {block.settings.paragraph}
                    </Paragraph>
                  </main>
                </div>
              </section>
            );
          })}
        </div>
      </Wrapper>
    </>
  );
};