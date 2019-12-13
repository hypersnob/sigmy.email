import React from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import {getValue} from '../../utils/helpers'

export function SocialForm({social, dispatch}) {
  const fields = [
    {
      label: 'LinkedIn',
      name: 'linkedin',
      placeholder: 'https://linkedin.com'
    },
    {
      label: 'Facebook',
      name: 'facebook',
      placeholder: 'https://facebook.com'
    },
    {
      label: 'Twitter',
      name: 'twitter',
      placeholder: 'https://twitter.com'
    },
    {
      label: 'Instagram',
      name: 'instagram',
      placeholder: 'https://instagram.com'
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
              onChange={(event) => dispatch({type: 'social', target: event.target})}
              value={getValue(social[name])}
              placeholder={placeholder}
            />
          </FormGroup>
        ))}
      </Form>
    </>
  )
}