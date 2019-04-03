import { OnInit, Component,ViewChild } from '@angular/core';
import { HttpService } from 'src/app/Core/Services/http.service';
import { MatSort, MatTableDataSource, Sort, MatPaginator } from '@angular/material';
@Component({
    selector:'product',
    templateUrl:'./product.component.html'
})
export class ProductComponent implements OnInit {
    displayedColumns: string[] = ['SrNo', 'productName', 'categoryName', 'Action'];
    dataSource = new MatTableDataSource();
    category_list: any;
    product_list:any;
  
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private httpService : HttpService) {

    }
    ngOnInit() {
         this.getCategoryList();
         this.getProductList();
    }

    getProductList(){
         this.httpService.get('/product').subscribe((res)=>{
             this.product_list=res;
             if (this.category_list) {
                this.product_list.forEach(element => {
                  let categoryObj = this.category_list.filter(e => e.categoryId == element.categoryId)[0];
                  element.categoryName = categoryObj.categoryName;
                });
            }
                this.dataSource = new MatTableDataSource(this.product_list);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
         })
    }

    getCategoryList(){
        this.httpService.get('/category').subscribe((res)=>{
            this.category_list=res;
        })

    }
}