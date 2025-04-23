# UVdesk Developer Documentation

Welcome, this site contains the latest UVdesk documentation for users and developers. You can find the online version of the documentation at [https://uvdesk.github.io/][documentation]

# Contributors
Our goal is to provide the UVdesk community with comprehensive and quality technical documentation. 

We believe that to accomplish our goal we need experts from the community to share their knowledge with us and each other. We are thankful to all of our contributors for improving UVdesk documentation.

Like our work, contribute [here][documentation]

# Build locally using Jekyll
For local builds, you need to install Ruby 2.4 or later.

To check the Ruby version on your environment, run in your terminal:
```
$ ruby -v
```
## Install the latest Ruby (if the Ruby version is less than 2.4)
### MacOS users
1. Install Homebrew. See the [Homebrew site](https://brew.sh/) for instructions.
2. Use Homebrew to install the latest stable version of Ruby:
    ```
    $ brew install ruby
     ```
### Unix, Windows, and other OS users
See the [Ruby site](https://www.ruby-lang.org/en/documentation/installation/) for instructions.

## Install Bundler
Install the [Bundler](https://bundler.io/) gem, which helps with Ruby dependencies:
```
$ gem install bundler
```

## Install documentation
1. Clone or download the repository.
2. Open your system's terminal emulator, browse to the cloned respository and follow the following steps:
    
    1. To install Jekyll dependencies, run: 

        ```
        $ bundle install
        ```
    2. To generate the local preview, run:
        ```
        bundle exec jekyll serve
        
        Configuration file: /Users/username/Github/uvdocs/_config.yml
        Source: /Users/username/Github/devdocs
        Destination: /Users/username/Github/devdocs/_site
        Incremental build: disabled
        Generating...
                     done in x.x seconds.
        Auto-regeneration: enabled for '/Users/username/Github/uvdocs'
        Server address: http://127.0.0.1:4000//
        Server running... press ctrl-c to stop.
        ```

        OR

        If port 4000 is engaged then put another port and run project using below command.

        For Example:

        ```
        bundle exec jekyll serve --livereload --port 4001
        ```

    3. Use the **Server address** URL http://127.0.0.1:4000/ in a browser to preview the content.
    
    4. Press `Ctrl+C` in the serve terminal to stop the server. 
***TIP*** You can learn about Jekyll from [here][jekyll-install]
# License
All the libraries and content included in this documentation are released under the MIT or BSD license.

[webkul]: https://webkul.com/
[team]: https://www.uvdesk.com/en/team/
[documentation]: https://uvdesk.github.io/
[contribute]: https://github.com/uvdesk/uvdesk.github.io
[jekyll-install]: https://jekyllrb.com/docs/installation/
[jekyll-home]: https://jekyllrb.com
[uvdocs-zip]: https://
