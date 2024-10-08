import styled from 'styled-components'

export const ContentWrapper = styled.div`
  box-shadow: 0px 1px 3px rgba(194, 194, 194, 0.2);
  background-color: #fff;
  border-radius: 4px;
  margin: 16px;
  .ant-table-wrapper {
    margin: 16px;
  }
  .ant-table-pagination.ant-pagination {
    display: flex;
    justify-content: center;
    float: inherit;
  }
`

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  h1 {
    margin-bottom: 0px;
    font-size: 18px;
    font-weight: 700;
  }
`

export const LayoutWrapper = styled.div`
  .nav-text {
    color: black;
  }
  .ant-menu-inline {
    border-right: 0px;
  }
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #2ed573;
    color: #ffffff;
    font-weight: 500;
  }
  .ant-layout-sider {
  }
  .ant-menu-item-group-title {
    color: #000;
    font-weight: 400;
    font-size: 12px;
    padding-top: 24px !important;
  }
  #headerNav {
    padding: 0px 16px;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    box-shadow: 0 1px 3px rgba(18, 18, 18, 0.1);
    .ant-menu-horizontal {
      border-bottom: 0px;
    }
  }
  .ant-menu-item {
    font-weight: 400;
  }
  .ant-menu-title-content {
    font-size: 14px;
  }
  .anticon {
    color: #2f3542;
    font-size: 14px;
  }
  .fullname {
    color: #000;
    font-weight: 600;
  }
  .ant-statistic-title {
    font-size: 14px;
    color: #000;
    font-weight: 700;
  }
`
export const LogoWrapper = styled.div`
  img {
    width: 120px;
    height: 40px;
    margin: 16px 28px 16px 0;
    float: left;
  }
  span {
    // margin: 16px 28px 16px 0;
    font-size: 18px;
    font-weight: 700;
    color: #000;
    float: left;
  }
`
