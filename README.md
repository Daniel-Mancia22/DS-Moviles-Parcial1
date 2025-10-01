# 📚 Mini Biblioteca Digital App 
Este proyecto es una aplicación móvil desarrollada en React Native con Expo. La aplicación simula una mini biblioteca digital donde los usuarios pueden explorar colecciones de libros, marcar favoritos, gestionar lecturas pendientes y leer contenido de libros directamente en la app, asi como tambien revisar el perfil de quien desarrollo la app.

## 🎯Funcionalidades

- **Drawer Navigator:** Menú lateral con opciones de Inicio, Configuración y About
- **Home Screen:** Cuadrícula de colecciones de libros (mínimo 5 colecciones)
- **Tab Navigator:** Navegación por pestañas dentro de cada colección (Libros, Favoritos, Pendientes)
- **Stack Navigator:** Navegación en pila para lista de libros → detalle → lectura
- **Gestión de Libros:**
   - Lista de libros con título, miniatura y autor. <br>
   - Pantalla de detalle con imagen grande, descripción y botones de acción. <br>
   - Pantalla de lectura con contenido scrollable
- **Sistema de Favoritos:** Marcar/desmarcar libros como favoritos
- **Lista de Pendientes:** Gestionar libros por leer con cambio de estado "Pendiente" ↔ "Leído"
- **About Screen:** Información del desarrollador con datos personales
  

## 🛠 Tecnologías Utilizadas

- **Expo** - Framework para desarrollo móvil
- **React Navigation** - Navegación (Drawer, Tab, Stack)
- **@expo/vector-icons** - Iconografía consistente
- **React Native** - Desarrollo nativo con JavaScript
- **Context API** - Gestión de estado global


## 🎨 Características Técnicas

- **Estado Global:** Context API para favoritos, pendientes y leídos
- **Navegación Anidada:** Combinación de Drawer, Tab y Stack Navigators
- **Dinamismo:** Estados reactivos y cambios de color en tiempo real
- **Alertas:** Confirmaciones para acciones importantes
- **Responsive:** Diseño adaptable a diferentes tamaños de pantalla


## 📚 Colecciones Incluidas

- **Misterio y Suspenso** - Thrillers psicológicos y novelas de misterio
- **Fantasía** - Mundos imaginarios y épicas aventuras
- **Historia Universal** - Análisis histórico y evolutivo
- **Ciencia Ficción** - Futuros distópicos y space operas
- **Romance** - Historias de amor y relaciones humanas

## 👨🏽‍💻 Desarrollador
- [Daniel Mancia](https://github.com/Daniel-Mancia22) - DevMadCode

## 📄 Notas del Proyecto

- **Propósito Académico:** Desarrollado para el primer examen parcial de "Desarrollo de Aplicaciones para Dispositivos Móviles"
- **Datos Locales:** Toda la información de libros y colecciones está definida localmente
- **Extensible:** La arquitectura permite fácil integración con APIs externas en el futuro
- **Base Sólida:** Código estructurado para futuras mejoras y funcionalidades adicionales
