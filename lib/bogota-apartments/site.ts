import packageJson from "@/package.json";

export const SITE_URL = "https://bogota.builker.com";
export const API_BASE_URL = "https://api.inmodata.io/open-data/bogota/v1";
export const API_MONTHLY_PATH = "/observations";
export const API_MONTHLY_URL = `${API_BASE_URL}${API_MONTHLY_PATH}`;
export const SITE_VERSION = packageJson.version;
export const CONTACT_EMAIL = "contacto@builker.com";
export const INMODATA_URL = "https://inmodata.io";

export function inmodataPromoUrl(content: "logo" | "cta") {
  const params = new URLSearchParams({
    utm_source: "bogota",
    utm_medium: "banner",
    utm_campaign: "api-page",
    utm_content: content,
  });

  return `${INMODATA_URL}?${params.toString()}`;
}
