import React from "react";
import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/userCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `Hiratto${val}`,
    image: "https://source.unsplash.com/adK3Vu70DEQ",
    email: "00001234@.com",
    phone: "000-9999-8888",
    company: {
      name: "テスト会社"
    },
    website: "12340000@.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
        ;
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
