print (1.047 /100)

distance = float(input('What is your distance to the target?'))
factor = float(input('What is your MOA factor'))
windage = float(input('How far off is your windage POI relative to your POA'))
elevation = float(input('How far off is your elevation POI relative to your POA'))

w = round(windage / (distance * .01047) / factor)
e = round(elevation / (distance * .01047) / factor)

print(f"Adjust your optic {w} clicks to the right and {e} clicks up.")

