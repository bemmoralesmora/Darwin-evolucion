https://rockemma.github.io/Darwin-evolucion/

## Cómo Colaborar

1. **Fork del Repositorio**: Realiza un fork del repositorio en tu cuenta de GitHub.

2. **Clonar el Repositorio**: Clona el repositorio en tu máquina local.
    ```sh
    git clone https://github.com/ROCKEMMA/Darwin-evolucion
    cd Darwin-evolucion
    ```

3. **Seleccionar una Carpeta**: Elige una de las carpetas dentro de `components` para trabajar. Cada carpeta contiene dos archivos:
    - `evolucionX.css`
    - `evolucionX.js`

4. **Editar Archivos**: Realiza las modificaciones necesarias en los archivos `.js` y `.css`.

    - **JS**: Añade o modifica el contenido JavaScript. Ejemplo de contenido inicial:
      ```javascript
      let DOM_evolucion1 = document.querySelector("#evolucion1");
      DOM_evolucion1.innerHTML = `Sección 1`;
      ```

    - **CSS**: Añade o modifica el contenido CSS para estilizar el componente correspondiente.

5. **Pruebas Locales**: Asegúrate de que tus cambios funcionan correctamente probándolos en tu entorno local.

6. **Commits y Mensajes de Commit**:
    - Realiza commits con mensajes claros y concisos.
    - Sigue el formato `[Tipo]: Descripción del cambio`. Ejemplos:
      - `feat: agregar funcionalidad de animación a evolucion1`
      - `fix: corregir estilo de botones en evolucion2`
      - `docs: actualizar README con instrucciones de colaboración`
      - `content: agregar nuevo contenido a evolucion3`


    Ejemplo:
    ```sh
    git add components/evolucion1/evolucion1.js
    git commit -m "feat: agregar funcionalidad de animación a evolucion1"
    ```

7. **Push y Pull Request**:
    - Realiza un push de tus cambios a tu fork.
    - Crea un Pull Request (PR) desde tu fork hacia el repositorio principal.
    - En la descripción del PR, proporciona detalles sobre los cambios realizados y cualquier otro detalle relevante.

    ```sh
    git push origin tu-rama
    ```

## Buenas Prácticas

- **Consistencia**: Mantén un estilo de código consistente con el proyecto.
- **Revisión de Código**: Revisa el código y pruebas antes de enviar un PR.
- **Comentarios**: Añade comentarios en el código donde sea necesario para explicar la lógica compleja.

## Contacto

Para cualquier duda o pregunta, puedes abrir un issue en el repositorio o contactarnos directamente a través del correo electrónico proporcionado en el archivo `LICENSE`.


---

**Nota**: Asegúrate de seguir las convenciones y políticas de contribución del proyecto al enviar tus cambios.
