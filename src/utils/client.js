import { DotCmsClient } from "@dotcms/client";

// Client for content fetching
export const client = DotCmsClient.init({
    dotcmsUrl: process.env.NEXT_PUBLIC_DOTCMS_HOST,
    authToken: process.env.NEXT_PUBLIC_DOTCMS_AUTH_TOKEN,
});
