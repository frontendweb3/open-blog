export function getDomain(slug: string) {
  const envDomain = process.env.NEXT_PUBLIC_BASE_URL && "http://localhost:3000";
  const get_Environment = process.env.NODE_ENV;

  if (get_Environment === "development") {
    return `${envDomain}/${slug}`;
  }
  if (get_Environment === "production") {
    return `${envDomain}/${slug}`;
  }
}
