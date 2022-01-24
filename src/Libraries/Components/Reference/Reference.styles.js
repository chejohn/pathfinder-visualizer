import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    margin: 1.5rem auto;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;

export const Legend = styled.div`
  padding: 5px;
  margin: 8px;
  white-space: nowrap;
  & > * {
    transform: scale(1.2);
  }
  span {
    vertical-align: super;
    margin-left: 10px;
  }

  .cell {
    display: inline-block;
    width: 20px;
    height: 20px;
  }

  .cell-blue-border {
    border: 1px solid var(--cell-border-blue);
  }
`;