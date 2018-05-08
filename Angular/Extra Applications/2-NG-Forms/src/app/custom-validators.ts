
import { AbstractControl } from '@angular/forms'

export function myCustomRangeValidator(min, max) {
    return function (c: AbstractControl): { [key: string]: boolean } | null {
        let v = c.value;
        if (v > min && v < max) return null;
        return { range: true };
    }
}


export function myCustomEmailMatchValidator(c: AbstractControl): { [key: string]: boolean } | null {
    let email = c.get('email').value;
    let confirmEmail = c.get('confirmEmail').value;
    if (email === confirmEmail) return null;
    return { emailMatch: true }
}