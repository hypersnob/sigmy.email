export const templateFour = (signature, social) => (
  `<div>
    <br />
    <table
      cellpadding="0"
      cellspacing="0"
      style="font-family:Arial,Helvetica,sans-serif;line-height:0px;font-size:1px;border-collapse:collapse; width: 540px;"
    >
      <tbody>
        <tr>
          <td width="100%">
            <table
              cellpadding="0"
              cellspacing="0"
              style="font-family:Arial,Helvetica,sans-serif;line-height:0px;font-size:1px;border-collapse:collapse;"
            >
              <tbody>
                <tr>
                  <td style="line-height: 1.5;">
                    <span style="font-size:16px;line-height:24px;font-weight:bold;color:#4951c5;">${signature.name || ''}</span>
                  </td>
                </tr>
                <tr>
                  <td style="line-height: 1.5; padding-bottom: 5px;">
                    <strong style="font-size:14px;line-height:1.5;;color:#4a4a4a;">
                      ${signature.job || ''}
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td style="line-height: 1.5;">
                    ${signature.phone ? '<strong style="font-size:14px;font-weight:bold;color:#4a4a4a;">Phone:&nbsp;</strong>' : ''}
                    <span style="font-size:14px;;color:#4a4a4a;">${signature.phone || ''}</span>
                  </td>
                </tr>
                <tr>
                  <td style="line-height: 1.5;">
                    ${signature.email ? '<strong style="font-size:14px;font-weight:bold;color:#4a4a4a;">Email:&nbsp;</strong>' : ''}
                    <span style="font-size:14px;;color:#4a4a4a;">${signature.email || ''}</span>
                  </td>
                </tr>
                <tr>
                  <td style="line-height: 1.5;">
                    ${signature.website ? '<strong style="font-size:14px;font-weight:bold;color:#4a4a4a;">Website:&nbsp;</strong>' : ''}
                    <a href="${signature.website || ''}" style="font-size:14px;;color:#4a4a4a; text-decoration:none;">
                      <span>${signature.website ? signature.website.replace(/(^\w+:|^)\/\//, '') : ''}</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="line-height: 1.5;">
                    ${signature.address ? '<strong style="font-size:14px;font-weight:bold;color:#4a4a4a;">Address:&nbsp;</strong>' : ''}
                    <span style="font-size:14px;;color:#4a4a4a;">${signature.address || ''}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 5px;">
                    <table
                    cellpadding="0"
                    cellspacing="0"
                    style="vertical-align: -webkit-baseline-top; font-size: medium; font-family: Arial; display: inline-block;"
                  >
                    <tbody>
                      ${social && `<tr><td style="padding-bottom: 12px;"><table cellpadding="0" cellspacing="0" style="font-size: 0px"><tr>`}
                      ${social && Object.entries(social).map(([name,link]) => `<td align="center" style="line-height: 1;">
                        <a href="${link}" target="_blank" style="display: inline-block; padding: 0px; border-radius: 3px;">
                          <img src="https://sigmyemail.sirv.com/icons/social-${name}-white.png" width="24" height="24" alt=${name} style="vertical-align: middle; border: 1px solid #000000; background-color: #000000;" /></a></td>
                          <td width="3"></td>`
                      ).join("")}
                      ${social && `</tr></table></td></tr>`}
                    </tbody>
                  </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td
            valign="top"
            style="border-left: solid 2px #ccc; padding-left:15px;"
          >
            <img
              width="130"
              src="${signature.logo || 'https://sigmyemail.sirv.com/img/logo.png'}"
              role="presentation"
              style="max-width: 130px; display: inline-block;"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>`
)