
import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { CryptItService } from './crypt-it/crypt-it.service';
@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    
    return value;
  }
}
