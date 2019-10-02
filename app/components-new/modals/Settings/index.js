import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from 'components/Common/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  text-align: center;
`;

export default props => {
  return (
    <Modal
      header={false}
      height="100%"
      width="100%"
      backBtn={
        <FontAwesomeIcon
          icon={faWindowClose}
          css={`
            position: absolute;
            top: 15px;
            right: 15px;
            cursor: pointer;
            transition: color 0.1s ease-in-out;
            &:hover {
              color: ${props => props.theme.red};
            }
          `}
        />
      }
    >
      <Container>Test</Container>
    </Modal>
  );
};