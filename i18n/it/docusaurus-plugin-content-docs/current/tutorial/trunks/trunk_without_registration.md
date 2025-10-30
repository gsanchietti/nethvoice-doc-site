---
title: Trunk senza registrazione
sidebar_position: 1
tags: 
  - proxy
  - nethvoice ns8
  - nethvoice
  - nethvoice support
---

# Trunk without registration

**Note:** Replace `X` with the module number. The commands only work from the master node as `root`.

To get the list of routes, run:
```bash
api-cli run module/nethvoice-proxyX/list-routes | jq
```

The output will look like the following:
```bash
[root@demo ~]# api-cli run module/nethvoice-proxy2/list-routes | jq
```

Warning: using user "cluster" credentials from the environment
```json
[
  {
    "domain": "voice.demo.net",
    "address": [
      {
        "uri": "sip:10.5.4.1:20107",
        "description": "nethvoice3"
      }
    ]
  },
  {
    "domain": "voice2.demo.net",
    "address": [
      {
        "uri": "sip:10.5.4.1:20140",
        "description": "nethvoice4"
      }
    ]
  }
]
```

From this command, you need the destination nethvoice's `uri` and its `description`.
```
[root@demo ~]# api-cli run module/nethvoice-proxyX/add-trunk -d  '{"rule":"07214055", "destination":{"uri":"sip:10.5.4.1:20107","description":"nethvoice3"}}'
```

where `07214055` is the root of the numbering and in `destination` you enter the data of the target nethvoice for the calls: `uri` and `description`. You can check the result with the command:
```
api-cli run module/nethvoice-proxyX/list-trunks | jq
```
The incoming call will appear as "anonymous", so from the NethVoice wizard go to "Advanced", then to the section "Settings --> Asterisk Sip Settings" and set the option "Allow Anonymous Inbound SIP Calls" to "Yes":

N.B. To delete the rule if no longer needed:
```
api-cli run module/nethvoice-proxyX/remove-trunk -d '{"rule":"07214055"}'         
```
