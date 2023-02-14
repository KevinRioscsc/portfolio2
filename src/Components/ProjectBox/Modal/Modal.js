import styled from "styled-components";
//
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  visibility: ${({ toggle }) => (toggle ? "visible" : "hidden")};
  opacity: ${({ toggle }) => (toggle ? "1" : "0")};
`;
export const Modals = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70rem;
  height: 35rem;
  background-color: #343a41;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s;
  transform: ${({ toggle }) =>
    toggle ? " translate(-50%,-50%)" : "translate(-50%,-50%) scale(.25)"};
  opacity: ${({ toggle }) => (toggle ? "1" : "0")};

  display: flex;
  @media screen and (max-width: 1150px) {
    width: 55rem;
  }
  @media screen and (max-width: 920px) {
    flex-direction: column;
    width: 30rem;
    height: 45rem;
  }
  @media screen and (max-width: 520px) {
    width: 20rem;
    height: 40rem;
  }
  @media screen and (max-width: 350px) {
    width: 17rem;
    height: 40rem;
  }
`;
export const Close = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.3);
  }
  @media screen and (max-width: 920px) {
    top: 10.5rem;
  }
`;
export const Left = styled.div`
  width: 60%;
  height: 100%;
  display: inline-block;
  background: black;
  @media screen and (max-width: 920px) {
    height: 30%;
    width: 100%;
  }
`;
export const Right = styled.div`
  width: 40%;

  display: inline-block;
  vertical-align: top;
  padding: 1.5rem;
  color: #fff;
  @media screen and (max-width: 920px) {
    height: 70%;
    width: 90%;
  }
`;
export const ProjectLabel = styled.div`
  font-size: 1.2rem;
  color: #94a4b4;
  letter-spacing: 1px;
`;
export const ProjectName = styled.h3`
  font-size: 2rem;
`;
export const ProjectTech = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
`;
export const ProjectTechnology = styled.li`
  display: inline-flex;
  margin: 10px 10px 3px 0px;
  border: 1px solid #22262a;
  padding: 0.5rem;
  color: #94a4b4;
  font-weight: lighter;
  letter-spacing: 1px;
  font-size: 0.9rem;
  @media screen and (max-width: 920px) {
    font-size: 0.8rem;
  }
`;
export const ProjectAbout = styled.div`
  font-size: 1.2rem;
  color: #94a4b4;
  letter-spacing: 1px;
`;
export const ProjectSummary = styled.p`
  margin-top: 1.9rem;
  font-family: Inconsolata, sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  color: #94a4b4;
  overflow-y: auto;
  height: 10rem;
  white-space: pre-line;
  @media screen and (max-width: 920px) {
    margin-top: 0.8rem;
  }
`;
export const Btn = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 15px;
`;
export const BtnDemo = styled.div`
  display: inline-flex;
  gap: 5px;
  padding: 0.4em 0.9em;
  color: black;
  background-color: hsla(0, 0%, 100%, 0.8);
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: hsla(0, 0%, 100%, 1);
  }
`;
export const BtnCode = styled.div`
  display: inline-flex;
  gap: 5px;
  padding: 0.4em 0.9em;
  background-color: hsla(0, 0%, 100%, 0.8);

  border-radius: 4px;
  color: black;
  cursor: pointer;
  margin-bottom: 20px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: hsla(0, 0%, 100%, 1);
  }
`;
