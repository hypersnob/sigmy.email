import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap'
import { getSource, copyTextToClipboard} from '../utils/helpers'

const SourceModal = (props) => {
  const {
    buttonLabel,
    className,
    data
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color='danger' onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} size='lg' >
        <ModalHeader toggle={toggle}>Your email signature</ModalHeader>
        <ModalBody>
        <FormGroup>
        <Label for='exampleText'>Text Area</Label>
        <Input type='textarea' name='text' id='sourceArea' defaultValue={getSource(data)} rows='10' />
      </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={() => copyTextToClipboard(getSource(data))}>Copy</Button>{' '}
          <Button color='secondary' onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default SourceModal;