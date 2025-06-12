---
title: Introduction
sidebar_position: 1
---

# NethVoice

NethVoice is a comprehensive communication system that integrates voice, video, and mobile capabilities.
The NethVoice module is divided into seven main parts:

- [FreePBX](https://www.freepbx.org/): A web-based open-source graphical user interface (GUI) that manages [Asterisk](https://www.asterisk.org), a voice over IP and telephony server.
- [NethVoice CTI Server](https://github.com/nethesis/nethcti-server): A daemon that provides a set of APIs to perform common switchboard operations and a WebSocket streaming channel to listen for events.
- [NethVoice CTI Client](https://github.com/nethesis/nethcti): A web application to manage the telephone switchboard via communication with the NethVoice CTI Server.
- [NethVoice Report](https://github.com/nethesis/nethvoice-report): An [Asterisk](https://www.asterisk.org) CDR and queues reporting system.
- [Janus](https://janus.conf.meetecho.com/): A WebRTC server.
- [MariaDB](https://mariadb.org/): A popular open-source relational database.
- [Tancredi](https://nethesis.github.io/tancredi): A phone provisioning engine ideal for internet deployments.

NethVoice offers a comprehensive set of features for unified communications and PBX management, including:

- **Integration with FreePBX and Asterisk**: Web-based GUI for managing telephony services.
- **CTI Server and Client**: APIs and web applications for switchboard operations and user management.
- **Reporting**: Call Detail Records (CDR) and queue reporting system.
- **WebRTC Support**: Integration with Janus for video and web communications.
- **Database Integration**: Uses MariaDB for data storage.
- **Phone Provisioning**: Automated provisioning engine (Tancredi) for supported phone models.
- **Multi-instance Support**: Install multiple NethVoice instances on the same node.
- **Proxy and User Domain Management**: Requires configuration of proxy and user domains.
- **Virtual Host Configuration**: Dedicated FQDNs for admin and CTI web applications.
- **Let's Encrypt Integration**: Automated SSL certificate management.
- **User and Extension Management**: Associate users with extensions, manage users and passwords.
- **Trunk Management**: Configure physical gateways and VoIP trunks (SIP, PJSIP).
- **Inbound/Outbound Routing**: Visual call flow editor and customizable route priorities.
- **Device Management**: Provision and manage phones, set admin/user passwords, encryption, and preferences.
- **Model and Custom Device Support**: Manage phone models, create custom models, and configure device-specific settings.
- **Group and Profile Management**: Create user groups and permission profiles with granular feature access.
- **Permissions System**: Fine-grained control over telephony features, address book, CDR, customer cards, presence, queues, and operator stations.
- **Device Association**: Link up to 9 devices per user (web phone, mobile app, physical phones).
- **Provisioning Methods**: Supports RPS, DHCP, and manual provisioning URLs.
- **Firmware Management**: Upload and distribute firmware updates to phones.
- **Supported Phones and Gateways**: Compatibility with major brands (NethPhone, Fanvil, Yealink, Snom, Gigaset, Grandstream, Patton).
- **Provisioning Parameters**: Configure soft keys, line keys, expansion keys, screen/ringtone, preferences, LDAP phonebook, and network settings.
- **Click-to-Call**: Initiate calls from web or desktop clients, with NethLink integration.
- **Gateway Provisioning**: Automated and manual configuration for supported gateways.
- **Dashboard**: Overview of users, devices, trunks, and their statuses.
- **Applications**: Create and manage customer cards, address book sources, and parameterized URLs.
- **External Address Book Integration**: Import contacts from MySQL, CSV, or custom scripts.
- **Parameterized URLs**: Trigger custom URLs on call events with dynamic parameters.

You can install multiple NethVoice instances on the same node from the `software_center-section`, but the module requires the `NethVoice proxy <nethvoice_proxy-section>` to be already configured and running.
