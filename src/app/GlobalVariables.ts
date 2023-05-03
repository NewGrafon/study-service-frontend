export let isLogged: boolean = false;

export let userInfo: any = null;

export function UpdateUser(newInfo: any) {
  isLogged = newInfo.logged;
  userInfo = {
    firstname: newInfo.firstname,
    lastname: newInfo.lastname,
    email: newInfo.email,
    accountType: newInfo.accountType,
    created: newInfo.created,
  }
}
