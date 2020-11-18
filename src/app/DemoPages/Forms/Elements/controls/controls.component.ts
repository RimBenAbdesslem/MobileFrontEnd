import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styles: []
})
export class ControlsComponent implements OnInit {

  heading = 'Form Controls';
  subheading = 'Wide selection of forms controls, using the Bootstrap 4 code base, but built with Vue.';
  icon = 'pe-7s-display1 icon-gradient bg-premium-dark';

  constructor() {
  }

  ngOnInit() {
  }
  editField: string;
  personList: Array<any> = [
    { id: 1, Domaine: '', Niveau: 0, Label: '' },
  
  ];
  CompUserList: Array<any> = [
    { id: 1, Domaineid: '', userId: "", LabelId: '', Niveau: 0 },
  
  ];
  awaitingPersonList: Array<any> = [
    { id: 2, Catégorie: '', Niveau: 0, Label: ''   },
    { id: 3, Catégorie: '', Niveau: 0, Label: ''   },
    { id: 4, Catégorie: '', Niveau: 0, Label: ''   },
    { id: 5, Catégorie: '', Niveau: 0, Label: ''   },
    { id: 6, Catégorie: '', Niveau: 0, Label: ''   },
    { id: 7, Catégorie: '', Niveau: 0, Label: ''   },
    { id: 8, Catégorie: '', Niveau: 0, Label: ''   },
    { id: 9, Catégorie: '', Niveau: 0, Label: ''   },
    { id: 10,Catégorie: '', Niveau: 0, Label: ''   },
    { id: 11,Catégorie: '', Niveau: 0, Label: ''   },
    { id: 12,Catégorie: '', Niveau: 0, Label: ''   },
    { id: 13,Catégorie: '', Niveau: 0, Label: ''   },
    { id: 14,Catégorie: '', Niveau: 0, Label: ''   },
    { id: 15,Catégorie: '', Niveau: 0, Label: ''   },
    { id: 16,Catégorie: '', Niveau: 0, Label: ''   },
    { id: 17,Catégorie: '', Niveau: 0, Label: ''   },
    { id: 18,Catégorie: '', Niveau: 0, Label: ''   },
    { id: 19,Catégorie: '', Niveau: 0, Label: ''   },
    { id: 20,Catégorie: '', Niveau: 0, Label: ''   },
  ];
  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.personList[id][property] = editField;
  }
  
  remove(id: any) {
 
    this.awaitingPersonList.push(this.personList[id]);
    this.personList.splice(id, 1);
 
  }

  add() {
    if (this.awaitingPersonList.length > 0) {
      const person = this.awaitingPersonList[0];
      this.personList.push(person);
      this.awaitingPersonList.splice(0, 1);
    }
  }
}
