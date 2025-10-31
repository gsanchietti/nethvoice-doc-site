---
title: Introduction
sidebar_position: 0
---

# NethVoice Administrator Manual

## What is NethVoice?

NethVoice is a comprehensive, unified communications platform built on open-source technologies. It integrates voice, video, and mobile capabilities into a single, powerful PBX system that organizations of any size can deploy and manage.

Unlike traditional proprietary PBX systems, NethVoice combines the flexibility of FreePBX/Asterisk with modern web-based interfaces, WebRTC technology, and advanced provisioning capabilities to deliver enterprise-grade communications.

:::info
This documentation covers the complete installation, configuration, and management of NethVoice on NethServer 8. Whether you're deploying your first system or managing multiple instances, you'll find comprehensive guides for every aspect of NethVoice.
:::

## Quick Navigation

Get started quickly by jumping to the most important sections:

- **[Installation Guide](./install/)** - Complete setup instructions from NethServer prerequisites to NethVoice deployment
- **[Phone Provisioning](./provisioning/)** - Automated phone device management and provisioning
- **[User Management & Administration](../user-manual/)** - CTI, extensions, and user administration
- **[Administrator Resources](#core-components)** - System configuration and advanced topics

## Core Components

NethVoice is built on seven main open-source components:

| Component | Purpose | Link |
|-----------|---------|------|
| **FreePBX** | Web-based GUI for Asterisk management and call routing | [freepbx.org](https://www.freepbx.org/) |
| **Asterisk** | VoIP server and core telecommunications engine | [asterisk.org](https://www.asterisk.org) |
| **NethVoice CTI Server** | APIs and WebSocket events for switchboard operations | [GitHub](https://github.com/nethesis/nethcti-server) |
| **NethVoice CTI Client** | Web application for call management and operator stations | [GitHub](https://github.com/nethesis/nethcti) |
| **NethVoice Report** | CDR and queue analytics and reporting | [GitHub](https://github.com/nethesis/nethvoice-report) |
| **Janus** | WebRTC gateway for video and web communications | [janus.conf.meetecho.com](https://janus.conf.meetecho.com/) |
| **Tancredi** | Intelligent phone provisioning engine | [GitHub](https://nethesis.github.io/tancredi) |

Additional services include **MariaDB** for data storage and **Let's Encrypt** for SSL certificate automation.

## Key Features Overview

### Communication & Routing

- **FreePBX & Asterisk Integration**: Web-based GUI for managing complete telephony services
- **Inbound/Outbound Routing**: Visual call flow editor with customizable route priorities
- **Trunk Management**: Configure physical gateways and VoIP trunks (SIP, PJSIP)
- **User and Extension Management**: Associate users with extensions with granular control
- **Click-to-Call**: Initiate calls from web or desktop clients with NethLink integration

### Device Management & Provisioning

- **Automated Phone Provisioning**: Tancredi provisioning engine for supported phone models
- **Supported Devices**: Compatibility with NethPhone, Fanvil, Yealink, Snom, Gigaset, Grandstream, Patton and more
- **Multiple Provisioning Methods**: RPS, DHCP, and manual provisioning URLs
- **Device Association**: Link up multiple devices per user (web phone, mobile app, physical phones)
- **Firmware Management**: Upload and distribute firmware updates to phones
- **Gateway Provisioning**: Automated and manual configuration for supported gateways
- **Provisioning Parameters**: Configure soft keys, line keys, expansion keys, screen/ringtone settings, LDAP phonebook

### User Management & Permissions

- **Group and Profile Management**: Create user groups with granular permission profiles
- **Permissions System**: Fine-grained control over telephony features, address book, CDR, customer cards, presence, queues
- **Operator Stations**: Configure dedicated switchboard operator environments
- **User Domains**: Support for LDAP or Active Directory integration for centralized user management

### Communication Tools & Interfaces

- **CTI Server and Client**: APIs and web applications for switchboard operations
- **WebRTC Support**: Integration with Janus for video and web communications
- **Dashboard**: Real-time overview of users, devices, trunks, and system status
- **Reporting System**: Call Detail Records (CDR) and queue analytics

### Advanced Features

- **Multi-instance Support**: Install multiple NethVoice instances on the same NethServer node
- **Applications Framework**: Create and manage customer cards, address book sources, and parameterized URLs
- **External Address Book Integration**: Import contacts from MySQL, CSV, or custom scripts
- **Parameterized URLs**: Trigger custom URLs on call events with dynamic parameters
- **Let's Encrypt Integration**: Automated SSL certificate management

## Getting Started

### Prerequisites

Before deploying NethVoice, ensure you have:

- ✅ **System Resources**: Minimum 2 vCPU, 2GB RAM, 40GB storage per instance
- ✅ **Network Requirements**: Static IP, DNS configured, internet connectivity
- ✅ **NethServer 8**: Fully installed and configured (see [Installation Guide](./install/))
- ✅ **User Domain**: Created for users and authentication (see [User Domains in NethServer Installation](./install/nethserver.md#user-domains))
- ✅ **NethVoice Proxy**: Installed and configured with proper FQDN and DNS records (required for any NethVoice deployment)

### Deployment Steps

1. **[Review System Requirements](./install/nethserver#system-requirements)** - Ensure your infrastructure meets requirements
2. **[Install NethServer 8](./install/nethserver/)** - Deploy the base infrastructure platform
3. **[Create User Domain](./install/nethserver.md#user-domains)** - Set up LDAP for users and authentication
4. **[Install & Configure NethVoice Proxy](./nethvoice_proxy/)** - Deploy the external VoIP gateway (REQUIRED before NethVoice)
5. **[Deploy NethVoice](./install/nethvoice_install/)** - Install NethVoice module(s) on top of the proxy
6. **Configure Your System**:
   - [Provision Phones](./provisioning/) - Deploy and configure telephone devices
   - [Manage Extensions](../user-manual/nethcti/) - Create extensions and assign to users
7. **[Advanced Configuration](./administrator-manual/)** - Configure trunks, gateways, routing, and advanced features

## Key Documentation Sections

| Section | Purpose | Learn About |
|---------|---------|------------|
| **[Installation](./install/)** | System setup and deployment | NethServer, NethVoice installation, prerequisites |
| **[Provisioning](./provisioning/)** | Phone device management | Supported devices, provisioning methods, configuration |
| **[Administrator Manual](./administrator-manual/)** | System administration | Users, extensions, trunks, gateways, routing |
| **[User Manual](../user-manual/)** | End-user features | CTI client, NethCTI, NethLink, calling features |

:::tip Multi-Instance Deployments
You can install multiple NethVoice instances on the same NethServer 8 node from the Software Center. Each instance requires separate configuration and runs independently. This is useful for multi-tenant deployments or separate business units.
:::

:::warning Prerequisites
The NethVoice module requires that the **NethVoice proxy** be already installed, configured, and running on the system. 

**Why?** NethVoice Proxy:
- Manages all external VoIP traffic from the internet
- Handles SIP/RTP traffic routing and delegation
- Enables external access even with a single NethVoice instance
- Routes traffic between multiple NethVoice installations on the same node

If you haven't set up the proxy yet, refer to the [NethVoice Proxy documentation](./nethvoice_proxy/) before installing NethVoice.
:::

## Support & Additional Resources

- **Official Documentation**: Full technical reference and advanced configuration guides
- **Community Support**: Join the NethVoice community for questions and discussions
- **Professional Services**: Reach out to Nethesis for enterprise deployments and support
- **Provisioning Guide**: Detailed information on supported phones and gateways in the [Provisioning section](./provisioning/)

## Documentation Structure

This manual is organized as follows:

- **Getting Started**: Installation and initial configuration
- **Phone Provisioning**: Device management, supported models, and configuration
- **Advanced Administration**: Trunks, gateways, routing, applications, and system tuning
- **User Manual**: End-user documentation for CTI clients and communication tools
