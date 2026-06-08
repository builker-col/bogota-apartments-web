export function downloadReport(mesNombre: string, ext: "csv" | "json"): void {
  let content = "";

  if (ext === "csv") {
    content = "data:text/csv;charset=utf-8,";
    content +=
      "Reporte,Ambito,Precio Promedio m2 (COP),Cap Rate Promedio %,Rotacion Promedio (Dias),Transacciones Estimadas\n";
    content += `"${mesNombre}","Bogotá D.C. General",6616667,6.61,41,1240\n`;
    content += `"${mesNombre}","Zona Norte",8650000,6.0,43.5,580\n`;
    content += `"${mesNombre}","Zona Chapinero",9600000,5.8,42,340\n`;
    content += `"${mesNombre}","Zona Occidente",5450000,6.9,40,320\n`;
  } else {
    const jsonData = {
      reporte: mesNombre,
      ambito: "Bogotá D.C. Consolidado General",
      fechaGeneracion: "Junio 2026",
      indicadores: {
        precioPromedioM2: 6616667,
        capRatePromedio: 6.61,
        rotacionDiasPromedio: 41,
      },
      desgloseZonas: [
        { zona: "Norte", precioM2: 8650000, capRate: 6.0, rotacionDias: 43.5 },
        {
          zona: "Chapinero",
          precioM2: 9600000,
          capRate: 5.8,
          rotacionDias: 42,
        },
        {
          zona: "Occidente",
          precioM2: 5450000,
          capRate: 6.9,
          rotacionDias: 40,
        },
      ],
    };
    content = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(jsonData, null, 2))}`;
  }

  const encodedUri = encodeURI(content);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute(
    "download",
    `bogota_apartments_consolidado_${mesNombre.toLowerCase().replace(/\s+/g, "_")}.${ext}`,
  );
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
