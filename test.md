# Logger Module

El Logger module es una solución que permite a los desarrolladores de aplicaciones Angular manejar una interfaz única para la generación de logs de acuerdo al nivel de incidencia, tanto en el cliente, como en el servidor.


## Pre-requisitos
Para poder utilizar o extender la librería es necesario tener instaladas las siguientes herramientas:
* Node 10+
* Angular 6+


## Dependencias
Este proyecto tiene una dependencia directa con el TSF+ Core


## Instalación
```bash
$ cd path-to-project;
$ npm install @tsf-plus/ng-commons;
```


# Como Usar

* Configurar el Logger Module (app.config.ts)

````javascript
import { ELoggerLevels, ILoggerConfig, TSFPlusLoggerModule } from '@tsf-plus/ng-commons/logger';

const loggerConfig: ILoggerConfig = {
  level: ELoggerLevels.DEBUG,
}

export const LoggerModule = TSFPlusLoggerModule.forRoot(loggerConfig);
````

* Importar en el App Module (app.module.ts)

````javascript
import { LoggerModule } from './app.config';

@NgModule({
  ...
  imports: [
    ...
    LoggerModule,
    ...
  ],
  ...
})
export class AppModule { }
````

* Usarlo inyectando el determinado servicio en el constructor de su componente

````javascript
import { Logger } from '@tsf-plus/ng-commons/logger';

...
  constructor (
    private logger: Logger,
  ) { }

  myFirstMethod() {
    this.logger.debug('mensaje');
  }

  mySecondMethod() {
    try {
      ...
    } catch (e) {
      this.logger.error('mensaje', e);
    }
  }
...
````


## Api References

* Métodos

| Nombre | Descripción |
|--------|-------------|
| setHeader() | Usado al configurar envíos al servidor para asignar la cabecera de autorización |
| trace() | Registra una incidencia de rastreo de un color azul |
| debug() | Registra una incidencia de depuración de un color verde |
| info() | Registra una incidencia informativo de un color celeste |
| log() | Registra una incidencia estándar de un color gris |
| warn() | Registra una incidencia de advertencia de un color naranja |
| error() | Registra una incidencia de error de un color rojo |

### Reglas de Configuración

* Configuración base opcional

| Atributo | Descripción | Tipo (Valor) |
|----------|-------------|--------------|
| level | Nivel de incidencia permitido | ELoggerLevels (OFF) |
| secretKey | Llave secreta utilizada en el encriptamiento del token de autorización | STRING (obligatorio al usar serverLog) |
| serverLog | Objeto que contiene la URL del servidor donde se pueden registrar las incidencias | opcional |
| customLog | Objeto que contiene un método dado por el usuario donde se envían incidencias  | opcional |
| i18nLang | Idioma a utilizar en los mensajes de respuesta | STRING (es) |

Mayor detalle en [EV-CORE - Logger](https://steps.everis.com/git/EVEFRONT/ev-core/blob/develop/src/logger/README.md)

### Caso Práctico

````javascript
...
const loggerConfig: ILoggerConfig = {
  level: ELoggerLevels.TRACE,
  secretKey: 'YOUR_KEY',
  serverLog: { url: 'http://localhost:3000/log' },
  i18nLang: 'en_US',
}
...
  constructor(
    private auth: Authentication,
    private logger: Logger,
  ) { }

  ngOnInit() {
    if (!this.auth.isAuthenticated()) {
      const response = this.auth.authenticate({
        username: 'email@everis.com',
        password: '123456',
      });
      response.then((response: any) => {
        this.logger.setHeader(this.auth.getToken());
        this.logger.debug('login response:', response);
      });
    } else {
      this.logger.trace('user token:', this.auth.getToken());
      if (this.auth.isExpired()) {
        this.auth.clean();
        this.logger.info('logout!');
      }
    }
  }
...
````


## Autores

* **Jefferson Lara** - *Initial work* - [jlaramol@everis.com](jlaramol@everis.com)
* **Ricardo García** - *Initial work* - [rgarrodr@everis.com](rgarrodr@everis.com)

Vea también la lista de [contributors]() que participaron en este proyecto.


## Licencia
Este proyecto es propiedad intelectual de EVERIS. El uso sin autorización está prohibido. Revise el archivo [LICENSE.md]() para mayor detalles.
