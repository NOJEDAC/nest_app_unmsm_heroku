import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from '../application/services/app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "UNMSM - UPG-FISI - Home Heroku"', () => {
      expect(appController.getHome()).toBe('UNMSM - UPG-FISI - Home Heroku');
    });
  });
});
