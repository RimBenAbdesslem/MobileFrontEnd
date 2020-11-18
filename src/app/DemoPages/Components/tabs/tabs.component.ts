import {Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { EvaluationService } from '../../shared/evaluation.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
})
export class TabsComponent implements OnInit {

  heading = 'Tabs';
  subheading = 'Tabs are used to split content between multiple sections. Wide variety available.';
  icon = 'pe-7s-drawer icon-gradient bg-happy-itmeo';

  currentJustify = 'start';
  currentJustify2 = 'center';
  currentJustify3 = 'start';

  currentOrientation = 'horizontal';

  constructor(public evaluation: EvaluationService,private modalService: NgbModal, private toastr: ToastrService) {
  }

  products: any;
  fileToUpload: File = null;
  showAdd = false;
  auth: string;
  imageUrl: string = "/assets/img/noimage.png";
  ngOnInit() {
   
  }
  openSmall(content1) {
    this.modalService.open(content1, {
      size: 'sm'
    });
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
  onSubmit(){

    
    this.evaluation.registerProduit()
   .subscribe(
      (res: any) => {
       if (res.succeeded) {
          this.toastr.success('Produit bien ajouté','');
        } 
     },
     
    );
    this.evaluation.EvaluationFroidModel.reset();
  }
}
