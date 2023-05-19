declare module "faker" {
  interface Random {
    words(count: number): string;
    number(options: { min: number; max: number }): number;
    boolean(): boolean;
    date(options?: { min: Date; max: Date }): Date;
    arrayElement<T>(array: T[]): T;
    uuid(): string;
    // Add other random-related declarations as needed
  }

  interface Name {
    findName(): string;
    // Add other name-related declarations as needed
  }

  interface Title {
    jobTitle(): string;
    bookTitle(): string;
    title(): string;
    // Add other title-related declarations as needed
  }

  interface Author {
    firstName(): string;
    lastName(): string;
    findName(): string;
    // Add other author-related declarations as needed
  }

  interface PublicationYear {
    past(min: number, max: number): Date;
    // Add other publication year-related declarations as needed
  }

  interface Genre {
    genre(): string;
    bookGenre(): string;
    // Add other genre-related declarations as needed
  }

  interface ISBN {
    isbn10(): string;
    isbn13(): string;
    // Add other ISBN-related declarations as needed
  }

  interface IBook {
    random: Random;
    name: Name;
    title: Title;
    author: Author;
    publicationYear: PublicationYear;
    genre: Genre;
    isbn: ISBN;
    // Add other namespaces and declarations as needed
  }

  const faker: IBook;
  export default faker;
}
