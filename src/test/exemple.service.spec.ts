// example.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { ExampleService } from './exemple.service';
describe('ExampleService', () => {
  let service: ExampleService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExampleService],
    }).compile();
    service = module.get<ExampleService>(ExampleService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should add two numbers', () => {
    const result = service.add(2, 3);
    expect(result).toBe(5);
  });
});
