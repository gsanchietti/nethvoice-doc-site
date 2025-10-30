---
title: Click to Call
sidebar_position: 10
---

# Click to Call

**Click-to-Call** refers to the functionality of initiating calls automatically by clicking on a phone number.
The methods available depend on the chosen device:

- **Web Phone**:
  Click-to-call is only possible within the **NethVoice CTI** web interface.

- **Other Devices**:
  To use click-to-call with devices other than the web phone, the [NethLink](https://nethserver.github.io/nethlink/) client must be installed and configured on the user's system. Additionally, **NethLink** must be enabled for the user beforehand.

  1. **Desktop Phone** client provided by **NethLink**:

     - Click-to-call can be performed directly in the **NethVoice CTI** web interface.
     - On a Windows or Mac PC, **NethLink** can be set as the client for the `tel` or `callto` protocol, allowing it to handle phone numbers recognized by the operating system.

  2. **Physical Phones**:
     For physical phones supported and configured through **NethVoice** provisioning, click-to-call can only be performed if the client and the phone can communicate directly, such as when they are on the same local network or in two interconnected networks.
     The click-to-call process in this configuration is identical to that of the **Desktop Phone** client:

     - Click-to-call can be performed directly in the **NethVoice CTI** web interface.
     - On a Windows or Mac PC, **NethLink** can be set as the client for the `tel` or `callto` protocol, allowing it to handle phone numbers recognized by the operating system.
