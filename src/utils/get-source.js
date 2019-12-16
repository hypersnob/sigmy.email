import {templateOne} from '../templates/template-one'
import {templateTwo} from '../templates/template-two'


export function getSource(signature, template, social) {
  const templates = {
    templateOne,
    templateTwo
  }

  const temp = {
    name: 'Thomas Anderson',
    job: 'Software Developer',
    company: 'Meta Cortex',
    address: 'Bla bla street',
    logo: 'Bla bla street',
    email: 't.anderson@example.com',
    phone: '12345678',
    mobile: '12345678',
    website: 'www.example.com',
  }
  
  let details = (Object.entries(signature).length === 0 && signature.constructor === Object) ? temp : signature;
  
  return templates[template](details, social).replace(/\s\s+/g, ' ');
}