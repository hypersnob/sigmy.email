import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import {getValue} from '../utils/helpers'

export default function Controls({handleInputChange, data}) {
  const fields = [
    {
      label: 'Full name',
      name: 'name' 
    },
    {
      label: 'Job title',
      name: 'job' 
    },
    {
      label: 'Company',
      name: 'company' 
    },
    {
      label: 'Email address',
      name: 'email' 
    },
    {
      label: 'Phone',
      name: 'phone' 
    },
    {
      label: 'Website',
      name: 'website'
    },
  ]

  // const social = {
  //     faceboock: null,
  //     twitter: null,
  //     xing: null,
  //     linkedin: null,
  //   };

  return(
    <div className='control-wrapper p-5 col-md-4'>
      <h3 className='mb-4'>Signature details</h3>
      <Form>
        {fields.map(({name, label}, index) => (
          <FormGroup key={index}>
            <Label for={name}>{label}</Label>
            <Input type='text' name={name} onChange={handleInputChange} value={getValue(data[name])} />
          </FormGroup>
        ))}
      </Form>
    </div>
  )
}