name: ✨ Feature Request
description: Sugiere una nueva funcionalidad
title: "[FEATURE] "
labels: ["enhancement"]

body:
  - type: markdown
    attributes:
      value: |
        ¡Nos encantaría escuchar tus ideas! Por favor, describe la funcionalidad que deseas.

  - type: textarea
    id: description
    attributes:
      label: Descripción de la Funcionalidad
      description: Describe la funcionalidad que deseas
      placeholder: Me gustaría poder...
    validations:
      required: true

  - type: textarea
    id: problem
    attributes:
      label: Problema que Resuelve
      description: ¿Qué problema específico resuelve?
    validations:
      required: true

  - type: textarea
    id: solution
    attributes:
      label: Solución Propuesta
      description: Cómo crees que debería implementarse
    validations:
      required: true

  - type: textarea
    id: alternatives
    attributes:
      label: Alternativas Consideradas
      description: ¿Hay otras formas de resolver esto?

  - type: textarea
    id: context
    attributes:
      label: Contexto Adicional
      description: Cualquier información que ayude
