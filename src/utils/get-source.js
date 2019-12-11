import {templateOne} from '../templates/template-one'
import {templateTwo} from '../templates/template-two'


export function getSource(signature, template) {
  const templates = {
    templateOne,
    templateTwo
  }

  const temp = {
    name: 'Thomas Anderson',
    job: 'Software Developer',
    company: 'Meta Cortex',
  }
  
  let details = (Object.entries(signature).length === 0 && signature.constructor) === Object ? temp : signature;
  
  return templates[template](details).replace(/\s\s+/g, ' ');
}