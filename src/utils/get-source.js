import {templateOne} from '../templates/template-one'
import {templateTwo} from '../templates/template-two'
import {templateThree} from '../templates/template-three'
import {templateFour} from '../templates/template-four'

function minify( s ){
  return s
    .replace(/>[\r\n ]+</g, "><")
    .replace(/(<.*?>)|\s+/g, (m, $1) => $1 ? $1 : ' ')
    .trim()
}

export function getSource(signature, template, social) {
  const templates = {
    templateOne,
    templateTwo,
    templateThree,
    templateFour
  }

  const tempSig = {
    name: 'Primula Zaragamba',
    job: 'Recruiting manager',
    company: 'The Flying Hippo ltd.',
    address: '1796 Snider Street, Pueblo',
    email: 'p.zaragamba@example.com',
    phone: '012 3456 7890',
    website: 'http://www.example.com',
    linkText: 'Check free email signature generator',
    linkUrl: 'https://sigmy.email/',
    disclaimer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
  }

  const tempSocial = {
    facebook: 'https://www.facebook.com/',
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://twitter.com/',
    instagram: 'https://instagram.com/',
  }
  
  let details = (Object.entries(signature).length === 0) ? tempSig : signature;
  let networks = (Object.entries(signature).length === 0) ? tempSocial : social;
  
  return minify(templates[template](details, networks));
}