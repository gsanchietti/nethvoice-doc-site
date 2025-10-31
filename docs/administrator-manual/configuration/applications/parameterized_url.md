---
title: Parameterized URLs
sidebar_position: 3
---


Allows the end user to invoke a parameterized URL upon receiving a call. The URL will be parameterized with caller data and can be "opened" in one of the following four scenarios:

- Never
- When the incoming call is ringing
- When the incoming call is answered
- By clicking the appropriate button in the call management box

To create a URL, two pieces of information are required:

- The URL itself
- The selection of a user profile

The composition of the URL can be done using these parameters, which are populated for each call:

- *\$CALLER_NUMBER* (Caller Number)
- *\$CALLER_NAME* (Name associated by NethVoice to the caller number)
- *\$CALLED* (Called Number)
- *\$UNIQUEID* (Unique identifier of the call)

It is possible to enable the option "Only calls on queues" to activate the parameterized URL only for calls that ring in a queue.

All users who have that profile will be enabled to use the newly created URL.

:::note
- Only one URL can be associated with a profile.
- For the URL to be invoked, it is necessary for the end user to have enabled pop-up display in their browser!
:::
