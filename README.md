# Portafolio — Isaí López Fuentes

Sitio estático (HTML/CSS/JS puro, sin build ni dependencias) listo para desplegar en Vercel.

## ⚠️ Antes de publicar
El botón "Descargar CV" apunta a `assets/Isai_Lopez_CV.docx`. Si ya editaste tu CV manualmente,
**reemplaza ese archivo por tu versión final** (mismo nombre, o actualiza el `href` en `index.html`
donde dice `assets/Isai_Lopez_CV.docx`, hay dos lugares: el hero y la sección de contacto).

## Estructura
```
portfolio/
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── Isai_Lopez_CV.docx
│   ├── profile/isai.png
│   └── estudy/ (6 capturas del proyecto e-Study)
└── README.md
```

## Opción A: Desplegar sin terminal (más fácil)
1. Ve a https://vercel.com y crea una cuenta.
2. **Add New… → Project → Deploy without Git** (o arrastra la carpeta a la zona de "Upload").
3. Arrastra la carpeta `portfolio` completa.
4. Framework Preset: **Other** — no requiere configuración.
5. Clic en **Deploy**. En menos de un minuto tendrás una URL pública (`tu-portafolio.vercel.app`).

## Opción B: Con GitHub (recomendado si lo vas a seguir actualizando)
```bash
cd portfolio
git init && git add . && git commit -m "Portafolio inicial"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/portafolio.git
git push -u origin main
```
Luego en https://vercel.com/new → **Import Git Repository** → selecciona el repo → Framework: **Other** → Deploy.

## Opción C: Vercel CLI
```bash
npm install -g vercel
cd portfolio
vercel        # sigue las instrucciones
vercel --prod # publica la versión definitiva
```

## Personalizar
- **Textos/proyectos**: edita `index.html`.
- **Colores/tipografías**: variables en `:root` al inicio de `styles.css`.
- **Dominio propio**: Vercel → tu proyecto → Settings → Domains.

## Créditos de las capturas
Las 6 capturas del proyecto e-Study vienen de tu documento de tesina (Anexo "Proceso de
desarrollo de la aplicación"): login, panel del alumno, panel del docente, panel
administrativo, calificaciones y clases en línea.
