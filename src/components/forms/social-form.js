import React, {useState} from 'react'
import { Form, FormGroup, Label, Input, Button, InputGroup, InputGroupAddon } from 'reactstrap'
import {getValue} from '../../utils/helpers'
import cn from 'classnames'

export function SocialForm({social, dispatch}) {
  const fields = [
    {
      label: 'Facebook',
      name: 'facebook',
      placeholder: 'https://facebook.com',
      active: false,
    },
    {
      label: 'LinkedIn',
      name: 'linkedin',
      placeholder: 'https://linkedin.com',
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
    },
    {
      label: 'Xing',
      name: 'xing',
      placeholder: 'https://xing.com',
      active: false,
    },
    {
      label: 'Slack',
      name: 'slack',
      placeholder: 'https://team.slack.com',
      active: false,
    },
    {
      label: 'Github',
      name: 'github',
      placeholder: 'https://github.com',
      active: false,
    },
    {
      label: 'GitLab',
      name: 'gitlab',
      placeholder: 'https://gitlab.com/id',
      active: false,
    },
    {
      label: 'Whatsapp',
      name: 'whatsapp',
      placeholder: 'https://www.whatsapp.com/',
      active: false,
    },
    {
      label: 'Skype',
      name: 'skype',
      placeholder: 'https://skype.com/',
      active: false,
    },
    {
      label: 'Dribbble',
      name: 'dribbble',
      placeholder: 'https://dribble.com/',
      active: false,
    },
    {
      label: 'YouTube',
      name: 'youtube',
      placeholder: 'https://youtube.com/id',
      active: false,
    },
    {
      label: 'Tumblr',
      name: 'tumblr',
      placeholder: 'https://www.tumblr.com/',
      active: false,
    },
    {
      label: 'Telegram',
      name: 'telegram',
      placeholder: 'https://telegram.me/id',
      active: false,
    },
    {
      label: 'StackOverflow',
      name: 'stack-overflow',
      placeholder: 'https://stackoverflow.com/users/id',
      active: false,
    },
    {
      label: 'Snapchat',
      name: 'snapchat',
      placeholder: 'https://snapchat/add/id',
      active: false,
    },
    {
      label: 'Product Hunt',
      name: 'product-hunt',
      placeholder: 'https://www.producthunt.com/@id',
      active: false,
    },
    {
      label: 'Behance',
      name: 'behance',
      placeholder: 'https://www.behance.net/id',
      active: false,
    },
    {
      label: 'Reddit',
      name: 'reddit',
      placeholder: 'https://www.reddit.com/user/id',
      active: false,
    },
    {
      label: 'Medium',
      name: 'medium',
      placeholder: 'https://medium.com/@id',
      active: false,
    },
  ]

  function getInitial(fields, social) {
    return fields.map((channel) => {
      if(Object.keys(social).includes(channel.name)) channel.active = true;
      return channel;
    })
  }

  const [channels, setChannels] = useState(getInitial(fields, social));

  function toggleChannel (event) {
    let target = event.target.closest('button');
    channels.map((channel) => {
      if(target.dataset.name === channel.name) channel.active = !channel.active;
      return channel;
    })
    setChannels([...channels])
    dispatch({type: 'delete', name: target.id})
  }

  return (
    <>
      <h3 className='mb-4'>Social media links</h3>
      <Form>
        <div className='mb-4 ml-1'>
          {channels.map((channel, index) => (
            <Button key={index} className={cn({active: channel.active}, 'p-2', 'btn-social')} color='light' outline data-name={channel.name} onClick={toggleChannel} >
              <i className={cn('fab', { [`fa-${channel.name}`]:true } )} /> 
            </Button>
          ))}
        </div>
        {channels.filter(item => item.active).map((channel, index) => (
          <FormGroup key={index}>
            <Label for={channel.name}>{channel.label}</Label>
            <InputGroup>
              <Input
                type='text'
                name={channel.name}
                onChange={(event) => dispatch({type: 'social', target: event.target})}
                value={getValue(social[channel.name])}
                placeholder={channel.placeholder}
              />
              <InputGroupAddon addonType="append">
                <Button color='gray-dark' outline data-name={channel.name} onClick={toggleChannel}>
                  &times;
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
        ))}
      </Form>
    </>
  )
}