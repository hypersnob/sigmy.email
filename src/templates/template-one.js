export const templateOne = (signature, social) => (
  `<div>
      <table cellpadding="0" cellspacing="0" role="presentation" width="550" class="wrapper">
      <tbody>
        <tr>
          <td>
            <table cellpadding="0" cellspacing="0" role="presentation">
              <tbody>
                <tr>
                  <td valign="top">
                    <table cellpadding="0" cellspacing="0" role="presentation">
                      <tbody>
                        <tr>
                          <td style="padding-right: 10px;">
                            <div
                              style="width: 120px; height: 120px; border-radius: 0px; background-color: rgb(238, 238, 238);">
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td valign="top" width="100%">
                    <table cellpadding="0" cellspacing="0" role="presentation">
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
                        ${social && '<tr><td width="24">'}
                        ${social && Object.entries(social).map(([name,link]) => `
                          <a href=${link} target="_blank">
                            <img src="https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-${name}.png" width="24" alt="${name} Icon">
                          </a>`
                        ).join("")}
                        ${social && '</td></tr>'}
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