import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { City } from '../../entities/city.entity';
import { CitiesService } from './cities.service';

describe('CityService', () => {
  let cityService: CitiesService;

  const mockCityRepository = {
    find: jest.fn(),
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CitiesService,
        {
          provide: getRepositoryToken(City),
          useValue: mockCityRepository,
        },
      ],
    }).compile();

    cityService = module.get<CitiesService>(CitiesService);
  });

  it('should return an array of cities', async () => {
    const mockCities: City[] = [
      { id: 1, name: 'Lviv' },
      { id: 2, name: 'Kyiv' },
    ];

    mockCityRepository.find.mockResolvedValue(mockCities);

    const result = await cityService.getCities();

    expect(result).toEqual(mockCities);
  });

  it('should get a city by its ID', async () => {
    const mockCityId = 1;
    const mockCity: City = { id: mockCityId, name: 'Lviv' };

    // Mock the behavior of the repository findOne method
    mockCityRepository.findOne.mockResolvedValue(mockCity);

    const result = await cityService.getCity(mockCityId);

    expect(result).toEqual(mockCity);
  });

  it('should handle errors gracefully', async () => {
    mockCityRepository.find.mockRejectedValue(new Error('Database error'));

    await expect(cityService.getCities()).rejects.toThrowError(
      'Database error',
    );
  });
});
