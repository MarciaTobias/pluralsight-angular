import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";

// Pipe is a function
@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {
    // Exist just on method for Pipe
    transform(value: string, character: string): string {
        // Value.replace is a JS method
        return value.replace(character, ' ');
    }
}