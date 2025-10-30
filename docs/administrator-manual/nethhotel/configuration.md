---
title: NethHotel Configuration & Management
sidebar_position: 1
---

# NethHotel

NethHotel is a specialized module of NethVoice designed for the management of extensions properly configured as hotel rooms. It provides comprehensive features for managing guest communications, billing, and property management system integration.

By default, access to NethHotel is granted to the admin user.

## Configuration

### Enabling NethHotel

NethHotel can be enabled within the NethVoice instance configuration:

1. Access the NethVoice applications inside NethServer
2. Go to the **Settings** page
3. Check the **Enable Hotel module** option
4. (Optional) Specify the address and port of the FIAS server if using PMS integration
5. Save the changes

### PBX Configuration

After enabling the NethHotel module, some configurations are required on the NethVoice side:

1. **Create Outbound Routes**
   - In the advanced interface of NethVoice, go to **Connectivity > Outbound Routes**
   - Create a dedicated outbound route for hotel rooms
   - Use a prefix (typically `0`) and place it at the end of the route list
   - Click **Save** and **Apply Configuration**

2. **Configure Hotel Profile**
   - From the NethVoice wizard page, access the Hotel profile
   - Enable the newly created outbound route

3. **Add Room Extensions**
   - Add room extensions to the hotel profile using the NethVoice configuration panel or the Multiple Extension Management tool
   - All extensions included in the hotel profile will automatically be managed by NethHotel

### Accessing NethHotel

The NethHotel application is accessible at:
```
https://<nethvoice_domain>/freepbx/hotel/rooms.php
```

It can also be accessed from the NethVoice administrator wizard: **Administration** → **Advanced (freepbx)** → **Applications** → **NethHotel**

## How to Configure the PBX

We recommend the following configuration:

### Room Extensions

- All room extensions must be added to the hotel profile via the Configurations section or by using the Multiple Extension Management application

### Service Extensions

- Service extensions (such as reception) should **not** be added to the hotel profile
- Configure them as standard extensions following your hotel's numbering policy
- Example: If room extensions range from 201 to 299, set reception as 200 or 300
- Allow rooms to call reception by configuring a speed dial number (see [Speed Dial Numbers](#speed-dial-numbers))
- Service extensions can call each other directly

### Outbound Routes

- Use a separate Outbound Route **without** a prefix for service extensions
- This should be different from the route used for room extensions

## Phone Feature Codes

In the NethVoice PBX management interface, under **Service Codes**, you can find codes to use NethHotel features directly from the phones.

### Example Feature Codes

Add an extra charge to a room:
```
*33 + Room Extension + # + Extra ID + # + Quantity
```

**Example:** `*33201#99#3` charges three units of extra code 99 to room 201

Set a wake-up call (guest dialed):
```
977
```

## Room Management

### Room Status Display

On the main page, all configured extensions are listed in tabs based on the numeric value of the callgroup field (configured in NethVoice).

Room status is indicated by color:

| Color | Status | Meaning |
|-------|--------|---------|
| Green | Available | Room is empty and ready for check-in |
| Red | Occupied | Guest has checked in |
| Yellow | Cleaning | Room requires cleaning |

### Accessing Room Functions

All available functions are presented directly within the room's panel. You can also use the contextual menu by right-clicking on a room.

## Wake-up Call

The wake-up call feature can be scheduled either as a one-time event or repeated over multiple days.

### For Guests

Guests can set a wake-up call for their room by dialing:
```
977
```

### From NethHotel Interface

Administrators can schedule wake-up calls for rooms through the NethHotel web interface.

## Groups

You can group multiple rooms into a single group to perform bulk operations:

- **Check-in/Check-out**: Perform these actions on all rooms in the group simultaneously
- **Wake-up Calls**: Schedule wake-up calls for all rooms in a group
- **Call Policies**: Define call policies for group members:
  - Enable calls between rooms
  - Enable calls between all rooms in group
  - Allow external calls

## Billing and Reporting

### Add an Extra

To add a charge to a room:

1. Open the room panel
2. Click the corresponding extra icon
3. The charge will be added to the room's bill

### Generate Reports

To generate a bill report for currently occupied rooms:

1. Click the report icon
2. The report includes:
   - Detailed list of all calls made from the room
   - All extras/charges applied to the room
   - Total amount summary in real time

## Rates

NethHotel includes a default set of call rates based on call type (e.g., mobile, local, long-distance, etc.).

### Managing Rates

- Modify existing rates according to your pricing policy
- Create new custom rates
- Enable or disable calls to specific number types (e.g., premium numbers, international)

## Extras

Extras are additional charges that can be assigned to rooms for services or items.

### Configuring Extras

Extras can be configured within the system and assigned to rooms:

- **Via Web Interface**: Use the NethHotel interface to add charges to rooms
- **Directly from Phone**: Guests or staff can dial feature codes (e.g., `*33`)

### Example

Charge three units of extra code 99 to room 201:
```
*33201#99#3
```

## Options

The general options section allows configuration of hotel-wide policies:

- **External Call Prefix**: Configuration of the prefix for making external calls
- **Extension Number Format**: Define how extensions are formatted
- **Calls Between Rooms**: Enable/disable inter-room calling
- **Group Calls**: Enable/disable calls between rooms in same group
- **External Calls**: Enable/disable external calls from rooms
- **Unchecked-in Room Calls**: Enable/disable calls from rooms without checked-in guests
- **Missed Wake-up Extension**: Extension to contact if a wake-up call is missed
- **Room Cleaning Feature**: Enable/disable the room cleaning status feature
- **Room Cleaning Status Code**: Code for updating room cleaning status
- **Language**: Default language for reception messages (acts as fallback language)

## Speed Dial Numbers

The Speed Dial Numbers section allows you to define shortcuts for quick calling:

### Basic Speed Dial

- Define shortcuts to quickly call predefined extensions
- **Example**: Dial `9` to reach the reception

### Conditional Speed Dial with Time Groups

You can associate a speed dial number with time groups configured in the NethVoice PBX:

- **Destination**: Where the call goes if the time condition is met
- **Otherwise**: Where the call goes if the time condition is not met

This allows different routing based on business hours (e.g., send to reception during day, answering service at night).

## Call History

Review all calls made from rooms using the History section:

### Filtering Options

- Filter by date range
- Filter by room number
- Search by called number

### Use Cases

- Verify call details for billing purposes
- Investigate unusual calling patterns
- Generate call reports for accounting

---

## FIAS Integration

NethHotel can be connected to a hotel Property Management System (PMS) for automated operations. See [FIAS Integration](./fias_integration) for complete details.
