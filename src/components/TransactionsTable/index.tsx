import { useEffect } from "react";
import { Container } from "../TransactionsTable/styles";
import { api } from "../../services/api";

export function TransactionsTable() {


useEffect(() => {
api.get("transactions")
.then((response) => {
    console.log(response.data);
  })
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Desenvolvimento</th>
            <th className="deposit">R$5.000,00</th>
            <th>Desenvolvimento</th>
            <th>16/06/2023</th>
          </tr>
          <tr>
            <th>Monitor</th>
            <th className="withdraw">-R$1.800,00</th>
            <th>Setup</th>
            <th>26/06/2023</th>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
