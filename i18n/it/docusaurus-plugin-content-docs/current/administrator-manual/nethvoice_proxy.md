---
title: Proxy VoIP
sidebar_position: 6
---

# VoIP Proxy

NethVoice Proxy module is split into two main parts:

- [Kamalio](https://www.kamailio.org): [SIP](https://en.wikipedia.org/wiki/Session_Initiation_Protocol) proxy server for managing SIP connections
- [RTP Engine](https://github.com/sipwise/rtpengine/): [RTP](https://en.wikipedia.org/wiki/Real-time_Transport_Protocol) proxy for managing RTP connections

NethVoice Proxy allows you to manage all incoming and outgoing SIP and RTP connections.

The proxy will be used by `NethVoice <nethvoice-section>` instances that must be installed after this proxy is up and running.

## Installation

:::note
You can install only one NethVoice Proxy per node from the `software_center-section`.
:::

TODO

## Configuration

NethVoice Proxy needs a virtual host, an FQDN like `proxy.nethserver.org`, this virtual host may be dedicated or shared with the one used in a `NethVoice <nethvoice-section>` application.

Before proceeding with the configuration, make sure to create the corresponding name record inside your DNS server.

If you are planning to use a Let's Encrypt certificate as default, make also sure to have the corresponding public DNS record.

How to configure:

1. access the application configuration page and enter a valid FQDN inside `Proxy Domain` field
2. insert the network's interface of the node choosing it from the drop-down menu
3. insert Public IPv4/IPv6 address that will receive VoIP traffic (necessary only if there is no public IP on the network interface)

:::warning
If the machine is not accessible from the internet and its fully qualified domain name (FQDN) cannot be reached externally, and it is used only within a local network, the IP address field should contain the machine's private IP address.
:::

Now, you can install and configure one ore more `NethVoice <nethvoice-section>` instances.
