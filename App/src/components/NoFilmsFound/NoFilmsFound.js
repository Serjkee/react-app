import React from 'react'
import styled from 'styled-components'

const FilmsNotFound = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

const NoFilmsFoundText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  font-weight: bold;
`;

function NoFilmsFound() {
  return (
    <FilmsNotFound>
      <NoFilmsFoundText>No films found</NoFilmsFoundText>
    </FilmsNotFound>
  )
}

export default NoFilmsFound
