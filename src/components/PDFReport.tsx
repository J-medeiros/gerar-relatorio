import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  Image,
} from "@react-pdf/renderer";

type PDFReportProps = {
  imageData: string | null;
};

const styles = StyleSheet.create({
  page: { padding: 30 },
  title: { fontSize: 20, marginBottom: 10 },
  section: { marginBottom: 20 },
  table: {
    flexDirection: "column",
    marginTop: 10,
    width: "auto",
  },

  row: { flexDirection: "row" },
  cell: { flexGrow: 1, padding: 4, border: "1pt solid black" },
  image: { width: 400, height: 200 },
});

function MeuDocumento({ imageData }: { imageData: string | null }) {
  const dados = [
    { produto: "Produto A", vendas: 12 },
    { produto: "Produto B", vendas: 19 },
    { produto: "Produto C", vendas: 3 },
    { produto: "Produto D", vendas: 5 },
  ];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Relatório de Vendas</Text>

        <View style={styles.section}>
          <Text>Gráfico de Vendas:</Text>
          {imageData && <Image style={styles.image} src={imageData} />}
        </View>

        <View style={styles.section}>
          <Text>Tabela de Vendas:</Text>
          <View style={styles.table}>
            <View style={styles.row}>
              <Text style={styles.cell}>Produto</Text>
              <Text style={styles.cell}>Vendas</Text>
            </View>
            {dados.map((item, i) => (
              <View key={i} style={styles.row}>
                <Text style={styles.cell}>{item.produto}</Text>
                <Text style={styles.cell}>{item.vendas}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default function PDFReport({ imageData }: PDFReportProps) {
  return (
    <PDFDownloadLink
      document={<MeuDocumento imageData={imageData} />}
      fileName="relatorio_vendas.pdf"
    >
      {({ loading }) => (loading ? "Carregando documento..." : "Baixar PDF")}
    </PDFDownloadLink>
  );
}
