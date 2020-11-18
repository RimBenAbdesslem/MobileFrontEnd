import {Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: []
})
export class LayoutComponent implements OnInit {

  heading = 'Form Layouts';
  subheading = 'Build whatever layout you need with our ArchitectUI framework.';
  icon = 'pe-7s-graph text-success';

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }
  openCentred(content) {
    this.modalService.open(content, { centered: true });
  }

  openSmall(content1) {
    this.modalService.open(content1, {
      size: 'sm'
    });
  }

  openLarge(content){
    this.modalService.open(content, {
      size: 'lg'
    });
  }
  openLarge1(content1){
    this.modalService.open(content1, {
      size: 'lg'
    });
  }
  OpenLarge(content2){
    this.modalService.open(content2, {
      size: 'lg'
    });
  }
}
