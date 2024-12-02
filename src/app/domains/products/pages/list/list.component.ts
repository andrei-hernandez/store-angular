import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-list',
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  getImgSource(id: number): string {
    return `https://picsum.photos/640/640?r=${id}`;
  }

  fromChildHandler(event: string) {
    console.log(event);
  }
}
