import styled from "vue3-styled-components";

export const AboutMe = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  img {
    max-width: 180px;
    display: block;
    margin-bottom: 16px;
    text-align: left;
    padding-right: 32px;
  }
`;

export const Information = styled.div`
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      margin-right: 40px;
      position: relative;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 11px;
      letter-spacing: 4px;
      margin-bottom: 4px;

      a {
        transition: all 200ms ease-out;
        color: #f57500;
      }

      :before {
        content: "";
        position: absolute;
        left: -30px;
        width: 15px;
        top: 50%;
        height: 2px;
        margin-top: -2px;
      }
    }
  }
`;
