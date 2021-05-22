import styled, {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
} from "styled-components";

export const GlobalStyle: GlobalStyleComponent<
  {},
  DefaultTheme
> = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");

    * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      scroll-behavior: smooth;
    }
  
    body{
      margin : 0;
      padding : 0;
      font-family: "Open Sans", sans-serif;
      background: #0D3B4F;
      color: #ffffff;
    }


    html {
        box-sizing: border-box;
        font-size: 16px;
      }
      
      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }
      
      body,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      ol,
      ul {
        margin: 0;
        padding: 0;
        font-weight: normal;
      }
      
      ol,
      ul {
        list-style: none;
      }

      .main-title {
        font-size: 22px;
        text-align:center;
        padding : 25px;
        width : 100%;
        font-weight : 600;
        border:solid #0D6991 1px;
        background:#0D6991;
        border-radius:50px;
      }
  `;

interface CustomLayoutProps {
  align?: string;
  justify?: string;
  height?: string;
  width?: string;
  padding?: string;
  margin?: string;
}

export const CustomRow = styled.div<CustomLayoutProps>`
  flex-direction: row;
  display: flex;
  align-items: ${(props) => props.align || "unset"};
  justify-content: ${(props) => props.justify || "unset"};
  height: ${(props) => props.height || "unset"};
  width: ${(props) => props.width || "unset"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
`;

export const CustomColumn = styled.div<CustomLayoutProps>`
  flex-direction: column;
  display: flex;
  align-items: ${(props) => props.align || "unset"};
  justify-content: ${(props) => props.justify || "unset"};
  height: ${(props) => props.height || "unset"};
  width: ${(props) => props.width || "unset"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
`;

export const NormalButton = styled.button<{
  background?: string;
  width?: string;
  color?: string;
  marginBottom?: string;
  shadow?: boolean;
}>`
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color || "white"};
  margin-top: 20px;
  font-weight: 600;
  cursor: pointer;
  padding: 10px;
  background: ${(props) => props.background || "#4BABFF"};
  border: none;
  width: ${(props) => props.width || "100%"};
  font-weight: medium;
  margin-bottom: ${(props) => props.marginBottom || "30px"};
  border-radius: 10px;
  box-shadow: ${(props) => (!props.shadow ? "0px 3px 6px #00000029" : "none")};

  img {
    margin-right: 10px;
  }

  &:hover {
    border: none;
    outline: none;
    // background: #ff7243;
  }

  &:focus {
    border: none;
    outline: none;
  }

  &:active {
    border: none;
    outline: none;
  }
  &:disabled {
    border: none;
    outline: none;
    cursor: not-allowed;
    // background: #ff7243;
  }

  @media (max-width: 450px) {
    font-size: 16px;
    padding: 10px;
    margin-bottom: ${(props) => props.marginBottom || "10px"};
    border-radius: 10px;
  }
`;
