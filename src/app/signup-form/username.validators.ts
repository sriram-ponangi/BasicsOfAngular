import { AbstractControl, ValidationErrors } from '@angular/forms';
import { reject } from 'q';

export class UsernameValidators {

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') !== -1) {
            // return {'cannotContainSpace': 'true'};
            return {cannotContainSpace: true};
        }
        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, rejects) => {
            setTimeout(() => {
                if (control.value === 'ram') {
                    resolve({shouldBeUnique: true});
                } else {
                    resolve(null);
                    // resolve({'shouldBeUnique': 'falied due to some reason'});//pending never becomes false here
                }
            }, 2000);
        });
    }
}
