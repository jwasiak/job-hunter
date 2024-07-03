export const pl = {
  components: {
    Invoices :{
      label: {
        no: "Nr faktury",
        date: "Data",
        dueDate: "Termin zapłaty",
        value: "Wartość",
        paid: "Zapłacono",
        actions: "Akcje",
        addNewInvoice: "Utwórz nową fakturę",
      },
    },
  },
  labels: {
    dashboard: 'Pulpit',
    Settings: 'Konfiguracja',
    Users: 'Użytkownicy',
    confirm: 'Potwierdź',
    category: {
      ADVERTISEMENT: 'Reklama',
      SOCIAL_MEDIA: 'Media społecznościowe',
      BLOG: 'Blog',
      HOME_PAGE: 'Strona www',
      REFERENCES: 'Referencja',
      COMPANY_PAGE: 'Strona firmowa',
      FREELANCE: 'Portal dla freelancerów',
      JOBS: 'Portal dla poszukujących pracy',
    },
  },
  pages: {
    Help: 'Pomoc',
  },
  buttons: {
    changePassword: 'Zmień hasło',
  },
  properties: {
    createdAt: 'Utworzony',
    updatedAt: 'Zmieniony',
  },
  resources: {
    Contact: {
      labels: {
        Contact: 'Kontakty',
        selectTemplateToClipboard: 'Wybierz szablon aby skopiować go do schowka',
        'persons.email': 'E-mail',
      },
      actions: {
        list: 'Kontakty',
        show: 'Podgląd',
        edit: 'Edycja',
        delete: 'Usuń',
        attachments: 'Załączniki',
        convert: 'Konwertuj',
      },
      messages: {
        areYouSureToConvertThisContactIntoProspect: 'Czy na pewno chcesz przekształcić ten kontakt na prospekta?'
      },
      properties: {
        company: 'Firma',
        email: 'E-mail',
        phone: 'Telefon',
        url: 'Adres www',
        info: 'Informacje dodatkowe',
        sourceId: 'Źródło',
        businessId: 'Branża',
        statusCode: 'Status',
        nextActivityCode: 'Następne działanie',
        nextActivityDate: 'Planowana data działania',
        'persons.name': 'Imię i nazwisko',
        'persons.email': 'E-mail',
        'persons.phone': 'Telefon',
        'persons.addNewItem': 'Dodaj nową osobę',
        'activities.date': 'Data',
        'activities.type': 'Działanie',
        'activities.title': 'Tytuł',
        'activities.comment': 'Komentarz',
        'activities.addNewItem': 'Dodaj nowe działanie',
        totalActivities: 'Ilość akcji',
      },
    },
    Prospect: {
      labels: {
        Prospect: 'Prospekci',
      },
      actions: {
        list: 'Prospekci',
        show: 'Podgląd',
        edit: 'Edycja',
        delete: 'Usuń',
        attachments: 'Załączniki',
        convert: 'Konwertuj',
      },
      messages: {
        areYouSureToConvertThisProspectIntoCustomer: 'Czy na pewno chcesz przekształcić tego prospekta w klienta?'
      },
      properties: {
        company: 'Firma',
        email: 'E-mail',
        sourceId: 'Źródło',
        statusCode: 'Status',
        businessId: 'Branża',
        'address.postalCode': 'Post code',
        'address.city': 'City',
        'address.address': 'Address',
        'address.country': 'Country',
        nextActivityCode: 'Następne działanie',
        nextActivityDate: 'Planowana data działania',
        'activities.date': 'Data',
        'activities.type': 'Działanie',
        'activities.title': 'Tytuł',
        'activities.comment': 'Komentarz',
        'activities.addNewItem': 'Dodaj nowe działanie',
        totalActivities: 'Ilość akcji',
        'notes.date': 'Data',
        'notes.title': 'Tytuł',
        'notes.content': 'Treść',
        'notes.addNewItem': 'Dodaj nową notatkę',
      },
    },
    Customer: {
      labels: {
        Customer: 'Klienci',
      },
      actions: {
        list: 'Klienci',
        show: 'Podgląd',
        edit: 'Edycja',
        delete: 'Usuń',
      },
      properties: {
        company: 'Firma',
        email: 'E-mail',
        phone: "Telefon",
        url: "Strona www",
        taxId: "NIP",
        sourceId: 'Źródło',
        businessId: 'Branża',
        statusCode: 'Status',
        totalSales: 'Łączna sprzedaż',
        totalBalance: 'Saldo',
        nextActivityCode: 'Następne działanie',
        nextActivityDate: 'Planowana data działania',
        'activities.date': 'Data',
        'activities.type': 'Działanie',
        'activities.title': 'Tytuł',
        'activities.comment': 'Komentarz',
        'activities.addNewItem': 'Dodaj nowe działanie',
        totalActivities: 'Ilość akcji',
        'address.postalCode': 'Kod pocztowy',
        'address.city': 'Miejscowość',
        'address.address': 'Adres',
        'address.country': 'Kraj',
        'persons.name': 'Imię i nazwisko',
        'persons.email': 'E-mail',
        'persons.phone': 'Telefon',
        'notes.date': 'Data',
        'notes.title': 'Tytuł',
        'notes.content': 'Treść',
        'notes.addNewItem': 'Dodaj nową notatkę',
      },
    },
    Invoice: {
      labels: {
        Invoice: 'Faktury',
        unit: {
          ANY: '-',
          HOURS: 'godz.',
          KM: 'km',
          PIECES: 'szt.',
        },
      },
      actions: {
        list: 'Faktury',
        show: 'Podgląd',
        edit: 'Edycja',
        delete: 'Usuń',
      },
      properties: {
        invoiceNo: 'Numer faktury',
        customerId: 'Klient',
        invoiceDate: 'Data faktury',
        invoiceValue: 'Wartość',
        dueDate: 'Termin zapłaty',
        note: 'Uwagi',
        paid: 'Zapłacono',
        'items.name': 'Nazwa',
        'items.quantity': 'Ilość',
        'items.unit': 'Jednostka',
        'items.price': 'Cena',
        'items.value': 'Wartość',
        'items.addNewItem': 'Dodaj pozycję faktury',
        'payments.date': 'Data płatności',
        'payments.source': 'Sposób zapłaty',
        'payments.value': 'Kwota',
        'payments.addNewItem': 'Dodaj płatność',
        balance: 'Saldo',
      },
    },
    Attachments: {
      labels: {
        Attachments: 'Załączniki',
      },
      actions: {
        list: 'Załączniki',
        show: 'Podgląd',
        edit: 'Edycja',
        delete: 'Usuń',
      },
      properties: {
        company: 'Firma',
        totalAttachments: 'Ilość załączników',
      },
    },
    Log: {
      labels: {
        Log: 'Logi',
      },
      actions: {
        list: 'Logi',
        show: 'Podgląd',
      },
      properties: {
        user: 'Id użytkownika',
        recordId: 'Id rekordu',
        resource: 'Nazwa zasobu',
        action: 'Operacja',
      },
    },
    ActivityType: {
      labels: {
        ActivityType: 'Działania',
      },
      actions: {
        list: 'Działania',
        show: 'Podgląd',
        edit: 'Edycja',
        delete: 'Usuń',
      },
      properties: {
        code: 'Kod',
        name: 'Nazwa',
        isActive: 'Aktywny',
      },
    },
    CompanyStatus: {
      labels: {
        CompanyStatus: 'Statusy',
      },
      actions: {
        list: 'Statusy',
        show: 'Podgląd',
        edit: 'Edycja',
        delete: 'Usuń',
      },
      properties: {
        code: 'Kod',
        name: 'Nazwa',
        order: 'Kolejność',
      },
    },
    Source: {
      labels: {
        Source: 'Źródła',
      },

      actions: {
        list: 'Źródła',
        show: 'Podgląd',
        edit: 'Edycja',
        delete: 'Usuń',
      },
      properties: {
        name: 'Nazwa',
      },
    },
    Link: {
      labels: {
        Link: 'Linki',
        url: 'Strona www',
      },
      actions: {
        list: 'Linki',
        show: 'Podgląd',
        edit: 'Edycja',
        delete: 'Usuń',
      },
      properties: {
        url: 'Strona www',
        description: 'Opis',
        category: 'Kategoria',
      },
    },
    User: {
      labels: {
        User: 'Użytkownicy',
        role: {
          ADMIN: 'Administrator',
          USER: 'Użytkownik',
        },
        active: {
          false: 'Nie',
          true: 'Tak',
        },
      },
      actions: {
        list: 'Użytkownicy',
        show: 'Podgląd',
        edit: 'Edycja',
        delete: 'Usuń',
      },
      properties: {
        fullName: 'Imię i nazwisko',
        firstName: 'Imię',
        lastName: 'Nazwisko',
        email: 'E-mail',
        role: 'Rola',
        name: 'Imię',
        surname: 'Nazwisko',
        newPassword: 'Nowe hasło',
        active: 'Aktywny',
      },
    },
    Template: {
      labels: {
        Template: 'Szablony',
      },
      actions: {
        list: 'Szablony',
        show: 'Podgląd',
        edit: 'Edycja',
        delete: 'Usuń',
      },
      properties: {
        name: 'Nazwa',
      },
    },
    Business: {
      labels: {
        Business: 'Branże',
      },
      actions: {
        list: 'Branże',
        show: 'Podgląd',
        edit: 'Edycja',
        delete: 'Usuń',
      },
      properties: {
        name: 'Nazwa',
      },
    },
  },
}
