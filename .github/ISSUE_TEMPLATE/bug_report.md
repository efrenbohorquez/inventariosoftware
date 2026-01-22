name: 🐛 Bug Report
description: Reporta un error encontrado
title: "[BUG] "
labels: ["bug"]

body:
  - type: markdown
    attributes:
      value: |
        ¡Gracias por reportar este bug! Por favor, completa los detalles abajo.

  - type: textarea
    id: description
    attributes:
      label: Descripción del Bug
      description: Describe claramente qué está mal
      placeholder: El componente X no muestra Y...
    validations:
      required: true

  - type: textarea
    id: reproduce
    attributes:
      label: Pasos para Reproducir
      description: Proporciona pasos exactos para reproducir el problema
      placeholder: |
        1. Ir a...
        2. Hacer clic en...
        3. Ver error...
    validations:
      required: true

  - type: textarea
    id: expected
    attributes:
      label: Comportamiento Esperado
      description: ¿Qué debería pasar?
    validations:
      required: true

  - type: textarea
    id: actual
    attributes:
      label: Comportamiento Actual
      description: ¿Qué está pasando realmente?
    validations:
      required: true

  - type: textarea
    id: screenshots
    attributes:
      label: Screenshots
      description: Agrega screenshots si aplica

  - type: dropdown
    id: browser
    attributes:
      label: Browser
      options:
        - Chrome
        - Firefox
        - Safari
        - Edge
        - Otro

  - type: input
    id: os
    attributes:
      label: Sistema Operativo
      placeholder: Windows 10, macOS 13, Ubuntu 22.04...

  - type: textarea
    id: context
    attributes:
      label: Contexto Adicional
      description: Cualquier información que pueda ayudar
