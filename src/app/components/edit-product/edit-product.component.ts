import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  @Input() product!: Product;
  isDataUploading = false;
  @Output() editProductEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() cancelEditView: EventEmitter<void> = new EventEmitter<void>();
  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  cancel() {
    this.cancelEditView.emit();
  }

  onSubmit() {
    this.isDataUploading = true;
    this.productService.updateProduct(this.product).subscribe((res) => {
      this.isDataUploading = false;
      this.editProductEvent.emit();
      this.cancelEditView.emit();
    });
  }
}
