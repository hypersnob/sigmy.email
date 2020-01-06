import React from 'react'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import {getValue} from '../../utils/helpers'

export function GeneralForm({dispatch, signature}) {
  const fields = [
    {
      label: 'Image',
      name: 'logo',
      placeholder: 'https://example.com/images/mypic.png'
    },
    {
      label: 'Full name',
      name: 'name',
      placeholder: 'Joan Doe'
    },
    {
      label: 'Job title',
      name: 'job',
      placeholder: 'Software engineer'
    },
    {
      label: 'Company',
      name: 'company',
      placeholder: 'MyCompany'
    },
    {
      label: 'Email',
      name: 'email',
      placeholder: 'name@example.com'
    },
    {
      label: 'Address',
      name: 'address',
      placeholder: '1317 Sunset Drive, Bearden'
    },
    {
      label: 'Phone',
      name: 'phone',
      placeholder: '012 3456 7890'
    },
    {
      label: 'Website',
      name: 'website',
      placeholder: 'https://www.example.com'
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
              id={name}
              onChange={(event) => dispatch({type: 'signature', target: event.target})}
              value={getValue(signature[name])}
              placeholder={placeholder}
            />
            {
              name === 'logo' && <FormText>Upload an image to your Dropbox, Google Drive or a similar site and paste the URL here. The file size should not exceed 3 MB.</FormText>
            }
          </FormGroup>
        ))}
      </Form>
    </>
  )
}