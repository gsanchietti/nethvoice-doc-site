---
title: Provisioning
sidebar_position: 4
---

# Provisioning

Provisioning is an automated process that streamlines the deployment and configuration of communication devices in your NethVoice system. Instead of manually configuring each phone or gateway, provisioning allows NethVoice to automatically detect, identify, and configure devices with minimal manual intervention.

## What is Provisioning?

Provisioning involves the automatic deployment of configuration settings to IP phones and gateways connected to your NethVoice system. When a device boots up for the first time (or after a factory reset), it contacts NethVoice to retrieve its configuration. This process eliminates the need for hands-on configuration of each device and ensures consistent settings across your organization.

### Key Benefits

- **Rapid Deployment**: Configure multiple devices automatically without manual setup
- **Consistency**: All devices receive uniform configurations
- **Simplified Management**: Update device settings centrally from the NethVoice administration interface
- **Scalability**: Easily manage and provision devices as your organization grows
- **MAC Address Identification**: Devices are identified and tracked using their unique MAC addresses

## Provisioning Components

This section covers the complete provisioning workflow:

### [Phone Provisioning](phone_provisioning)
Learn how to identify phones, associate them with users, and configure automatic provisioning through supported methods (RPS and DHCP). Discover how to manage phone firmware updates and customize phone settings.

**Key Topics:**
- Phone identification using MAC addresses
- Associating phones with users
- Provisioning methods (RPS and DHCP)
- Phone configuration hierarchy
- Firmware upgrades
- Automatic updates

### [Supported Phones](supported_phones)
Browse the comprehensive list of supported phone models from major manufacturers including NethPhone, Fanvil, Yealink, Snom, and Gigaset. This section details firmware requirements and provisioning compatibility for each manufacturer.

**Featured Manufacturers:**
- NethPhone
- Fanvil
- Yealink
- Snom
- Gigaset

### [Gateway Provisioning](gateway_provisioning)
Configure gateways for ISDN, analog, and FXO connectivity. Unlike phones, gateways are provisioned via direct telnet connections, allowing real-time configuration uploads to online devices or pre-configuration files for later deployment.

**Key Topics:**
- Supported gateway models
- Gateway configuration parameters
- Direct connection configuration
- File-based configuration deployment

### [Supported Gateways](supported_gateways)
Review the list of supported gateway models from Grandstream and Patton, including FXS, FXO, BRI, and PRI variants. These gateways enable integration with traditional phone lines and legacy systems.

**Supported Brands:**
- Grandstream (FXS and analog models)
- Patton (BRI, PRI, and FXO Trinity models)

### [Provisioning Parameters](provisioning_parameters)
Understand all available provisioning parameters organized by functional categories. This comprehensive guide covers soft keys, line keys, expansion keys, screen and ringtone settings, preferences, LDAP phonebook configuration, and network settings.

**Configuration Areas:**
- Soft Keys and Line Keys
- Screen and Ringtone Customization
- Time and Language Settings
- Provisioning Schedule Management
- LDAP Directory Integration
- Network and VLAN Configuration
- Firmware Management
- Best Practices for Provisioning

## Provisioning Workflow

1. **Register Device MAC Address**: Enter the phone or gateway MAC address into NethVoice
2. **Associate with User**: Link the device to a user account (phones only)
3. **Generate Configuration**: NethVoice creates a unique provisioning URL
4. **Device Boot**: Device powers on and retrieves its configuration
5. **Configuration Applied**: Settings are automatically applied to the device
6. **Ongoing Management**: Update settings centrally; changes push to devices

## Next Steps

- **New to Provisioning?** Start with [Phone Provisioning](phone_provisioning) to understand the basics
- **Setting up Phones?** Check [Supported Phones](supported_phones) for compatibility information
- **Configuring Gateways?** See [Gateway Provisioning](gateway_provisioning) for detailed instructions
- **Fine-tuning Settings?** Review [Provisioning Parameters](provisioning_parameters) for all available options

