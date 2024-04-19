export interface Menu {
    title: string;
    icon: string;
    subMenu?: Menu[];
    routerLink?: string
}
