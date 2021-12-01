import { Injectable } from '@angular/core';


export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

if (localStorage.getItem('role') == 'ROLE_ADMIN') {

}

const MENUITEMS = [

  {
    label: 'Dashboard',
    main: [
      {
        state: 'dashboard',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-bar-chart',
      }
    ],
  },
  {
    label: 'Actualités',
    main: [
      {
        state: 'list-actualite',
        name: 'Actualités',
        type: 'link',
        icon: 'ti-notepad'
      },
      {
        state: 'add-actualite',
        name: 'Ajouter une actualité',
        type: 'link',
        icon: 'ti-notepad',
      }
    ],
  },
  {
    label: 'Produit',
    main: [
      {
        state: 'list-produit',
        name: 'Liste des produits',
        type: 'link',
        icon: 'ti-light-bulb'
      },
      {
        state: 'add-produit',
        name: 'Ajouter un produit',
        type: 'link',
        icon: 'ti-light-bulb',
      }
    ],
  },
  {
    label: 'Galerie video',
    main: [
      {
        state: 'list-video',
        name: 'Liste des videos',
        type: 'link',
        icon: 'ti-video-clapper'
      },
      {
        state: 'add-video',
        name: 'Ajouter un video',
        type: 'link',
        icon: 'ti-video-clapper',
      }
    ],
  },
  {
    label: 'Messages reçus',
    main: [
      {
        state: 'list-message',
        name: 'Liste des messages',
        type: 'link',
        icon: 'ti-comment-alt'
      },
    ],
  },
  {
    label: 'Information de contact',
    main: [
      {
        state: 'list-contact',
        name: 'Contact',
        type: 'link',
        icon: 'ti-email'
      },
      {
        state: 'add-contact',
        name: 'Ajouter un contact',
        type: 'link',
        icon: 'ti-email'
      }
    ],
  },
  {
    label: 'Devis',
    main: [
      {
        state: 'list-devis',
        name: 'Liste des devis',
        type: 'link',
        icon: 'ti-receipt'
      },
    ],
  },
  {
    label: 'Devenir franchisés',
    main: [
      {
        state: 'list-devprop',
        name: 'Liste des demandes',
        type: 'link',
        icon: 'ti-bag'
      },
    ],
  },
  {
    label: 'Qui sommes nous',
    main: [
      {
        state: 'list-presentation',
        name: 'Qui sommes nous',
        type: 'link',
        icon: 'ti-rss'
      },
      {
        state: 'add-presentation',
        name: 'Ajouter informations',
        type: 'link',
        icon: 'ti-rss',
      }
    ],
  },
];

const MENUITEMSADMIN = [

  {
    label: 'Dashboard',
    main: [
      {
        state: 'dashboard',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-bar-chart',
      }
    ],
  },
  {
    label: 'Actualités',
    main: [
      {
        state: 'list-actualite',
        name: 'Actualités',
        type: 'link',
        icon: 'ti-notepad'
      },
      {
        state: 'add-actualite',
        name: 'Ajouter une actualité',
        type: 'link',
        icon: 'ti-notepad',
      }
    ],
  },
  {
    label: 'Produit',
    main: [
      {
        state: 'list-produit',
        name: 'Liste des produits',
        type: 'link',
        icon: 'ti-light-bulb'
      },
      {
        state: 'add-produit',
        name: 'Ajouter un produit',
        type: 'link',
        icon: 'ti-light-bulb',
      }
    ],
  },
  {
    label: 'Galerie video',
    main: [
      {
        state: 'list-video',
        name: 'Liste des videos',
        type: 'link',
        icon: 'ti-video-clapper'
      },
      {
        state: 'add-video',
        name: 'Ajouter un video',
        type: 'link',
        icon: 'ti-video-clapper',
      }
    ],
  },
  {
    label: 'Messages reçus',
    main: [
      {
        state: 'list-message',
        name: 'Liste des messages',
        type: 'link',
        icon: 'ti-comment-alt'
      },
    ],
  },
  {
    label: 'Information de contact',
    main: [
      {
        state: 'list-contact',
        name: 'Contact',
        type: 'link',
        icon: 'ti-email'
      },
      {
        state: 'add-contact',
        name: 'Ajouter un contact',
        type: 'link',
        icon: 'ti-email'
      }
    ],
  },
  {
    label: 'Devis',
    main: [
      {
        state: 'list-devis',
        name: 'Liste des devis',
        type: 'link',
        icon: 'ti-receipt'
      },
    ],
  },
  {
    label: 'Devenir franchisés',
    main: [
      {
        state: 'list-devprop',
        name: 'Liste des demandes',
        type: 'link',
        icon: 'ti-bag'
      },
    ],
  },
  {
    label: 'Qui sommes nous',
    main: [
      {
        state: 'list-presentation',
        name: 'Qui sommes nous',
        type: 'link',
        icon: 'ti-rss'
      },
      {
        state: 'add-presentation',
        name: 'Ajouter informations',
        type: 'link',
        icon: 'ti-rss',
      }
    ],
  },
  {
    label: 'Utilisateurs',
    main: [
      {
        state: 'list-users',
        name: 'Liste des utilisateurs',
        type: 'link',
        icon: 'ti-user'
      },
      {
        state: 'registration',
        name: 'Ajouter un utilisateur',
        type: 'link',
        icon: 'ti-user',
      }
    ],
  },
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  getAllAdmin(): Menu[] {
    return MENUITEMSADMIN;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
