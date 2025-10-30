---
title: Installazione
sidebar_position: 2
---


# Installation

To install NethVoice, follow these steps:

1. **Access the Software Center** on your system.
2. **Install NethVoice Proxy** by searching for "NethVoice Proxy" and clicking "Install".
3. **Install NethVoice** by searching for "NethVoice" and clicking "Install".
4. **Proceed with Module Configuration** as described in the next section.
5. **Access the NethVoice instance** and follow the initial configuration wizard to complete the setup.


# Module configuration

:::note
Before proceeding with the configuration of the NethVoice instance, remember to configure `NethVoice Proxy <nethvoice_proxy-section>` instance.
:::

The NethVoice module requires at least one `user domain <user-domains-section>` to be configured and running.

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
