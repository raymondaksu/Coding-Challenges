space_dict = {'MERCURY': 0.2408467, 'VENUS': 0.61519726, 'EARTH': 1, 'MARS': 1.8808158,
              'JUPITER': 11.862615, 'SATURN': 29.447498, 'URANUS': 84.016846, 'NEPTUNE': 164.79132}

function spaceApp (second) {
for (var key in space_dict) {
  var value = space_dict[key];
  console.log('1000 Earth Seconds equal to: ', (second/value).toFixed(2), key, 'seconds')
}
}

spaceApp(1000)