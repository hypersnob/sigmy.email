export function getSignature(signature) {
return `${signature.name || ''}
${signature.job || ''} | ${signature.company || ''}

${signature.phone ? 'phone:' : ''} ${signature.phone || ''}
${signature.email ? 'email:' : ''} ${signature.email || ''}

${signature.website ? 'website:' : ''} ${signature.website || ''}
${signature.address ? 'address:' : ''} ${signature.address || ''}`
}