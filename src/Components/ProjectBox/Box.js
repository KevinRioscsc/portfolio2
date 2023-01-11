import styled from "styled-components";

export const Project = styled.div`
  max-width: 900px;
  height: 100%;
  position: relative;
  @media screen and (min-width: 1001px) {
    width: 400px;
  }
  @media screen and (min-width: 1080px) {
    width: 450px;
  }
  @media screen and (min-width: 1650px) {
    width: 600px;
  }
`;
export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  background-image: radial-gradient(transparent, rgba(0, 0, 0, 0.5));
  opacity: 0;
  transition: all 0.2s ease-in-out;
  border-radius: 3px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  &:hover {
    opacity: 1;
  }
`;

export const BtnView = styled.div`
  display: inline-flex;
  gap: 5px;
  padding: 0.2em 0.7em;
  background-color: hsla(0, 0%, 100%, 0.8);
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    background-color: hsla(0, 0%, 100%, 1);
  }
`;
