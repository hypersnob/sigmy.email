export const templateTwo = (signature, social) => (
  `<table border="0" cellpadding="0" cellspacing="0" width="500">
    <tbody>
    <tr>
      <td border="0" cellpadding="0" cellspacing="0" width="222" style="padding-bottom: 10px;">
        ${signature.logo ? `
          <img width="104" src=${signature.logo} border="0" alt="avatar" style="width: 104px; border-radius: 0px;">
        `: `<div style="width: 104px; height: 104px; border-radius: 0px; background-color: rgb(238, 238, 238);"></div>`
        }
      </td>
    </tr>
    <tr>
      <td style="font-family:Helvetica, Arial, sans-serif; font-size:16px; font-style:bold;">
        <strong>${signature.name || ''}</strong>
        <br>
        <em style="font-size:16px; font-weight:400;">${signature.job || ''}</em>
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
    ${social && `<tr><td style="padding-top: 4px;"><table cellpadding="0" cellspacing="0" style="font-size: 0px"><tr>`}
    ${social && Object.entries(social).map(([name,link]) => `<td align="center" style="line-height: 1;">
      <a href=${link} target="_blank" style="display: inline-block; padding: 0px; border-radius: 3px;">
        <img src="https://sigmyemail.sirv.com/icons/social-${name}-black.png" width="24" height="24" alt=${name} style="vertical-align: middle; border-radius: 3px; background-color: white; display: block; border: 1px solid black;" />
      </a></td><td width="2"></td>`
    ).join("")}
    ${social && `</tr></table></td></tr>`}
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