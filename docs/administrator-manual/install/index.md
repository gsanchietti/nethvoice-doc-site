---
title: Installation
sidebar_position: 1
---

# Installation Guide

This section covers the complete installation process for NethVoice, from setting up the underlying NethServer 8 infrastructure to configuring NethVoice itself.

## Overview

NethVoice installation is a multi-step process:

1. **[NethServer 8 Installation](nethserver)** - Install the NethServer 8 base platform
2. **[Create User Domain](nethserver#user-domains)** - Set up LDAP for users and authentication (in NethServer)
3. **[NethVoice Proxy Installation & Configuration](../nethvoice_proxy/)** - Install and configure the external VoIP gateway (REQUIRED first)
4. **[NethVoice Installation](nethvoice_install)** - Install NethVoice on top of configured proxy
5. **[Module Configuration](nethvoice_install#module-configuration)** - Configure NethVoice with your requirements

:::warning Installation Order
1. NethServer 8 must be installed first
2. User Domain must be created second (required by NethVoice)
3. NethVoice Proxy must be installed and configured third
4. NethVoice can only be installed after proxy is ready
5. NethVoice configuration uses the user domain created in step 2

See [NethVoice Proxy Installation](../nethvoice_proxy/) for details on proxy requirements.
:::

## What is NethServer 8?

NethServer 8 (NS8) is the underlying Linux infrastructure platform on which NethVoice runs. It provides:

- Open-source unified Linux infrastructure management
- Cluster support for high availability and scalability
- Modular application architecture
- Web-based administration interface
- Security hardening and updates

:::info
NethVoice requires NethServer 8 to be installed first. Ensure you complete the NethServer 8 installation before proceeding with NethVoice.
:::

## Installation Path

### Step 1: Prerequisites

Before starting, ensure you have:

- A dedicated physical or virtual machine
- Supported Linux distribution installed (Rocky Linux, AlmaLinux, CentOS Stream, or Debian)
- Static IP address configured
- External DNS servers configured
- Working internet connection
- Fully Qualified Domain Name (FQDN) registered and resolved

### Step 2: Install NethServer 8

Follow the [NethServer Installation guide](nethserver) to:
- Install NethServer 8 core components
- Configure network and DNS
- Access the web administration interface
- Create your cluster

### Step 3: Create User Domain

Create a user domain for NethVoice users and extensions:
- Access NethServer 8 web interface → Domains and users
- Create domain (OpenLDAP recommended for NethVoice)
- Set admin credentials
- Note LDAP bind settings (needed for NethVoice configuration)

See [User Domains setup](nethserver#user-domains) in the NethServer Installation guide for details.

### Step 4: Install NethVoice Proxy

After NethServer 8 and user domain are ready, install and configure the VoIP proxy:
- Access the Software Center
- Install NethVoice Proxy
- Configure proxy domain (FQDN)
- Set network interface and public IP
- Verify proxy is running

See [NethVoice Proxy Installation Guide](../nethvoice_proxy/) for detailed steps.

### Step 5: Install NethVoice

With NethVoice Proxy configured and running:
- Access the Software Center
- Install NethVoice
- Complete the NethVoice configuration wizard
- Select the user domain created in Step 3
- Set up virtual hosts and certificates

### Step 6: Configure NethVoice

Follow the [NethVoice Installation guide](nethvoice_install) to:
- Configure NethVoice virtual hosts
- Verify user domain is selected
- Configure Let's Encrypt certificates
- Access NethVoice administration and CTI

## Quick Reference

### System Requirements (Minimum)

| Component | Requirement |
|-----------|-------------|
| CPU | 2 vCPU/cores (x86-64) |
| RAM | 2GB |
| Storage | 40GB SSD |
| Network | Static IP address |
| OS | **Rocky Linux 9** (subscription supported) - AlmaLinux 9, CentOS Stream 9, Debian 12 (community supported) |
| Browser | Firefox, Chrome, or Chromium (current version) |

### Installation Methods

**NethServer 8** can be installed via:
- Standard installation script (recommended)
- Pre-built virtual machine image (for Proxmox or VMWare)

**NethVoice** is installed via:
- NethServer Software Center interface

### Default Credentials

After installation, use these temporary credentials:

| Component | Username | Password |
|-----------|----------|----------|
| NethServer 8 Admin Interface | admin | Nethesis,1234 |
| NethVoice Admin Interface | admin | Nethesis,1234 |

:::warning
Change default credentials immediately after first login for security.
:::

## Detailed Guides

### [NethServer 8 Installation](nethserver)

Complete guide covering:
- System requirements and hardware recommendations
- Supported Linux distributions
- Network and DNS configuration
- Standard installation procedure
- Pre-built image deployment
- Post-installation steps
- Cluster configuration
- Troubleshooting

### [NethVoice Proxy Installation](../nethvoice_proxy/)

Complete guide covering:
- Proxy overview and architecture
- Role in single and multi-instance deployments
- Installation steps
- Configuration (domain, interface, public IP)
- SSL certificate setup
- Verification and testing
- Must be installed BEFORE NethVoice

### [NethVoice Installation](nethvoice_install)

Complete guide covering:
- Installation order (Proxy → NethVoice)
- NethVoice software installation
- Module configuration
- Virtual host setup
- User domain configuration
- Let's Encrypt certificate configuration
- Administrator access
- Initial configuration

## Installation Checklist

Before you begin, ensure:

- [ ] Hardware meets minimum requirements (2 vCPU, 2GB RAM, 40GB SSD)
- [ ] Supported Linux distribution available
- [ ] Static IP address configured
- [ ] External DNS servers configured
- [ ] FQDN registered with DNS provider
- [ ] Firewall allows required ports (80, 443, 55820 for clustering)
- [ ] Internet connection is stable
- [ ] You have administrative access to the server

During installation, ensure you complete:

- [ ] NethServer 8 installation
- [ ] User Domain creation (OpenLDAP recommended)
- [ ] Note down LDAP bind settings
- [ ] NethVoice Proxy installation
- [ ] NethVoice Proxy configuration
- [ ] Verify proxy is running before NethVoice install
- [ ] NethVoice installation
- [ ] NethVoice configuration with user domain

## Important Notes

:::info
**Supported Platforms Only**: Install NethServer 8 on supported distributions only. Desktop systems and servers running other services are not supported.
:::

:::info
**Static IP Address**: DHCP is not supported. Configure a static IP address before or during NethServer 8 installation.
:::

:::warning
**DNS Configuration**: Proper DNS setup is essential for TLS certificates, clustering, and overall system functionality. Do not skip DNS configuration steps.
:::

:::warning
**Default Credentials**: Change default admin passwords immediately after installation. This is a security requirement, not optional.
:::

## Scaling

After initial installation, NethServer 8 supports:

- **Cluster Setup**: Add multiple nodes for scalability
- **Worker Nodes**: Distribute applications across cluster nodes
- **Load Balancing**: Built-in load balancing for applications
- **VPN**: Automatic VPN setup for secure inter-node communication

See the [NethServer 8 documentation](https://docs.nethserver.org/projects/ns8/) for clustering details.

## Troubleshooting

### Common Issues

**Cannot access web interface**
- Verify static IP configuration
- Check firewall allows port 443
- Ensure DNS resolves the FQDN correctly
- See NethServer 8 installation guide

**Network connectivity issues**
- Configure static IP address
- Verify DNS servers are reachable and not local
- Check network interface configuration
- Test DNS resolution from command line

**Installation script fails**
- Ensure internet connection is stable
- Install curl if not available
- Run as root user
- Check system requirements are met

For additional help, refer to the detailed guides or NethServer 8 documentation.

## Next Steps

After successful installation:

1. **Configure NethVoice**: Complete the NethVoice configuration wizard
2. **Set up Users**: Create user domains (LDAP or Active Directory)
3. **Provision Phones**: See [Phone Provisioning guide](../provisioning/)
4. **User Training**: Use [User Manual](../../user-manual/) to train end users
5. **Security Hardening**: Configure firewalls and access controls

---

**Ready to get started?** Begin with the [NethServer 8 Installation guide](nethserver).
