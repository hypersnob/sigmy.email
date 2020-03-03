export const templateOne = (signature, social) => (
  `<div>
    <br />
    <table cellpadding="0" cellspacing="0" width="550">
      <tbody>
        <tr>
          <td>
            <table cellpadding="0" cellspacing="0">
              <tbody>
                <tr>
                  <td valign="top">
                    <table cellpadding="0" cellspacing="0">
                      <tbody>
                        <tr>
                          <td style="padding-right: 15px;">
                            <img width="96" src="${signature.logo || 'https://sigmyemail.sirv.com/img/logo.png'}" border="0" alt="logo">
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td valign="top" width="100%">
                    <table cellpadding="0" cellspacing="0">
                      <tbody>
                        <tr style="font-weight: 600;">
                          <td valign="top">
                            <p style="font-size: 16px; font-family: Arial, Helvetica, sans-serif; margin: 0px; line-height: 150%; display: block;">
                              <span>${signature.name || ''}</span>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td valign="top" style="padding-bottom: 5px;">
                            <p style="font-size: 14px; font-family: Arial, Helvetica, sans-serif; margin: 0px; line-height: 150%;">
                              <span>${signature.job || ''}</span>
                              ${signature.company ? '<span>&nbsp|&nbsp;</span>' : ''}
                              <span>${signature.company || ''}</span>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td valign="top">
                            <p style="font-size: 14px; font-family: Arial, Helvetica, sans-serif; margin: 0px; line-height: 150%; display: block;">
                              ${signature.email ? '<span style="font-weight: 600;">e&nbsp;&nbsp;</span>' : ''}
                              <a href="mailto:${signature.email || ''}" style="text-decoration: none; color:#000000">${signature.email || ''}</a>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td valign="top">
                            <p style="font-size: 14px; font-family: Arial, Helvetica, sans-serif; margin: 0px; line-height: 150%; display: block;">
                              ${signature.phone ? '<span style="font-weight: 600;">p&nbsp;&nbsp;</span>' : ''}
                              <span>${signature.phone || ''}</span></p>
                          </td>
                        </tr>
                        <tr>
                          <td valign="top">
                            <p style="font-size: 14px; font-family: Arial, Helvetica, sans-serif; margin: 0px; line-height: 150%; display: block;">
                              ${signature.website ? '<span style="font-weight: 600;">w&nbsp;&nbsp;</span>' : ''}
                              <a href="${signature.website || ''}" style="text-decoration: none; color:#000000">${signature.website ? signature.website.replace(/(^\w+:|^)\/\//, '') : ''}</a>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td valign="top" style="padding-bottom: 6px;">
                            <p style="font-size: 14px; font-family: Arial, Helvetica, sans-serif; margin: 0px; line-height: 150%; display: block;">
                              ${signature.address ? '<span style="font-weight: 600;">a&nbsp;&nbsp;</span>' : ''}
                              <span>${signature.address || ''}</span></p>
                          </td>
                        </tr>
                        ${social && `<tr><td style="padding-bottom: 12px;"><table cellpadding="0" cellspacing="0" style="font-size: 0px"><tr>`}
                          ${social && Object.entries(social).map(([name,link]) => `<td align="center" style="line-height: 1;">
                            <a href="${link}" target="_blank" style="display: inline-block; padding: 0px; border-radius: 3px;">
                              <img src="https://sigmyemail.sirv.com/icons/social-${name}-round.png" width="24" height="24" alt=${name} style="vertical-align: top; background-color: rgb(139, 138, 127);" /></a></td>
                              <td width="5"></td>`
                          ).join('')}
                          ${social && `</tr></table></td></tr>`}
                      </tbody>
                    </table>
                  </td>
                </tr>
            </tbody>
          </table>
        </tr>
      </tbody>
    </table>
  </div>`
)