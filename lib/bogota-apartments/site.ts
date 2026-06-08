import packageJson from "@/package.json";

export const SITE_URL = "https://bogota.builker.com";
export const API_BASE_URL = "https://api.bogota.builker.com";
export const API_MONTHLY_PATH = "/v1/historical/monthly";
export const API_MONTHLY_URL = `${API_BASE_URL}${API_MONTHLY_PATH}`;
export const SITE_VERSION = packageJson.version;
export const CONTACT_EMAIL = "contacto@builker.com";
export const INMODATA_URL = "https://inmodata.builker.com";

export function inmodataPromoUrl(content: "logo" | "cta") {
  const params = new URLSearchParams({
    utm_source: "bogota",
    utm_medium: "banner",
    utm_campaign: "api-page",
    utm_content: content,
  });

  return `${INMODATA_URL}?${params.toString()}`;
}
