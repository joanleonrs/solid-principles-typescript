# Layout Manager
El layout manager te permite gestionar múltiples plantillas y el contenido de estas de manera rápida y sencilla dentro de las aplicaciones Angular.

## ¿Cómo usar?

* Paso 1: Crear el/los componentes layout:

```javascript
@Component({
    selector: 'app-layout1',
    template: `
      <div class="header" ><h4>Aqui va el header del layout</h4></div>
      <main>
        <router-outlet></router-outlet>
      </main>
    `,
  })
  export class AppLayout1Component {}

```
* Paso 2: Configurar el módulo TsfPlusLayoutManager:

```javascript
import { TsfPlusLayoutManager, ILayoutConfig } from '@tsf-plus/ng-commons/layout';

export const layoutConfig: ILayoutConfig = {
  layouts: [
    { name: 'layout1', component: AppLayout1Component, default: true },
  ],
  baseConfig: {
    i18nLang: 'en_US',
  },
};
@NgModule({
  ..
  imports: [
    TsfPlusLayoutManager.forRoot(layoutConfig);
  ]
  ..
})
export AppModule {}
```
* Paso 3: Utiliza el componente TsfPlusLayout que se encarga de mostrar los layout:

- Desde el html (Template AppComponent)
```html
  <tsf-layout></tsf-layout>
```

- Desde las rutas
```javascript
  import { Routes } from '@angular/router';
  import { TsfPlusLayoutManager, TsfPlusLayoutComponent, ILayoutConfig } from '@tsf-plus/ng-commons/layout';

  export const appRoutes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '', component: TsfPlusLayoutComponent,
      children: [
              { path: 'home', component: HomeComponent },
          ]
      },
      { path: '**', redirectTo: '' }
  ];

  export const layoutConfig: ILayoutConfig;
  layoutConfig = {
    layouts: [
      { name: 'layout1', component: AppLayout1Component, default: true },
    ],
    baseConfig: {
      i18nLang: 'en_US',
    },
  };

  @NgModule({
      ..
      imports: [
          RouterModule.forRoot(appRoutes, { useHash: true }),
          TsfPlusLayoutManager.forRoot(layoutConfig);
      ]
      ..
  })
  export AppModule {}
  ```

## Api References

### Reglas de Configuración

| Regla  | Descripción | Requerido |
|--------|-------------| ----------|
| menu   | Recibe un arreglo (**IMenuLayout**), que contiene toda la información del menu | false |
| company | Recibe un arreglo (**ICompanyLayout**), que contiene toda la información de la empresa |false|
| signOutAction | Recibe un provider que debe extender de SignOut; esta clase es la que se encarga de hacer la acción de logout en la aplicación | false |
| layouts | Recibe un arreglo (**ILayoutComponent**), que contiene la definición de los layouts que están disponibles para visualizarse en la aplicación | true |
| baseConfig  | Recibe un objeto (**IBaseConfig**), que contiene el atributo i18n, el cual indica el lenguaje a ser tomado en cuenta para i18n | true |

### Providers

 - **LayoutController**: Esta clase injectable o provedora de angular, facilita el manejo de las características de los layouts como lo son: el menu, los datos de la empresa y el cambio en tiempo de ejecución de los layout de la aplicación. A continuación, una breve descripción de sus atributos públicos:

### Atributos

 | Nombre | descripción | Retorna |
 |--------|-------------|---------|
 | menu  | Contiene la entidad que se encarga de gestionar la información de cada uno de los items del menu | MenuLayout|
 | company| Contiene la entidad que se encarga de gestionar la información de la empresa (nombre, logo, etc.) | CompanyLayout|
 | layout | Contiene la entidad que se encarga de gestionar los layouts | Layout|

## Autores

* **Jefferson Lara** - *Initial work* - [jlaramol@everis.com](jlaramol@everis.com)
* **José León Ramos** - *Initial work* - [jleonram@everis.com](jleonram@everis.com)

Vea también la lista de [contributors]() que participaron en este proyecto.


## Licencia
Este proyecto es propiedad intelectual de EVERIS. El uso sin autorización está prohibido. Revise el archivo [LICENSE.md]() para mayor detalles.
