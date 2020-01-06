export const templateTwo = (signature, social) => (
  `<table
  cellpadding="0"
  cellspacing="0"
  style="vertical-align: -webkit-baseline-top; font-size: medium; font-family: Arial; min-width: 450px;"
>
  <tbody>
    <tr>
      <td style="text-align: center;">
        <img
          width="130"
          src=${signature.logo || 'https://sigmyemail.sirv.com/img/logo.png'}
          role="presentation"
          style="max-width: 120px; display: inline-block;"
        />
      </td>
    </tr>
    <tr>
      <td height="10"></td>
    </tr>
    <tr style="text-align: center;">
      <td>
        <h3
          color="#3f3f3d"
          style="margin: 0px; font-size: 18px; color: rgb(63, 63, 61);"
        >
          <span>${signature.name || ''}</span>
        </h3>
        <p
          color="#3f3f3d"
          font-size="medium"
          style="margin: 0px; font-weight: 500; color: rgb(63, 63, 61); font-size: 14px; line-height: 22px;"
        >
          <span>${signature.job || ''}</span>
          ${signature.company ? '<span>&nbsp|&nbsp;</span>' : ''}
          <span>${signature.company || ''}</span>
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <table
          cellpadding="0"
          cellspacing="0"
          style="vertical-align: -webkit-baseline-top; font-size: medium; font-family: Arial; width: 100%;"
        >
          <tbody>
            <tr>
              <td height="30"></td>
            </tr>
            <tr>
              <td
                height="1"
                color="#c9c9c6"
                direction="horizontal"
                style="width: 100%; border-bottom: 1px solid rgb(201, 201, 198); border-left: none; display: block;"
              ></td>
            </tr>
            <tr>
              <td height="30"></td>
            </tr>
          </tbody>
        </table>
        <table
          cellpadding="0"
          cellspacing="0"
          style="vertical-align: -webkit-baseline-top; font-size: medium; font-family: Arial; width: 100%;"
        >
          <tbody>
            <tr style="vertical-align: top;">
              <td>
                <table
                  cellpadding="0"
                  cellspacing="0"
                  style="vertical-align: -webkit-baseline-top; font-size: medium; font-family: Arial;"
                >
                  <tbody>
                    <tr height="25" style="vertical-align: top;">
                      <td style="padding: 0px; color: rgb(63, 63, 61);">
                        <a
                          href="tel:${signature.phone || ''}
                          color="#3f3f3d"
                          style="text-decoration: none; color: rgb(63, 63, 61); font-size: 12px;"
                          ><span>${signature.phone || ''}</span></a
                        >
                      </td>
                    </tr>
                    <tr height="25" style="vertical-align: top;">
                      <td style="padding: 0px;">
                        <a
                          href="mailto:${signature.email || ''}
                          color="#3f3f3d"
                          style="text-decoration: none; color: rgb(63, 63, 61); font-size: 12px;"
                          ><span>${signature.email || ''}</span></a
                        >
                      </td>
                    </tr>
                    <tr height="25" style="vertical-align: top;">
                      <td style="padding: 0px;">
                        <a
                          href=${signature.website || ''}
                          color="#3f3f3d"
                          style="text-decoration: none; color: rgb(63, 63, 61); font-size: 12px;"
                          ><span>${signature.website || ''}</span></a
                        >
                      </td>
                    </tr>
                    <tr height="25" style="vertical-align: top;">
                      <td style="padding-bottom: 10px;">
                        <span
                          color="#3f3f3d"
                          style="font-size: 12px; color: rgb(63, 63, 61);"
                          >
                          <span>${signature.address || ''}</span></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td width="15"><div></div></td>
              <td style="text-align: right;">
                <table
                  cellpadding="0"
                  cellspacing="0"
                  style="vertical-align: -webkit-baseline-top; font-size: medium; font-family: Arial; width: 100%;"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          style="vertical-align: -webkit-baseline-top; font-size: medium; font-family: Arial; display: inline-block;"
                        >
                          <tbody>
                              ${social && `<tr><td style="padding-bottom: 12px;"><table cellpadding="0" cellspacing="0" style="font-size: 0px"><tr>`}
                              ${social && Object.entries(social).map(([name,link]) => `<td align="center" style="line-height: 1;">
                                <a href=${link} target="_blank" style="display: inline-block; padding: 0px; border-radius: 3px;">
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
            </tr>
          </tbody>
        </table>
        <table
          cellpadding="0"
          cellspacing="0"
          style="vertical-align: -webkit-baseline-top; font-size: medium; font-family: Arial; width: 100%;"
        >
          <tbody>
            <tr>
              <td valign="center" style="font-size: 0px; padding-bottom: 10px;">
                <table cellpadding="0" cellspacing="0">
                  <tbody>
                    <tr>
                      <td>
                        <img width="24" src=${signature.linkImage || 'https://sigmyemail.sirv.com/img/logo.png'} border="0" alt="link"">
                      </td>
                      <td width="10"></td>
                      <td>
                        <p style="font-size: 14px; font-family: Arial, Helvetica, sans-serif; margin: 0px; line-height: 150%; display: block;">
                          <a style="text-decoration: none; color: inherit;" href=${signature.linkUrl || ''}>
                            <span style="font-weight: 600;">${signature.linkText || ''}</span>
                          </a>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td valign="top" style="font-size: 0px;">
                <p style="font-size: 12px; font-family: Arial, Helvetica, sans-serif; margin: 0px; line-height: 120%; display: block; color: #999999;">
                  ${signature.disclaimer || ''}
                </p>
              </td>
            </tr>
            <tr>
              <td height="30"></td>
            </tr>
            <tr>
              <td
                height="1"
                color="#c9c9c6"
                direction="horizontal"
                style="width: 100%; border-bottom: 1px solid rgb(201, 201, 198); border-left: none; display: block;"
              ></td>
            </tr>
            <tr>
              <td height="30"></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td style="text-align: center;"></td>
    </tr>
  </tbody>
</table>`
)