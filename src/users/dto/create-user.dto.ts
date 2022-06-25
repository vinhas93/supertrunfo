import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  IsUrl,
  isURL,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Name for the user',
    example: 'Leonardo Orabona',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'User`s Email',
    example: 'leo@blue.com.br',
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'User`s Passaword',
    example: 'Blue2022',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'User`s CPF number',
    example: '123.123.123-12',
  })
  @Length(13, 14)
  @IsString()
  @IsNotEmpty()
  // @Matches( (^\d{3}\x2E\d{3}\x2E\d{3}\x2D\d{2}$), {
  //   message:'the first character of the username must not be a number. Username must contains at least 4 characters',
  // })
  CPF: string;

  @ApiProperty({
    description: 'Users avatar',
    example: 'link.com/image.jpg',
  })
  @IsString()
  @IsUrl()
  imageUrl: string;

  @ApiProperty({
    description: 'Users ranking',
    example: '1-2000',
  })
  @IsInt()
  @IsPositive()
  ranking: number;

  @ApiProperty({
    description: 'If user is admin of server',
    example: true,
  })
  @IsBoolean()
  isAdmin?: boolean;
}
