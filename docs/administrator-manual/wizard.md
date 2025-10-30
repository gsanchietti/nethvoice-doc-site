---
title: First configuration
sidebar_position: 3
---

# First configuration

# First configuration

The initial configuration wizard facilitates easy installation and setup of all NethVoice components.

## Extensions

The first step in configuring NethVoice involves associating users with their telephone extensions.

You can manage users (create, update, reset passwords, delete) by accessing the dedicated section through the button `Link to the Portal <user-management-portal-section>`.

Enter the corresponding extensions for each user:

- Input the extension number (recommended starting from 200) in the text field.
- Click on Insert.
- The user is highlighted, and a green checkmark appears if everything has been successful.

## Trunks

In the trunks section, you can configure gateways to manage physical lines or create VoIP trunks by specifying the credentials of SIP lines provided by the provider.

Trunks, used to connect gateways or VoIP lines, are created using the PJSIP library.



### Physical lines

This section allows you to configure a SIP gateway among those supported.
You need to enter:

- `Vendor`: Gateway manufacturer
- `Model`: Specify the gateway model
- `IP`: IP to be assigned to the device
- `Mac Address`: Gateway identifier
- `Network Mask`: Network subnet
- `Network Gateway`: Network gateway
- `PBX IP`: NethVoice IP

Dynamic settings based on the model:

- `ISDN` (Specify if the line is Point-to-Point or Point-to-Multipoint)
- `PRI`
- `FXS` (Specify for each port the extension to be assigned by choosing a user previously configured)
- `FXO` (Specify the number directly in the text field)

Once the settings are saved, you can download the configuration file to upload to the device through its interface.

### VoIP

You can create VoIP trunks by selecting one of the supported providers and entering the necessary information.

- `Provider`: Choose the provider to use.
- `Trunk Name`: Specify the name of the trunk.
- `Username`: Username given by the provider.
- `Password`: Password given by the provider.
- `Phone Number`: Phone number given by the provider.
- `Allowed codec`: Permitted codec.
- `Force codec`: Allow only the permitted codec.

Press `Save` to create the configuration for that VoIP trunk.

## Routes

In the Routes section, you can configure both inbound and outbound routes for your NethVoice system.

### Inbound

In this section, the list of already configured inbound routes is displayed, with options to edit or delete them.

By clicking on the `Create new route`, a new tab will open with the `Visual Plan` application, allowing you to create, modify, and connect components of NethVoice that will handle the call flow for the incoming number.

By clicking the checkmark symbol in the Visual Plan application, the configuration of your route will be saved.
From that moment on, you can receive calls following the configured flow.

### Outbound

In this section, you will find the list of outbound routes.
The first time you visit this page, the wizard proposes default outbound routes with specific call patterns for different languages.

You can also specify the order in which the previously created trunks will be used, thus having the option to customize the priority of various trunks.

By pressing `Save`, the configuration is written to NethVoice, and from that moment on, you can make calls to external numbers (having properly configured the trunks in the previous steps).



## Devices

During the initial configuration wizard, in this section there are some fundamental settings (press the `Modify default settings button`).

The settings are:

- `Admin Password` will be the password to access the web interface of phones configured with the administrator user.
- `User Password` will be the password to access the web interface of phones configured with a non-administrative user.

The NethVoice address to be provided to the phones via configuration is obtained from the application settings.

The use of encryption in SIP connections for devices is enabled by default.

In any case, it is possible to choose on each individual phone whether encryption is used or not. In this regard, refer to `wizard-configurations`.

Other settings can be changed in `Preferences <panel-preferences>` section:

- `Phone languages`
- `Provisioning scheduling`
- `Tone zone`

Once the settings are saved, they can be modified again from the `Devices > Models page`, `Default Settings`.

### Phones

The page `Devices > Phones` allows the identification of phones by NethVoice by entering the MAC address.
You can enter the MAC address using the following methods:

- `Paste from file` of multiple MAC addresses. Syntax separated by a hyphen - (e.g., AA-BB-CC-11-22-33), colons : (e.g., AA:BB:CC:11:22:33), or without a separator (e.g., AABBCC112233) are accepted. Letters can be either uppercase or lowercase.
- `Manual addition` of one MAC address at a time. Useful if you have a bar code reader.

In any case, after entering the MAC address, you can select the phone model. Selecting the exact model is required for the correct configuration of the phone.

:::warning
If the model is not selected or the wrong model is chosen, some phone functions, such as provisioning via RPS or line keys, may not be available.
:::



### Models

The page `Devices > Models` lists the basic models of the phones selected in `Devices > Phones` plus any custom models.

You can create a custom model based on an existing one through the `Create new model`.

On this page, some parameters inherited from all models can also be modified using the `Default Settings`. These parameters include `Encryption` and `PBX Address`, already set during the initial configuration process as explained in `wizard-devices`.

Depending on the features specific to the model, panels and options described in `wizard-provisioning-section` may be available.



## Configurations

### Groups

You can create user groups that will be visible and usable in applications such as NethVoice CTI.

Click `Create new group`, specify a name, and `save`.
The group will appear in the list.

### Profiles

NethVoice allows you to select the features each user can access, which are grouped into profiles.

By default, three profiles are created, each containing different levels of functionality:

- `Basic`: Minimum functionality for the user.
- `Standard`: Classic management functionalities for the user.
- `Advanced`: Almost all functionalities are allowed, suitable for advanced users.

You can also create new profiles by duplicating an existing one or by creating new ones and specifying the various functionalities.

