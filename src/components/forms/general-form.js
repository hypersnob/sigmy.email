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
      label: 'Email',
      name: 'email',
      placeholder: 't.anderson@example.com'
    },
    {
      label: 'Address',
      name: 'address',
      placeholder: 'Bla bla street'
    },
    {
      label: 'Phone',
      name: 'phone',
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