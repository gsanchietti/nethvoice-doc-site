---
title: Prerequisites
sidebar_position: 1
---

# Prerequisites

Before starting the NethVoice migration from NethServer 7 to NethServer 8, ensure all prerequisites are met. Proper preparation is essential for a smooth migration process.

## System Requirements

### Source System (NethServer 7)

Your NethServer 7 system must meet the following requirements:

- **SSH Access**: Root or administrative SSH access to the NS7 server
- **Cockpit Access**: Web interface access via Cockpit (typically on port 9090)
- **NethVoice Operational**: Current NethVoice installation must be running and operational
- **Migration Tool**: Ability to install "Migration to NS8" module from Software Center
- **System Updates**: NS7 should be fully updated before starting migration

### Destination System (NethServer 8)

The destination NS8 system requires:

- **Fresh Installation**: A freshly installed NS8 cluster (see [NS8 Installation guide](/docs/administrator-manual/install/nethserver))
- **Adequate Resources**: Sufficient CPU, RAM, and disk space to accommodate NethVoice and its data
  - Minimum: 4 vCPU, 8GB RAM, 100GB disk space
  - Recommended: Scale based on your NS7 usage and data volume
- **NethVoice Proxy**: Should be pre-installed and configured (see [NethVoice Proxy documentation](/docs/administrator-manual/install/nethvoice_proxy))
  - Note: If not installed, the migration tool will install it automatically, but manual configuration will be required afterward

:::tip Pre-install NethVoice Proxy
It's highly recommended to install and configure NethVoice Proxy **before** starting the migration. This ensures proper network configuration and reduces post-migration tasks.
:::

## Network Requirements

### VPN Connectivity

The NS8 cluster uses a VPN for secure communication between nodes and during migration:

- **VPN Address Resolution**: The NS8 cluster VPN address must be resolvable from NS7
  - The VPN address is configured during cluster creation
  - By default, this is the leader node FQDN
- **VPN Port Access**: Default VPN port **55820** must not be blocked by:
  - Firewalls on NS7 or NS8
  - Intermediate network appliances
  - Router ACLs between NS7 and NS8
- **Network Testing**: Verify connectivity before starting migration:
  ```bash
  # From NS7, test VPN port connectivity
  nc -zv <ns8-leader-fqdn> 55820
  ```

### DNS Requirements

Proper DNS configuration is critical for NethVoice migration:

- **DNS Server Access**: You must have administrative access to your authoritative DNS server
- **DNS Record Management**: Ability to create and modify DNS records

#### FQDNs Required for NethVoice

You need to plan and prepare **two separate FQDNs**:

| FQDN Purpose | Example | Description |
|--------------|---------|-------------|
| **NethVoice Administration** | `nethvoice.example.com` | Access to NethVoice administration interface. You can use this FQDN also for the proxy if your are going to install only one NethVoice instance. |
| **NethVoice CTI** | `cti.example.com` | Access to NethVoice CTI web application |

:::warning FQDN Planning
Plan these FQDNs carefully before starting migration. You'll need to provide them during the migration process, and DNS records must be updated after migration completes.
:::

If you are consolidating multiple NethVoice instances behind a single proxy, you will need also to plan an additional FQDN for the proxy itself, like `proxy.example.com`.

#### DNS Record Types

You'll need to create or update:
- **A Records**: Pointing to the NS8 node IP address
- **CNAME Records** (optional): If using aliases

#### DNS Propagation

- Allow 24-48 hours for DNS propagation after updating records
- Consider using low TTL values before migration to speed up propagation
- Test DNS resolution from multiple locations after updating

## Account Provider Prerequisites

Account provider configuration depends on your current NS7 setup.

### Local Account Provider (OpenLDAP or Samba AD)

If NS7 uses a local account provider:

#### OpenLDAP
- **Domain Name**: Choose a unique domain name for the NS8 cluster
- **Renaming Allowed**: The domain can be renamed during the connection process
- **No Conflicts**: Ensure the chosen name doesn't conflict with existing NS8 domains

#### Active Directory (Samba)
- **Domain Name Fixed**: AD domain names cannot be changed during migration
- **Pre-check Required**: Verify your AD domain name doesn't conflict with existing NS8 domains
- **Unique Name**: The domain name must be unique within the NS8 cluster

:::info Temporary External Domain
During migration, a temporary external user domain is created in NS8 to allow migrated applications to access the NS7 account provider. This is automatically removed once the account provider migration completes.
:::

### Remote Account Provider

If NS7 uses a remote account provider (external LDAP/AD):

1. **Matching Configuration Required**: NS8 must have an external user domain configured that matches your NS7 setup
2. **BaseDN Matching**: The NS8 external domain must match the NS7 BaseDN
   
   **Example**:
   - NS7 BaseDN: `dc=directory,dc=nh`
   - NS8 domain name must be: `directory.nh`

