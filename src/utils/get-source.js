import {templateOne} from '../templates/template-one'
import {templateTwo} from '../templates/template-two'

function minify( s ){
  return s
    .replace(/>[\r\n ]+</g, "><")
    .replace(/(<.*?>)|\s+/g, (m, $1) => $1 ? $1 : ' ')
    .trim()
}

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
  
  let details = (Object.entries(signature).length === 0) ? temp : signature;
  
  return minify(templates[template](details, social));
}