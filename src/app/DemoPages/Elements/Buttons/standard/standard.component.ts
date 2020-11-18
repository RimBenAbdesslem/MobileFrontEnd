import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styles: []
})
export class StandardComponent implements OnInit {

  heading = 'Standard Buttons';
  subheading = 'Wide selection of buttons that feature different styles for backgrounds, borders and hover options!';
  icon = 'pe-7s-plane icon-gradient bg-tempting-azure';

  progress: boolean | number = false;

  model = {
    left: true,
    middle: false,
    right: false
  };

  startLoading() {
    this.progress = 0; // starts spinner

    setTimeout(() => {
      this.progress = 0.5; // sets progress bar to 50%

      setTimeout(() => {
        this.progress = 1; // sets progress bar to 100%

        setTimeout(() => {
          this.progress = false; // stops spinner
        }, 200);
      }, 500);
    }, 400);
  }

  constructor() {
  }
  products: any;
  fileToUpload: File = null;
  showAdd = false;
  auth: string;
  imageUrl: string = "/assets/img/noimage.png";
  ngOnInit() {
   
  }
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }
  show() {
    this.showAdd = true;
  }
  hide() {
    this.showAdd = false;
  }
  addProd(desc, quan, price, prodname, image) {
   // this.api.addProduct(this.auth, desc.value, quan.value, price.value, prodname.value, this.fileToUpload).subscribe(res => {
   //   this.products = res.oblist;
   // });
  }
  delProd(prodid) {

    //this.api.delProduct(this.auth, prodid.value).subscribe(res => {
   //   this.products = res.oblist;
  //  });

  }
  edit(prodid) {
    //let navigationExtras: NavigationExtras = {
    //  queryParams: {
     //   "user": prodid.value
  //    }
 //   };
  //  this.router.navigate(["admin/edit"], navigationExtras);
  }
}
