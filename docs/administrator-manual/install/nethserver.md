---
title: NethServer Installation
sidebar_position: 2
---

# NethServer 8 Installation

NethVoice runs on top of **NethServer 8 (NS8)**, an open-source unified Linux infrastructure platform. This page guides you through installing NethServer 8, which is a prerequisite for NethVoice installation.

## System Requirements

Before installing NethServer 8, ensure your system meets the following requirements:

### Hardware Requirements

For a single node installation:

- **CPU**: 2 vCPU/cores, x86-64 architecture (minimum)
- **RAM**: 2GB minimum
- **Storage**: 40GB Solid-state drive minimum
- **Type**: Physical or virtual machine (Proxmox LXC and container-based virtualization not supported)

:::info
Additional nodes can be added later. When scaling, use similar hardware and the same Linux distribution for consistency. Requirements should be increased based on users, applications, and load.
:::

### Supported Linux Distributions

NethServer 8 can be installed on the following distributions:

**With Nethesis Subscription Support:**
- Rocky Linux 9

**With Community Support:**
- Rocky Linux 9
- CentOS Stream 9
- AlmaLinux 9
- Debian 12

:::warning
Install on a **clean Linux server** only. Do not install on desktop systems or servers running other services.
:::

### Network Requirements

#### Static IP Address

- **Mandatory**: Assign a static IP address to the node
- **Not allowed**: DHCP and dynamic IP discovery protocols
- **Internet**: Working internet connection required for installation, configuration, and updates

#### Name Resolution

Configure DNS servers for the node:

- DNS servers must be **external** to the NethServer 8 installation
- Configure one or more nameserver entries in `/etc/resolv.conf` pointing to external DNS servers
- These servers can be on the same LAN or public Internet

:::warning
**Avoid these configurations:**
- Do not use `127.0.0.1` or any IP assigned to the node itself
- Do not use NS8-provided DNS services (Samba AD, DNSMasq) as the node resolver
- Do not mix DNS servers from different scopes (e.g., public Cloudflare + private DNS)
:::

#### DNS Configuration

The node's **Fully Qualified Domain Name (FQDN)** must be properly configured:

1. **FQDN Format**: hostname + domain suffix (e.g., `jupiter.example.org`)
2. **DNS Records**: Register the FQDN with:
   - Type A record for IPv4 addresses
   - Type AAAA record for IPv6 addresses
3. **Routable IP**: The FQDN must resolve to a routable IP address
4. **TLS Certificates**: Correct FQDN and DNS setup are essential for TLS encryption to work properly

#### Worker Node Requirements (for clustering)

If adding worker nodes to a cluster:

1. Worker node must resolve the leader's FQDN to the correct routable address
2. HTTPS server (TCP port 443) at that address must handle API requests
3. VPN UDP port (default 55820) must not be blocked by firewalls or network appliances

### Web Browser Requirements

To access the NethServer 8 web interface, use an up-to-date version of:
- Firefox
- Chrome
- Chromium

## Installation Methods

NethServer 8 can be installed using two methods:

### Method 1: Standard Procedure

For most installations, use the standard installation procedure.

#### Installation Steps

1. **Install curl** (if not already available):
```bash
apt install curl || dnf install curl
```

2. **Run the installation script** as `root`:
```bash
curl https://raw.githubusercontent.com/NethServer/ns8-core/ns8-stable/core/install.sh | bash
```

3. **Wait for completion**: The script will install all NethServer 8 core components.

### Method 2: Pre-built Virtual Machine Image

A pre-built Rocky Linux 9 image is available for quick deployment on virtual platforms.

#### Available Images

| Platform | Format | Size | Download |
|----------|--------|------|----------|
| Proxmox (QEMU) | qcow2 | 1.4 GB | https://tinyurl.com/ns8-rocky-qcow2 |
| VMWare ESXi 8+ | vmdk | 2.8 GB | https://tinyurl.com/ns8-rocky-vmdk |

#### Pre-built Image Setup

1. **Download the image** for your virtualization platform
2. **Verify integrity** using the SHA256 checksum:
```bash
sha256sum --ignore-missing -c CHECKSUM
```

3. **Configure for your platform**:
   - **VMWare ESXi 8+**: Add hard disk with existing image, select IDE controller 1 (Master)
   - **Proxmox**: Select `host` as CPU type (avoid "kvm64" for better compatibility)

4. **Start the image** in your virtualization platform

5. **Initial Login**: The system console will display a login prompt showing the assigned IP address
   - Username: `root`
   - Password: `Nethesis,1234`

6. **Change default password**: You will be prompted to change the root password on first login

7. **Configure static IP**: If DHCP was used, configure a static IP address in Rocky Linux network settings

:::info
If the node is unreachable after startup, refer to the node network setup documentation for troubleshooting.
:::

## Post-Installation Steps

After installation completes:

### 1. Access the Web Interface

Open your browser and navigate to:
```
https://<server_ip_or_fqdn>/cluster-admin/
```

### 2. Initial Login

Use the default credentials:
- Username: `admin`
- Password: `Nethesis,1234`

:::warning
**Security**: Change the admin password immediately if it is still set to the default value.
:::

### 3. Create Cluster

