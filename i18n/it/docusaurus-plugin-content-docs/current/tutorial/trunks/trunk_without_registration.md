---
title: Trunk senza registrazione
tags:
  - proxy
  - nethvoice ns8
  - nethvoice
  - assistenza nethvoice
---

## Comandi per configurare un trunk senza registrazione sul proxy

**Nota:** Sostituire `X` con il numero del modulo. I comandi funzionano solo dal nodo master come `root`.

Per ottenere la lista delle rotte, eseguire:
```bash
api-cli run module/nethvoice-proxyX/list-routes | jq
```

L'output sarà simile al seguente:
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

Da questo comando mi servono la uri del nethvoice di destinazione e la sua descrizione.
```
[root@demo ~]# api-cli run module/nethvoice-proxyX/add-trunk -d  '{"rule":"07214055", "destination":{"uri":"sip:10.5.4.1:20107","description":"nethvoice3"}}'
```

dove 07214055 è la radice delle numerazioni e in destination vado a mettere i dati del nethvoice destinatario delle chiamate uri e description      Potete controllare il risultato con il comando:
```
api-cli run module/nethvoice-proxyX/list-trunks | jq
   ```
La chiamata in arrivo entrerà come "anonymous", quindi dal wizard di NethVoice andare in "Avanzate", recarsi nella sezione "Settings --> Asterisk Sip Settings" e postare su "Yes"  l'opzione Allow Anonymous Inbound SIP Calls:
   
N.B. Per eliminare la regola se non più necessaria:
```
api-cli run module/nethvoice-proxyX/remove-trunk -d '{"rule":"07214055"}'         
```
