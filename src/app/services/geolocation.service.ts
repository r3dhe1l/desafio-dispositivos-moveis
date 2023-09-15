import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

interface respostaGeo {
  results: Array<any>;
}

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(private http: HttpClient) { }

  public async takeGeolocation(): Promise<[number | null, string, number | null]> {
    try {
      const coordenadas = await Geolocation.getCurrentPosition();
      const linkAPI = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordenadas.coords.latitude},${coordenadas.coords.longitude}&key=AIzaSyBV_A8f3Wk1t3_OTJZOSi-xzEAP9rJrjI8`;
      const resultado = this.http.get<respostaGeo>(linkAPI);
      const endereco = await firstValueFrom(resultado);
      return [
        endereco.results[0].address_components[6].long_name,
        endereco.results[0].address_components[1].long_name,
        endereco.results[0].address_components[0].long_name
      ];

    } catch (error) {
      console.error('Erro ao obter endereço', error);
      return [null, '', null];
    }
  }
}
