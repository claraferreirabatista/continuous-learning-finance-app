import logoDark from "../../assets/logoDark.png";

import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoDark} alt="dt money" />
        <button type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  )
}