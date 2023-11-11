import { Injectable } from '@angular/core';
import { Environment } from "../Environment";

@Injectable({
  providedIn: 'root'
})
export class UserApiPathService {
  
  private url = Environment.apiUrl;

  public ActivatePath(): string {
    return this.getPath(UserApiPaths.Activate);
  }

  public AddAddressPath(): string {
    return this.getPath(UserApiPaths.AddAddress);
  }

  public RemoveAddressPath(addressId: string): string {
    const pathWithId = UserApiPaths.RemoveAddress.replace("{AddressId}", addressId);
    return this.getPath(pathWithId);
  }

  public ChangePasswordPath(): string {
    return this.getPath(UserApiPaths.ChangePassword);
  }

  public LoginPath(): string {
    return this.getPath(UserApiPaths.Login);
  }

  public NewPasswordPath(): string {
    return this.getPath(UserApiPaths.NewPassword);
  }

  public RefreshTokenPath(): string {
    return this.getPath(UserApiPaths.RefreshToken);
  }

  public ResetPasswordPath(): string {
    return this.getPath(UserApiPaths.ResetPassword);
  }

  public ChangeRolePath(): string {
    return this.getPath(UserApiPaths.ChangeRole);
  }

  public RegisterPath(): string {
    return this.getPath(UserApiPaths.Register);
  }

  private getPath(path: string): string {
    return this.url + path;
  }
}

enum UserApiPaths {
  Activate = "Users/activate",
  AddAddress = "Users/address/add",
  RemoveAddress = "Users/address/remove/{AddressId}",
  ChangePassword = "Users/password/change",
  Login = "Users/login",
  NewPassword = "Users/password/new",
  RefreshToken = "Users/token/refresh",
  ResetPassword = "Users/password/reset",
  ChangeRole = "Users/role/change",
  Register = "Users/register"
}