3. **Same LDAP Database**: The NS8 external user domain must point to the same LDAP database as NS7
4. **Cluster-wide Access**: All nodes in the NS8 cluster must be able to reach the LDAP database
5. **Future Accessibility**: Ensure the LDAP database will remain accessible after NS7 decommission

:::warning External Provider Setup
Configure the external user domain in NS8 **before** starting the migration. Refer to the [Account Provider Configuration](https://docs.nethserver.org/projects/ns8/en/latest/user_domains.html) guide.
:::

## Data Preparation

### Backup Strategy

**Create a complete backup before migration**:

Use NS7 backup module or your preferred backup solution to execute a full system backup.

:::warning Backup is Mandatory
Never proceed with migration without a complete, verified backup. Test your backup restoration procedure before starting.
:::

### Resource Planning

Estimate the resources needed for migration:

#### Disk Space Calculation

Calculate required disk space on NS8:

| Data Type | Location on NS7 | Typical Size |
|-----------|-----------------|--------------|
| **Call Recordings** | `/var/spool/asterisk/monitor/` | Varies (can be 10GB - 500GB+) |
| **Audio Files** | `/var/lib/asterisk/sounds/custom/` | 100MB - 1GB |
| **CDR Database** | MySQL database | 500MB - 10GB+ |
| **Voicemail** | `/var/spool/asterisk/voicemail/` | 1GB - 20GB+ |
| **Configuration** | Various | < 100MB |

Check your actual usage:
```bash
# On NS7, check recording size
du -sh /var/spool/asterisk/monitor/

# Check voicemail size
du -sh /var/spool/asterisk/voicemail/

# Check CDR database size
mysql -e "SELECT table_schema AS 'Database', 
ROUND(SUM(data_length + index_length) / 1024 / 1024, 2) AS 'Size (MB)' 
FROM information_schema.TABLES 
WHERE table_schema = 'asteriskcdrdb' 
GROUP BY table_schema;"
```

#### Network and Time Planning

- **Network Bandwidth**: Higher bandwidth reduces sync time
- **Initial Sync**: Can take several hours depending on data volume
- **Incremental Syncs**: Subsequent syncs are faster (only changes)
- **Final Cutover**: Plan 30 minutes to 2 hours downtime for final migration

:::tip Minimize Downtime
Perform multiple data synchronizations before the final cutover. This minimizes the final downtime window as only changed data needs to be transferred.
:::

## Pre-Migration Planning Checklist

Complete this checklist before starting the migration:

### System Preparation
- [ ] NS7 system accessible via SSH and Cockpit
- [ ] NS7 fully updated to latest version
- [ ] NS7 NethVoice running without errors
- [ ] NS8 cluster installed and operational
- [ ] NS8 cluster accessible via web interface
- [ ] NethVoice Proxy installed on destination node (recommended)

### Network Preparation
- [ ] Network connectivity verified between NS7 and NS8
- [ ] VPN port 55820 accessible from NS7 to NS8
- [ ] NS8 leader node FQDN resolves correctly from NS7
- [ ] Firewall rules reviewed and adjusted if needed

### DNS Preparation
- [ ] Administrative access to DNS server confirmed
- [ ] Two FQDNs chosen for NethVoice and CTI
- [ ] DNS update procedure documented
- [ ] TTL values reduced (optional, for faster propagation)

### Account Provider Preparation
- [ ] Account provider type identified (local/remote, OpenLDAP/AD)
- [ ] Domain name conflicts checked
- [ ] For remote provider: External domain configured in NS8
- [ ] Domain name uniqueness verified

### Data Preparation
- [ ] Complete backup of NS7 system created
- [ ] Backup verification completed
- [ ] Disk space requirements calculated
- [ ] NS8 has sufficient disk space available
- [ ] Data volume estimates documented

### Schedule and Communication
- [ ] Downtime window scheduled
- [ ] Users notified of upcoming migration
- [ ] Support team briefed on migration schedule
- [ ] Rollback plan documented
- [ ] Emergency contact list prepared

### Documentation
- [ ] Current configuration documented
- [ ] Extension list exported
- [ ] Trunk credentials recorded (securely)
- [ ] Custom configurations noted
- [ ] Network diagram updated

## Additional Resources

Before proceeding, review these resources:

- **[NethServer 8 Installation Guide](/docs/administrator-manual/install/nethserver)** - Complete NS8 setup
- **[NethVoice Proxy Installation](/docs/administrator-manual/install/nethvoice_proxy)** - Proxy setup and configuration
- **[Official NS8 Migration Guide](https://docs.nethserver.org/projects/ns8/en/latest/migration.html)** - General NS8 migration procedures
- **[Account Provider Configuration](https://docs.nethserver.org/projects/ns8/en/latest/user_domains.html)** - User domain setup in NS8

## Next Steps

Once all prerequisites are met and the checklist is complete, proceed to:

➡️ **[Start Migration](./start_migration)** - Begin the migration process

:::info Questions or Issues?
If you encounter any issues during preparation, consult the [NethServer community forums](https://community.nethserver.org/) or contact Nethesis support before proceeding.
:::

