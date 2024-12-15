import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'product/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      // Define the parameters for prerendering
      // This params are prerendered for the route /product/:id
      // This config means that the route /product/1, /product/2 and /product/3 will be prerendered no matter if the api response is different
      return [{ id: '1' }, { id: '2' }, { id: '3' }];
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
