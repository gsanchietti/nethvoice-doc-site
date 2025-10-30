---
title: Parametri di provisioning
sidebar_position: 6
---

# Provisioning Parameters Guide

The functions of phones that can be configured through provisioning are grouped in various panels within the NethVoice administration interface. This guide describes the configurable provisioning parameters organized by functional category.

## Overview

Not all phone models offer the same functions, so some parameters or entire panels might not be displayed for all devices.

**Parameter Priority:** Generally, leaving a field empty or selecting the option `-` (minus sign) indicates that the value inherited from a context with lower priority is used. The highest priority is given to phone settings, followed in descending order by model settings and default settings.

Refer to [Phone Configuration Priority](./phone_provisioning.md#phone-configuration-priority) for more information about the configuration hierarchy.

## Soft Keys

The **soft keys** are programmable phone keys designated for calling phone functions.

If the phone provides more keys than those displayed in the NethVoice administration interface, a **View more** button is available to add additional keys.

Depending on the **Type**, the **Value** and **Label** fields may also need to be completed as indicated in the table below.

:::info
In the Label column, the term "default" signifies that if the Label field is left empty, the phone will assign a default label to the soft key.
:::

| Type | Description | Value | Label |
|------|-------------|-------|-------|
| Forward | Enable/disable the forward state (unconditional forwarding). If enabled, all incoming calls are forwarded to the specified number | Phone number or extension | Yes (default) |
| DND | Enable/disable the do not disturb state. If enabled, all incoming calls are rejected | No | No |
| Recall | Call back the last dialed number | No | Yes (default) |
| Pick up | Answer an ongoing call to the specified extension | Phone number | Yes |
| Speed dial | Call the given number by pressing the key | Phone number | Yes |
| Group pickup | Answer an ongoing call to the configured pickup group | No (The group is configured.) | No |
| History | Display the call history screen | No | Yes (default) |
| Menu | Show the phone configuration menu | No | Yes (default) |
| Status | Display phone status information (e.g., firmware version, registration status) | No | Yes (default) |
| Prefix | Add the specified digits to the dialed number | The digits of the prefix | Yes (default) |
| LDAP | Display the LDAP address book configured on the phone | No | Yes (default) |

## Line Keys

The **line keys** are programmable phone keys that resemble soft keys but are more specifically designed for call management and monitoring the status of extensions.

If the phone provides more keys than those displayed in the NethVoice administration interface, there is a **View more** button to add additional keys.

Depending on the **Type**, the fields **Value** and **Label** might need to be filled in as outlined in the table below.

:::info
In the Label column, the term "default" signifies that if the Label field is left blank, the phone will assign a default label to the line key.
:::

| Type | Description | Value | Label |
|------|-------------|-------|-------|
| Conference | Active calls are merged into a conference where each participant can listen and speak with others simultaneously | No | Yes (default) |
| Forward | Enable/disable the forward state (unconditional forwarding). If enabled, all incoming calls are forwarded to the specified number | Phone number or extension | Yes (default) |
| Call transfer | Transfers the current call to the selected number or another dialed number at the moment | Phone number or extension | Yes |
| Hold | Places the current call on hold | No | Yes (default) |
| DND | Enables/disables the Do Not Disturb (DND) status. If enabled, all incoming calls are rejected | No | No |
| Recall | Dials the last dialed number again | No | Yes (default) |
| Pick up | Answers an incoming call on the specified extension | Phone number | Yes |
| DTMF | Executes a sequence of Dual-Tone Multi-Frequency (DTMF) tones during a call | Sequence of symbols or numbers | Yes |
| Login/logout dynamic agent | Login/logout the call queue | No | Yes |
| Voicemail | Check voicemail | No | Yes (default) |
| Speed dial | Call the given number by pressing the key | Phone number | Yes |
| Line | Select another line | No | Yes (default) |
| BLF | Monitors the status of the selected extension and, depending on its status, performs either a pick up or speed dial when pressed | Phone number | Yes |
| URL | Performs an HTTP GET request to the specified web address | Web address (URL) | Yes |
| Group pickup | Answer a call in progress for the configured pickup group | No (the group is configured) | No |
| Multicast paging | Send audio directly to the configured extension for multicast paging | Phone number | Yes (default) |
| Record | Start audio recording of the active call | No | Yes (default) |
| Prefix | Add the specified digits to the dialed number | The prefix digits | Yes (default) |
| Phone lock | Activate the phone lock feature, restricting access to the keys and interface. The unlock sequence needs to be configured according to the phone's documentation | No | Yes (default) |
| LDAP | Show configured LDAP address book on the phone | No | Yes (default) |

## Expansion Keys

The **Expansion Keys** are programmable buttons on expansion modules, devices that can be connected to the phone to increase the number of available keys.

If the expansion module provides more keys than are displayed in the NethVoice administration interface, a **View more** button is available to add additional keys.

Expansion keys are configured similarly to [Line Keys](#line-keys), so refer to that section for the available types and parameters.

## Screen and Ringtone

This section allows configuration of the phone's display and audio alert settings:

- **Ringtone Selection**: Each phone has some predefined ringtones that can be selected based on their progressive number. Where supported, a custom ringtone can also be chosen, which should then be uploaded into the field described below.

- **Custom Ringtone Management**: Select an audio file for the custom ringtone that has been previously uploaded, or upload a new one by opening the dedicated management module. The audio format must be compatible with the specifications of the phone manufacturer.

- **Background Image**: Select an image file for the phone screen background, or upload a new one by opening the dedicated management panel. The image format must be compatible with the phone manufacturer's specifications.

- **Screensaver Image**: Select an image file for the screensaver, or upload a new one through the management panel.

- **Screensaver Activation**: Time interval after which the screensaver is activated.

- **Backlight Off**: Time interval after which the screen lowers brightness or turns off the screen backlight.

- **Screen Brightness**: Select the brightness level of the screen.

- **Screen Contrast**: Select the contrast level of the screen.

## Preferences

This section contains important configuration parameters for phone operation:

### Time Settings

- **NTP Server Address**: The hostname or IP address of the Network Time Protocol (NTP) server to automatically set the phone's time.

- **Timezone**: Sets the phone's timezone, necessary for daylight saving time adjustments.

- **Time Format**: Choice of the time/date format displayed on the phone's screen.

- **Date Format**: Choice of the date format displayed on the phone's screen.

### Provisioning Schedule

- **Provisioning Schedule**: 
  - *Only at startup*: Phones renew their configuration after turning on or restarting
  - *Every day*: Phones autonomously renew their configuration at a random time during the night

### Call Transfer

- **Transfer Mode for Line Keys**: Specifies how line keys transfer the ongoing call to another extension:
  - **New Call**: Initiates a new call to the extension configured on the line key, placing the current call on hold
  - **Consultative**: Always places the current call on hold, and the transfer completion can occur while the extension is ringing or even after the answer
  - **Blind/No Confirmation**: Immediately transfers the current call to the configured extension

### Language and Localization

- **Phone Language**: Language used by the phone's screen and its web interface.

- **Ring Tones**: These are specific to each country and indicate call status through an audible signal (free tone, busy tone, hang-up tone, etc.).

### Firmware Management

- **Firmware**: Upload and selection of a new firmware version for the phone. Refer to [Phone Provisioning](./phone_provisioning.md#firmware-upgrade) for details on firmware updates.

## LDAP Phonebook

The LDAP Phonebook section allows integration with external directory services.

### Address Book Type

The first two options in the **Address Book Type** do not allow further modifications:
- Phones will use the fixed and unmodifiable centralized phonebook of NethVoice
- By selecting "Custom phonebook," you can modify the remaining fields to connect phones to a third-party LDAP server

### LDAP Configuration Parameters

- **Server Address**: Hostname or IP address of the LDAP server.

- **Port Number**: TCP port used by the LDAP server.

- **Username**: Authentication username for the LDAP service. May be specified as a Distinguished Name (DN) LDAP or in another format depending on the LDAP server's requirements.

- **Password**: Authentication password for the LDAP service.

- **Encryption**: Protects the connection with TLS or STARTTLS.
  :::warning
  Some phones do not support encryption. If connection fails, select "None".
  :::

- **Search Base (DN)**: Limits access to the branch of the LDAP database specified as the base. Usually, the search base is mandatory.

- **Search Filter for Contact Name**: LDAP search filter for retrieving contact names. Must follow RFC-4515 syntax. Use `%` as a placeholder for the search term.

- **Search Filter for Phone Number**: LDAP search filter for retrieving phone numbers. Must follow RFC-4515 syntax. Use `%` as a placeholder for the phone number.

- **Attributes for Contact Name**: Separated by space, list the names of LDAP attributes that can contain the contact's name.

- **Name Display Format**: Attributes' names preceded by `%` can be composed to form the pattern with which the name is displayed on the phone screen.

- **Attribute for Main Phone Number**: LDAP attribute containing the main phone number.

- **Attribute for Mobile Number**: LDAP attribute containing the mobile phone number.

- **Attribute for Other Phone Number**: LDAP attribute containing other phone numbers.

## Network

This section configures network-level parameters for the phone.

### DHCP Configuration

Phones use the DHCP protocol to receive network configuration: IP address, subnet mask, DNS, and gateway. In some cases, DHCP is also used to obtain the provisioning URL (refer to [Provisioning Methods](./phone_provisioning.md#provisioning-methods)).

### VLAN Configuration

The following parameters can be configured for VLAN support:

- **VLAN Identifier (VID)**: By specifying a number between 1 and 4094, the phone will add VLAN tagging to the packets generated by the phone itself, according to the IEEE 802.1Q standard.

- **VLAN Identifier for PC port**: By specifying a number between 1 and 4094, the phone will add VLAN tagging to packets coming from the PC port (or data port), following the IEEE 802.1Q standard.

:::warning
Entering an incorrect VLAN identifier can render the phone unreachable. Test VLAN configurations carefully.
:::

### VLAN Field Values

In the VLAN fields:
- Empty string `""` usually considers the setting at a lower priority (model or default)
- `"0"` (zero) corresponds to "disabled"

---

## Best Practices for Provisioning Parameters

1. **Test in Development**: Always test parameter configurations on a non-production phone before deploying to production devices.

2. **Use Hierarchy Effectively**: Leverage the configuration priority to set defaults and then customize individual phones as needed.

3. **Document Custom Configurations**: Document any custom soft keys, line keys, or LDAP configurations for future reference and troubleshooting.

4. **Validate Network Settings**: Ensure DHCP and VLAN settings are correct before provisioning to avoid connectivity issues.

5. **Monitor Provisioning**: Check provisioning logs to verify that phones are receiving and applying configurations correctly.
