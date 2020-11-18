import {Component, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styles: []
})
export class DropdownsComponent implements OnInit {

  heading = 'Dropdowns';
  subheading = 'Multiple styles, actions and effects are available for the ArchutectUI dropdown buttons.';
  icon = 'pe-7s-umbrella icon-gradient bg-sunny-morning';

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }
  cards = [
    {img: 'https://www.olloweb.com/images/creation-site-e-commerce-article-cuisine-2662.jpg'},
    {img: 'https://i.pinimg.com/originals/0c/71/bd/0c71bdb49ffaf3541b57345ae6334b27.jpg'},
    {img: 'https://www.calypso-events.com/wp-content/uploads/2019/02/10-bagues-de-fiancailles-originales-couverture-article-calypso-brest-1000x500.jpg'},
    {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwVYvwRz3SA57DJNTXG90kWpdz45Vdj7hC9Q&usqp=CAU'},
    {img: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4rxdb?ver=9025&q=90&m=6&h=405&w=720&b=%23FFFFFFFF&l=f&o=t&aim=true'},
    {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmoydV6o_OR-6n544QDWHRkWI6KWGPWBd-Yg&usqp=CAU'},
  ];
  openCentred(content) {
    this.modalService.open(content, {centered: true});
  }

  openSmall(content) {
    this.modalService.open(content, {
      size: 'sm'
    });
  }

  openLarge(content) {
    this.modalService.open(content, {
      size: 'lg'
    });
  }
}
