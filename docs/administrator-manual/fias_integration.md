---
title: FIAS Integration
sidebar_position: 13
---

# FIAS Integration

FIAS (Fidelio Interface Application Specification) integration enables NethHotel to connect with hotel Property Management Systems (PMS) such as Oracle Hospitality OPERA for seamless guest management and billing automation.

## Overview

NethHotel can be connected to a hotel Property Management System (PMS) compatible with the FIAS data exchange protocol. **NethVoice is Oracle certified**, ensuring smooth integration with Oracle Hospitality systems.

By connecting NethHotel to a compatible PMS, the following functions can be managed directly from the PMS interface:

- **Check-in**: Automatic activation of the room phone upon guest check-in
- **Check-out**: Automatic deactivation of the room phone upon guest check-out
- **Wake-up Call**: Schedule and monitor wake-up call requests and status reporting
- **Billing**: Automatic billing of calls made from the room
- **Extras/Minibar Billing**: Billing of minibar items and other extras, including via telephone feature codes
- **Language Settings**: Automatic configuration of guest's audio message language based on reservation language

## Oracle Certification

NethVoice has been certified by Oracle for FIAS protocol compatibility, ensuring:

- Reliable integration with Oracle Hospitality systems
- Compliance with FIAS protocol standards
- Support for standard Oracle workflow processes
- Regular compatibility verification with Oracle updates

## Supported Versions

### FIAS Protocol

| Component | Version |
|-----------|---------|
| **FIAS Protocol** | Fidelio Interface Application Specification (FIAS) 2.20.23 |

### Oracle Hospitality Components

| Component | Version |
|-----------|---------|
| **Oracle Hospitality OPERA** | 5.5 |
| **Oracle Hospitality Interface IFC8** | 8.14.7.0 |

### Oracle PMS Minimum Required Versions

The following are the minimum required versions (higher versions are also compatible):

| Product | Version |
|---------|---------|
| **Opera 5 PMS** | V5.0.03.03 E43 |
| **Opera 5 PMS** | V5.0.04.01 E24 |
| **Opera 5 PMS** | V5.0.04.02 E17 |
| **Opera 5 PMS** | V5.0.04.03 E10 |

## Configuration

### Enabling FIAS Integration

To enable FIAS integration with your NethHotel installation:

1. Access the NethVoice applications inside NethServer
2. Go to the **Settings** page
3. Check the **Enable Hotel module** option
4. Enter the **Hotel FIAS server host** (IP address or hostname of your PMS)
5. Enter the **Hotel FIAS server port** (typically port 7001 for Oracle OPERA)
6. Save the changes

### Prerequisites

Before configuring FIAS integration, ensure:

- Your hotel PMS is installed and running on the specified host and port
- Network connectivity between NethVoice and your PMS system
- Your PMS version meets the minimum required versions listed above
- Firewall rules allow communication between NethVoice and the PMS on the specified port
- FIAS protocol is enabled in your PMS configuration

## Data Synchronization

Once FIAS integration is enabled, the systems synchronize data in real-time:

### From PMS to NethVoice

- Guest check-in triggers room phone activation
- Guest check-out triggers room phone deactivation
- Guest language preferences are applied to room phones
- Wake-up call requests are processed

### From NethVoice to PMS

- Call detail records (CDR) are sent for billing purposes
- Extra charges (minibar, services) are recorded
- Wake-up call status and completion reports are sent
- Room availability status is updated

## Benefits of FIAS Integration

1. **Automated Guest Management**: Eliminate manual room phone activation/deactivation
2. **Accurate Billing**: Automatically synchronize call charges to guest bills
3. **Improved Guest Experience**: Guests receive phone service automatically upon check-in
4. **Reduced Administrative Work**: Streamline hotel operations through system integration
5. **Language Localization**: Automatically set phone messages in guest's language
6. **Complete Audit Trail**: Maintain detailed records of all calls and charges

## Troubleshooting FIAS Integration

### Connection Issues

**Problem**: NethVoice cannot connect to PMS
- **Solution**: Verify the FIAS server host and port are correct and the PMS is running
- Verify firewall rules allow TCP connection on the specified port
- Check network connectivity between systems: `telnet <fias_server_host> <port>`

### Synchronization Issues

**Problem**: Guest data is not syncing from PMS to NethVoice
- **Solution**: Verify FIAS integration is enabled in NethVoice settings
- Confirm your PMS version meets minimum requirements
- Check system logs for FIAS protocol errors
- Restart the NethVoice service after configuration changes

**Problem**: Call charges not appearing in PMS
- **Solution**: Verify NethHotel call billing is configured correctly
- Check that room extensions are properly configured in NethVoice
- Verify the PMS has billing rules configured for NethHotel integration

### Version Compatibility

**Problem**: FIAS compatibility errors with newer PMS versions
- **Solution**: Refer to the [Supported Versions](#supported-versions) section
- Contact your PMS vendor to confirm FIAS 2.20.23 compatibility
- Check NethVoice release notes for compatibility updates

## Best Practices

1. **Regular Testing**: Test FIAS integration in a test environment before production deployment
2. **Backup Strategy**: Maintain regular backups of both NethVoice and PMS configurations
3. **Monitoring**: Monitor FIAS logs regularly for synchronization issues
4. **Version Management**: Keep both systems updated to compatible versions
5. **Documentation**: Document your PMS connection details securely
6. **Support Access**: Maintain contact information for both NethVoice and PMS support teams

## Related Documentation

- [NethHotel Module Documentation](./nethhotel.md) - Complete NethHotel feature reference
- [Administration Settings](./administration.md) - General NethVoice administration
- [Hotel Configuration Guide](./nethhotel.md#how-to-configure-the-pbx) - Detailed PBX configuration for hotel deployments

## Further Information

For additional details about FIAS protocol specifications and Oracle Hospitality integration, refer to:

- [Oracle Hospitality OPERA Documentation](https://docs.oracle.com/en/industries/hospitality/opera/)
- [Fidelio Interface Application Specification (FIAS)](https://docs.oracle.com/en/industries/hospitality/opera/) - Official FIAS documentation

:::note
NethVoice FIAS support is maintained through ongoing Oracle Hospitality compatibility verification. For the latest supported versions and compatibility information, please refer to the official NethVoice release notes.
:::
