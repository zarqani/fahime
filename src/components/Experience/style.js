import styled from "vue3-styled-components";

export const ExperienceWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
`;

export const ExperiencePart = styled.div`
  position: relative;
  margin: 30px 0;
  min-width: 50%;

  :nth-of-type(odd) {
    padding-right: 30px;
    border-right: 1px solid #eee;
  }

  :nth-of-type(even) {
    padding-left: 30px;
  }

  :not(:first-of-type):not(:nth-of-type(2)):after {
    content: "";
    position: absolute;
    left: 0;
    top: -30px;
    width: 100%;
    height: 1px;
    background: radial-gradient(
      ellipse at center,
      #ddd 0%,
      rgba(255, 255, 255, 0) 70%
    );
  }
`;

export const Date = styled.div`
  margin: 0 0 11px;
  padding: 0 5px;
  position: relative;
  display: inline-block;
  vertical-align: top;
  font-size: 13px;
  line-height: 18px;
  color: ${({ active }) => (active ? "#f57500" : "#ccc")};
  font-weight: 400;
  border: 1px solid ${({ active }) => (active ? "#f57500" : "#ccc")};
`;

export const Position = styled.div`
  margin: 0;
  font-size: 18px;
  color: #323232;
  font-weight: 500;
`;

export const Company = styled.div`
  margin: 0 0 11px;
  font-size: 14px;
  color: #999;
  font-weight: 400;
`;

export const WebsitesUrl = styled.ul`
  column-count: ${({ rowLength }) => (rowLength > 10 ? 2 : 1)};
  padding: 0;
`;
