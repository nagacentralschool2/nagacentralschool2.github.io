Website for Naga Central School II.

See it at [nagacentralschool2.github.io](https://nagacentralschool2.github.io)

# Header

The header contains the logo at the top, the name of the school and its ID, as well as some navigation links.

To modify the logo, name or school ID, in `_data/header.yml`, change the corresponding `img`, `name` or `id`. The image must be in `assets/img`.

The navigation links are defined in `_data/navigation.yml`. The color of those links is defined in `assets/css/styles.scss`.

Power users can look at `_includes/header.html`. Bootstrap is being used.

Here are the current links in the navigation pane.

## Home

The home page that contains the header, carousel, events, announcements and news.

Power users can look at `index.html`. It currently contains `carousel.html` and `home-content.html`, both defined under `_includes`.

## About Us

It can contain 1 or more links to pages. Those pages are put under `about-us` to keep things tidy, but they could be anywhere.

Under `children`, simply specify the `name` and `link` of the page. You can add or remove pages.

Example: 

```yml

  children:
    - name: Vision-Mission
      link: /about-us/vision-mission.html
    - name: History
      link: /about-us/history.html
    - name: Faculty and Staff
      link: /about-us/faculty-and-staff.html
    - name: Previous School Heads
      link: /about-us/previous-school-heads.html

```

Currently, `Vision Mission` and `History` are both simple pages, while `Faculty and Staff` as well as `Previous School Heads` are automatically populated from data files.

### Faculty and Staff

The page displays a number of tabs, for the different grade levels and other personnel.

Each `tab` can contain 0 or 1 `main` person, 0, 1 or more persons under, aka `children` (eg the grade dean is the main person, the other grade teachers are under that person).

Each person, either `main` or under `children`, has

- `name`
- `img` (optional, defaults to `default.jpg` that shows an avatar)
- `title` (optional, eg the grade level or rank)
- `sub` (optional, eg Star Scout Leader)

Here is an example:

```yml

- tab: Kinder
  main:
    - name: JUDITH SAMONTE
      title: Kinder Dean/Headstart
  children:
    - name: ROSELLIA DELA SOLEDAD
      title: K-RD1/K-RD2
      sub: Twinkler Leader

    - name: MARY ANN Z. CUADRO
      title: K-MC1/K-MC2
      sub: Langkay Leader

    - name: HAZEL GRACE A. ABUQUE
      title: K-HA1/K-HA2
      sub: SPG-COMELEC Adviser

```

Power users can check `about-us/faculty-and-staff.html` to see the template.

### Previous School Heads

The page displays the data from `_data/prevheads.yml`, in the order it appears.

Each previous school head must have a `name`, `img` (the name of the image that is stored under `assets/img/staff`) and `title` (currently this only contains the dates when they were school head).

Example:

```yml

- name: Violeta S. Del Villar, Ph.D
  img: 01_Del Villar.jpg
  title: 1989-1991

```

## Academic Programs

It can contain 1 or more links to pages. Those pages are put under `academic-programs` to keep things tidy, but they could be anywhere.

Under `children`, simply specify the `name` and `link` of the page. You can add or remove pages.

Example:

```yml
  children:
    - name: SSES
      link: /academic-programs/sses.html
    - name: Headstart
      link: /academic-programs/headstart.html
    - name: K to 12
      link: /academic-programs/k-to-12.html
```

## Report

It can contain 1 or more links to pages. Those pages are put under `school-report` to keep things tidy, but they could be anywhere.

Under `children`, simply specify the `name` and `link` of the page. You can add or remove pages.

Example:

```yml

  children:
    - name: Enrolment
      link: /school-report/enrolment.html
    - name: Nutritional Status
      link: /school-report/nutritional-status.html
    - name: Phil-IRI
      link: /school-report/phil-iri.html
```

## Downloads

Put all the files to download under `assets\dl`. In `_data/download.yml`, specify the `title`, ie text to display, and `file`, ie the name of the file to download.

Example:

```yml

- title: Modified Basic Early Enrollment Form ANNEX 2
  file: modified-basic-early-enrollment-form-ANNEX-2.pdf
- title: CS Form 6 - Application For Leave
  file: csform6.doc
- title: Endorsement Form
  file: endorsementform.doc

```

Power users can look at `downloads.html` to see how the page is being populated.

## Contact Us

Simply displays `contact-us.html`.

# Carousel (images on the home page)

The content of the carousel is defined in `_data/carousel.yml`, the images are stored under `assets/img/carousel`.

The `carousel.yml` file allows to specify which image to display with `img`, as well as add an optional `title` and `text`:

```yml

- img: 4PsExemplaryChild_1stRunnerUp2019.jpg
  title: Exemplary Child 2019
  text: Congrats to our own Juan Carlos!
- img: APWInners2019.jpg
- img: PalarongPandistrito_1stRunnerUp2019.jpg
- img: national-teachers-month.jpg

```

# Events

The events are displayed on the home page, under the carousel. They are defined in `_data/events.yml`.

The `title` and `date` are mandatory, `content` is optional but should be kept short, around 100 characters, and it must be on one line. The events are displayed in the order they appear in the file.

The events are supposed to be short info, meaning that they do not have their own page, unlike the announcements and news.

Examples:

```yml

- title: Search For the King and Queen of Hearts 2021 Coronation Rites
  date: 2021-05-20
- title: SEENN Awarding
  date: 2021-04-28
- title: Annual Traslacion Procession
  date: 2019-09-13
  content: This must be on onle line and not too long, about 100 char max
 
```

# Announcements

Each announcement has its own page under `_announcements`. The name of the page must follow the pattern `yyyy-mm-dd-name-of-the-announcement.md`.

All announcements found under `_announcements` will be visible from the home page. Only the beginning of their content will be shown, and users can click each announcement to go to its dedicated page to see the full content.

Example of announcement, with the name `2021-04-22-early-registration.md`

```yml

---
title: Early Registration for SY 2021-2022
---

Please be informed that ...

Leave a blank line to create a new paragraph.

```