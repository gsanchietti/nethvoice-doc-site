---
title: Introduzione
sidebar_position: 1
---

# NethVoice

NethVoice è un sistema di comunicazione completo che integra funzionalità voce, video e mobile.
Il modulo NethVoice è suddiviso in sette parti principali:

- [FreePBX](https://www.freepbx.org/): Interfaccia grafica web open source che gestisce [Asterisk](https://www.asterisk.org), un server VoIP e di telefonia.
- [NethVoice CTI Server](https://github.com/nethesis/nethcti-server): Demone che fornisce API per operazioni comuni di centralino e un canale WebSocket per ascoltare eventi in tempo reale.
- [NethVoice CTI Client](https://github.com/nethesis/nethcti): Applicazione web per gestire il centralino tramite comunicazione con il CTI Server.
- [NethVoice Report](https://github.com/nethesis/nethvoice-report): Sistema di reportistica CDR e code di [Asterisk](https://www.asterisk.org).
- [Janus](https://janus.conf.meetecho.com/): Server WebRTC.
- [MariaDB](https://mariadb.org/): Database relazionale open source molto diffuso.
- [Tancredi](https://nethesis.github.io/tancredi): Motore di provisioning telefoni ideale per installazioni via Internet.

NethVoice offre un set completo di funzionalità per la comunicazione unificata e la gestione PBX, tra cui:

- **Integrazione con FreePBX e Asterisk**: Interfaccia web per la gestione dei servizi di telefonia.
- **CTI Server e Client**: API e applicazioni web per operazioni di centralino e gestione utenti.
- **Reportistica**: Sistema di report CDR e code.
- **Supporto WebRTC**: Integrazione con Janus per comunicazioni video e web.
- **Integrazione Database**: Utilizzo di MariaDB per l’archiviazione dati.
- **Provisioning Telefoni**: Motore di provisioning automatico (Tancredi) per modelli supportati.
- **Supporto Multi-Istanza**: Possibilità di installare più istanze NethVoice sullo stesso nodo.
- **Gestione Proxy e Domini Utente**: Richiede configurazione di proxy e domini utente.
- **Configurazione Virtual Host**: FQDN dedicati per applicazioni web admin e CTI.
- **Integrazione Let's Encrypt**: Gestione automatica dei certificati SSL.
- **Gestione Utenti ed Estensioni**: Associazione utenti/estensioni, gestione utenti e password.
- **Gestione Trunk**: Configurazione gateway fisici e trunk VoIP (SIP, PJSIP).
- **Instradamento Inbound/Outbound**: Editor visuale dei flussi di chiamata e priorità personalizzabili.
- **Gestione Dispositivi**: Provisioning e gestione telefoni, impostazione password admin/utente, crittografia e preferenze.
- **Supporto Modelli e Dispositivi Personalizzati**: Gestione modelli, creazione modelli custom e configurazione impostazioni specifiche.
- **Gestione Gruppi e Profili**: Creazione gruppi utenti e profili permessi con accesso granulare alle funzionalità.
- **Sistema Permessi**: Controllo dettagliato su funzionalità telefoniche, rubrica, CDR, schede clienti, presenza, code e postazioni operatore.
- **Associazione Dispositivi**: Fino a 9 dispositivi per utente (webphone, app mobile, telefoni fisici).
- **Metodi di Provisioning**: Supporto RPS, DHCP e URL di provisioning manuale.
- **Gestione Firmware**: Caricamento e distribuzione aggiornamenti firmware ai telefoni.
- **Telefoni e Gateway Supportati**: Compatibilità con i principali brand (NethPhone, Fanvil, Yealink, Snom, Gigaset, Grandstream, Patton).
- **Parametri di Provisioning**: Configurazione softkey, linekey, tasti di espansione, schermo/suoneria, preferenze, rubrica LDAP e impostazioni di rete.
- **Click-to-Call**: Avvio chiamate da client web o desktop, con integrazione NethLink.
- **Provisioning Gateway**: Configurazione automatica e manuale per gateway supportati.
- **Dashboard**: Panoramica di utenti, dispositivi, trunk e relativi stati.
- **Applicazioni**: Creazione e gestione schede clienti, fonti rubrica e URL parametrizzati.
- **Integrazione Rubrica Esterna**: Importazione contatti da MySQL, CSV o script personalizzati.
- **URL Parametrizzati**: Attivazione URL personalizzati su eventi di chiamata con parametri dinamici.

È possibile installare più istanze NethVoice sullo stesso nodo dalla sezione `software_center-section`, ma il modulo richiede che il `NethVoice proxy <nethvoice_proxy-section>` sia già configurato e attivo.
