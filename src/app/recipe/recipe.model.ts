export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, description: string, imagePath: string) {
    //   map the properties 1 to 1
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
