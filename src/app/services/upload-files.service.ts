import { UploadFiles } from './../model/upload-files';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase'




@Injectable()
export class UploadFilesService {

  constructor(private af: AngularFireModule, private db: AngularFireDatabase) { }

  private basePath: string = '/uploads'
  private uploadTask: firebase.storage.UploadTask;

  pushUpload(upload: UploadFiles) {
    let storageRef = firebase.storage().ref();
    this.uploadTask = storageRef.child('${this.basePath}/${upload.file.name}').put(upload.file);

    this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot: any) => {
        //upload in progress
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      },
      (error) => {
        //upload failed
        console.log(error);
      },
      () => {
        //upload success
        upload.url = this.uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        this.saveFileData(upload);
      })
  }

  private saveFileData(upload:UploadFiles){
    this.db.list('${this.basePath}/').push(upload);
  }

  deleteUpload(upload:UploadFiles){
    this.deleteFileData(upload.$key).then(()=>{
      this.deleteFileStorage(upload.name)
    })
      .catch(error=> console.log(error))
  }

  //writes the file details to the db
  private deleteFileData(key:string){
    return this.db.list('${this.basePath}/').remove(key);
  }

  private deleteFileStorage(name:string){
    let storageRef = firebase.storage().ref();
    storageRef.child('${this.basePath}/${name}').delete();
  }

}
