# Release flow — actualizar la APK

La landing apunta por default a:

```
https://github.com/Dragon708/mythic-lobby-landing/releases/latest/download/mythic-lobby-android.apk
```

GitHub resuelve `/releases/latest/...` siempre al release más nuevo, así que **no hace falta tocar la landing ni redeplegar Vercel** cuando sale build nueva. Sólo subís un release nuevo con el asset llamado `mythic-lobby-android.apk`.

## Pasos para una versión nueva

### 1. Bumpear versión en la app Expo

En `../mythic-lobby/app.json`:

```json
"version": "1.0.1",
"android": { "versionCode": 2 }
```

### 2. Compilar la APK release

```powershell
cd ../mythic-lobby/android
./gradlew assembleRelease
```

Salida en: `android/app/build/outputs/apk/release/MLBB Mythic Lobby.apk`

### 3. Crear release en GitHub

Desde la carpeta `mlbb-landing`:

```powershell
$VERSION = "1.0.1"
$APK = "../mythic-lobby/android/app/build/outputs/apk/release/MLBB Mythic Lobby.apk"

# Copialo con el nombre canónico que espera la landing
Copy-Item $APK "./mythic-lobby-android.apk"

gh release create "v$VERSION" "./mythic-lobby-android.apk" `
  --repo Dragon708/mythic-lobby-landing `
  --title "v$VERSION" `
  --notes "Changelog…"

Remove-Item "./mythic-lobby-android.apk"
```

### 4. Bumpear `NEXT_PUBLIC_APP_VERSION` en Vercel (opcional)

Sólo si querés que el chip del hero diga "v1.0.1". Editás la env var en Vercel Dashboard → Settings → Environment Variables y redeploys.

(Si no, sigue mostrando la versión vieja en el chip pero el botón ya baja la nueva.)

### 5. Subir build a Supabase Storage (in-app updates)

La app móvil chequea Supabase Storage `app-releases/` para mostrar el modal de actualización. Subí el APK también ahí para que los usuarios actuales reciban el aviso adentro de la app.

---

## Important: repo público vs privado

Las URLs `releases/latest/download/...` **sólo son accesibles si el repo es público**. Si lo dejás privado, la descarga desde la landing va a dar 404 para usuarios sin sesión de GitHub.

Opciones:
- **A** (recomendado): `gh repo edit Dragon708/mythic-lobby-landing --visibility public --accept-visibility-change-consequences`
- **B**: Mantenerlo privado y servir el APK desde Supabase Storage. Cambiá `NEXT_PUBLIC_APK_URL` en Vercel a la URL del bucket.
