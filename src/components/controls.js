import React, {useState} from 'react'
import { Button, ButtonGroup, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import SourceModal from './source-modal'
import { GeneralForm } from './forms/general-form'
import { TemplateForm } from './forms/template-form'
import { SocialForm } from './forms/social-form'
import { copyTextToClipboard, isReady} from '../utils/helpers'
import { getSignature } from '../utils/get-signature'
import cn from 'classnames'

export default function Controls({template, signature, social, dispatch, toggleToast}) {

  const [activeTab, setActiveTab] = useState('template');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return(
    <aside className='control-wrapper bg-dark text-light'>
      <Nav tabs className='form-tabs'>
        <NavItem>
          <NavLink
            className={cn({ active: activeTab === 'template' })}
            onClick={() => { toggle('template'); }}
          >
            Style
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={cn({ active: activeTab === 'general' })}
            onClick={() => { toggle('general'); }}
          >
            Details
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={cn({ active: activeTab === 'social' })}
            onClick={() => { toggle('social'); }}
          >
            Social
          </NavLink>
        </NavItem>
      </Nav>
      <div className='form-wrapper px-5 pt-5 pb-2 d-flex flex-column'>
        <TabContent activeTab={activeTab}>
          <TabPane tabId='template'>
            <TemplateForm template={template} dispatch={dispatch} />
          </TabPane>
        </TabContent>
        <TabContent activeTab={activeTab}>
          <TabPane tabId='general'>
            <GeneralForm signature={signature} dispatch={dispatch} />
          </TabPane>
        </TabContent>
        <TabContent activeTab={activeTab}>
          <TabPane tabId='social'>
            <SocialForm social={social} dispatch={dispatch} />
          </TabPane>
        </TabContent>
        <div className='mt-auto'>
          <ButtonGroup className='d-flex mb-2'>
            <SourceModal buttonLabel='View source code' signature={signature} template={template} social={social} toggleToast={toggleToast} />
            <Button color="primary" className='flex-grow-1' disabled={isReady(signature)} onClick={() => copyTextToClipboard(getSignature(signature), toggleToast)}>Copy signature</Button>
          </ButtonGroup>
          <Button onClick={() => dispatch({type: 'reset'})} className="text-muted" color='link' block>Reset all fields</Button>
        </div>
      </div>
    </aside>
  )
}