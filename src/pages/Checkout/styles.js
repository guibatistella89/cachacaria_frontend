import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 95vw;
  padding: 30px;
  background-color: #f9f9f9;
  margin-top: 120px;

  h2 {
    font-size: 28px;
    margin-bottom: 15px;
    color: #8e5e1e;
  }

  .form-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 140px;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;

  img {
    height: 100%;
  }
`;

export const FormSection = styled.div`
  width: 48%;

  h3 {
    font-size: 22px;
    margin-bottom: 30px;
  }

  input {
    width: 100%;
    padding: 12px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
  }
`;

export const AddressSection = styled(FormSection)``;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;

  label {
    margin-bottom: 4px;
    font-weight: bold;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;

  .save, .logout, .continue, .back {
    width: 200px;
    height: 50px;
    padding: 12px 20px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.3s ease;
  }

  .save {
    background-color: #4caf50;
    color: white;

    &:hover {
      background-color: #45a049;
    }
  }

  .logout {
    background-color: #a83232;
    color: white;

    &:hover {
      background-color: #9f2929;
    }
  }

  .continue {
    background-color: #ffbe55;
    color: #fff;

    &:hover {
      background-color: #ffab33;
    }
  }

  .back {
    background-color: #e0e0e0;
    color: #000;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

export const FreightAndSummary = styled.div`
  display: flex;
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const FreightSection = styled.div`
  width: 50%;
  background-color: #fff;
  padding: 15px 20px;
  border: 1px solid #ddd;
  border-radius: 4px;

  h3 {
    font-size: 18px;
    margin-bottom: 5px;
  }

  div {
    display: flex;
    align-items: center;
    margin-bottom: 4px;

    input {
      margin-right: 6px;
    }

    label {
      font-size: 16px;
    }
  }
`;

export const SummarySection = styled.div`
  width: 50%;
  background-color: #fff;
  padding: 2px 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-left: 60px;

  h3 {
    font-size: 18px;
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    margin-bottom: 5px;

    span {
      float: right;
    }
  }
`;
