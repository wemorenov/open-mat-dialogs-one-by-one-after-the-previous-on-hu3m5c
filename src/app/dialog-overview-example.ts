import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

/**
 * @title Dialog Overview
 */
@Component({
  selector: "dialog-overview-example",
  templateUrl: "dialog-overview-example.html",
  styleUrls: ["dialog-overview-example.css"]
})
export class DialogOverviewExample {
  data: any[] = DATA;

  constructor(public dialog: MatDialog) {}

  async openDialog() {

  for(var i =0;this.data &&  i < this.data.length; i++) {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        disableClose: true
      });
      dialogRef.componentInstance.data = this.data[i];
      var result = await  dialogRef.afterClosed().toPromise();
        if (!result) {
          break;
        }
    }
  }
}

@Component({
  selector: "dialog-overview-example-dialog",
  templateUrl: "dialog-overview-example-dialog.html"
})
export class DialogOverviewExampleDialog {
  data: any;

  constructor(public _dialogRef: MatDialogRef<DialogOverviewExampleDialog>) {}
}

export const DATA = [
  { id: 1, name: "test_1", location: "1:1", bool: false },
  { id: 2, name: "test_2", location: "1:2", bool: false },
  { id: 3, name: "test_3", location: "2:1", bool: false },
  { id: 4, name: "test_4", location: "3:2", bool: false },
  { id: 5, name: "test_5", location: "3:6", bool: false }
];

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
