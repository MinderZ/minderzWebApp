import { UploadFiles } from './../model/upload-files';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import { AuthService } from './auth-service.service';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class UploadFilesService {

  constructor(
    private af: AngularFireModule,
    private db: AngularFireDatabase,
    private auth: AuthService
     ) { }

  private  uploads: Observable<UploadFiles[]>;
  // private uploadTask: firebase.storage.UploadTask;

  pushUpload(upload: UploadFiles, basepath: string) {

    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${basepath}/${this.auth.getcurrentUser().uid}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot: any) => {
        //upload in progress
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      },
      (error) => {
        //upload failed
        console.error(error);
      },
      () => {
        //upload success
         if (uploadTask.snapshot.downloadURL){
        upload.url = uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        this.saveFileData(upload, `${basepath}/${this.auth.getcurrentUser().uid}`);
        
        console.log('File uploaded');
        return;
      } else {
          console.error('No download URL!');
        }
      }, )
  }

  private saveFileData(upload:UploadFiles, basePath){
    this.db.list(`${basePath}`).push(upload);
  }

  deleteUpload(upload:UploadFiles, path ){
    this.deleteFileData(upload.$key, path).then(()=>{
      this.deleteFileStorage(upload.name, path)
    })
      .catch(error=> console.log(error))
  }

  //writes the file details to the db
  private deleteFileData(key:string, basePath){
    return this.db.list(`${basePath}/`).remove(key);
  }

  private deleteFileStorage(name:string, basePath){
    let storageRef = firebase.storage().ref();
    storageRef.child(`${basePath}/${name}`).delete();
  }

// theres a posibitlity that you wont be able to get this person image since you are not him/her
// tricky part start when you  pulling all registered users in the system with this implementation
// getUploads( basepath ) {
//     this.uploads = this.db.list(`${basepath}/${this.auth.getcurrentUser().uid}`).snapshotChanges().map((actions) => {
//       return actions.map((a) => {
//         const data = a.payload.val();
//         const $key = a.payload.key;
//         return { $key, ...data };
//       });
//     });
//     return this.uploads;
//   }
}
