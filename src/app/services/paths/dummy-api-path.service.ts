import { Injectable } from '@angular/core';
import { Environment } from "../Environment";

@Injectable({
  providedIn: 'root'
})
export class DummyApiPathService {

  private url = Environment.apiUrl;

  public SayHiPath(): string {
    return this.getPath(DummyApiPaths.SayHi);
  }

  public SayHiAuthenticatedPath(): string {
    return this.getPath(DummyApiPaths.SayHiAuthenticated);
  }
  
  private getPath(path: string): string {
    return this.url + path;
  }
}

enum DummyApiPaths {
  SayHi = "Dummy/hi",
  SayHiAuthenticated = "Dummy/hi/auth"
}