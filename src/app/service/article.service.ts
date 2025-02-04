import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private apiUrl = 'http://localhost:3000';
  // private apiUrl = 'https://databank.irmplservices.com:3000';

  constructor(private httpClient: HttpClient) {}

  getFullTextByID(articleID: string): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/getFullTextById`, {
      articleID,
    });
  }

  getPublications(): Observable<any> {
    return this.httpClient.get(this.apiUrl + '/getPublications');
  }

  getTotalArticles(
    pubdate: string,
    pub: string,
    edition: string
  ): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/getArticles`, {
      pubdate,
      pub,
      edition,
    });
  }

  getArticlesByPageNumber(
    pubdate: string,
    pub: string,
    edition: string,
    pageNumber: string
  ): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/getArticlesByPageNo`, {
      pubdate,
      pub,
      edition,
      pageNumber,
    });
  }

  editArticle(
    id: string,
    title: string,
    sub_title: string,
    isPremium: string,
    isPhoto: string,
    isColor: string,
    UserID: string,
    sectorPid: number
  ) {
    return this.httpClient.put<any>(`${this.apiUrl}/editArticle`, {
      id,
      title,
      sub_title,
      isPremium,
      isPhoto,
      isColor,
      UserID,
      sectorPid,
    });
  }

  editPage(
    id: string,
    old_page_number: string,
    new_page_number: string,
    page_name: string
  ) {
    return this.httpClient.put<any>(`${this.apiUrl}/editPage`, {
      id,
      old_page_number,
      new_page_number,
      page_name,
    });
  }

  editJour(jourId: number, fname: string, lname: string) {
    return this.httpClient.put<any>(`${this.apiUrl}/editJour`, {
      jourId,
      fname,
      lname,
    });
  }

  addJourId(id: string, jourId: number, fname: string, lname: string) {
    return this.httpClient.post<any>(`${this.apiUrl}/addJourId`, {
      id,
      jourId,
      fname,
      lname,
    });
  }

  checkArticleJournalist(articleId: string, journalistId: number) {
    return this.httpClient.post<any>(`${this.apiUrl}/checkArticleJournalist`, {
      articleId,
      journalistId,
    });
  }

  addArticleJournalist(articleId: string, journalistId: number) {
    return this.httpClient.post<any>(`${this.apiUrl}/addArticleJournalist`, {
      articleId,
      journalistId,
    });
  }

  removeArticleJournalist(articleId: string, journalistId: number) {
    const body = { articleId, journalistId };

    return this.httpClient.delete<any>(
      `${this.apiUrl}/removeArticleJournalist`,
      { body }
    );
  }

  // getOcrText(imageurl: string) {
  //   return this.httpClient.post<any>(`https://beta.myimpact.in:5400/ocr`, {
  //     imageurl,
  //   });
  // }

  getOcrText(imageurl: string) {
    return this.httpClient.post<any>(`https://192.168.248.54:5000/ocr`, {
      imageurl,
    });
  }

  getFilterString(PrimarykeyID: number) {
    return this.httpClient.post<any>(`${this.apiUrl}/getFilterString`, {
      PrimarykeyID,
    });
  }

  getAddKeywords(userid: string, text: string, pubid: number) {
    return this.httpClient.post<any>(`${this.apiUrl}/additionalKeywords`, {
      userid,
      text,
      pubid,
    });
  }

  getJournalists() {
    return this.httpClient.get<any>(`${this.apiUrl}/getJournalists`);
  }

  getAllSectors() {
    return this.httpClient.get<any>(`${this.apiUrl}/getAllSector`);
  }

  getSubsectorByID(ID: number) {
    return this.httpClient.post<any>(`${this.apiUrl}/getSubsectorById`, { ID });
  }

  checkUser() {
    const url =
      'https://databank.irmplservices.com/databank/reader/userAuth.php';
    return this.httpClient.get(url);
  }

  uploadArticleImage(formData: FormData) {
    return this.httpClient.post(
      `https://myimpact.in/QCImageupdate/imagereplace.php`,
      formData
    );
  }

  getImageFromURL(imageUrl: string) {
    return this.httpClient.post(
      `${this.apiUrl}/getImageBase64`,
      { imageUrl },  
      { responseType: 'arraybuffer' } 
    );
  }
  
}
