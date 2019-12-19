import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap'
import { copyTextToClipboard, isReady} from '../utils/helpers'
import { getSource } from '../utils/get-source'

const SourceModal = (props) => {
  const {
    buttonLabel,
    className,
    signature,
    template,
    social,
    toggleToast
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Button className='flex-grow-1' onClick={toggle} disabled={isReady(signature)}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} size='lg' >
        <ModalHeader toggle={toggle}>Your email signature</ModalHeader>
        <ModalBody className='py-0'>
          <FormGroup className='m-0'>
            <Label for='source'>Copy the HTML code and paste it to your signature file</Label>
            <Input type='textarea' className='p-2' name='source' defaultValue={getSource(signature, template)} rows='6' />
          </FormGroup>  
        </ModalBody>
        <ModalFooter>
          <Button onClick={toggle}>Cancel</Button>
          <Button color='primary' onClick={() => {copyTextToClipboard(getSource(signature, template, social), toggleToast); toggle()}}>Copy</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default SourceModal;