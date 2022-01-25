import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 480px;
    text-align: center;
`;

export const GridCells = styled.div`
  display: grid;
  margin: 10px;
  height: 100%;
  grid-template-columns: repeat(51, 1fr);
  grid-template-rows: repeat(20, 1fr);
  & > div {
    display: grid;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--cell-border-blue);
    margin-top: -1px;
    margin-left: -1px;

    @media (max-width: 1100px) {
      .target, .arrow {
        width: 14px;
      }
    }
  }
`;