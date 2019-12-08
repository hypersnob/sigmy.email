import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import SourceModal from './source-modal'
import {getValue} from '../utils/helpers'

export default function Controls({handleInputChange, data, reset}) {
  const fields = [
    {
      label: 'Full name',
      name: 'name',
      placeholder: 'Thomas Anderson'
    },
    {
      label: 'Job title',
      name: 'job',
      placeholder: 'Software engineer'
    },
    {
      label: 'Company',
      name: 'company',
      placeholder: 'Meta Cortex'
    },
    {
      label: 'Email address',
      name: 'email',
      placeholder: 't.anderson@metacortex.com'
    },
    {
      label: 'Phone',
      name: 'phone',
      placeholder: '1111 2222 3333'
    },
    {
      label: 'Mobile',
      name: 'mobile',
      placeholder: '1111 2222 3333'
    },
    {
      label: 'Website',
      name: 'website',
      placeholder: 'www.metacortex.com'
    },
  ]

  return(
    <div className='control-wrapper bg-dark text-light'>
      <SourceModal buttonLabel='Get source' data={data} />
      <div className='p-5'>
        <h3 className='mb-4'>Signature details</h3>
        <Form>
          {fields.map(({name, label, placeholder}, index) => (
            <FormGroup key={index}>
              <Label for={name}>{label}</Label>
              <Input
                type='text'
                className='bg-dark text-light border-left-0 border-right-0 border-top-0'
                name={name} onChange={handleInputChange}
                value={getValue(data[name])}
                placeholder={placeholder}
              />
            </FormGroup>
          ))}
          <Button onClick={reset} block>Reset all fields</Button>
        </Form>
      </div>
    </div>
  )
}