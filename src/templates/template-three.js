export const templateThree = (signature, social) => (
  `<div>
    <br />
    <table
      style="font-family: 'Helvetica Neue', Helvetica, Arial,sans-serif;"
      cellpadding="0"
      cellspacing="0"
      width="540"
    >
      <tbody>
        <tr>
          <td width="100">
          <img
            width="130"
            src="${signature.logo || 'https://sigmyemail.sirv.com/img/logo.png'}"
            role="presentation"
            style="max-width: 80px; display: inline-block;"
          />
          </td>
          <td style="border-left: solid 2px #898989;padding-left:20px;">
            <table cellpadding="0" cellspacing="0" width="100%">
              <tbody>
                <tr>
                  <td
                    style="font-size:12px; color:#000000; font-weight:bold;text-transform:uppercase;"
                  >
                    ${signature.name || ''}
                    <span
                      style="font-size:14px;color:#4b5662; text-transform:lowercase;">
                      ${signature.job ? '<span>&nbsp|&nbsp;</span>' : ''}
                      <span>${signature.job || ''}</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td
                    style="font-size:12px; color:#697582; padding-top:6px;line-height:1.5;"
                  >
                    <span
                      style="color:#66655d;
                      font-weight: 600;
                      text-transform:uppercase;"
                    >${signature.company ? 'c&nbsp;' : ''}</span>
                    <span>${signature.company || ''}</span>
                  </td>
                </tr>
                <tr>
                  <td style="font-size:12px; color:#697582; line-height:1.5;">
                    <span
                      style="color:#66655d;
                      font-weight: 600;
                      text-transform:uppercase;"
                    >${signature.address ? 'a&nbsp;' : ''}</span>
                    <span>${signature.address || ''}</span>
                  </td>
                </tr>
                <tr>
                  <td style="font-size:12px; line-height:1.5;">
                    <span
                      style="color:#66655d;
                      font-weight: 600;
                      text-transform:uppercase;
                      font-size:14px;"
                    >${signature.phone ? 'p&nbsp;' : ''}</span>
                    <a
                      href="tel:${signature.phone || ''}"
                      style="color:#697582;text-decoration:none;">
                      ${signature.phone || ''}
                    </a>
                  </td>
                </tr>
                <tr>
                <td style="font-size:12px; color:#697582; line-height:1.5;">
                  <span
                    style="color:#66655d;
                    font-weight: 600;
                    text-transform:uppercase;
                    font-size:14px;"
                  >${signature.email ? 'e&nbsp;' : ''}</span>
                  <a href="mailto:${signature.email || ''}" style="color:#697582; text-decoration:none;">${signature.email || ''}</a>
                </td>
                </tr>
                <tr>
                  <td style="font-size:12px; color:#697582; line-height:1.5;">
                    ${signature.website ? '<span style="color:#66655d;font-weight: 600;text-transform:uppercase;">w&nbsp;</span>' : ''}
                    <a href="${signature.website || ''}" style="color:#697582; text-decoration:none;">
                      <span>${signature.website ? signature.website.replace(/(^\w+:|^)\/\//, '') : ''}</span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td
            style="border-left: solid 2px #898989; padding-left:20px;"
            width="30"
          >
            <table>
              <tbody>
                ${social && Object.entries(social).map(([name,link]) => `<tr><td style="line-height:1; padding-bottom: 2px;">
                  <a href="${link}" target="_blank" href="#" style="display:inline-block;">
                    <img src="https://sigmyemail.sirv.com/icons/social-${name}-round.png" width="20" height="20" alt=${name} style="border-radius: 50%;padding: 2px; background-color: #66655d;" /></a></td></tr>`
                ).join('')}
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>`
)