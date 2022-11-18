import styled from "vue3-styled-components";

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  z-index: 1;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const Button = styled.button`
  padding: 15px 38px;
  position: relative;
  color: #fff;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 2px;
  font-weight: 800;
  background: ${({ color }) => (color === "primary" ? "#f57500" : "#3c3c3c")};
  overflow: hidden;
  display: inline-block;
  border: 0 none;

  :before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    z-index: 1;
    background: #fff;
    transition: all 0.3s ease-in-out;
  }

  :hover {
    :before {
      width: 100%;
    }

    span {
      z-index: 1;
      position: relative;
      transition: all 0.3s ease-in-out;
      transition-delay: 0.1s;
      color: #3c3c3c;
    }
  }
`;

export const SectionNumber = styled.div`
  position: absolute;
  right: 10px;
  top: 20px;
  font-size: 224px;
  font-weight: bold;
  color: #eee;
  opacity: 0.7;
  font-family: "Oswald", sans-serif;
  transform: rotate(-90deg);

  span {
    position: relative;
    overflow: hidden;

    :before {
      content: "";
      position: absolute;
      width: 100%;
      bottom: 50%;
      top: 0;
      left: 0;
      background: #fff;
      z-index: 2;
    }
  }
`;

export const SectionDivider = styled.div`
  height: 1px;
  float: left;
  width: 100%;
  position: relative;

  :before {
    content: "";
    position: absolute;
    left: 80px;
    right: 0;
    height: 10%;
    background: #eee;
    z-index: 1;
  }

  :after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    left: 74px;
    top: -4px;
    z-index: 2;
    background: #f57500;
  }

  span {
    position: absolute;
    right: 0;
    width: 150px;
    height: 1px;
    top: 0;
    z-index: 10;
    background: #f57500;
  }
`;
