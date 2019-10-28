## Auth Manager

El Auth Manager es una solución que tiene como principal objetivo permitir a los desarrolladores tener una interfaz única para la autenticación y autorización de las aplicaciones, independiente de la implementación de Oauth de turno (Oauth2.0, Azure AD, Amazon Cognito, etc) así como del GrantType utilizado (para el caso de Oauth 2.0, según el estándar RFC).

Para la creación del módulo Auth hemos utilizado patrones de diseño orientados a la programación orientada a objetos y programación funcional.
El uso de estos patrones nos permite cumplir con los Principios SOLID (Para mayor detalle acerca de SOLID por favor acceda al siguiente link dando click aqui(https://khalilstemmler.com/articles/solid-principles/solid-typescript/)).

Dentro de los patrones de diseño utilizados podemos mencionar los siguientes:

1.Patrón Builder

Patrón de diseño de software el cual pertenece a la categoría de patrones creacionales.
Muy conocido y utilizado en Typescript, es especialmente útil cuando necesitamos crear objetos con múltiples opciones de configuración.

Podremos visualizar con mayor detalle el uso de este patrón en la clase abstracta AuthenticationManager
y subclases que lo extienden (AuthorizationCodeGrantManager, ClientCredentialsGrantManager, ImplicitGrantManager, PasswordGrantManager).

Si desea mayor información y ejemplos del uso del Patrón Factory Method en Typescript, por favor acceda al siguiente link dando click aquí (https://refactoring.guru/design-patterns/builder/typescript/example).


2.Patrón Factory Method

Patrón de diseño de software el cual pertenece a la categoría de patrones creacionales.
Provee una interface para la creación de objetos pero permite a las subclases alterar el tipo de objetos que serán creados.

Un ejemplo del uso de este patrón es la clase AuthenticationFactory, la cual permite configurar una instancia de autenticación en base a los valores que se envían en el objeto authConfig. En el constructor de esta clase se puede ver un sólo método de creación y varios métodos para configurar el resultado. Para el caso de la creación de distintas instancias de Autorización dependiendo del proveedor de autenticación de turno (Oauth2, Azure AD, etc).

Si desea mayor información y ejemplos del uso del Patrón Factory Method en Typescript, por favor acceda al siguiente link dando click aquí (https://refactoring.guru/design-patterns/factory-method/typescript/example).


## ¿Cómo agregar un nuevo autorizador dentro Auth Module?




## Api References

* Clases

| Nombre | Descripción |
|--------|-------------|
| AuthenticationFactory | Clase que crea y retorna una instancia para el manejo de autenticación dependiendo del tipo de configuración enviado. Recibe como argumento de su constructor un objeto del tipo TAuthConfig |
| AuthenticationManager | Clase abstracta la cual provee la implementación base de los métodos necesarios para: realizar la autenticación, obtener token, verificar autenticación, y verificar expiración de token |
| AuthorizationCodeGrantManager | Clase que extiende al AuthenticationManager. Es específica para el tipo de Grant de Authorization Code |
| ClientCredentialsGrantManager | Clase que extiende al AuthenticationManager. Es específica para el tipo de Grant de Client Credentials |
| ImplicitGrantManager | Clase que extiende al AuthenticationManager. Es específica para el tipo de Grant Implícito |
| PasswordGrantManager | Clase que extiende al AuthenticationManager. Es específica para el tipo de Grant Password |


* Interfaces

| Nombre | Descripción |
|--------|-------------|
| IAuthBaseConfig | Interface de configuración Base para la autenticación |
| IOAuth2Config | Contrato que implementa la interfaz IAuthBaseConfig. Permite la realizar la configuración esperada por la especificación de OAuth2 |
| IAzureConfig | Contrato que implementa la interfaz IAuthBaseConfig. Permite la realizar la configuración esperada por la especificación de Azure AD |
| IAuthConfig | Especifica el tipo de autorización a realizar y su configuración  de acuerdo al tipo correspondiente |
| IAuthentication | Contrato el cual es implementado por la clase abstracta AuthenticationManager |


* Enums

| Nombre | Descripción |
|--------|-------------|
| EAuthorizationType | Permite especificar el tipo de autorización |
| EGrantType | Permite especificar el Tipo de Grant para el estándar OAuth2 |

1. Tipos de Autorización
> * Oauth 2.0
> * Azure AD
> * AWS
> * Altemista

2. Tipos de Grant
> * Grant Type Authorization Code
> * Grant Type Password
> * Grant Type Implicit
> * Grant Type Client Credentials


* Types

| Nombre | Descripción |
|--------|-------------|
| TAuthConfig | Permite especificar interfaces de tipo IAzureConfig o IOAuth2Config |



* Métodos

Para los métodos de las clases que extiendan a la clase abstracta AuthenticationManager:

| Nombre | Descripción |
|--------|-------------|
| authenticate() | Ejecuta la llamada de autenticación hacia el servidor de autorización |
| getToken() | Retorna el token de autorización para ser utilizado en las cabeceras http |
| isAuthenticated() | Retorna verdadero si existe una sesión de autenticación |
| isExpired() | Retorna verdadero si el tiempo de la sesión de autenticación ya ha expirado |
| clean() | Limpia la sesión de autenticación |



* Configuración base opcional

Para las interfaces que implementen la base de IAuthBaseConfig:

| Atributo | Descripción | Tipo (Valor) |
|----------|-------------|--------------|
| secretKey | Llave secreta utilizada en el encriptamiento de datos al almacenarlos | STRING (obligatorio) |
| headerName | Nombre de la cabecera para enviar el access token en el interceptor de autorización | STRING (Authorization) |
| tokenType | Tipo de token a enviar en el interceptor de autorización | STRING (Bearer) |
| storageType | Tipo de almacenamiento a utilizar proveniente del Storage Module | ENUM EStorageType (LocalStorage) |
| responseModel | Datos de respuesta personalizados dependiendo del tipo de autenticación | TYPE IPasswordGrantModel. (RFC values) |
| responseErrorModel | Datos de error personalizados | TYPE IErrorResponseModel|
| i18nLang | Idioma a utilizar en los mensajes de respuesta | STRING (es) |
| interceptor | Si es verdadero, crea un http interceptor para enviar el access token en la cabecera | BOOLEAN (false) |

* Configuración para Autenticación OAuth2

Configuración específica para las implementaciones de la interface IOAuth2Config:

| Atributo | Descripción | Tipo (Valor) |
|----------|-------------|--------------|
| grantType | Tipo de flujo a utilizar | ENUM EGrantType (obligatorio) |
| authUrl | Dirección url del servicio de autenticación | STRING (obligatorio) |
| client_id | Identificador del cliente del servidor de autorización | STRING (opcional) |
| client_secret | Clave secreta proporcionada por el servidor de autorización | STRING (opcional) |
| requestType | Tipo de petición enviada al servidor | ENUM EResponseType (Form URL Encoded) |
| responseType | Tipo de respuesta enviada del servidor | ENUM EResponseType (JSON) |
