---
title: Supported phones
---

# Supported phones

We support the following phones using automatic provisioning. 
However, all standard SIP phones should work with NethVoice. 
For phones not listed as supported, it is possible to create custom provisioning templates using Tancredi.

## NethPhone

**FIRMWARE Version 2.0 or higher**

- NP-X3
- NP-V61
- NP-X5
- NP-X210

## Fanvil

**FIRMWARE Version 2.0 or higher**

- V61, V62, V63, V64, V65, V67
- X1/S/SP
- X210
- X3/S/SP/G/SG, X3U, X3U Pro
- X4/G/SG, X4U, X4U-V2
- X5S, X5U, X5U-V2
- X6, X6U, X6U-V2
- X7A/C
- X301/P/G/W, X303/P/G/W
- H2U, H2U-V2, H5

## Yealink

**FIRMWARE Version 0.86 or higher**

- T19(P) E2, T21(P) E2, T23P/G, T27G, T29G
- T30/P, T31/P/G/W, T33P/G, T34W
- T40P/G, T41P/S/U, T42G/S/U, T43U, T44U/W, T46G/S/U, T48G/S/U, T49G
- T52S, T53/W/C, T54S/W, T56A, T57W, T58V/A/W, VP59

## Snom

**FIRMWARE Version 8.7.5 or higher**

- D120, D140, D150
- D305, D315, D345, D375, D385
- D710, D712, D713, D715, D717, D725, D735, D745, D765, D785
- D812, D815, D862, D865

:::note
The Snom D862 and D865 phones do not support HTTP commands, so it is not possible to use click-to-call.
:::

## Gigaset

**FIRMWARE Version 3.15.9 or higher**

- Maxwell Basic, Maxwell 2, Maxwell 3, Maxwell 4



## Provisioning compatibility

The following table summarizes the provisioning methods used by each manufacturer at the phone's first boot.

| Manufacturer | Primary method | Secondary method | DHCP option   | DHCP option value                                 |
|--------------|---------------|-----------------|--------------|--------------------------------------------------|
| NethPhone    | RPS           | DHCP            | 66           | `http://IP_PHONE_SYSTEM/provisioning/$mac.cfg`   |
| Fanvil       | RPS           | DHCP            | 66           | `http://IP_PHONE_SYSTEM/provisioning/$mac.cfg`   |
| Yealink      | RPS           | DHCP            | 66           | `http://IP_PHONE_SYSTEM/provisioning/$MAC.cfg`   |
| Snom         | RPS           | DHCP            | 66 and 67    | `http://IP_PHONE_SYSTEM/provisioning/{mac}.xml`  |
| Gigaset      | DHCP[^f1]     | RPS             | 114          | `http://IP_PHONE_SYSTEM/provisioning/%MACD.xml`  |

[^f1]: For Gigaset phones, make sure that the network DHCP server does not provide OPTION 66.



## Provisioning Parameters Guide

The functions of phones that can be configured through provisioning are grouped in the panels of the NethVoice administration interface and are described in the sections below.

Not all phone models offer the same functions, so some parameters or entire panels might not be displayed.

Generally, leaving a field empty or selecting the option - (minus sign) indicates that the value inherited from the context with lower priority is used; the highest priority is given to the phone settings, followed in descending order by model and default settings.
Refer to `Phone Configuration Priority <provisioning-scopes-priority>` for more information.



### Soft key

The `soft keys` are programmable phone keys designated for calling phone functions.

If the phone provides more keys than those displayed in the NethVoice administration interface, a `View more` button is available to add additional keys.

Depending on the `Type`, the `Value` and `Label` fields may also need to be completed, as indicated in the table below.

In the Label column, the term default signifies that if the Label field is left empty, the phone will assign a default `label` to the soft key.

