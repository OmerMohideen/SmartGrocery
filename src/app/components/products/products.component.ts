import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public rowIndex!: number;
  showAddProduct!: boolean;
  isLoading: boolean = false;
  showEditProduct!: boolean;
  selectedProduct!: Product;
  message!: string;
  public products: Product[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  public selectProduct(selectedRow: any, product: Product) {
    this.rowIndex = selectedRow;
    this.selectedProduct = product;
  }

  showAddProducts() {
    if (this.showEditProduct) {
      this.showEditProduct = false;
    }
    this.showAddProduct = true;
  }

  hideAddProducts() {
    this.showAddProduct = false;
  }

  refresh() {
    this.getProducts();
  }

  getProducts() {
    this.isLoading = true;
    this.productService.getProducts().subscribe((res) => {
      this.products = res.data;
      this.isLoading = false;
    });
  }

  OpenEditProductView() {
    if (this.showAddProduct) {
      this.showAddProduct = false;
    }
    this.showEditProduct = true;
  }

  closeEditView() {
    this.showEditProduct = false;
  }

  updateProductList() {
    this.getProducts();
  }
}
function ViewProductComponent(ViewProductComponent: any) {
  throw new Error('Function not implemented.');
}
