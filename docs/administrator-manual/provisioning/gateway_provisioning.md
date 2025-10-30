---
title: Gateway provisioning
sidebar_position: 4
---

# Gateway provisioning

## Supported Gateways

See [supported gateways](supported_gateways) for a list of supported gateways and their firmware versions.

## Provisioning

Gateway configuration is carried out in the Wizard.

Gateway provisioning adheres to the same guidelines as provisioning for phones, with one key distinction: unlike phones, NethVoice establishes a direct connection to the gateway via telnet to upload the configuration, eliminating the need for the gateway to fetch it.

Gateway configuration is performed with the gateway online; by default, gateways initiate in DHCP mode.

However, by selecting `Add Gateway`, it is feasible to generate a configuration for a gateway not yet connected and subsequently configure it by uploading the file through the gateway's web interface.

### Configuring Gateways

To configure the gateway, it is necessary to specify a few required configuration parameters:

1. Device IP address; gateway configuration necessitates a static IP.
2. Subnet mask.
3. Network gateway.
4. NethVoice IP address; in some installation scenarios, the gateway may connect to NethVoice via a non-local IP.
5. Any characteristics required for configuring connected lines (for ISDN lines, the ISDN terminal adapter's mode; for analog lines, the dialed number of the line).

:::note
For Grandstream models with 2 network interfaces, the LAN interface's MAC address must be provided, but NethVoice's configuration utilizes the WAN interface, which will be the one used.
:::

To download the gateway configuration for uploading via the web interface, click on the management button (symbol with three squares).

