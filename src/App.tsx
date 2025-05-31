import { useState, useRef, useEffect } from "react";
import Grafico from "./components/grafico.tsx";
import Tabela from "./components/tabela.tsx";
import PDFReport from "./components/PDFReport.tsx";
import * as htmlToImage from "html-to-image";

function App() {
 const chartRef = useRef<HTMLDivElement>(null);
  const [ImageData, setImageData] = useState<string | null>(null);

  const gerarImagem = async () => {
    if (chartRef.current) {
      const dataUrl = await htmlToImage.toPng(chartRef.current);
      setImageData(dataUrl);
    }
  };

  useEffect(() => {
    gerarImagem();
  }, []);

  return (
    <div>
      <h2>Visualização</h2>
      {/* Passar chartRef como ref de div, não como prop */}
      <div ref={chartRef}>
        <Grafico ref={chartRef} />
      </div>

      <Tabela />

      <div style={{ marginTop: "2rem" }}>
        {ImageData && <PDFReport imageData={ImageData} />}
      </div>
    </div>
  );
}

export default App;
