---
title: Gateway provisioning
sidebar_position: 4
---

# Gateway provisioning

## Supported Gateways

See [supported gateways](supported_gateways) for a list of supported gateways and their firmware versions.

## Provisioning

Gateway configuration is performed using the Wizard.

Provisioning follows the same general rules as phone provisioning, with one important difference: NethVoice uploads the configuration to the gateway over a direct telnet connection, so the gateway does not need to fetch its configuration.

Gateways must be online to receive an automatic upload; by default they boot in `DHCP` mode. However, you can also prepare a configuration file in advance for a gateway that is not yet connected by using **Add Gateway**. The generated file can then be uploaded manually via the gateway’s web interface when the device is available.

### Configuring Gateways

To configure the gateway, it is necessary to specify a few required configuration parameters:

1. **Device IP**: Enter the IP address to assign to the gateway, ensuring it is within the same subnet as the NethVoice system, e.g., `192.168.1.100`
2. **MAC address**: Enter the MAC address of the gateway device, typically found on a label on the device itself, e.g., `00:11:22:AA:BB:CC`
3. **Network mask**: Specify the subnet mask for the gateway, usually something like `255.255.255.0`
4. **Network gateway**: Enter the IP address of the gateway, typically the router's IP address on the local network. E.g., `192.168.1.1`
5. **PBX IP**: Enter the FQDN (recommended) or IP address of the NethVoice system to which the gateway will connect.
6. Enter any characteristics required for configuring connected lines (for ISDN lines, the ISDN terminal adapter's mode; for analog lines, the dialed number of the line).
   
   These settings based on the model:

    - `ISDN` (Specify if the line is Point-to-Point or Point-to-Multipoint)
    - `PRI`
    - `FXS` (Specify for each port the extension to be assigned by choosing a user previously configured)
    - `FXO` (Specify the number directly in the text field)


:::note
For Grandstream models with 2 network interfaces, the LAN interface's MAC address must be provided, but NethVoice's configuration utilizes the WAN interface, which will be the one used.
:::

To download the gateway configuration for uploading via the web interface, click on the management button (symbol with three squares).

