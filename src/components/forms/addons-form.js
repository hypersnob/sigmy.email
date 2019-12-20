import React from 'react'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import {getValue} from '../../utils/helpers'

export function AddonsForm({dispatch, signature}) {
  const teaser = [
    {
      label: 'Link text',
      name: 'linkText',
      placeholder: 'Lorem ipsum dolor'
    },
    {
      label: 'URL',
      name: 'linkUrl',
      placeholder: 'http://example.com/'
    },
    {
      label: 'Small image',
      name: 'linkImage',
      placeholder: 'http://example.com/mypic.png'
    },
  ]

  return (
    <>
      <h3 className='mb-4'>Custom link</h3>
      <Form>
        {teaser.map(({name, label, placeholder}, index) => (
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
              name === 'teaserImage' && <FormText>Upload a small image to your Dropbox, Google Drive or a similar site and paste the URL here.</FormText>
            }
          </FormGroup>
        ))}
        <h3 className='mb-4'>Disclaimer</h3>
        <FormGroup>
          <Label for="disclaimer">Disclaimer text</Label>
          <Input
            type="textarea"
            name="disclaimer"
            id="disclaimer"
            value={getValue(signature.disclaimer) || ''}
            onChange={(event) => dispatch({type: 'signature', target: event.target})}
           />
        </FormGroup>
      </Form>
    </>
  )
}