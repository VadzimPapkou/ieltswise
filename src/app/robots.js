import { isProduction } from "../common";

export default function robots() {
  if (isProduction) return {};
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
