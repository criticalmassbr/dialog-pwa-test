import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 20px;
  width: 100%;
  padding: 0 120px;

  header,
  .other-users-header {
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.colors.color};
    display: flex;
    justify-content: space-between;

    h3 {
      font-family: 'Bebas Neue', cursive;
      font-size: 33px;
      padding-bottom: 10px;
    }
  }

  main,
  .other-users-content {
    padding-top: 20px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    margin-bottom: 40px;
  }

  @media (max-width: 1200px) {
    main,
    .other-users-content {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 1000px) {
    main,
    .other-users-content {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 700px) {
    padding: 0 40px;

    main,
    .other-users-content {
      grid-template-columns: 1fr;
    }
  }
`;
