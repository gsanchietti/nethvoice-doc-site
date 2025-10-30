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
5. **Proceed to proxy configuration** before moving to the next step (see [NethVoice Proxy Configuration](../nethvoice_proxy/)).

:::tip Important
Ensure NethVoice Proxy is fully installed and configured with proper FQDNs and DNS records before proceeding to install NethVoice instances.
:::

### Step 2: Configure NethVoice Proxy

Before installing NethVoice, you must configure the NethVoice Proxy:

1. **Configure the proxy domain** (e.g., `proxy.nethserver.org`)
2. **Set the network interface** that will handle VoIP traffic
3. **Configure public IP address** if different from the interface IP
4. **Create corresponding DNS records** for the FQDN

See [NethVoice Proxy Documentation](../nethvoice_proxy/) for detailed configuration steps.

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


# Module Configuration

:::warning Required Prerequisites
Before proceeding with the configuration of any NethVoice instance, ensure:

1. **NethVoice Proxy is installed** - See [NethVoice Proxy Installation](../nethvoice_proxy/)
2. **NethVoice Proxy is configured** - Proxy domain (FQDN) must be set and DNS records created
3. **NethVoice Proxy is running** - Verify proxy status in the node management interface
4. **User Domain is created** - See [User Domains in NethServer Installation](./nethserver.md#user-domains) (required for NethVoice users and extensions)

The NethVoice module requires at least one user domain to manage users, extensions, and authentication. If you haven't created a user domain yet, follow the [User Domains setup guide](./nethserver.md#user-domains) before configuring NethVoice.
:::

## Configuration Requirements

The NethVoice module requires at least one `user domain` to be configured and running.

To set up NethVoice, you need to have two dedicated virtual hosts: one for the NethVoice administration page and one for the NethVoice CTI web application.
These virtual hosts should have fully qualified domain names (FQDNs) like `nethvoice.nethserver.org` and `cti.nethserver.org`.

Before proceeding with the configuration, ensure that you have created the corresponding DNS records for these FQDNs in your DNS server.

If you plan to use a Let's Encrypt certificate as the default certificate, make sure you have the necessary public DNS records.

During the first configuration wizard, you will be prompted to provide the following information:

- `NethVoice base host`: Insert a valid FQDN to access the application administration page.
- `NethVoice CTI base host`: Insert a valid FQDN to access the NethVoice CTI web application.
- `User Domain`: Choose one of the `user domain <user-domains-section>` already configured.
- `Request Let's Encrypt certificate`: If enabled, a Let's Encrypt certificate will be requested for each of the two hosts.
- `Reports Prefix`: Insert the international telephone prefix to be considered local in the reporting system.
- `Reset NethVoice admin password to access user interface`: Insert a valid password for the NethVoice administrator user (optional, the default password is *Nethesis,1234*).

After saving the configuration parameters, NethVoice will be accessible on its base host with the administration credentials:

- User: `admin`
- Password: `Nethesis,1234`, the default password if it has not been reset during the first configuration wizard.
