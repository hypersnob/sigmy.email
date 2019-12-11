export const templateOne = (signature) => (
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
                              <span style="color: rgb(64, 158, 255);">${signature.name}</span></p>
                          </td>
                        </tr>
                        <tr>
                          <td valign="top" style="font-size: 0px; padding-bottom: 5px;">
                            <p
                              style="font-size: 12px; font-family: Arial, Helvetica, sans-serif; margin: 0px; line-height: 150%;">
                              <span><span>${signature.job}</span></span><span><span
                                  style="padding: 0px;">&nbsp;&nbsp;/&nbsp;&nbsp;</span><span>${signature.company}</span></span>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td valign="top" style="font-size: 0px;">
                            <p
                              style="font-size: 12px; font-family: Arial, Helvetica, sans-serif; margin: 0px; line-height: 150%; display: block;">
                              <span v-bind="[object Object]"
                                style="padding-right: 0px; font-weight: 600; color: rgb(64, 158, 255);">Website:&nbsp;&nbsp;</span><a
                                href="https://example.com"
                                style="text-decoration: none; color: inherit;">https://example.com</a></p>
                          </td>
                        </tr>
                        <tr>
                          <td valign="top" style="font-size: 0px;">
                            <p
                              style="font-size: 12px; font-family: Arial, Helvetica, sans-serif; margin: 0px; line-height: 150%; display: block;">
                              <span v-bind="[object Object]"
                                style="padding-right: 0px; font-weight: 600; color: rgb(64, 158, 255);">Email:&nbsp;&nbsp;</span><a
                                href="mailto:http://johndoe@example.com"
                                style="text-decoration: none; color: inherit;">johndoe@example.com</a></p>
                          </td>
                        </tr>
                        <tr>
                          <td valign="top" style="font-size: 0px;">
                            <p
                              style="font-size: 12px; font-family: Arial, Helvetica, sans-serif; margin: 0px; line-height: 150%; display: block;">
                              <span v-bind="[object Object]"
                                style="padding-right: 0px; font-weight: 600; color: rgb(64, 158, 255);">Phone:&nbsp;&nbsp;</span><span>+
                                1 123 456 7890</span></p>
                          </td>
                        </tr>
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
  </div>`
)