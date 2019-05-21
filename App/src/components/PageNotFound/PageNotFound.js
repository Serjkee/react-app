import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NotFound = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function PageNotFound() {
  return (
    <NotFound>
      <h1>Page not found</h1>
      <p>Seems like page doesn't exists. Try to find some information on 
        <Link to='/'>Homepage</Link> or write a ticket in support.</p>
    </NotFound>
  )
}
