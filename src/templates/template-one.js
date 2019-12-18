export const templateOne = (signature, social) => (
  `<div>
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
                            ${signature.logo ? `
                              <img width="104" src=${signature.logo} border="0" alt="avatar" style="width: 104px; border-radius: 0px;">` : `<div style="width: 104px; height: 104px; border-radius: 0px; background-color: rgb(238, 238, 238);"></div>`
                            }
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td valign="top" width="100%">
                    <table cellpadding="0" cellspacing="0">
                      <tbody>
                        <tr style="font-weight: 600;">
                          <td valign="top" style="font-size: 0px;">
                            <p
                              style="font-size: 14px; font-family: Arial, Helvetica, sans-serif; margin: 0px; line-height: 150%; display: block;">
                              <span style="color: rgb(64, 158, 255);">${signature.name || ''}</span></p>
                          </td>
                        </tr>
                        <tr>
                          <td valign="top" style="font-size: 0px; padding-bottom: 5px;">
                            <p
                              style="font-size: 12px; font-family: Arial, Helvetica, sans-serif; margin: 0px; line-height: 150%;">
                              <span><span>${signature.job || ''}</span></span><span><span
                                  style="padding: 0px;">&nbsp;&nbsp;/&nbsp;&nbsp;</span><span>${signature.company || ''}</span></span>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td valign="top" style="font-size: 0px;">
                            <p
                              style="font-size: 12px; font-family: Arial, Helvetica, sans-serif; margin: 0px; line-height: 150%; display: block;">
                              <span
                                style="padding-right: 0px; font-weight: 600; color: rgb(64, 158, 255);">Website:&nbsp;&nbsp;</span><a
                                href=${signature.website || ''}
                                style="text-decoration: none; color: inherit;">${signature.website || ''}</a></p>
                          </td>
                        </tr>
                        <tr>
                          <td valign="top" style="font-size: 0px;">
                            <p
                              style="font-size: 12px; font-family: Arial, Helvetica, sans-serif; margin: 0px; line-height: 150%; display: block;">
                              <span
                                style="padding-right: 0px; font-weight: 600; color: rgb(64, 158, 255);">Email:&nbsp;&nbsp;</span><a
                                href="mailto:${signature.email || ''}"
                                style="text-decoration: none; color: inherit;">${signature.email || ''}</a></p>
                          </td>
                        </tr>
                        <tr>
                          <td valign="top" style="font-size: 0px;">
                            <p
                              style="font-size: 12px; font-family: Arial, Helvetica, sans-serif; margin: 0px; line-height: 150%; display: block;">
                              <span
                                style="padding-right: 0px; font-weight: 600; color: rgb(64, 158, 255);">Phone:&nbsp;&nbsp;</span>
                                <span>${signature.phone || ''}</span></p>
                          </td>
                        </tr>
                        ${social && `<tr><td style="padding-top: 3px;"><table cellpadding="0" cellspacing="0" style="font-size: 0px"><tr>`}
                        ${social && Object.entries(social).map(([name,link]) => `<td align="center" style="line-height: 1;">
                          <a href=${link} target="_blank" style="display: inline-block; padding: 0px; border-radius: 3px;">
                            <img src="https://sigmyemail.sirv.com/icons/social-${name}-white.png" width="24" height="24" alt=${name} style="vertical-align: middle; border-radius: 3px; background-color: rgb(64, 158, 255); display: block;" />
                          </a></td><td width="2"></td>`
                        ).join("")}
                        ${social && `</tr></table></td></tr>`}
                      </tbody>
                    </table>
                  </tr>
                </td>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>`
)