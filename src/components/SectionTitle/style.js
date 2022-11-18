import styled from "vue3-styled-components";

export const StyledTitle = styled.div`
  margin-bottom: 40px;
  margin-top: 40px;
  padding-bottom: 20px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    left: 0;
    top: -40px;
    height: 2px;
    width: 30px;
    background: #f57500;
  }
  h3 {
    font-size: 24px;
    text-align: left;
    text-transform: uppercase;
    color: #000;
    font-weight: 800;
    float: left;
    width: 100%;
    letter-spacing: 2px;
    padding-bottom: 10px;
    line-height: 34px;
    margin: 0;

    :before {
      content: "";
      position: absolute;
      left: -90px;
      top: -10px;
      width: 150px;
      bottom: 4px;
      z-index: -1;
      background: #f2f2f2;
    }
  }
  p {
    padding-top: 10px;
    color: #666;
    text-align: left;
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 22px;
    position: relative;
    z-index: 2;

    :after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -10px;
      height: 1px;
      width: 90%;
      background: #eee;
    }
  }
`;
