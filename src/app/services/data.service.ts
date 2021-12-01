import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Rx from "rxjs";
import { Observable } from 'rxjs'
import { HttpHeaders } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';


import { Contact } from '../interfaces/contact';
import { Message } from '../interfaces/message';
import { Presentation } from '../interfaces/presentation';
import { Video } from '../interfaces/video';
import { DevenezFranchiser } from '../interfaces/devenezfranchiser';
import { Devis } from '../interfaces/devis';
import { Produit } from '../interfaces/produit';
import { Actualite } from '../interfaces/actualite';





@Injectable({
  providedIn: 'root'
})


export class DataService {




  // -------------------------------- Actualite -------------------------------------------- //
  private actualite = 'https://cometaa.herokuapp.com/api/actualite';
  private actualitenb = 'https://cometaa.herokuapp.com/api/countactualite';



  // -------------------------------- Produit -------------------------------------------- //
  private produit = 'https://cometaa.herokuapp.com/api/produit';
  private produitnb = 'https://cometaa.herokuapp.com/api/countproduit';


  // -------------------------------- Contact -------------------------------------------- //
  private contact = 'https://cometaa.herokuapp.com/api/contact';


  // -------------------------------- Message -------------------------------------------- //
  private message = 'https://cometaa.herokuapp.com/api/message';
  private messagenb = 'https://cometaa.herokuapp.com/api/countmessage';


  // -------------------------------- DevenezFranchiser -------------------------------- //
  private devenezFranchiser = 'https://cometaa.herokuapp.com/api/devenezFranchiser';
  private devenezFranchisernb = 'https://cometaa.herokuapp.com/api/countdevfranch';


  // -------------------------------- Devis -------------------------------- //
  private devis = 'https://cometaa.herokuapp.com/api/devis';
  private devisnb = 'https://cometaa.herokuapp.com/api/countdevis';


  // -------------------------------- Presentation --------------------------------------- //
  private presentation = 'https://cometaa.herokuapp.com/api/presentation';


  // -------------------------------- Video ---------------------------------------------- //
  private video = 'https://cometaa.herokuapp.com/api/video';
  private videonb = 'https://cometaa.herokuapp.com/api/countvideo';






  id = new Rx.BehaviorSubject({});

  constructor(private http: HttpClient) { }



  // ---------------- Actualite ------------------- //

  getActualiteList(): Observable<any> { return this.http.get(this.actualite); }

  getActualite(id: number): Observable<any> { return this.http.get(`${this.actualite}/${id}`); }

  createActualite(actualite: Object): Observable<Object> { return this.http.post(`${this.actualite}`, actualite); }

  updateActualite(actualite: Actualite): Observable<Object> { return this.http.put<Actualite>(this.actualite, actualite, { observe: 'response' }) }

  deleteActualite(id: number): Observable<any> { return this.http.delete(`${this.actualite}/${id}`); }

  countActualite(): Observable<number> { return this.http.get<number>(`${this.actualitenb}`); }



  // ---------------- Produit ------------------- //

  getProduitList(): Observable<any> { return this.http.get(this.produit); }

  getProduit(id: number): Observable<any> { return this.http.get(`${this.produit}/${id}`); }

  createProduit(produit: Object): Observable<Object> { return this.http.post(`${this.produit}`, produit); }

  updateProduit(produit: Produit): Observable<Object> { return this.http.put<Produit>(this.produit, produit, { observe: 'response' }) }

  deleteProduit(id: number): Observable<any> { return this.http.delete(`${this.produit}/${id}`); }

  countProduit(): Observable<number> { return this.http.get<number>(`${this.produitnb}`); }



  // ---------------- Contact ------------------- //

  getContactList(): Observable<any> { return this.http.get(this.contact); }

  getContact(id: number): Observable<any> { return this.http.get(`${this.contact}/${id}`); }

  createContact(contact: Object): Observable<Object> { return this.http.post(`${this.contact}`, contact); }

  updateContact(contact: Contact): Observable<Object> { return this.http.put<Contact>(this.contact, contact, { observe: 'response' }) }

  deleteContact(id: number): Observable<any> { return this.http.delete(`${this.contact}/${id}`); }




  // ---------------- Message ------------------- //

  getMessageList(): Observable<any> { return this.http.get(this.message); }

  getMessage(id: number): Observable<any> { return this.http.get(`${this.message}/${id}`); }

  createMessage(message: Object): Observable<Object> { return this.http.post(`${this.message}`, message); }

  updateMessage(message: Message): Observable<Object> { return this.http.put<Message>(this.message, message, { observe: 'response' }) }

  deleteMessage(id: number): Observable<any> { return this.http.delete(`${this.message}/${id}`); }

  countMessage(): Observable<number> { return this.http.get<number>(`${this.messagenb}`); }



  // ---------------- Presentation ------------------- //

  getPresentationList(): Observable<any> { return this.http.get(this.presentation); }

  getPresentation(id: number): Observable<any> { return this.http.get(`${this.presentation}/${id}`); }

  createPresentation(presentation: Object): Observable<Object> { return this.http.post(`${this.presentation}`, presentation); }

  updatePresentation(presentation: Presentation): Observable<Object> { return this.http.put<Presentation>(this.presentation, presentation, { observe: 'response' }) }

  deletePresentation(id: number): Observable<any> { return this.http.delete(`${this.presentation}/${id}`); }



  // ---------------- Video ------------------- //

  getVideoList(): Observable<any> { return this.http.get(this.video); }

  getVideo(id: number): Observable<any> { return this.http.get(`${this.video}/${id}`); }

  createVideo(videos: Object): Observable<Object> { return this.http.post(`${this.video}`, videos); }

  updateVideo(video: Video): Observable<Object> { return this.http.put<Video>(this.video, video, { observe: 'response' }) }

  deleteVideo(id: number): Observable<any> { return this.http.delete(`${this.video}/${id}`); }

  countVideo(): Observable<number> { return this.http.get<number>(`${this.videonb}`); }



  // ---------------- DevenezFranchiser ------------------- //

  getDevenezFranchiseList(): Observable<any> { return this.http.get(this.devenezFranchiser); }

  getDevenezFranchise(id: number): Observable<any> { return this.http.get(`${this.devenezFranchiser}/${id}`); }

  createDevenezFranchise(devenezFranchise: Object): Observable<Object> { return this.http.post(`${this.devenezFranchiser}`, devenezFranchise); }

  updateDevenezFranchise(deveneFranchise: DevenezFranchiser): Observable<Object> { return this.http.put<DevenezFranchiser>(this.devenezFranchiser, deveneFranchise, { observe: 'response' }) }

  deleteDevenezFranchise(id: number): Observable<any> { return this.http.delete(`${this.devenezFranchiser}/${id}`); }

  countDevfranch(): Observable<number> { return this.http.get<number>(`${this.devenezFranchisernb}`); }



  // ---------------- Devis ------------------- //

  getDevisList(): Observable<any> { return this.http.get(this.devis); }

  getDevis(id: number): Observable<any> { return this.http.get(`${this.devis}/${id}`); }

  createDevis(devis: Object): Observable<Object> { return this.http.post(`${this.devis}`, devis); }

  updateDevis(devis: DevenezFranchiser): Observable<Object> { return this.http.put<DevenezFranchiser>(this.devis, devis, { observe: 'response' }) }

  deleteDevis(id: number): Observable<any> { return this.http.delete(`${this.devis}/${id}`); }

  countDevis(): Observable<number> { return this.http.get<number>(`${this.devisnb}`); }


}
