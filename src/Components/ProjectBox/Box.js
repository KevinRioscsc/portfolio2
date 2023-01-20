import styled from "styled-components";

export const Project = styled.div`
  max-width: 900px;
  height: 100%;
  position: relative;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 10px 10px 20px black;
  }
`;

export const BtnView = styled.div`
  display: inline-flex;
  gap: 5px;
  padding: 0.2em 0.7em;
  background-color: hsla(0, 0%, 100%, 0.8);
  cursor: pointer;
  margin-bottom: 20px;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: hsla(0, 0%, 100%, 1);
  }
`;
export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  background-image: radial-gradient(transparent, rgba(0, 0, 0, 0.5));
  opacity: 1;
  transition: all 0.2s ease-in-out;
  border-radius: 3px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  &:hover {
    ${BtnView} {
      opacity: 1;
    }
  }
`;
