import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap'
import { copyTextToClipboard} from '../utils/helpers'
import { getSource } from '../utils/get-source'

function isActive(obj) {
  return Object.entries(obj).length < 6
}

const SourceModal = (props) => {
  const {
    buttonLabel,
    className,
    signature,
    template,
    social
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Button className='flex-grow-1' onClick={toggle} disabled={isActive(signature)}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} size='lg' >
        <ModalHeader toggle={toggle}>Your email signature</ModalHeader>
        <ModalBody className='py-0'>
          <FormGroup className='m-0'>
            <Label for='exampleText'>Text Area</Label>
            <Input type='textarea' className='p-2' name='text' id='sourceArea' defaultValue={getSource(signature, template)} rows='6' />
          </FormGroup>  
        </ModalBody>
        <ModalFooter>
          <Button onClick={toggle}>Cancel</Button>
          <Button color='primary' onClick={() => {copyTextToClipboard(getSource(signature, template, social)); toggle()}}>Copy</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default SourceModal;