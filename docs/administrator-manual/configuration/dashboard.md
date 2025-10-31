---
title: Dashboard
sidebar_position: 11
---

# Dashboard

The Dashboard serves as the initial page of NethVoice following the first configuration. It offers a comprehensive overview of the elements involved in NethVoice's operation, providing administrators with real-time insights into system status and user activity.

## Users

The Users section of the Dashboard showcases all users configured in NethVoice along with their presence status and associated telephone devices.

### Presence Status

Each user's current presence status is displayed, which can include:

- **Available**: User is ready to receive calls
- **Do Not Disturb (DND)**: User has enabled DND and will not receive calls
- **Away**: User is temporarily unavailable
- **Offline**: User is not registered or connected

### Resetting Presence Status

If a user's presence configuration deviates from the expected state, you can reset it to the default "Available" state by clicking the eraser/reset symbol next to their name. This is useful when presence status becomes stuck due to technical issues or unexpected disconnections.

### Device Details

Clicking to view details about an individual device displays the following telephone device information:

| Property | Description |
|----------|-------------|
| **Name** | The device identifier or nickname |
| **Model** | The phone model or device type |
| **IP Address** | The device's current IP address; clicking facilitates direct connection over the local network |
| **SIP Port** | The port on which the device is registered via SIP |
| **Codecs Used** | The audio codecs currently in use by the device |
| **DND (Do Not Disturb)** | Current DND status of the device |
| **Call Forward** | Any active call forwarding configuration for the device |

This detailed view helps administrators troubleshoot device connectivity issues and monitor device-specific configurations.

## Trunks

The Trunks section displays all configured VoIP trunks in NethVoice along with their operational status. Each trunk entry shows:

| Property | Description |
|----------|-------------|
| **Name** | The trunk identifier or name |
| **Technology** | The protocol used (e.g., SIP, PRI, ISDN) |
| **IP Address** | The IP address of the trunk endpoint |
| **Port** | The port number used for the trunk connection |
| **Status** | Current operational status (e.g., Online, Offline, Error) |
| **Codec** | The audio codec(s) supported by this trunk |

### Monitoring Trunk Health

Regularly monitoring trunk status from the Dashboard helps ensure:

- External call connectivity
- Early detection of connection issues
- Quality of service (QoS) verification
- Load balancing across multiple trunks

:::tip
If a trunk shows as offline or with errors, check the trunk configuration in the Wizard and verify that the provider credentials and connection parameters are correct.
:::

## Real-time System Overview

The Dashboard provides a quick visual representation of:

- System health and availability
- Active users and their status
- Connected devices and registration status
- Trunk availability and performance
- Overall PBX operational status

This makes the Dashboard an essential tool for daily administration and monitoring of your NethVoice system.

:::note
The Dashboard is automatically refreshed periodically. The refresh rate can typically be configured in the Preferences section if needed.
:::
