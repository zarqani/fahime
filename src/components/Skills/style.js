import styled from "vue3-styled-components";

export const SkillsBox = styled.div`
  position: relative;
  z-index: 1;
`;

export const SkillTitle = styled.div`
  float: left;
  color: #000;
  text-align: left;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 6px;
`;

export const SkillPercent = styled.div`
  float: right;
  font-size: 14px;
  font-weight: 800;
  color: #666;
`;

export const SkillBg = styled.div`
  position: relative;
  display: block;
  float: left;
  width: 100%;
  height: 4px;
  overflow: hidden;
  background: #f2f2f2;
  margin: 16px 0;
`;

export const SkillBar = styled.div`
  height: 14px;
  width: 0px;
  background: #f57500;
  width: ${({ percent }) => percent};
`;
