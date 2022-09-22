export class appImgService{
  href?: string;
  alt?: string;
  constructor(href: string, alt?: string) {
    this.href = href;
    this.alt = alt ?? href;
  }
};
