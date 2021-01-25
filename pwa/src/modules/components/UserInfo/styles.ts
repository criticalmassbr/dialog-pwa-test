import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 10px 120px;
  margin: 40px 0 120px 0;
  justify-content: center;
  height: 40vh;

  img {
    height: 100%;
  }

  main {
    padding-left: 40px;
    flex-direction: column;
    width: 34%;

    h3 {
      font-size: 3rem;
    }

    .info {
      padding-top: 20px;

      h5 {
        font-size: 1.3rem;
      }
    }

    .contact {
      padding-top: 10px;
      font-size: 1rem;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
    margin: 40px 0 60px 0;
    align-items: center;

    img {
      width: 80%;
      display: inline-block;
      padding: 0 40px;
      margin-bottom: 20px;
      position: relative;
    }

    main {
      width: 80%;
      padding-left: 40px;

      h3 {
        font-size: 1.6rem;
      }

      .contact {
        width: 50%;
      }
    }
  }
`;
