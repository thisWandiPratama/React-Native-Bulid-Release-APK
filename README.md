# React-Native-Bulid-Release-APK

# Membuat Key-Store
Anda dapat membuat kunci penandatanganan pribadi menggunakan keytool. Pada Windows keytoolharus dijalankan C:\Program Files\Java\jdkx.x.x_x\bin.
```
$ keytool -genkeypair -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```
Perintah ini meminta Anda untuk kata sandi untuk keystore dan kunci dan untuk bidang Nama Dibedakan untuk kunci Anda. Itu kemudian menghasilkan keystore sebagai file bernama my-upload-key.keystore.

Keystore berisi satu kunci, berlaku untuk 10.000 hari. Alias ​​adalah nama yang akan Anda gunakan nanti ketika menandatangani aplikasi, jadi ingatlah untuk mencatat alias.

Di Mac, jika Anda tidak yakin di mana folder JDK Anda, maka lakukan perintah berikut untuk menemukannya:

```
$ /usr/libexec/java_home

```
Ini akan menampilkan direktori JDK, yang akan terlihat seperti ini:

```
/Library/Java/JavaVirtualMachines/jdkX.X.X_XXX.jdk/Contents/Home
```
Arahkan ke direktori itu dengan menggunakan perintah $ cd /your/jdk/pathdan gunakan perintah keytool dengan izin sudo seperti yang ditunjukkan di bawah ini.
```
$ sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```
``Catatan: Ingatlah untuk menjaga file keystore tetap pribadi. Jika Anda kehilangan kunci unggah atau terganggu, Anda harus mengikuti instruksi ini .``

# Menyiapkan variabel Gradle
Tempatkan my-upload-key.keystorefile di bawah android/appdirektori di folder proyek Anda.
Edit ``file ~/.gradle/gradle.propertiesatau android/gradle.properties, dan tambahkan berikut ini (ganti *****dengan kata sandi kunci yang benar, alias dan kata sandi kunci),``
```
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****
```
Ini akan menjadi variabel Gradle global, yang nantinya dapat kita gunakan dalam konfigurasi Gradle untuk menandatangani aplikasi kita.
``
Catatan tentang keamanan: Jika Anda tidak ingin menyimpan kata sandi dalam plaintext, dan Anda menjalankan OSX, Anda juga dapat menyimpan kredensial Anda di aplikasi Keychain Access . Kemudian Anda dapat melewati dua baris terakhir di ~/.gradle/gradle.properties.``

# Menambahkan konfigurasi penandatanganan ke konfigurasi Gradle aplikasi Anda
Langkah konfigurasi terakhir yang perlu dilakukan adalah mengatur rilis build yang akan ditandatangani menggunakan kunci unggah. Edit file android/app/build.gradledi folder proyek Anda, dan tambahkan konfigurasi penandatanganan,
```
...
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                storeFile file(MYAPP_UPLOAD_STORE_FILE)
                storePassword MYAPP_UPLOAD_STORE_PASSWORD
                keyAlias MYAPP_UPLOAD_KEY_ALIAS
                keyPassword MYAPP_UPLOAD_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
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

