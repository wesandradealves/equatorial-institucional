import styled, {css, createGlobalStyle} from "styled-components";

export const CardImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 188px;
  padding: 16px;
  background-color: whitesmoke;
  border-radius: 16px;
  background-size: cover;
  background-position: center;
`;

export const TagsContainer = styled.div`
  gap: 8px
`;

export const NewsCardContainer = styled.div`
  gap: 16px 0;
  padding: 0 16px;
`;

export const Tag = styled.span`
  background-color: white;
  padding: 3px 8px;
  border-radius: 999px;
  font-size: ${props => props.theme.fontDesktop.bodySmall1.fontSize};  
`;

export const Title = styled.h3`
  font-weight: bold;
  color: ${props => props.theme.colorPrimary300};
  font-size: ${props => props.theme.fontDesktop.bodyLarge1.fontSize}; 
  @media screen and (min-width: ${props => props.theme.screenXxlMin}) {
    font-size: ${props => props.theme.fontDesktop.subtitle1.fontSize}; 
  }
  * {
    color: inherit
  }
`;

export const Text = styled.p`
  font-size: ${props => props.theme.fontDesktop.smallText1.fontSize}; 
  @media screen and (min-width: ${props => props.theme.screenXxlMin}) {
    font-size: ${props => props.theme.fontDesktop.bodySmall1.fontSize}; 
  }  
`;

export const Date = styled.p`
  font-size: ${props => props.theme.fontDesktop.smallText1.fontSize}; 
`;

export const Content = styled.div`
  gap: 16px 0
`;