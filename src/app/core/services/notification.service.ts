import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  _progressBar: boolean = true

  constructor(private toastr: ToastrService) { }

  error (title: string, message: string) {
    this.toastr.error(message, title, {
      progressBar: this._progressBar,
      closeButton: true
    });
  }

  success (title: string, message: string) {
    this.toastr.success(message, title, {
      progressBar: this._progressBar,
      closeButton: true
    });
  }

}
