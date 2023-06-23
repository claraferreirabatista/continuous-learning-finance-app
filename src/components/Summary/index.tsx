import { Container } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = {
    deposits: 0,
    withdraws: 0,
    total: 0,
  };

  for (const transaction of transactions) {
    if (transaction.type === "deposit") {
      summary.deposits += transaction.amount;
      summary.total += transaction.amount;
    } else {
      summary.withdraws += transaction.amount;
      summary.total -= transaction.amount;
    }
  }

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
          {summary.withdraws !== 0 ? "-" : ""}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="total">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
