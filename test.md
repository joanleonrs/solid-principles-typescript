### Reglas de Configuración

* Configuración base opcional

| Atributo | Descripción | Tipo (Valor) |
|----------|-------------|--------------|
| secretKey | Llave secreta utilizada en el encriptamiento de datos al almacenarlos | STRING (obligatorio) |
| headerName | Nombre de la cabecera para enviar el access token en el interceptor de autorización | STRING (Authorization) |
| tokenType | Tipo de token a enviar en el interceptor de autorización | STRING (Bearer) |
| storageType | Tipo de almacenamiento a utilizar proveniente del Storage Module | ENUM EStorageType (LocalStorage) |
| responseModel | Datos de respuesta personalizados dependiendo del tipo de autenticación | TYPE IPasswordGrantModel. (RFC values) |
| i18nLang | Idioma a utilizar en los mensajes de respuesta | STRING (es) |
| interceptor | Si es verdadero, crea un http interceptor para enviar el access token en la cabecera | BOOLEAN (false) |

* Configuración para Autenticación OAuth2

| Atributo | Descripción | Tipo (Valor) |
|----------|-------------|--------------|
| grantType | Tipo de flujo a utilizar | ENUM EGrantType (obligatorio) |
| authUrl | Dirección url del servicio de autenticación | STRING (obligatorio) |
| client_id | Identificador del cliente del servidor de autorización | STRING (opcional) |
| client_secret | Clave secreta proporcionada por el servidor de autorización | STRING (opcional) |
| requestType | Tipo de petición enviada al servidor | ENUM EResponseType (Form URL Encoded) |
| responseType | Tipo de respuesta enviada del servidor | ENUM EResponseType (JSON) |
