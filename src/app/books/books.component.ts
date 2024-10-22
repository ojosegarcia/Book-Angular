import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../books';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
book: Book [] =[];
formGroupBooks: FormGroup;

constructor(private service: BookService, private formBuilder: FormBuilder) {
  this.formGroupBooks = formBuilder.group({
    id: [''],
    titulo: ['',[Validators.required]],
    autor: [''],
    editora: [''],
    preco: ['']
  })
}
ngOnInit(): void {
  this.loadBooks();
}

loadBooks() {
  this.service.getBooks().subscribe({
    next: data => this.books = data
  })
}

save() {
  this.service.save(this.formGroupBooks.value).subscribe({
    next: data => {
      this.books.push(data)
      this.formGroupBooks.reset();
    }
  })
}


}
