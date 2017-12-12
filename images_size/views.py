from django.shortcuts import render
import requests
from datetime import datetime


def results(request):
    images_split = {}
    lines_count = []
    number_of_images = len(lines_count)
    start_time = datetime.now()

    if request.method == 'POST':
        image = request.POST.get('image_url')
        pick = request.POST.get('file_size')

        for line_num in image.split('\r'):
            lines_count.append(line_num)

        if image == '':
            error = 'Enter at least 1 image URL'
            return render(request, 'images_size/results.html', {'error': error})

        elif number_of_images > 11:
            error = 'No More then 10 files'
            return render(request, 'images_size/results.html', {'error': error})

        else:
            for line in image.split('\r'):
                line = line.replace('\n', '')
                if line == '':
                    images_split[line] = 'EMPTY URL'
                elif line[:4] != 'http':
                    images_split[line] = 'URL ERROR'
                else:
                    try:
                        requests.get(line).status_code
                    except requests.exceptions.RequestException:
                        images_split[line] = 'URL ERROR'
                    else:
                        try:
                            try:
                                response = requests.head(line)
                                response.headers['Content-type']
                            except KeyError:
                                images_split[line] = 'URL ERROR'
                            else:
                                response = requests.head(line)
                                img_size_bytes = int(response.headers['Content-length'])
                                img_size_kb = round(float(img_size_bytes / 1000), 1)
                                img_size_mb = round(float(img_size_bytes / 1000000), 1)
                                if pick == 'bytes':
                                    images_split[line] = img_size_bytes
                                elif pick == 'kilobytes':
                                    images_split[line] = img_size_kb
                                else:
                                    images_split[line] = img_size_mb
                        except KeyError:
                            error = 'An error occurred, please make sure all of your links are ok'
                            return render(request, 'images_size/results.html', {'error': error})

            runtime = datetime.now() - start_time
            return render(request, 'images_size/results.html', {'number_of_images': number_of_images,
                                                                'images_split': images_split,
                                                                'pick': pick,
                                                                'runtime': runtime
                                                                })
