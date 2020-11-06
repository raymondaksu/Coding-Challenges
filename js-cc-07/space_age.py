space_dict = {'MERCURY': 0.2408467, 'VENUS': 0.61519726, 'EARTH': 1, 'MARS': 1.8808158,
              'JUPITER': 11.862615, 'SATURN': 29.447498, 'URANUS': 84.016846, 'NEPTUNE': 164.79132}

def space_age(second):
    print(f'{second} Earth seconds equal to: ')
    for i in space_dict.keys():
        print(f'{second/space_dict[i]:.2f} {i} seconds.')


space_age(1000)