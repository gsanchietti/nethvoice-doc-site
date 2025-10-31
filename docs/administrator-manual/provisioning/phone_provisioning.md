---
title: Phone provisioning
sidebar_position: 2
---

# Phone provisioning

Provisioning involves configuring phones in automatic mode, minimizing the necessary operations.

Actions to be performed in NethVoice:

1. Identification of phones.
2. Assignment of phones to users.

## Supported phones

See [supported phones](supported_phones) for a list of supported phones and their firmware versions.


## Identification of Phones

The MAC address is fundamental for the **Provisioning** of NethVoice as it uniquely identifies the phone.

Entering the MAC address of the phones does not require connecting the phone to the network. Indeed, it is possible to enter the MAC addresses of phones that are still packaged.

Regardless, you can enter the MAC addresses of the phones by typing or copying the MAC address from a spreadsheet, invoice, or other document.

## Associating Phones with Users

The configuration of a phone is complete when it is associated with a user.

Up to eight telephone devices can be associated with each user.

NethVoice assigns a progressive number to each device associated with the user using the following criteria:

- `Main Extension` - main phone, for example, `201`

- `91+Main Extension` - phone 2, for example, `91201`

- `92+Main Extension` - phone 3, for example, `92201`

- ...

However, from the user perspective, the Main Extension is the only important number to remember.

## Actions to Be Performed on the Phones

:::note
Let's consider the **first boot** for phones that are new, just taken out of the box, or those that have undergone a factory reset and have never been started up.
:::

Phones at **first boot** are already able to reach NethVoice to retrieve their configuration using supported methods.

The only action required in these cases is to connect the Ethernet cable with PoE (Power over Ethernet) to the phone. If PoE is not available, it will also be necessary to connect the phone's power cable.

:::warning
Verify the compatibility of the phones with supported provisioning methods. Please read the following sections carefully.
:::

If a phone is already in use, it is possible to prepare it for association with NethVoice through **firmware upgrade** and **factory reset** procedures. Both procedures are accessible via the phone's web administration interface.


## Provisioning Methods

Phones can access their configuration via standard web protocols, HTTP or HTTPS (TCP port 80 or 443).

When the MAC address of the phone is entered into NethVoice, a provisioning URL (address) is generated.

For example:

```
https://NethVoiceBaseHost/provisioning/1234567890.1234/{mac}.cfg
```

This URL contains a secret (`1234567890.1234` in the example) that authenticates and identifies the device that will use it.

To obtain the provisioning URL, the phone, at its first boot, can use two methods: **RPS** and **DHCP**.

The **RPS** (Redirect & Provisioning Service) method involves entering the provisioning URL on the manufacturer's website for the phone. NethVoice is capable of performing this insertion automatically. As soon as the phone is powered on for the first time, it attempts to contact the manufacturer's website to obtain the provisioning URL.

The **DHCP** method is based on configuring OPTION 66 of the DHCP (Dynamic Host Configuration Protocol) protocol specifically for each brand of phone. It is necessary to configure the network's DHCP server appropriately.

If neither RPS nor DHCP works, it is possible to access the web interface of the phone's administration and manually enter the provisioning URL. Remember to disable other provisioning methods, such as DHCP and PNP.

The provisioning URL is displayed in the administration interface of NethVoice for each phone, via the `Info` button on the page `Devices > Phones`.

In any case, once the provisioning URL is obtained, the phone always uses this to access its configuration on NethVoice.

:::warning
Refer to section `provisioning-support-section` for further information on manufacturer support for RPS and DHCP.
:::

## Phone Configuration Specifications

If you want to modify or customize the settings of phones configured via provisioning, access the web administration interface of NethVoice, modifying the settings at the *Default*, *Model*, or *individual phone* level.

### Phone Configuration Priority

Phone configuration follows a hierarchical structure where settings can be defined at three levels:

1. **Phone Level** (Highest Priority) - Individual phone settings
2. **Model Level** (Medium Priority) - Settings applied to all phones of a specific model
3. **Default Level** (Lowest Priority) - Global default settings for all phones

When a parameter is left empty or set to `-` (minus sign) at a higher priority level, the phone will inherit the value from the next lower priority level. This hierarchy allows you to set broad defaults and then customize specific models or individual phones as needed.

The editable parameters include:

- Language
- Time zone
- Date/time format
- Tones
- Admin user password
- Call waiting
- Ringtone
- Transfer mode
- LDAP directory
- VLAN
- Soft keys
- Line keys
- Expansion keys
- Screen Saver and Background

Refer to `wizard-section` for more information.

:::warning
Do not change settings from the phone's administration interface.
:::

Upon restart, the phone retrieves the configurations from the provisioning URL.

Any changes made from the phone's administration interface will be lost.

The following sections describe some settings provided by NethVoice.

Provisioned phones will automatically update their configuration even upon a change of state (Available, Do Not Disturb, etc.) in NethVoice CTI of the connected user to maintain uniformity of state across all devices.

This configuration update does not cause any disruption or restart of the phone.

## Admin Password

The phone web administration interface is accessible with the username `admin` and a password generated randomly during the installation of NethVoice.

The password is available in the NethVoice administration interface, on the `Models > Default Settings` page.



## Automatic Updates

The phone automatically contacts NethVoice every night to update its configuration. It is possible to completely disable automatic updates.

In any case, the phone downloads the configuration every time it is restarted.



## Firmware upgrade

The phone manufacturer periodically publishes firmware updates for the various models of their phones on their website.

It is possible to distribute the updated firmware to all phones of the same model or to a single phone.
The firmware file obtained from the manufacturer's website must be uploaded through the administration interface of NethVoice, respectively in `Models > Preferences > Firmware` or in `Configuration > Associated Devices > Edit > Preferences`.

The filename can contain only letters, numbers, and the symbols `._-()`.

The phones receive the update according to the times indicated in `provisioning-automatic-updates`.

:::tip
When the phones have received the update, deselect the firmware file in the NethVoice interface to reduce network traffic.
:::

List of web pages for firmware download:

- [Yealink](http://support.yealink.com/documentFront/forwardToDocumentFrontDisplayPage)
- [Snom](https://service.snom.com/display/wiki/Firmware+Update+Center)
- [Fanvil](https://fanvil.com/Support/download.html)
- [Gigaset](https://teamwork.gigaset.com/gigawiki/pages/viewpage.action?pageId=37486876)

