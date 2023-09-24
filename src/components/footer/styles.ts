import styled from "styled-components";

export const footer = styled.div`
  height: 3rem;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  background: #FFF;

  position: fixed;
  bottom: 0;
  width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const footerText = styled.p`
  color: #ed6d25;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  font-size: 1.125rem;
  line-height: 1.5rem;
`;
