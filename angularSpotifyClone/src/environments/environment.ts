export const environment = {};

export const SpotifyConfiguration = {
    clientId: 'c8f779f58de94e89a59354c987c765e9',
    authEndpoint: 'https://accounts.spotify.com/authorize',
    redirectUrl: 'httpl//localhost:4200/login/',
    scopes: [
     "user-read-currently-playing", // musica tocando agora.
    "user-read-recently-played", // ler musicas tocadas recentemente
    "user-read-playback-state", // ler estado do player do usuario
    "user-top-read", // top artistas e musicas do usuario
    "user-modify-playback-state", // alterar do player do usuario.
    "user-library-read", // ler biblioteca dos usuarios
    "playlist-read-private", // ler playlists privads
    "playlist-read-collaborative" // ler playlists colaborativas
    ]
};