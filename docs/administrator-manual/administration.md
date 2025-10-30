---
title: Administration
sidebar_position: 10
---

# Administration

The Administration section provides access to essential management functions for the NethVoice system, including language configuration, settings management, and advanced interface access.

## Languages

In the Languages menu, you can set the default language for NethVoice. This language will be used throughout the administration interface and affects how content is displayed to users.

The available languages depend on the language packs installed in your NethVoice instance.

## Settings

The Settings page allows you to manage various aspects of the NethVoice configuration.

### Password Management

- **Password**: You can change the password for the admin user who is dedicated to accessing the NethVoice web interface.

To change the administrator password:

1. Navigate to **Administration > Settings**
2. Locate the **Password** field
3. Enter a new password that meets your security requirements
4. Click **Save** to apply the changes

:::warning
Ensure that you use a strong password to protect your NethVoice instance from unauthorized access.
:::

## Advanced

The Advanced section provides direct access to the NethVoice advanced interface. This section grants access to the underlying FreePBX administration panel and other advanced configuration options.

:::warning
The Advanced section contains powerful configuration tools. Make changes only if you have a thorough understanding of NethVoice and FreePBX system architecture. Incorrect configuration in the advanced interface may cause system instability.
:::

### When to Use the Advanced Interface

Access the Advanced interface when you need to:

- Configure advanced FreePBX settings not available in the main NethVoice wizard
- Manage system-level configurations
- Access reporting and monitoring tools
- Perform system maintenance and troubleshooting
- Configure custom extensions and applications

### Best Practices

- Always make a system backup before making advanced configuration changes
- Document any custom configurations you make for future reference
- Test configuration changes in a development environment if possible
- Consult the FreePBX documentation for complex configuration tasks
