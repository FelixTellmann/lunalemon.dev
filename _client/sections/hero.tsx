import { CheckCircleIcon } from "@heroicons/react/solid";
import { Image } from "_client/image";
import { Breadcrumbs } from "_client/layout/breadcrumbs";
import { Wrapper } from "_client/layout/wrapper";
import { Richtext } from "_client/typography/richtext";

import { FC } from "react";
import { HeroSection } from ".shopify-cms/types/sections";

export const Hero: FC<HeroSection> = ({ id, settings, type }) => {
  return (
    <Wrapper
      maxWidth="xl"
      overflowHidden
      spacing={settings.spacing}
      spacingTop={settings.spacing_top}
      spacingBottom={settings.spacing_bottom}
    >
      <div className="mx-auto -mt-4 max-w-lg">
        <figure className="relative mx-4 mb-8 aspect-1 lg:hidden">
          {settings.image
            ? <Image
                maxWidth={600}
                pixelDensity={1}
                className="object-contain"
                width={settings.image?.width}
                height={settings.image?.height}
                src={`${settings?.image?.src}`}
                alt={settings?.image?.alt || settings.title}
              />
            : null}
        </figure>
      </div>
      <Breadcrumbs />
      <div className="grid-cols-2 gap-8 lg:grid">
        <section className="my-8 lg:pr-10">
          <header>
            <h1 className="heading-pre">{settings.pre_title}</h1>
            <h2 className="heading-2xl">{settings.title}</h2>
          </header>
          <main>
            <Richtext className="paragraph-lg">{settings.paragraph}</Richtext>
            <div className="mt-8">
              <h3 className="mb-1 font-semibold text-gray-700 dark:text-gray-300">
                {settings.list_title}
              </h3>
              <ul>
                {settings.list
                  ?.replace(/<\/p>/gi, "")
                  ?.split("<p>")
                  ?.filter((li) => li.length > 0)
                  ?.map((li) => (
                    <li key={li} className="mb-0.5 flex">
                      <span className="mr-2 flex h-6 items-center leading-6 text-accent">
                        <CheckCircleIcon className="h-5" />
                      </span>
                      <span className="leading-tight text-gray-500 dark:text-gray-400">{li}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </main>
          <footer></footer>
        </section>
        <section className="hidden lg:block">
          {settings.image && (
            <figure className="relative h-full min-h-[600px] overflow-visible">
              <Image
                className="block min-w-[600px]"
                width={600}
                height={600 * settings.image?.aspect_ratio}
                // width={settings.image?.width}
                // height={settings.image?.height}
                src={`${settings?.image?.src}`}
                alt={settings?.image?.alt || settings.title}
              />
            </figure>
          )}
        </section>
      </div>
    </Wrapper>
  );
};
