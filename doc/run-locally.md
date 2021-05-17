# How to run the website on your computer

You may want to run the website locally first, when modifying things, to make sure everything works properly.

## Installing the necessary tools

The website runs on GitHub Pages. This page is based on [Testing your GitHub Pages site locally with Jekyll](Testing your GitHub Pages site locally with Jekyll), and expects you're using Windows.

1. Download [RubyInstaller](https://rubyinstaller.org/downloads/) (get the recommended version)
1. Run the install and use the default settings. On the last page `Run 'ridk install'` should be checked.
1. After pressing `Finish`, a command prompt will open asking which component to install. Simply press `Enter` each time you are provided by a choice, to do the default action. The command prompt will close automatically at the end.
1. Open a command prompt or PowerShell (for PowerShell press `Windows + X` then `i`)
1. Type `gem install bundler` then press `Enter` (note that you will get an error telling you `gem` is not a known command if you already had a command prompt or PowerShell window open before installing Ruby ; if that's the case simply open a new command prompt or PowerShell window)
1. Copy the full path of the folder containing the source, eg `D:\NCS2_website`, then run the following command to change the directory of the command prompt or PowerShell window to it: `cd D:\NCS2_website` (using the path you copied)
1. Run `bundle install` to install the necessary components for the website

## Running the website

Run `bundle exec jekyll serve`. You should eventually see some text containg something like:

```
    Server address: http://127.0.0.1:4000
   Server running... press ctrl-c to stop.
```

You're now running a local web server. Copy the address and paste it in your web browser to check your local site.

Press `CTRL + C` to stop the web server.
