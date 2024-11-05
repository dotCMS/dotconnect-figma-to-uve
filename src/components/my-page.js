"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { DotcmsLayout } from "@dotcms/react";
import { usePageAsset } from "@/hooks/usePageAsset";
import Banner from './Banner';
import LogoListing from './LogoListing';
import Feature from './Feature';

const components = {
  Banner: (contentlet) => <Banner {...contentlet} />,
  LogoListing: (contentlet) => <LogoListing {...contentlet} />,
  Feature: (contentlet) => <Feature {...contentlet} />,
  Image: (contentlet) => {
    return (
      <Image 
        src={`http://localhost:8080/dA/${contentlet.identifier}/image`}
        alt={contentlet.title}
        width={1200}
        height={800}
        className="w-full h-auto"
      />
    );
  },
};

const componentsMap = new Proxy(components, {
  get: (target, prop) =>
    target[prop] ||
    ((contentlet) => <div>{contentlet.contentType}</div>),
});

export function MyPage({ pageAsset }) {
    const pathname = usePathname();

    pageAsset = usePageAsset(pageAsset);

    return (
        <DotcmsLayout
            pageContext={{
                pageAsset,
                components: componentsMap,
            }}
            config={{
                pathname,
                editor: {
                    params: {
                        depth: 1,
                    },
                },
            }}
        />
    );
}
