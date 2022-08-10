import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
const Cryptr = require('cryptr');

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async generateJwt(payload: string): Promise<string> {
    return this.jwtService.signAsync(payload);
  }

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }

  async comparePassword(
    password: string,
    storedPasswordHash: string,
  ): Promise<any> {
    return bcrypt.compare(password, storedPasswordHash);
  }

  verifyJwt(jwt: string): Promise<any> {
    return this.jwtService.verifyAsync(jwt);
  }

  async encrypt(payload: string | object): Promise<string> {
    const cryptr = new Cryptr(this.configService.get<string>('CRYPTR_SECRET'));
    return cryptr.encrypt(payload);
  }

  async decrypt(payload: string): Promise<string | object> {
    const cryptr = new Cryptr(this.configService.get<string>('CRYPTR_SECRET'));
    return cryptr.decrypt(payload);
  }
}
