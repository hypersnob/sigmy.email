import React from 'react'
import { Form, Label } from 'reactstrap'

export function TemplateForm({chooseTemplate}) {
  const templates = [
    {
      title: 'Template 1',
      image: 'template-1.svg',
      current: 'templateOne'
    },
    {
      title: 'Template 2',
      image: 'template-2.svg',
      current: 'templateTwo'
    }
  ]

  return (
    <>
      <h3 className='mb-4'>Choose template</h3>
      <Form>
      {templates.map(({title, image, current}, index) => (
        <div key={index}>
          <Label>{title}</Label>
          <div className='tmb' id={current} onClick={chooseTemplate}>
            <img src={'../images/' + image} alt={title} />
          </div>
        </div>
      ))}
      </Form>
    </>
  )
}