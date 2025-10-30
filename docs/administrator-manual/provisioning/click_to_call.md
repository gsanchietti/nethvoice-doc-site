---
title: Click to Call
sidebar_position: 10
---

# Click to Call

## Overview

**Click-to-Call** is a powerful feature that enables users to initiate phone calls by simply clicking on a phone number displayed in applications, web pages, or customer data sources. This eliminates the need to manually dial numbers and streamlines the call initiation process.

When a user clicks on a phone number, NethVoice automatically identifies the device and routes the call through the appropriate phone system:

- **Web Phone users** → Direct call via NethVoice CTI interface
- **Desktop users** → Call via NethLink desktop application  
- **Physical phone users** → Call directed to their configured desk phone

:::info Key Benefit
Click-to-Call dramatically improves user efficiency by reducing the steps needed to make a call. Instead of copying a number and manually dialing it, users simply click and connect.
:::

## Supported Scenarios

Click-to-Call works in three different configurations depending on the user's phone device:

| Scenario | Device Type | Setup Required | Best For |
|----------|-------------|-----------------|----------|
| **Web Phone** | Browser-based | NethVoice CTI only | Remote workers, flexible locations |
| **Desktop Client** | NethLink + Physical phone | NethLink + Phone | Office workers with desk phones |
| **Physical Phone** | Provisioned SIP phone | NethLink + Phone provisioning | Standard office deployments |

---

## 1. Web Phone (NethVoice CTI)

### What It Is

The Web Phone is a software-based telephone client built directly into the **NethVoice CTI** web interface. It runs entirely in your web browser and requires no additional software installation.

### How It Works

When you click on a phone number within NethVoice CTI:
1. The system detects the click event
2. NethVoice interprets it as a call initiation
3. The call is routed through NethVoice to your phone system
4. You answer the call directly in your browser

### Setup Requirements

✅ **Already included** - No additional setup needed!

Click-to-Call is automatically available for all NethVoice CTI users within the web interface.

### Where to Click

Phone numbers can be clicked in:
- **Contact phonebook** (address book)
- **Call history** (recent calls)
- **Customer cards** (CRM data)
- **Company directory** (user listing)
- **Any displayed phone number** in NethVoice CTI

### Advantages

- ✅ No additional software installation
- ✅ Works on any device with a web browser
- ✅ Call directly from browser
- ✅ Mobile-friendly
- ✅ Accessible from anywhere

### Limitations

- Calls are limited to the Web Phone client only
- Cannot transfer calls to physical phones
- May have limitations if audio/microphone not available

---

## 2. Desktop Client (NethLink)

### What It Is

**NethLink** is a desktop application for Windows and Mac that extends Click-to-Call functionality to your entire operating system. Once installed and configured, clicking phone numbers anywhere on your desktop (emails, web browsers, documents, etc.) will automatically initiate calls through your configured phone.

### How It Works

When you click a phone number on your computer:
1. NethLink detects the click on a `tel:` or `callto:` protocol link
2. NethLink captures the phone number
3. NethLink routes the call to your configured device
4. Your phone rings and you can answer

### Prerequisites

Before using Click-to-Call with NethLink, you must:

1. **Install NethLink** on your Windows or Mac computer
2. **Configure NethLink** with your NethVoice credentials
3. **Have an administrator enable NethLink** for your user account in NethVoice
4. **Select a primary phone device** (Web Phone, desktop phone, or physical phone)

### Setup Instructions

#### Step 1: Install NethLink

