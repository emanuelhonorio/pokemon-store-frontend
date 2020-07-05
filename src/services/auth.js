class AuthService {

  constructor() {
  }

  isLogged() {
    return !!localStorage.getItem('_pokemon_token')
  }

}

export default new AuthService()