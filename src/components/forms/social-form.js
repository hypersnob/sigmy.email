import React, {useState} from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import {getValue} from '../../utils/helpers'
import cn from 'classnames'

export function SocialForm({social, dispatch}) {
  const fields = [
    {
      label: 'LinkedIn',
      name: 'linkedin',
      placeholder: 'https://linkedin.com',
      active: true,
    },
    {
      label: 'Facebook',
      name: 'facebook',
      placeholder: 'https://facebook.com',
      active: false,
    },
    {
      label: 'Twitter',
      name: 'twitter',
      placeholder: 'https://twitter.com',
      active: false,
    },
    {
      label: 'Instagram',
      name: 'instagram',
      placeholder: 'https://instagram.com',
      active: false,
    }
  ]

  const [channels, setChannels] = useState(fields);

  function addChannel (event) {
    channels.map((channel) => {
      if(event.target.id === channel.name) channel.active = !channel.active;
      return channel;
    })
    setChannels([...channels])
  }

  return (
    <>
      <h3 className='mb-4'>Social media links</h3>
      <Form>
        <div className='mb-4'>
          {channels.map((channel, index) => (
            <Button key={index} className={cn({active: channel.active})} id={channel.name} onClick={addChannel} >{channel.label}</Button>
          ))}
        </div>
        {channels.filter(item => item.active).map((channel, index) => (
          <FormGroup key={index}>
            <Label for={channel.name}>{channel.label}</Label>
            <Input
              type='text'
              name={channel.name}
              onChange={(event) => dispatch({type: 'social', target: event.target})}
              value={getValue(social[channel.name])}
              placeholder={channel.placeholder}
            />
            <Button id={channel.name} onClick={addChannel}>x</Button>
          </FormGroup>
        ))}
      </Form>
    </>
  )
}