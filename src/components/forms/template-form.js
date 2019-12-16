import React from 'react'
import { Row, Col } from 'reactstrap'
import cn from 'classnames'
import template1 from '../../img/template-1.svg'
import template2 from '../../img/template-2.svg'

export function TemplateForm({dispatch, template}) {
  const templates = [
    {
      title: 'Template 1',
      image: template1,
      current: 'templateOne'
    },
    {
      title: 'Template 2',
      image: template2,
      current: 'templateTwo'
    },
  ]

  function getTemplate(event) {
    let template = event.target.closest('.template-tmb').id;
    dispatch({type: 'template', template: template})
  }

  const rows = templates.reduce(function(result, value, index, array) {
    if (index % 2 === 0) result.push(array.slice(index, index + 2));
    return result;
  }, []);

  return (
    <>
      <h3 className='mb-4'>Choose template</h3>
      {rows.map((col, i) => (
        <Row key={i}>
          {col.map(({title, image, current}, index) => (
            <Col md='6' className='mb-3' key={index}>
              <div className='mb-2'>{title}</div>
              <div className={cn('template-tmb', {active: template === current})} id={current} onClick={getTemplate}>
                <img className='img-fluid' src={image} alt={title} />
              </div>
            </Col>
          ))}
        </Row>
      ))}
    </>
  )
}