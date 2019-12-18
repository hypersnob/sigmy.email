import React from 'react'
import { Toast, ToastBody } from 'reactstrap';

export default function FinalToast(props) {
  return (
    <Toast isOpen={props.toast}>
      <ToastBody>
        {props.children}
      </ToastBody>
    </Toast>
  )
}