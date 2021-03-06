import styled from 'styled-components';

export const Container = styled.header`
  height: 115px;
  background-color: #34495e;
  padding: 20px 20px 0 20px;
  display: flex;
  position: relative;
  justify-content: flex-start;
  color: white;

  h3 {
    position: absolute;
    cursor: pointer;
    transition: color 0.2s ease-out;
    :hover {
      color: var(--green-text);
    }
  }

  @media (max-width: 1090px) {
    height: 170px;
  }
`;

export const Console = styled.div`
  align-self: flex-end;

  .console-bttn {
    font-weight: bold;
    padding: 20px;
    border: none;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    transition: color 0.2s ease-out;
    position: relative;

    :hover:not(.start-bttn, .drop-down-bttn) {
      color: #1abc9c;
    }

    .caret {
      display: inline-block;
      border-top: 8px solid #4b6075;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      vertical-align: middle;
      margin-left: 12px;
      transition: 0.2s ease-out;
    }
  }

  .drop-down-bttn {
    :not(:focus):hover {
      color: var(--green-text);
    }
    :not(:focus):hover > .caret {
      border-top: 8px solid var(--green-text);
    }
    :focus {
      background-color: var(--green-text);
    }
    :focus > .caret {
      border-top: 8px solid white;
    }
  }

  .start-bttn {
    background-color: var(--green-text);
    border-radius: 5px;
    padding: 15px;
    transition: 0.2s ease-out;
    :hover {
      filter: brightness(110%);
    }
  }
`;

export const DropDownContainer = styled.div`
  position: absolute;
  z-index: 2;
  top: 120%;
  left: 0;
  background-color: #34495e;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 5px;

  div {
    padding: 10px;
    align-self: start;
    border: none;
    color: inherit;
    background-color: transparent;
    border-radius: 5px;
    cursor: pointer;
    white-space: nowrap;

    :hover {
      background-color: var(--green-text);
    }
  }
`;