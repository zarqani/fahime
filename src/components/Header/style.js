import styled from "vue3-styled-components";

export const ScrollNav = styled.nav`
  position: fixed;
  left: 0;
  width: 100%;
  background: #313131;
  top: 0;
  z-index: 20;
  -webkit-transform: translate3d(0, 0, 0);

  h1 {
    margin: 0;
    color: #ffffffcf;
    /* text-transform: uppercase; */
    letter-spacing: 2px;
    font-size: 20px;
    font-weight: 500;
  }

  ul {
    margin: 0;
    display: flex;
    align-items: center;

    li a {
      height: 75px;
      line-height: 75px;
      display: block;
      padding: 0 30px;
      position: relative;
      color: rgba(255, 255, 255, 0.5);
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 10px;
      font-weight: 500;

      :hover {
        color: #fff;

        :after {
          width: 100%;
        }
      }

      :after {
        content: "";
        position: absolute;
        left: 0;
        width: 0;
        height: 2px;
        z-index: 2;
        top: 0;
        transition: all 200ms linear;
        background: #f57500;
      }
    }
  }
`;

export const ScrollNavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
