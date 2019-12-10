import React from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import {getValue} from '../../utils/helpers'

export function AddonsForm({handleInputChange, data}) {
  const fields = [
    {
      label: 'Company Logo',
      name: 'logo',
      placeholder: 'https://example.com/images/mypic.png'
    }
  ]

  return (
    <>
      <h3 className='mb-4'>Social media links</h3>
      <Form>
        {fields.map(({name, label, placeholder}, index) => (
          <FormGroup key={index}>
            <Label for={name}>{label}</Label>
            <Input
              type='text'
              name={name}
              onChange={handleInputChange}
              value={getValue(data[name])}
              placeholder={placeholder}
            />
          </FormGroup>
        ))}
      </Form>
    </>
  )
}