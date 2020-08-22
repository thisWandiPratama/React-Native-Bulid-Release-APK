# React-Native-Bulid-Release-APK

# Membuat Key-Store
Masuk ke Directory ``android/app``

```
keytool -genkeypair -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```
Perintah ini meminta Anda untuk kata sandi untuk keystore dan kunci dan untuk bidang Nama Dibedakan untuk kunci Anda. Itu kemudian menghasilkan keystore sebagai file bernama my-upload-key.keystore.

# Menyiapkan variabel Gradle

Edit file ``android/gradle.properties``, dan tambahkan script berikut ini ``(ganti *****dengan kata sandi kunci yang benar, alias dan kata sandi kunci),``

```
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=***** // Ganti Password Yang Kalian Buat Tadi
MYAPP_UPLOAD_KEY_PASSWORD=***** // Ganti Password Yang Kalian Buat 
```

# Menambahkan konfigurasi penandatanganan ke konfigurasi Gradle aplikasi Anda
Langkah konfigurasi terakhir yang perlu dilakukan adalah mengatur ``rilis build`` yang akan ditandatangani menggunakan kunci unggah. Edit file ``android/app/build.gradle`` di folder proyek Anda, dan tambahkan konfigurasi penandatanganan,
```
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
    ...
        release { //Tambahkan Ini
            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) { //Tambahkan Ini
                storeFile file(MYAPP_UPLOAD_STORE_FILE) //Tambahkan Ini
                storePassword MYAPP_UPLOAD_STORE_PASSWORD //Tambahkan Ini
                keyAlias MYAPP_UPLOAD_KEY_ALIAS //Tambahkan Ini
                keyPassword MYAPP_UPLOAD_KEY_PASSWORD //Tambahkan Ini
            } //Tambahkan Ini
        } //Tambahkan Ini
    } 
    buildTypes {
        release {
            ...
            //komen ini  // signingConfig signingConfigs.debug
            signingConfig signingConfigs.release //Tambahkan Ini
        }
    }
}
...
```
# Menghasilkan rilis APK
Cukup jalankan yang berikut ini di terminal:

```
$ cd android
$ ./gradlew assembleRelease
```

