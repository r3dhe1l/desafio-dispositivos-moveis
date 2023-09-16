import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  public async addNewToGallery(): Promise<string | undefined> {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    // Verifique se capturedPhoto.webPath não é undefined
    if (capturedPhoto.webPath) {
      return capturedPhoto.webPath;
    } else {
      // Lide com o caso em que webPath é undefined (por exemplo, lançar um erro ou retornar um valor padrão)
      return undefined;
    }
  }
}
