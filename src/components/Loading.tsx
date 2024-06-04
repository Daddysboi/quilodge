import { TailSpin as Loader } from "react-loader-spinner";
import styled from "styled-components";

import { primaryColors } from "../assets/Colors";

const Container = styled.div`
  display: flex;
`;

interface StylProp {
  color: string;
}
const Loading = ({ color = `${primaryColors.Purple}` }: StylProp) => {
  return (
    <Container style={{ margin: "auto" }}>
      <Loader color={color} height={20} width={20} />
    </Container>
  );
};
export default Loading;