:::note
Remember to enable access to the user groups previously created on the profiles where necessary.
:::

### Permissions

#### Settings

General permission enables or disables access to all the functionalities of the section and general notification settings.
Available permissions are:

- `DND`: Enables the configuration of Do Not Disturb.
- `Call Forwarding`: Enables the configuration of call forwarding.
- `Recording`: Enables the recording of own conversations. It is also possible to view, listen to, and delete own recordings.
- `Parkings`: Enables the display of the status of parking spaces and the ability to pick up parked calls.
- `Listening`: Enables listening to calls of other users.
- `Intrusion`: Enables intrusion into another user's call (listening to both the caller and called, conversation only with the user).
- `Pickup`: Enables call pickup for calls to other users.
- `Privacy`: Enables the masking of the last three digits (modifiable from the command line) of the called and/or calling number of other users in NethVoice CTI.
- `Physical Phone Buttons`: Enables the configuration of physical phone buttons by the user in NethVoice CTI.
  These correspond to the Line Keys shown on the `wizard-devices` pages.

#### Outbound Routes

All configured outbound routes in NethVoice are displayed, and you can enable/disable their usage individually.

#### NethVoice CTI

- `NethVoice CTI`: Enables all the underlying permissions by activating the following functionalities on NethVoice CTI.

#### Address Book

- `Address Book`: The general permission enables the viewing of the address book in NethVoice CTI and the ability to add, modify, and delete own contacts.
- `Advanced Address Book`: Enables the ability to modify/delete non-owned contacts in the address book in NethVoice CTI.

#### CDR

- `CDR`: The general permission enables the viewing of the call history related to the user.
- `PBX CDR`: Enables the viewing of the call history for the entire PBX.
- `Group CDR`: Enables the viewing of call history for calls within one's assigned group.

#### Customer Cards

- `Customer Cards`: The general permission enables the ability to view the customer card on NethVoice CTI.
- For each section of the customer card, you can enable/disable visibility.

#### Presence Panel

- The general permission enables the display of the operator's panel in NethVoice CTI.
- `Advanced Recording`: Enables recording of calls from other users.
- `Call Transfer`: Enables call transfer for calls from other users.
- `Advanced Parking`: Enables the ability to park calls from other users and retrieve them.
- `Hang Up`: Enables the ability to hang up calls from other users.
- `Advanced Phone`: Enables phone functionalities (hang up, call, answer) on conversations that do not belong to the user.
- For each configured user group in NethVoice, you can enable/disable visibility.

#### Queue Agent Panel

- The general permission enables the Queue section in NethVoice CTI with information about the assigned queues, the ability to log in/out, and enter/exit break.
- `Advanced Queue Agent Panel`: Enables advanced information about the status of queues and agents.
- `Unhanded Calls`: Enables access to the unhanded calls section.

#### Phone Lines

- The general permission enables access to the after-hours section of NethVoice CTI, allowing the user to change the path of their incoming calls.
- `Advanced After Hours`: Allows modifying the call path for incoming calls for the user and generic incoming routes.
- `Complete After Hours`: Allows modification of all call paths for incoming calls.

#### Queue Manager

- The general permission enables access to the QManager section in NethVoice CTI.
- For each configured queue in NethVoice, you can enable/disable the visibility of the status and data.

#### Operator Station

- The general permission grants access to the operator station section in NethVoice CTI.
- Only one configured queue in NethVoice needs to be enabled to serve as the source of calls to manage.

## Users

The `Users` page establishes, for each individual user, personal settings and associated devices.

The settings that can be modified are:
\* `Profile`: Determines the permissions the user has.
\* `Group`: Allows grouping of users to facilitate the distribution of configurations.
\* `Mobile`: Enables associating a mobile number with the user to display it in the operator panel of NethVoice CTI and use it in presence management.
\* `Voicemail Box`: Enables activating the voicemail box for the user as a destination for any failed calls.
\* `Associate Device`: Allows selecting an unassociated phone and assigning it to the user from those managed with provisioning. It is possible to create credentials for use on a device not supported by provisioning. In this case, a custom device must be used.

Then, the devices associated with the user are displayed.
Devices can be of two types: software (Web Phone and Mobile App) or physical, tied to a phone configured with provisioning or a custom device.

You can associate up to 9 devices with each user:

- `Web Phone` activates the telephony client of NethVoice CTI to manage calls directly without the need for physical phones.
- `Mobile App` enables the configuration of a device on the smartphone.
- `Phone Link` enables the configuration of a device on the personal computer.

For each physical device, the following is displayed:

Encryption: Indicates whether encryption is enabled.
The initial setting depends on the NethVoice configuration made during the initial configuration process (see `wizard-devices`). If the PBX is accessed via a public network (WAN), activating encryption is required.

:::warning
If `Encryption` is enabled, ensure that the SSL/TLS certificate of the system is valid and contains the name of the PBX; otherwise, phones cannot establish a TLS connection.
:::

- "Configuration Model": You can change the configuration model among those offered.
- "Edit Configuration": You can modify the configuration of the individual phone by entering changes valid only for this device. The individual phone defaults to the configuration of the model and default settings. Refer to `wizard-model` for more details.
- "Mac-Address": Displays the MAC address of the associated device.
- "Show Password" for custom devices. The SIP password is shown, which, along with the internal and PBX address, can be used to manually configure the custom device.
- "Restart": If the device is registered, you can restart it.
- "Disassociate": You can disassociate the device from the user.


