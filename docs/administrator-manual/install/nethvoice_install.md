---
title: NethVoice Installation
sidebar_position: 4
---

# NethVoice Installation

## Overview

NethVoice is installed in two steps:

1. **NethVoice Proxy** (required first)
2. **NethVoice** module(s)

The NethVoice Proxy is a mandatory component that must be installed and configured **before** deploying NethVoice instances. This applies even if you are installing only a single NethVoice instance.

:::warning Installation Order
**NethVoice Proxy must be installed FIRST, before NethVoice.**

The proxy handles all external internet access and manages SIP/RTP traffic routing. It is required for:
- External access from the internet
- Traffic delegation to multiple NethVoice installations on the same node
- Managing SIP and RTP connections for all NethVoice instances
- SSL/TLS termination for internet-facing VoIP traffic

Even with a single NethVoice installation, the proxy is essential for proper network traffic management.
:::

## Installation Steps

### Step 1: Install NethVoice Proxy

1. **Access the Software Center** on your NethServer 8 system.
2. **Search for "NethVoice Proxy"** in the Software Center search bar.
3. **Click "Install"** next to NethVoice Proxy.
4. **Wait for installation** to complete (this may take a few minutes).
5. **Proceed to proxy configuration** before moving to the next step (see [NethVoice Proxy Configuration](#step-2-configure-nethvoice-proxy)).

:::tip Important
Ensure NethVoice Proxy is fully installed and configured with proper FQDNs and DNS records before proceeding to install NethVoice instances.
:::

### Step 2: Configure NethVoice Proxy

Before installing NethVoice, you must configure the NethVoice Proxy:

1. **Configure the proxy domain** this is the public FQDN where the proxy will be reachable.
   Do not enter NethServer FQDN but use a dedicated one, like `proxy.nethserver.org`.
   This name will be used by external clients to reach your VoIP services, but
   it will not be used directly by final users.
2. **Set the network interface** that will handle VoIP traffic
3. **Configure public IP address** if different from the interface IP

Above configuration will be the entry point for all external VoIP traffic.

Make sure that:
- the configured FQDN resolves correctly to the public IP address
- any DNS records are properly set up to point to the proxy

Those requeirements are critical to obtain a valid SSL/TLS certificate for secure communications.

See [NethVoice Proxy Documentation](advanced/nethvoice_proxy) for more info.

### Step 3: Install NethVoice

Once the NethVoice Proxy is running, you can install NethVoice instances:

1. **Return to Software Center** on your NethServer 8 system.
2. **Search for "NethVoice"** in the Software Center search bar.
3. **Click "Install"** next to NethVoice.
4. **Wait for installation** to complete.
5. **Proceed with Module Configuration** as described in the next section.
6. **Access the NethVoice instance** and follow the initial configuration wizard to complete the setup.

:::info Multiple Instances
You can install multiple NethVoice instances on the same node. Each will use the shared NethVoice Proxy for external access and traffic routing. Each instance requires separate configuration and dedicated FQDNs.
:::


## Module Configuration

:::warning Required Prerequisites
Before proceeding with the configuration of any NethVoice instance, ensure:

1. **NethVoice Proxy is installed** - See [NethVoice Proxy Installation](../nethvoice_proxy/)
2. **NethVoice Proxy is configured** - Proxy domain (FQDN) must be set and DNS records created
3. **NethVoice Proxy is running** - Verify proxy status in the node management interface
4. **User Domain is created** - See [User Domains in NethServer Installation](./nethserver.md#user-domains) (required for NethVoice users and extensions)

The NethVoice module requires at least one user domain to manage users, extensions, and authentication. If you haven't created a user domain yet, follow the [User Domains setup guide](./nethserver.md#user-domains) before configuring NethVoice.
:::


To set up NethVoice, you need to have two dedicated virtual hosts:

- one for the NethVoice administration page, eg. `nethvoice.nethserver.org`
- one for the NethVoice CTI web application, eg. `cti.nethserver.org`


Before proceeding with the configuration, ensure that you have created the corresponding DNS records for these FQDNs in your DNS server.

If you plan to use a Let's Encrypt certificate as the default certificate, make sure you have the necessary public DNS records.

During the module configuration wizard, you will be prompted to provide the following information:

- **NethVoice base host**: Insert a valid FQDN to access the application administration page, this is where you will manage NethVoice settings, eg. `nethvoice.nethserver.org`.
- **NethVoice CTI base host**: Insert a valid FQDN to access the NethVoice CTI web application, eg. `cti.nethserver.org`.
- **User Domain**: Choose one of the [user domains](./nethserver.md#user-domains) already configured.
- **Timezone**: Select the appropriate timezone for your NethVoice instance, this is important for accurate call logging and scheduling.
- **Request Let's Encrypt certificate**: If enabled, a Let's Encrypt certificate will be requested for each of the two hosts.
- **Reports Prefix**: Insert the international telephone prefix to be considered local in the reporting system.
- **Reset NethVoice admin password to access user interface**: Insert a valid password for the NethVoice administrator user (optional, the default password is *Nethesis,1234*).

Advanced configuration options:

- **Deepgram API Key**: Insert your Deepgram API key to enable advanced speech recognition features.
  - **Enable call transcription (Preview)**: Enable this option to transcribe all calls using Deepgram's speech-to-text service. Please note that this feature is in preview and may have limitations and will incur additional costs based on your Deepgram usage.
  - **Voicemail transcription**: Enable voicemail transcription to convert voicemail messages to text using Deepgram. This feature also incurs additional costs based on your Deepgram usage.

The following options are available only with an active Enterprise subscription:

- **Enable Hotel module**: Activate the Hotel module for managing hotel-specific telephony features.
  See [NethVoice Hotel Module Documentation](/nethhotel/) for more details.
- **Hotel FIAS server host**: Enter the IP address or hostname of the Hotel FIAS server.
- **Hotel FIAS server port**: Specify the port number for the Hotel FIAS server connection.

## Next steps

After saving the configuration parameters, NethVoice will be accessible on its base host, eg:
```
https://nethvoice.nethserver.org
```

To access the NethVoice administration interface, use the following credentials:

- User: `admin`
- Password: `Nethesis,1234`, the default password if the *Reset NethVoice admin password to access user interface* option was not used during the configuration

