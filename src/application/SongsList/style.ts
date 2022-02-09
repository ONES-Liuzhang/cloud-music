import styled from "styled-components";
import globalStyle from "../../assets/global-style"

export const Container = styled.div`
  border-radius: 5px;
  .first_line {
    padding: 10px 0;
    border-bottom: 1px solid ${globalStyle['border-color']};
    margin-left: 10px;

    .play_all {
      display: inline-block;
      line-height: 24px;
      color: ${globalStyle['font-color-desc']};

      .iconfont {
        font-size: 24px;
        margin-right: 10px;
        vertical-align: top;
      }

      .total {
        font-size: ${globalStyle['font-size-s']};
        color: ${globalStyle['font-color-desc-v2']};
        vertical-align: top;
      }
    }
  }
`

export const List = styled.ul`
  .item {
    height: 60px;
    display: flex;
    align-items: center;
    .order {
      width: 60px;
      height: 60px;
      line-height: 60px;
      text-align: center;
    }

    .info {
      flex: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      border-bottom: 1px solid ${globalStyle['border-color']};
      ${globalStyle.noWrap()}

      .subTitle {
        font-size: ${globalStyle['font-size-s']};
        color: ${globalStyle['font-color-desc-v2']}
      }
    }
  }
`
