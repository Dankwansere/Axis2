import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: '../view/profile.component.html',
  styleUrls: ['../view/profile.component.css']
})
export class ProfileComponent implements OnInit {

  selecedFile: File = null;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }

  onFileSelected(event) {
    console.log('event: ', event);
    this.selecedFile = event.target.files[0];
  }

  onUpload() {
    const formdata = new FormData();
    formdata.append('file', this.selecedFile, this.selecedFile.name);
    formdata.append('test', '123');
    this.profileService.uploadFile(formdata).subscribe((resp) => {

      console.log('resp: ', resp);
    });

  }

}
