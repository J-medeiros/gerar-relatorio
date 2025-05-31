export default function Tabela() {
    const data = [
        { produto: "Produto A", vendas: 12 },
        { produto: "Produto B", vendas: 19 },
        { produto: "Produto C", vendas: 3 },
        { produto: "Produto D", vendas: 5 },
    ];
    
    return (
        <table>
        <thead>
            <tr>
            <th>Produto</th>
            <th>Vendas</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => (
            <tr key={index}>
                <td>{item.produto}</td>
                <td>{item.vendas}</td>
            </tr>
            ))}
        </tbody>
        </table>
    );
}