On Android, the SDKs also require the following permissions in the AndroidManifest.xml before or after the application tag:

<!-- To get access to the camera. -->
<uses-permission android:name="android.permission.CAMERA" />
<!-- To get access to the flashlight. -->
<uses-permission android:name="android.permission.FLASHLIGHT"/>

You also need to add the following metadata in the application tag in your AndroidManifest.xml:
<meta-data android:name="com.google.mlkit.vision.DEPENDENCIES" android:value="barcode_ui"/>