| Type        | Description                                                                                                    | Value                        | Label        |
|-------------|----------------------------------------------------------------------------------------------------------------|------------------------------|--------------|
| Forward     | Enable/disable the forward state (unconditional forwarding). If enabled, all incoming calls are forwarded to the specified number | Phone number or extension    | Yes (default)|
| DND         | Enable/disable the do not disturb state. If enabled, all incoming calls are rejected                           | No                           | No           |
| Recall      | Call back the last dialed number                                                                               | No                           | Yes (default)|
| Pick up     | Answer an ongoing call to the specified extension                                                              | Phone number                 | Yes          |
| Speed dial  | Call the given number by pressing the key                                                                      | Phone number                 | Yes          |
| Group pickup| Answer an ongoing call to the configured pickup group                                                          | No (The group is configured.)| No           |
| History     | Display the call history screen                                                                                | No                           | Yes (default)|
| Menu        | Show the phone configuration menu                                                                              | No                           | Yes (default)|
| Status      | Display phone status information (e.g., firmware version, registration status...)                              | No                           | Yes (default)|
| Prefix      | Add the specified digits to the dialed number                                                                  | The digits of the prefix     | Yes (default)|
| LDAP        | Display the LDAP address book configured on the phone                                                          | No                           | Yes (default)|



### Line key

The `line keys` are programmable phone keys that resemble soft keys but are more specifically designed for call management and monitoring the status of extensions.

If the phone provides more keys than those displayed in the NethVoice administration interface, there is a `View more` button to add additional keys.

Depending on the `Type`, the fields `Value` and `Label` might need to be filled in, as outlined in the table below.

In the Label column, the term "default" signifies that if the Label field is left blank, the phone will assign a default `label` to the line key.

```{eval-rst}
.. list-table:: Line key configuration
   :widths: 5 20 10 10
   :header-rows: 1

   * - Type
     - Description
     - Value
     - Label

   * - Conference
     - Active calls are merged into a conference where each participant can listen and speak with others simultaneously
     - No
     - Yes (default)

   * - Forward
     - Enable/disable the forward state (unconditional forwarding). If enabled, all incoming calls are forwarded to the specified number
     - Phone number or extension
     - Yes (default)

   * - Call transfer
     - Transfers the current call to the selected number or another dialed number at the moment
     - Phone number or extension
     - Yes

   * - Hold
     - Places the current call on hold
     - No
     - Yes (default)

   * - DND
     - Enables/disables the Do Not Disturb (DND) status. If enabled, all incoming calls are rejected
     - No
     - No

   * - Recall
     - Dials the last dialed number again
     - No
     - Yes (default)

   * - Pick up
     - Answers an incoming call on the specified extension
     - Phone number
     - Yes

   * - DTMF
     - Executes a sequence of Dual-Tone Multi-Frequency (DTMF) tones during a call
     - Sequence of symbols or numbers.
     - Yes

   * - Login/logout dynamic agent
     - Login/login the call queue
     - No
     - Yes

   * - Voicemail
     - Check voicemail
     - No
     - Yes (default)

   * - Speed dial
     - Call the given number by pressing the key
     - Phone number
     - Yes

   * - Line
     - Select another line
     - No
     - Yes (default)

   * - BLF
     - Monitors the status of the selected extension and, depending on its status, performs either a pick up or speed dial when pressed
     - Phone number
     - Yes

   * - URL
     - Performs an HTTP GET request to the specified web address
     - Web address (URL)
     - Yes

   * - Group pickup
     - Answer a call in progress for the configured pickup group
     - No (the group is configured)
     - No

   * - Multicast paging
     - Send audio directly to the configured extension for multicast paging
     - Phone number
     - Yes (default)

   * - Record
     - Start audio recording of the active call
     - No
     - Yes (default)

   * - Prefix
     - Add the specified digits to the dialed number
     - The prefix digits
     - Yes (default)

   * - Phone lock
     - Activate the phone lock" enables the lock feature on the phone,
       restricting access to the keys and interface. The unlock sequence needs to be configured according to the phone's documentation
     - No
     - Yes (default)

   * - LDAP
     - Show configured LDAP address book on the phone
     - No
     - Yes (default)
```



### Exp key

The *Expansion Keys* are programmable buttons on *expansion modules*, devices that can be connected to the phone to increase the number of available keys.

If the expansion module provides more keys than are displayed in the NethVoice administration interface, a `View more` button is available to add additional keys.

This type of key is configured similarly to the Line key.

This type of key is configured similarly to the `Line key <panel-linekeys>`.



### Screen and Ringtone

