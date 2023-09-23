import styled from "styled-components";

export const imgContainer = styled.div`
  width: 50rem;
  height: 37.375rem;
  display: flex;

  &.hide-on-mobile {
    @media (max-width: 1215px) {
      display: none;
    }
  }
`;

export const styledimg = styled.img`
  border-radius: 1rem;
  width: 50rem;
  height: 37.375rem;
  background: linear-gradient(195deg, rgba(20, 20, 20, 0) 7.46%, #141414 69.4%);
`;

export const imgText = styled.p`
  width: 38.5625rem;
  color: #fff;
  font-size: 2rem;
  font-weight: 500;
  margin: 30rem 9.44rem 2rem 2rem;
  line-height: normal;
  position: absolute;
`;
