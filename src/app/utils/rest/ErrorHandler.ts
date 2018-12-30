import { Injectable } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { Error } from '../../models/response/Error';
import { Response } from '../../models/response/Response';

@Injectable()
export class ErrorHandler {
    error:Error;
    constructor(
        private message: ToasterService
    ) { }

    public handleError(err: any) {
        this.error = <Error>(<Response> err.error).error;     
        console.log('Thanks', this.error.errorMessage);
        this.message.pop('error','Something went wrong.', this.error.errorMessage);
    }
}