- `Ringtone Selection`: Each phone has some predefined ringtones that can be selected based on their progressive number. Where supported, a custom ringtone can also be chosen, which should then be uploaded into the field described below.
- `Custom Ringtone Management`: Select an audio file for the custom ringtone that has been previously uploaded, or upload a new one by opening the dedicated management module. The audio format must be compatible with the specifications of the phone manufacturer.
- `Background Image" "Screensaver Image`: Select an image file for the phone screen background and screensaver, or upload a new one by opening the dedicated management panel. The image format must be compatible with the specifications of the phone manufacturer.
- `Screensaver Activation`: Time interval after which the screensaver is activated.
- `Backlight Off`: Time interval after which the screen lowers brightness or turns off the screen backlight.
- `Screen Brightness` "Screen Contrast": Select the brightness and contrast levels of the screen.



### Preferences

- `NTP Server Address`: The hostname or IP address of the Network Time Protocol (NTP) server to automatically set the phone's time.

- "Provisioning Schedule\`\`: By selecting Only at startup, phones renew their configuration after turning on or restarting. Alternatively, by selecting Every day, phones autonomously renew their configuration at a random time during the night.

- `Transfer Mode for Line Keys`: Specifies how line keys transfer the ongoing call to another extension.

  - **New Call** initiates a new call to the extension configured on the line key, placing the current call on hold.
  - **Consultative** always places the current call on hold, and the transfer completion can occur while the extension configured on the line key is ringing or even after the answer.
  - **Blind/No Confirmation** immediately transfers the current call to the configured extension.

- `Phone Language`: Language used by the phone's screen and its web interface.

- `Timezone`: Sets the phone's timezone, necessary for daylight saving time adjustments.

- `Ring Tones`: These are specific to each country and indicate the call status through an audible signal: free tone, busy tone, hang-up tone, etc.

- `Time Format` "Date Format": Choice of the time/date format displayed on the phone's screen.

- `Firmware`: Upload and selection of a new firmware version for the phone.

### LDAP Phonebook

The first two options in the `Address Book Type` do not allow further modifications. Phones will use the fixed and unmodifiable centralized phonebook of NethVoice. However, by selecting "Custom phonebook," you can modify the remaining fields in this panel to connect phones to a third-party LDAP server.

- `Server Address`: Hostname or IP address of the LDAP server.
- `Port Number`: TCP port used by the LDAP server.
- `Username" "Password`: Authentication credentials for the LDAP service. The username might be specified as a Distinguished Name (DN) LDAP or in another format, depending on the requirements of the LDAP server.
- `Encryption`: Protects the connection with TLS or STARTTLS. Caution! Some phones do not support encryption, and it is necessary to select None.
- `Search Base (DN)`: Limits access to the branch of the LDAP database specified as the base. Usually, the search base is mandatory.
- `Search Filter for Contact Name` `Search Filter for Phone Number`: LDAP search filters need to be specified with the syntax defined by RFC-4515 and later. The character % (percentage sign) can be used as a placeholder that the phone replaces with the dialed number.
- `Attributes for Contact Name`: Separated by space, list the names of LDAP attributes that can contain the contact's name.
- `Name Display Format`: Attributes' names preceded by the character % (percentage sign) can be composed to form the pattern with which the name is displayed on the phone screen.
- `Attribute for Main Phone Number` `Attribute for Mobile Number` `Attribute for Other Phone Number`: These three fields contain names of LDAP attributes for the respective phone numbers.

### Network

Phones use the DHCP protocol to receive network configuration: IP, subnet mask, DNS, and gateway. In some cases, DHCP is also used to obtain the provisioning URL (refer to "Provisioning methods").

However, the following parameters can be configured in this panel:

- `VLAN Identifier (VID)`: By specifying a number between 1 and 4094, the phone will add VLAN tagging to the packets generated by the phone itself, according to the IEEE 802.1Q standard.
- `VLAN Identifier for PC port`: By specifying a number between 1 and 4094, the phone will add VLAN tagging to packets coming from the PC port (or data port), following the IEEE 802.1Q standard.

In the VLAN fields, the value "" (empty string) usually considers the setting at a lower priority (model or default), while "0" (zero) corresponds to "disabled".

:::warning
Entering an incorrect VLAN identifier can render the phone unreachable.
:::