- Download NethLink for [Windows](https://nethserver.github.io/nethlink/) or [Mac](https://nethserver.github.io/nethlink/)
- Install the application following standard installation procedures
- Launch NethLink on startup

#### Step 2: Enable for Your User (Administrator Task)

An NethVoice administrator must enable NethLink for your user account:

1. Open **NethVoice Administration**
2. Navigate to **Configuration** → **Users**
3. Select your user account
4. Enable **"Phone Link"** device
5. Save changes

#### Step 3: Configure NethLink

Open NethLink on your desktop and:

1. Enter your **NethVoice CTI login credentials**
2. Specify the **NethVoice server address** (FQDN or IP)
3. Select your **primary device** for calls
4. Test the connection

See the [NethLink Documentation](https://nethserver.github.io/nethlink/) for detailed configuration steps.

#### Step 4: Set as Default Protocol Handler

Configure your operating system to use NethLink for phone number clicks:

**Windows:**
1. Right-click on a `tel:` link in your browser
2. Select "Open with" → "Choose another application"
3. Select **NethLink** and check "Always use this app"

**Mac:**
1. Open **System Preferences** → **General**
2. Find "Default web browser" setting
3. Configure protocol handlers through Safari or Chrome settings

### Where to Click

Once configured, you can click phone numbers in:
- **Email clients** (Outlook, Gmail, Thunderbird)
- **Web browsers** (any `tel:` link)
- **Documents** (Word, PDF, Google Docs)
- **Contact managers** (Outlook Contacts, Google Contacts)
- **Any application** that supports phone number links

### Advantages

- ✅ Works system-wide across all applications
- ✅ Single-click calling from anywhere on desktop
- ✅ Seamless integration with familiar applications
- ✅ Calls to desktop phone or any configured device
- ✅ Professional efficiency boost

### Limitations

- Requires NethLink installation
- Requires administrator setup
- Desktop phone must be on same network or accessible via VPN

---

## 3. Physical Phone (Desk Phone)

### What It Is

For users with **provisioned physical phones** (desk phones configured through NethVoice provisioning), Click-to-Call works through **NethLink** to send the call to your physical phone.

### How It Works

When you click a phone number:
1. NethLink detects the `tel:` protocol
2. NethLink sends call initiation to NethVoice
3. NethVoice routes the call to your **physical phone**
4. Your desk phone rings
5. You answer the call on your physical phone

### Prerequisites

For physical phone Click-to-Call, you need:

1. **NethVoice CTI access** with active user account
2. **Physical phone provisioned** in NethVoice (registered with MAC address)
3. **Physical phone assigned to your user** in NethVoice
4. **NethLink installed and configured** on your desktop
5. **Your physical phone on same network** OR **accessible via VPN**
6. **Network connectivity** between your computer and phone

### Network Requirements

The most important requirement is **network connectivity between your computer and physical phone**:

- ✅ **Same LAN** - Direct network connection
- ✅ **Connected VPN** - Remote office connected via VPN
- ✅ **Direct IP path** - Networks with routing configured
- ❌ **Internet only** - Phone on internet, computer on different network (will NOT work)

:::warning Network Dependency
Click-to-Call to physical phones requires direct network communication. If you're working remotely and your phone is in the office without VPN access, this scenario won't work.
:::

### Setup Instructions

#### Step 1: Ensure Phone is Provisioned

1. In **NethVoice Administration**, go to **Devices** → **Phones**
2. Verify your phone's **MAC address is registered**
3. Verify the phone's **model is correctly selected**

#### Step 2: Associate Phone with Your User

1. Go to **Configuration** → **Users**
2. Select your user account
3. In **Associated Devices**, assign your **physical phone**
4. Ensure the phone is set as a device
5. Save changes

#### Step 3: Install and Configure NethLink

Follow the desktop client setup instructions above to:
- Install NethLink
- Configure with your credentials
- Select your physical phone as the primary device

#### Step 4: Test Click-to-Call

1. Open NethVoice CTI
2. Find a phone number (in phonebook or call history)
3. Click the phone number
4. Verify your physical phone rings
5. Answer the call

### Advantages

- ✅ Professional desk phone experience
- ✅ Familiar physical phone for calls
- ✅ Supports all phone features (transfer, hold, etc.)
- ✅ System-wide Click-to-Call across desktop

### Limitations

- Requires provisioned phone in NethVoice
- Requires network connectivity to phone
- Not suitable for fully remote workers (phone in office)
- Requires NethLink installation

---

## Troubleshooting

### Web Phone Click-to-Call Not Working

**Problem:** Clicking numbers in NethVoice CTI doesn't initiate calls

**Solutions:**
- Verify you're logged into **NethVoice CTI**
- Check your **browser allows microphone** access
- Ensure **Web Phone device is enabled** for your user
- Clear browser cache and reload CTI
- Try a different browser

### NethLink Not Intercepting Phone Clicks

**Problem:** Clicking `tel:` links doesn't launch NethLink

**Solutions:**
- Verify **NethLink is running** (check system tray)
- Reinstall NethLink to register protocol handler
- Manually set NethLink as default for `tel:` protocol
- Check that **NethLink is enabled** for your user in NethVoice
- Verify **NethLink can connect** to NethVoice server (test connection)

### Physical Phone Not Ringing

**Problem:** Click-to-Call sends call but phone doesn't ring

**Solutions:**
- Verify **phone is registered** in NethVoice
- Check **phone is assigned to your user** account
- Verify **network connectivity** between computer and phone
- Check **phone is powered on** and has network connection
- Test phone manually to confirm it's working
- Verify **phone and computer can ping** each other
- Check firewall rules (if applicable)

### No Audio After Call Connects

**Problem:** Call connects but no audio is heard

**Solutions:**
- Check **browser microphone settings** (for Web Phone)
- Verify **audio device is selected** in system settings
- Test microphone works in system settings
- Check browser permissions for microphone access
- Try disabling background noise cancellation
- Restart NethLink or browser

---

## Best Practices

### For Administrators

- ✅ Enable NethLink for users who need it
- ✅ Ensure phones are properly provisioned
- ✅ Verify network connectivity for remote workers
- ✅ Test Click-to-Call functionality after configuration
- ✅ Document configuration procedures for users

### For Users

- ✅ Use Web Phone for simple browser-based calls
- ✅ Install NethLink if you need system-wide Click-to-Call
- ✅ Keep NethLink running for automatic interception
- ✅ Report network issues if phone doesn't ring
- ✅ Test functionality in your environment

---

## Summary

| Method | Setup | Best For | Limitations |
|--------|-------|----------|-------------|
| **Web Phone** | Built-in | Browser-based calling, remote workers | CTI interface only |
| **NethLink** | Simple | Desktop Click-to-Call anywhere | Requires installation |
| **Physical Phone** | Moderate | Professional office deployments | Network dependent |

Choose the method that best fits your organization's needs and deployment model.
