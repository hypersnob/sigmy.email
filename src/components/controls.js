import React, {useState} from 'react'
import { Button, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import SourceModal from './source-modal'
import { GeneralForm } from './forms/general-form'
import { SocialForm } from './forms/social-form'
import cn from 'classnames'

export default function Controls(props) {

  const [activeTab, setActiveTab] = useState('general');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return(
    <div className='control-wrapper bg-dark text-light'>
      <div>
        <Nav tabs className='form-tabs'>
          <NavItem>
            <NavLink
              className={cn({ active: activeTab === 'general' })}
              onClick={() => { toggle('general'); }}
            >
              G
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={cn({ active: activeTab === 'social' })}
              onClick={() => { toggle('social'); }}
            >
              S
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={cn({ active: activeTab === 'addons' })}
              onClick={() => { toggle('addons'); }}
            >
              A
            </NavLink>
          </NavItem>
          <NavItem>
            <SourceModal buttonLabel='Get source' data={props.data} />
          </NavItem>
        </Nav>
        <div className='p-5 form-wrapper'>
          <TabContent activeTab={activeTab}>
            <TabPane tabId='general'>
              <GeneralForm data={props.data} handleInputChange={props.handleInputChange} />
            </TabPane>
          </TabContent>
          <TabContent activeTab={activeTab}>
            <TabPane tabId='social'>
              <SocialForm data={props.data} handleInputChange={props.handleInputChange} />
            </TabPane>
          </TabContent>
          <TabContent activeTab={activeTab}>
            <TabPane tabId='images'>
              Teaser form
            </TabPane>
          </TabContent>
          <Button onClick={props.reset} color='danger' block>Reset all fields</Button>
        </div>
      </div>
    </div>
  )
}