import { Injectable } from '@angular/core';
import { Environment } from '../Environment';

@Injectable({
  providedIn: 'root'
})
export class ProductApiPathService {

  private url = Environment.apiUrl;

  public GetByIdPath(productId: string): string {
    const pathWithId = ProductApiPaths.GetById.replace("{ProductId}", productId);
    return this.getPath(pathWithId);
  }

  public GetAllPath(): string {
    return this.getPath(ProductApiPaths.GetAll);
  }

  public AddPath(): string {
    return this.getPath(ProductApiPaths.Add);
  }

  public DeletePath(productId: string): string {
    const pathWithId = ProductApiPaths.Delete.replace("{ProductId}", productId);
    return this.getPath(pathWithId);
  }

  public UpdatePath(): string {
    return this.getPath(ProductApiPaths.Update);
  }
  private getPath(path: string): string {
    return this.url + path;
  }
}

enum ProductApiPaths {
  GetById = "Products/{ProductId}",
  GetAll = "Products/all",
  Add = "Products/add",
  Delete = "Products/delete/{ProductId}",
  Update = "Products/update"
}