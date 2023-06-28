import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const TitleAvatarChoose = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 16px;
  margin-top: 32px;
`;

export const ContainerAvatar = styled.div`
  width: 280px;
  height: 135px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 32px;
  background-color: #022a4f;
  border-radius: 5px;
  flex: 0 0 auto;

  @media (min-width: 768px) {
    width: 400px;
    height: 150px;
  }
`;

export const Avatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #011528;
  margin: 0 16px;
  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const AvatarContainerDetails = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const AvatarSubTitle = styled.div`
  color: #f8f7f9;
  font-weight: bold;
  font-size: 16px;
`;

export const AvatarSubTitleProps = styled.div`
  width: 112px;
  color: #f8f7f9;
  font-weight: bold;
  font-size: 16px;
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    width: 144px;
  }
`;
