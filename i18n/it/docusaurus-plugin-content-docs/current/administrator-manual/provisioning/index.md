---
title: Provisioning
sidebar_position: 4
---

# Provisioning

Provisioning è un processo automatizzato che semplifica la distribuzione e la configurazione dei dispositivi di comunicazione nel tuo sistema NethVoice. Invece di configurare manualmente ogni telefono o gateway, il provisioning consente a NethVoice di rilevare, identificare e configurare automaticamente i dispositivi con un intervento manuale minimo.

## Che cos'è il Provisioning?

Il provisioning implica la distribuzione automatica delle impostazioni di configurazione ai telefoni IP e ai gateway collegati al sistema NethVoice. Quando un dispositivo si avvia per la prima volta (o dopo un reset di fabbrica), contatta NethVoice per recuperare la sua configurazione. Questo processo elimina la necessità di configurazione manuale di ogni dispositivo e garantisce impostazioni coerenti in tutta l'organizzazione.

### Vantaggi principali

- **Distribuzione rapida**: Configura automaticamente più dispositivi senza configurazione manuale
- **Coerenza**: Tutti i dispositivi ricevono configurazioni uniformi
- **Gestione semplificata**: Aggiorna le impostazioni dei dispositivi centralmente dall'interfaccia di amministrazione NethVoice
- **Scalabilità**: Gestisci e provisioning facilmente i dispositivi man mano che l'organizzazione cresce
- **Identificazione indirizzo MAC**: I dispositivi vengono identificati e tracciati utilizzando i loro indirizzi MAC univoci

## Componenti del Provisioning

Questa sezione copre il flusso di lavoro completo del provisioning:

### [Phone Provisioning](phone_provisioning)
Scopri come identificare i telefoni, associarli agli utenti e configurare il provisioning automatico attraverso i metodi supportati (RPS e DHCP). Scopri come gestire gli aggiornamenti del firmware del telefono e personalizzare le impostazioni del telefono.

**Argomenti chiave:**
- Identificazione del telefono utilizzando indirizzi MAC
- Associazione di telefoni agli utenti
- Metodi di provisioning (RPS e DHCP)
- Gerarchia di configurazione del telefono
- Aggiornamenti del firmware
- Aggiornamenti automatici

### [Telefoni supportati](supported_phones)
Sfoglia l'elenco completo dei modelli di telefono supportati dai principali produttori tra cui NethPhone, Fanvil, Yealink, Snom e Gigaset. Questa sezione descrive i requisiti del firmware e la compatibilità del provisioning per ogni produttore.

**Produttori in primo piano:**
- NethPhone
- Fanvil
- Yealink
- Snom
- Gigaset

### [Gateway Provisioning](gateway_provisioning)
Configura gateway per la connettività ISDN, analogica e FXO. A differenza dei telefoni, i gateway vengono sottoposti a provisioning tramite connessioni telnet dirette, consentendo il caricamento della configurazione in tempo reale ai dispositivi online o ai file di configurazione preliminare per la successiva distribuzione.

**Argomenti chiave:**
- Modelli di gateway supportati
- Parametri di configurazione del gateway
- Configurazione della connessione diretta
- Distribuzione della configurazione basata su file

### [Gateway supportati](supported_gateways)
Esamina l'elenco dei modelli di gateway supportati da Grandstream e Patton, incluse le varianti FXS, FXO, BRI e PRI. Questi gateway consentono l'integrazione con le linee telefoniche tradizionali e i sistemi legacy.

**Marchi supportati:**
- Grandstream (modelli FXS e analogici)
- Patton (modelli Patton BRI, PRI e FXO Trinity)

### [Parametri di Provisioning](provisioning_parameters)
Comprendi tutti i parametri di provisioning disponibili organizzati per categorie funzionali. Questa guida completa copre soft key, line key, expansion key, impostazioni dello schermo e della suoneria, preferenze, configurazione della rubrica LDAP e impostazioni di rete.

**Aree di configurazione:**
- Soft Keys e Line Keys
- Personalizzazione dello schermo e della suoneria
- Impostazioni di ora e lingua
- Gestione della pianificazione del provisioning
- Integrazione della directory LDAP
- Configurazione di rete e VLAN
- Gestione del firmware
- Best practice per il provisioning

## Flusso di lavoro del Provisioning

1. **Registra indirizzo MAC dispositivo**: Immetti l'indirizzo MAC del telefono o del gateway in NethVoice
2. **Associa all'utente**: Collega il dispositivo a un account utente (solo telefoni)
3. **Genera configurazione**: NethVoice crea un URL di provisioning univoco
4. **Avvio del dispositivo**: Il dispositivo si accende e recupera la sua configurazione
5. **Configurazione applicata**: Le impostazioni vengono applicate automaticamente al dispositivo
6. **Gestione continua**: Aggiorna le impostazioni centralmente; le modifiche vengono trasmesse ai dispositivi

## Passaggi successivi

- **Nuovo al provisioning?** Inizia con [Phone Provisioning](phone_provisioning) per comprendere le basi
- **Configurare i telefoni?** Controlla [Telefoni supportati](supported_phones) per le informazioni sulla compatibilità
- **Configurare i gateway?** Vedi [Gateway Provisioning](gateway_provisioning) per istruzioni dettagliate
- **Messa a punto delle impostazioni?** Esamina [Parametri di Provisioning](provisioning_parameters) per tutte le opzioni disponibili

