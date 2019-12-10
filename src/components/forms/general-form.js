import React from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import {getValue} from '../../utils/helpers'

export function GeneralForm({handleInputChange, data}) {
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
      label: 'Company Logo',
      name: 'logo',
      placeholder: 'https://example.com/images/mypic.png'
    },
    {
      label: 'Email address',
      name: 'email',
      placeholder: 't.anderson@example.com'
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
      placeholder: 'http://www.example.com'
    },
  ]

  return (
    <>
      <h3 className='mb-4'>Signature details</h3>
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