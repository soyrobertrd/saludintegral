# 🏥 Salud Integral — Portal Médico Premium

<div align="center">

![Salud Integral](https://img.shields.io/badge/Salud%20Integral-Portal%20M%C3%A9dico-1a4fc4?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss)

**Plataforma digital de experiencia médica concierge para pacientes crónicos y oncológicos.**

[🌐 Ver Demo en Vivo](https://saludintegral.vercel.app) • [📋 Reportar Issue](https://github.com/soyrobertrd/saludintegral/issues)

</div>

---

## ✨ Descripción

**Centro Médico Salud Integral** es un portal web de salud premium diseñado para ofrecer una experiencia de atención médica concierge de clase mundial. La plataforma conecta a pacientes con especialistas de alto nivel, facilita la gestión con aseguradoras (ARS Primera) y provee acceso centralizado a resultados, citas y seguimiento clínico.

El proyecto está construido con un stack moderno, orientado a la performance y la experiencia visual, con un diseño tipo "Sanctuary" que transmite confianza, calidad y bienestar.

---

## 🚀 Características Principales

### 🏠 Portal Público
| Página | Descripción |
|--------|-------------|
| **Home** | Hero slider con animaciones, estadísticas vitales, médicos destacados, blog editorial y CTA premium |
| **Sobre Nosotros** | Historia, Visión Corporativa, Estándares JCI, bento grid de valores corporativos |
| **Nuestro Personal** | Directorio de 9 médicos con filtros por especialidad, perfiles detallados y acceso a citas |
| **Servicios** | Catálogo de servicios: consultas, analíticas, cuidados crónicos y paliativos |
| **Blog Editorial (SI+)** | Artículo destacado + grid multi-fila de publicaciones médicas con newsletter |
| **Contacto** | Formulario de contacto + Google Maps embed con tarjeta de ubicación |

### 🔐 Portal del Paciente (`/portal`)
Acceso autenticado con **6 secciones funcionales**:
- **Dashboard** — Métricas de signos vitales en tiempo real, última cita y resumen de salud
- **Mis Citas** — Próximas y pasadas citas con estados (Confirmada / Pendiente / Programada)
- **Resultados** — Historial de laboratorios e imágenes con descarga
- **Mensajes** — Bandeja de mensajes clínicos con el equipo médico
- **Historial Médico** — Cronología de diagnósticos, procedimientos y consultas
- **Perfil Médico** — Datos personales, cobertura de ARS, alergias y médico tratante

---

## 🛠️ Stack Tecnológico

```
Frontend
├── React 19          — Librería de interfaces de usuario
├── TypeScript 5.x    — Tipado estático
├── Vite 8.x          — Build tool ultrarrápido
├── Tailwind CSS v4   — Sistema de estilos utility-first
├── Framer Motion     — Animaciones declarativas
├── React Router v7   — Enrutamiento SPA
└── Lucide React      — Iconografía consistente
```

---

## 📁 Estructura del Proyecto

```
app/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Navegación principal con dropdown de servicios
│   │   ├── Footer.tsx          # Pie de página con links y newsletter
│   │   ├── Layout.tsx          # Layout condicional (oculta nav en /portal)
│   │   ├── FloatingActions.tsx # Botón flotante de WhatsApp
│   │   ├── AnimatedCounter.tsx # Contadores animados para estadísticas
│   │   └── ScrollToTop.tsx     # Reset de scroll en navegación
│   ├── pages/
│   │   ├── Home.tsx            # Página de inicio con hero slider
│   │   ├── About.tsx           # Sobre nosotros
│   │   ├── Staff.tsx           # Directorio de personal médico
│   │   ├── Blog.tsx            # Portal editorial SI+
│   │   ├── PostDetail.tsx      # Detalle de artículo
│   │   ├── Contact.tsx         # Contacto + Google Maps
│   │   ├── PatientPortal.tsx   # Dashboard de pacientes (6 vistas)
│   │   ├── DoctorDetail.tsx    # Perfil detallado de médico
│   │   ├── Services.tsx        # Catálogo de servicios
│   │   ├── Booking.tsx         # Reserva de citas
│   │   └── ...                 # Páginas adicionales por especialidad
│   ├── App.tsx                 # Definición de rutas
│   └── index.css               # Design system global (tokens, tipografía)
├── public/
├── index.html
├── vite.config.ts
└── package.json
```

---

## ⚙️ Instalación y Desarrollo

### Requisitos
- Node.js ≥ 18.x
- npm ≥ 9.x

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/soyrobertrd/saludintegral.git
cd saludintegral

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
# → http://localhost:5173

# 4. Build de producción
npm run build

# 5. Vista previa del build
npm run preview
```

---

## 🎨 Sistema de Diseño

El proyecto sigue un **Design System "Sanctuary"** basado en Material Design 3 con tokens personalizados:

| Token | Uso |
|-------|-----|
| `primary` | Azul institucional (#1a4fc4) |
| `surface-container-*` | Fondos jerárquicos |
| `on-surface` | Texto principal |
| `inverse-surface` | Fondo oscuro para secciones de contraste |

**Tipografía:** Google Fonts — `Inter` (body) + `Sora` (headlines)

---

## 🌐 Despliegue

El proyecto está configurado para desplegarse automáticamente en **Vercel** al hacer push a `main`.

| Rama | Entorno |
|------|---------|
| `main` | Producción → [saludintegral.vercel.app](https://saludintegral.vercel.app) |

```bash
# Verificar build antes de subir
npm run build
```

---

## 📄 Licencia

Este proyecto es propietario. Todos los derechos reservados © 2026 **Centro Médico Salud Integral**.

---

<div align="center">
  <sub>Desarrollado con ❤️ para transformar la experiencia médica en el Caribe.</sub>
</div>
