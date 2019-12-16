export const templateTwo = (signature, social) => (
  `<table border="0" cellpadding="0" cellspacing="0" width="500">
    <tbody>
    <tr>
      <td border="0" cellpadding="0" cellspacing="0" width="222">
        <img src="https://avatars3.githubusercontent.com/u/951542" width="104" alt="Logo">
      </td>
    </tr>
    <tr>
      <td style="font-family:Helvetica, Arial, sans-serif; font-size:18px; font-style:bold;">
        <strong>${signature.name || ''}</strong>
        <br>
        <em style="font-size:17px; font-weight:400;">${signature.job || ''}</em>
      </td>
    </tr>
    <tr>
      <td style="font-family:Helvetica, Arial, sans-serif; font-size:16px; color:#4d4d4e;">
        ${signature.address || ''}
      </td>
    </tr>
    <tr>
      <td class="hover" style="font-family:Helvetica, Arial, sans-serif; font-size:16px; color:#d0292d;">
        <a href="mailto:${signature.email || ''}" style="color:#d0292d; ">${signature.email || ''}</a>
        <br>
        <a href="${signature.website || ''}" target="_blank" style="color:#d0292d;">${signature.website || ''}</a>
      </td>
    </tr>
    ${social && '<tr><td width="24">'}
    ${social && Object.entries(social).map(([name,link]) => `
      <a href=${link} target="_blank">
        <img src="https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-${name}.png" width="24" alt="${name} Icon">
      </a>`
    ).join("")}
    ${social && '</td></tr>'}
    <tr>
      <td>
        <small style="font-family:Helvetica, Arial, sans-serif; font-size:10px; color:#4d4d4e;">
        ${signature.disclamer || ''}
        </small>
      </td>
    </tr>
  </tbody>
</table>`
)