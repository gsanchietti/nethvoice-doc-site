---
title: Guida introduttiva
sidebar_position: 2
---

# Guida introduttiva a NethVoice

Questa guida ti accompagnerà nei passaggi fondamentali per configurare NethVoice sul tuo sistema.

## 1. Installa NethServer 8

Inizia installando NethServer 8 sul tuo server.  
- Scarica e segui le istruzioni di installazione dalla [guida ufficiale](https://docs.nethserver.org/projects/ns8/en/latest/install.html).
- Dopo l’installazione, accedi all’interfaccia web su `https://<server_ip_or_fqdn>/cluster-admin/` utilizzando:
  - **Nome utente:** `admin`
  - **Password:** `Nethesis,1234`
- Crea un cluster e assicurati che il server abbia un indirizzo IP statico e un FQDN valido.

## 2. Installa e configura NethVoice Proxy

NethVoice Proxy è necessario per abilitare l’accesso remoto sicuro ai servizi NethVoice.
- Installa il modulo NethVoice Proxy dal Software Center.
- Assegna un FQDN valido (es. `proxy.tuodominio.org`) e assicurati che il record DNS sia configurato.
- Configura l’interfaccia di rete e l’IP pubblico secondo necessità.
- È possibile installare un solo NethVoice Proxy per nodo.
- Per i dettagli, consulta la [documentazione di NethVoice Proxy](https://raw.githubusercontent.com/NethServer/ns8-docs/refs/heads/main/nethvoice_proxy.rst).

## 3. Installa il modulo NethVoice

Dopo aver configurato il proxy, puoi installare il modulo NethVoice:
- Apri il **Software Center** dall’interfaccia web.
- Cerca l’applicazione NethVoice e clicca su **Installa**.
- Per maggiori informazioni, consulta la [documentazione del Software Center]https://docs.nethserver.org/projects/ns8/en/latest/software_center.html#).

## 4. Configura NethVoice

Dopo l’installazione, configura la tua istanza NethVoice:
- Segui la [guida di configurazione di NethVoice](https://docs.nethserver.org/projects/ns8/en/latest/nethvoice.html) per istruzioni dettagliate.
- Completa la configurazione iniziale, aggiungi utenti e imposta l’ambiente telefonico secondo le tue esigenze.

---

Per ogni passaggio, fai riferimento alla documentazione collegata per istruzioni dettagliate e complete.
