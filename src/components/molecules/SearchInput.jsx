import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/input";

export const SearchInput = () => {
  return (
    <SbuttonContainer>
      <Input placeholder="検索条件を入力" />
      <SbuttonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SbuttonWrapper>
    </SbuttonContainer>
  );
};

const SbuttonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SbuttonWrapper = styled.div`
  padding-left: 8px;
`;
