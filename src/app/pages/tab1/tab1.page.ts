import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  isSupported = false;
  barcodes: Barcode[] = [];

  constructor(private alertController: AlertController,
    private dataLocal: DataLocalService) {}

 ngOnInit(): void {
  BarcodeScanner.isSupported().then((result) => {
    this.isSupported = result.supported;
    BarcodeScanner
  });
   
 }

 async scan(): Promise<void> {
  const granted = await this.requestPermissions();
  if (!granted) {
    this.presentAlert();
    return;
  }
  const { barcodes } = await BarcodeScanner.scan();
  this.barcodes.push(...barcodes);
  barcodes.forEach(barcode => {
    const version = barcode.rawValue.split(':')[0];
    const text = barcode.rawValue.split(':')[1];
    this.dataLocal.guardarRegistro(version, text);
  });
}

async requestPermissions(): Promise<boolean> {
  const { camera } = await BarcodeScanner.requestPermissions();
  return camera === 'granted' || camera === 'limited';
}

async presentAlert(): Promise<void> {
  const alert = await this.alertController.create({
    header: 'Permission denied',
    message: 'Please grant camera permission to use the barcode scanner.',
    buttons: ['OK'],
  });
  await alert.present();
}



}
