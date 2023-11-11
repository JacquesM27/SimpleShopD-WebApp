import { Injectable } from '@angular/core';
import { Environment } from '../Environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersApiPathService {

  private url = Environment.apiUrl;
  
  public GetByIdPath(orderId: string): string {
    const pathWithId = OrderApiPaths.GetById.replace("{OrderId}", orderId);
    return this.getPath(pathWithId);
  }

  public GetMyOrdersPath(): string {
    return this.getPath(OrderApiPaths.GetMyOrders);
  }

  public AddPath(): string {
    return this.getPath(OrderApiPaths.Add);
  }

  public AddOrderLinePath(): string {
    return this.getPath(OrderApiPaths.AddOrderLine);
  }

  public CancelPath(): string {
    return this.getPath(OrderApiPaths.Cancel);
  }

  public ChangeDeliveryPath(): string {
    return this.getPath(OrderApiPaths.ChangeDelivery);
  }

  public CompletePath(): string {
    return this.getPath(OrderApiPaths.Complete);
  }

  public DeleteOrderLinePath(orderId: string, lineId: string): string {
    const pathWithIds = OrderApiPaths.DeleteOrderLine.replace("{OrderId}/{LineId}", `${orderId}/${lineId}`);
    return this.getPath(pathWithIds);
  }

  public PayPath(): string {
    return this.getPath(OrderApiPaths.Pay);
  }

  public SetPendingPath(): string {
    return this.getPath(OrderApiPaths.SetPending);
  }

  public ReturnOrderPath(): string {
    return this.getPath(OrderApiPaths.ReturnOrder);
  }

  private getPath(path: string): string {
    return this.url + path;
  }
}

enum OrderApiPaths {
  GetById = "Orders/{OrderId}",
  GetMyOrders = "Orders/my",
  Add = "Orders/add",
  AddOrderLine = "Orders/line/add",
  Cancel = "Orders/cancel",
  ChangeDelivery = "Orders/delivery/change",
  Complete = "Orders/complete",
  DeleteOrderLine = "Orders/line/delete/{OrderId}/{LineId}",
  Pay = "Orders/pay",
  SetPending = "Orders/pending",
  ReturnOrder = "Orders/return"
}