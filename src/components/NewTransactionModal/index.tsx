import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import closeImg from "../../assets/close.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface FormData {
  title: string;
  amount: number;
  type: "deposit" | "withdraw";
  category: string;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();
  const [formData, setFormData] = useState<FormData>({
    title: "",
    amount: 0,
    type: "deposit",
    category: "",
  });

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction(formData);

    setFormData({
      title: "",
      amount: 0,
      type: "deposit",
      category: "",
    });

    onRequestClose();
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleTypeChange(type: "deposit" | "withdraw") {
    setFormData((prevState) => ({
      ...prevState,
      type,
    }));
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />

        <input
          type="number"
          placeholder="Valor"
          name="amount"
          value={formData.amount}
          onChange={handleInputChange}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => handleTypeChange("deposit")}
            isActive={formData.type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => handleTypeChange("withdraw")}
            isActive={formData.type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
