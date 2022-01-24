import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 500px;
    text-align: center;
`;

export const GridCells = styled.div`
  display: grid;
  margin: 10px;
  height: 100%;
  grid-template-columns: repeat(51, 1fr);
  grid-template-rows: repeat(20, 1fr);
  & > div {
    display: inline-block;
    border: 1px solid var(--cell-border-blue);
    margin-top: -1px;
    margin-left: -1px;
  }
`;