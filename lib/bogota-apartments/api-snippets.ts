import { API_MONTHLY_URL } from "./site";

export type ApiLanguage = "curl" | "javascript" | "python";

export const API_SNIPPETS: Record<ApiLanguage, string> = {
  curl: `curl -X GET "${API_MONTHLY_URL}?month=2026-05" \\
  -H "Authorization: Bearer BA_OPEN_DATA_KEY_2026" \\
  -H "Accept: application/json"`,
  javascript: `// Integración con Fetch API
fetch('${API_MONTHLY_URL}?month=2026-05', {
  headers: {
    'Authorization': 'Bearer BA_OPEN_DATA_KEY_2026'
  }
})
.then(res => res.json())
.then(data => console.log("Datos mensuales:", data));`,
  python: `# Consumo rápido en Python usando Requests
import requests

url = "${API_MONTHLY_URL}"
headers = {"Authorization": "Bearer BA_OPEN_DATA_KEY_2026"}
response = requests.get(url, headers=headers, params={"month": "2026-05"})
print(response.json())`,
};
