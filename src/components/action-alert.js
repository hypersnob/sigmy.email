import React from 'react'
import { Alert } from 'reactstrap'

export default function ActionAlert({isOpen, message, type}) {
  return (
    <Alert color={type} isOpen={isOpen}>
      {message}
    </Alert>
  )
}