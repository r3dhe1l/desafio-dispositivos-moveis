import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  public async addNewToGallery(): Promise<Photo | undefined> {
    try {
      const capturedPhoto = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100
      });

      return capturedPhoto;
    } catch (error) {
      console.error('Erro ao tirar a foto:', error);
      return undefined;
    }
  }
}
