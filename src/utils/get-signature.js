export function getSignature(signature) {
  return `${signature.name || ''}
${signature.job || ''} | ${signature.company || ''}

phone: ${signature.phone || ''}
email: ${signature.email || ''}

website: ${signature.website || ''}
address: ${signature.address || ''}`
}