import { MetadataRoute } from "next";
import { isProduction } from "../common";

export default function robots(): MetadataRoute.Robots {
  if (isProduction)
    return {
      rules: {},
    };
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
    sitemap: "https://ieltswise67.vercel.app/sitemap.xml"
  };
}