1. Click **Create cluster**
2. Verify the node's **Fully Qualified Domain Name (FQDN)** is correct
3. Ensure DNS requirements are met (see [DNS Configuration](#dns-configuration) section)
4. Configure VPN network (CIDR) for clustering:
   - Default values are suitable for most environments
   - ⚠️ **Cannot be changed** once set, choose carefully to avoid conflicts with your network

5. Configure cluster name:
   - Default: "NethServer 8"
   - Change in **Settings → Cluster** if needed

6. Click **Create cluster** to finalize

### 4. Next Steps

After cluster setup, you can:

- **Install User Domain**: Set up LDAP or Active Directory
- **Review NS8 Applications**: Explore available modules
- **Check System Logs**: Review system health and events
- **Add More Nodes**: Scale to multi-node cluster
- **Set up Metrics**: Configure monitoring dashboards
- **Install NethVoice**: Proceed with NethVoice installation via the Software Center

## SSH Access (Pre-built Images)

For pre-built images, SSH root access is disabled. To get administrative SSH access:

1. Create a personal user account in the `wheel` group:
```bash
useradd -G wheel ethan.smith
passwd ethan.smith
```

2. Log in with your personal account, then gain root access:
```bash
sudo su -
```

## Uninstallation

To uninstall NethServer 8 and all modules:

:::warning
**This is destructive**: The uninstall command erases everything under `/home` and `/var/lib/nethserver` directories. Handle with care!
:::

Execute:
```bash
bash /var/lib/nethserver/node/uninstall.sh
```

## Troubleshooting

### Node Unreachable

If the node is unreachable after installation:
- Verify static IP configuration
- Check DNS resolution for the FQDN
- Ensure firewall allows HTTPS (port 443)
- Review network interface configuration

### Network Configuration Issues

If you need to reconfigure network settings:
- Access the console directly or via IPMI/KVM
- Log in as root
- Update network configuration using:
  - **Rocky Linux**: Use `nmtui` or edit NetworkManager files
  - **Debian**: Use `netplan` or `/etc/network/interfaces`
  - **CentOS Stream/AlmaLinux**: Use `nmcli` or `nmtui`

## User Domains

User domains store users and groups in an LDAP database. NethVoice requires at least one user domain to manage extensions, users, and authentication.

### Overview

NethServer 8 supports two types of LDAP account providers:

| Provider | Type | Best For | Features |
|----------|------|----------|----------|
| **Active Directory (Samba)** | Internal | Windows clients, SMB file sharing | Domain controller, Windows compatibility, higher complexity |
| **OpenLDAP (RFC2307)** | Internal | Unix/Linux clients, simple setup | Lightweight, easy configuration, smaller deployments |
| **External LDAP** | External | Existing LDAP infrastructure | Connect to existing servers (Active Directory, OpenLDAP, etc.) |

:::info NethVoice Requirement
NethVoice requires at least one configured user domain. Choose **OpenLDAP (RFC2307)** for simpler deployments or **Active Directory** if you need Windows client support.
:::

### Quick Setup: OpenLDAP (Recommended for NethVoice)

OpenLDAP is the simplest option for NethVoice-only deployments:

1. **Access the NethServer 8 web interface** after installation completes
2. **Navigate to Domains and users** section
3. **Click "Create domain"** and choose **"Internal"**
4. **Select "OpenLDAP"** as the provider
5. **Enter domain name** (e.g., `nethvoice.local`) - this is a logical name, not DNS-related
6. **Set OpenLDAP admin username and password**
7. **Click "Install provider"**

The domain will be ready immediately. You can now:
- Create users and groups for NethVoice extensions
- Manage user authentication
- Configure NethVoice to use this domain

:::tip
Keep the OpenLDAP admin credentials in a secure location. You'll need them for administrative tasks.
:::

### LDAP Bind Settings

NethVoice and other applications connect to the user domain using LDAP bind settings. These credentials are automatically configured but can be viewed:

1. **Navigate to Domains and users**
2. **Select the user domain** → **Configuration** (three-dots menu)
3. **View "Bind Settings"** at the top of the page

These settings include:
- **LDAP URL**: Connection address (e.g., `ldap://domain-provider/`)
- **Bind DN**: Administrative credential for authentication
- **Base DN**: LDAP hierarchy root for user/group lookup

NethVoice uses these settings to authenticate users and manage extensions.

### Advanced Configuration

For advanced scenarios (external LDAP, Active Directory, DNS setup, password policies, user management), see the [official NethServer 8 User Domains documentation](https://docs.nethserver.org/projects/ns8/en/latest/user_domains.html).

Key topics in the official docs:
- **Active Directory Setup**: Complete domain controller configuration
- **External LDAP Connection**: Binding to existing LDAP servers
- **Password Policies**: Age, strength, and expiration settings
- **User Management Portal**: Self-service password changes
- **LDAP Provider Replicas**: Fault tolerance and redundancy

## Next Steps

Once NethServer 8 is successfully installed and configured:

1. **Create a User Domain** - See [User Domains](#user-domains) section above (required for NethVoice)
2. **Proceed to [NethVoice Proxy Installation](../nethvoice_proxy/)** for VoIP gateway setup
3. **Then install [NethVoice](nethvoice_install)** once the proxy is running
4. Configure NethVoice with the user domain created in step 1

---

For additional information, refer to the [official NethServer 8 documentation](https://docs.nethserver.org/projects/ns8/).
