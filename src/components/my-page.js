"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { DotcmsLayout } from "@dotcms/react";
import { usePageAsset } from "@/hooks/usePageAsset";
import Banner from './Banner'
import LogoListing from './LogoListing'

const components = {
    Banner: (contentlet) => <Banner {...contentlet} />,
    LogoListing: (contentlet) => <LogoListing {...contentlet} />
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
