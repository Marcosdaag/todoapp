// En los servicios esta la logica que interactica directamente con los objetos, llamo a las url creadas en la api

import { Injectable } from "@angular/core"; // Decorador
import { HttpClient, HttpHeaders } from "@angular/common/http"; // Para hacer peticiones ajax
import { Observable } from "rxjs"; // Maneja los datos de las peticiones http
import { Pending } from "../models/pending.model"; // Modelo del objeto
import { Global } from "./global.service"; // Fichero de configuracion global y variables

// Al usar el decorador puedo usar el servicio en otros ficheros sin necesidad de importar el modulo
@Injectable()
    export class PendingService{
        public url:string;

        constructor(
            private _http: HttpClient
        ){
            this.url = Global.url;
        }

        // Metodos
        
        // Guardar nuevos pendings
        savePending(pending: Pending){
            let params = JSON.stringify(pending);
            let headers = new HttpHeaders().set('Content-Type','application/json');

            return this._http.post(this.url+'save-pending',params,{headers: headers});
        }

        // Listar los pendings
        getPendings(): Observable<any>{
            let headers = new HttpHeaders().set('Content-Type','application/json');
            return this._http.get(this.url+'pendings', {headers:headers});
        }

        // Borrar pending
        deletePending(id: string):Observable<any>{
            let headers = new HttpHeaders().set('Content-Type','application/json');
            return this._http.delete(this.url+'pending/'+id, {headers:headers});
        }
    }