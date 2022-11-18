import styled from "vue3-styled-components";

export const SocialMedia = styled.div`
  padding: 40px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    cursor: pointer;
    margin: 0 5px;
    color: #eee;
    width: 26px;
    opacity: 0.75;
    font-size: 20px;

    :hover {
      opacity: 1;
    }
  }
`;
