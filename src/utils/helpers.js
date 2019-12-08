export function getValue(value = ''){
  return value;
}

export function copyCodeToClipboard (id) {
  const area = document.getElementById(id)
  area && area.select()
  console.log(area)
  document.execCommand("copy")
}

export function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    console.log('unsuccessful')
  }
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}

export function getSource(data) {
  return (
    `<div style="width: 500px; font-size: 12px; font-family: arial,helvetica,sans-serif; color: #000;">
      <table width="500" border="0" cellspacing="0" cellpadding="0">
        <tbody>
          <tr>
            <td>
              <table border="0" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>
                    <td width="70px" valign="top">
                      <a href="https://www.moberries.com" target="_blank"> 
                        <img style="width: 50px; height: 67px;" src="https://assets.moberries.com/email/logo_red.png" alt="MoBerries" width="50" height="67" />
                      </a>
                    </td>
                    <td width="430px" >
                      <strong>Best Regards,</strong>
                      <br />
                      <strong>${getValue(data.name) || ''}, Head of Business Development</strong>
                      <br />
                      f ${getValue(data.phone) || ''} | m ${getValue(data.mobile) || ''}
                      <br />
                      <a class="m-link" href="mailto:${getValue(data.mail) || ''}" target="_blank">${getValue(data.name) || ''}</a> | 
                      <a class="m-link" href="https://www.moberries.com" target="_blank">www.moberries.com</a> 
                      <br />
                      MoBerries GmbH, Schwedter Str. 9a, 10119 Berlin
                    </td>
                  </tr>
                  <tr>
                    <td>
                    </td>
                    <td style="padding-top: 5px;">
                      <a class="m-link" href="https://www.linkedin.com/in/mo-moubarak-63047963" target="_blank">
                        <img src="https://assets.moberries.com/email/signature/v1905/LinkedIn.png" width="22" height="22" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding: 1em 0">
              <table border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td width="30px">
                    <img style="" src="https://assets.moberries.com/email/signature/v1905/capterra.png" alt="MoBerries" width="22" height="22" />
                  </td>
                  <td valign="center">
                    <a class="m-link" style="font-weight: bold; padding-bottom: .5em;" href="https://www.capterra.com/p/174047/MoBerries/" target="_blank">
                      Find out what customers say about us
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="color: #969faa;">
              <strong>MoBerries is trusted by</strong>
            </td>
          </tr>
          <tr>
            <td style="padding: .5em 0">
              <table width="500">
                <tr>
                  <td align="center"><img src="https://assets.moberries.com/email/signature/v1905/signals.png" width="30" /></td>
                  <td align="center"><img src="https://assets.moberries.com/email/signature/v1905/wefox.png" width="75" /></td>
                  <td align="center"><img src="https://assets.moberries.com/email/signature/v1905/arvato.png" width="51" /></td>
                  <td align="center"><img src="https://assets.moberries.com/email/signature/v1905/auto1.png" width="61" /></td>
                  <td align="center"><img src="https://assets.moberries.com/email/signature/v1905/basf.png" width="61" /></td>
                  <td align="center"><img src="https://assets.moberries.com/email/signature/v1905/htgf.png" width="90" /></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding: .5em 0">
              <table border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td width="30px">
                    <img style="" src="https://assets.moberries.com/email/signature/v1905/calendar.png" alt="MoBerries" width="22" height="22" />
                  </td>
                  <td valign="center">
                    <a class="m-link" style="font-weight: bold; padding-bottom: .5em;" href="https://app.prosperworks.com/public/meeting-scheduler/MoBerries/mo.moubarak/154413:e1b688e0-7189-4cf9-acf2-c7ed059f30cc/" target="_blank">
                      Book an appointment
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <p class="m-cont">Registry Court Berlin, HRB 165716 B<br />Managing Director: Terence Hielscher</p>
              <p class="m-cont">
                This e-mail contains proprietary information some or all of which may be legally privileged. It is for the intended recipient only. If an address or transmission error has misdirected this email, please notify the author by replying to this e-mail. If you are not the intended recipient you must not use, disclose, distribute, copy, print, rely on or retain this e-mail. All e-mails including CV(s) are subject to our standard terms and conditions of business. The acceptance of any CV(s) constitutes the acceptance of our standard terms and conditions of business unless there has
                been written a prior agreement.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="m-cont">
                Candidate privacy: 
                <a class="m-link" style="font-weight: bold;" href="https://www.moberries.com/privacy.html" target="_blank">www.moberries.com/privacy.html</a>
              </p>
              <p class="m-cont">
                Company privacy: 
                <a class="m-link" style="font-weight: bold;" href="https://www.moberries.com/companies/privacy-agreement.html" target="_blank">www.moberries.com/companies/privacy-agreement.html</a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>`.replace(/\s\s+/g, ' ')
  )
}