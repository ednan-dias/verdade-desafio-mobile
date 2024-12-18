import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 15px;

  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  gap: 10px;
`;

export const Header = styled.View``;

export const Center = styled.View`
  min-width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Players = styled.View`
  flex: 1;
  min-width: 100%;
  padding: 10px;

  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const PlayerCard = styled.View`
  background: #e5e7e9;

  height: 50px;

  flex-direction: row;
  align-items: center;
  gap: 10px;

  border-radius: 15px;
  padding: 10px;
`;

export const PlayerInfo = styled.View`
  flex: 1;

  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Footer = styled.View`
  min-width: 100%;
  align-items: center;
  gap: 10px;
`;
